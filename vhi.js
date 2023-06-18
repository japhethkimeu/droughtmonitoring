
// define period of analysis
var startDate = "2010-01-01" 
var endDate = "2022-12-31" 
var startDate = ee.Date(startDate) 
var endDate = ee.Date(endDate) 

// get MODIS image collection and select NDVI band
var filteredNDVI = ee.ImageCollection("MODIS/061/MOD13Q1").select('NDVI')

// ---------------- Vegetation Condition Index (VCI) ----------------- //

// function to compute VCI
function calcVCI(image) {
  var min = filteredNDVI.reduce(ee.Reducer.min());
  var max = filteredNDVI.reduce(ee.Reducer.max());
  var vci = image.subtract(min).divide(max.subtract(min)).multiply(100);
  return vci.rename('VCI').copyProperties(image, ['system:time_start', 'system:time_end']);
}

var VCI = filteredNDVI.filterDate(startDate, endDate).map(calcVCI);
// print(VCI)

// -------------- Temperature Condition Index (TCI)--------------- //

// get land surface temperature from MODIS Terra an select 8-Day Global dataset
var LST = ee.ImageCollection("MODIS/061/MOD11A2").select('LST_Day_1km') 

// function to combine LST images to 16-Day using mean
// note that LST is 8-Day while NDVI is 16-Day
function convertLstDatesToModisDates(ndvimg) {
  var start = ndvimg.get('system:time_start');
  var end = ndvimg.get('system:time_end');

  var composite = LST
    .filterDate(start, end)
    .mean(); // combining images using mean

  return composite
    .set('system:time_start', start)
    .set('date', ee.Date(start).format())
    .set('system:time_end', end)
    .set('empty', composite.bandNames().size().eq(0));
}

var filteredlst = filteredNDVI.filterDate(startDate, endDate).map(convertLstDatesToModisDates);

// function to compute TCI
function calcTCI(image1) {
  var min = LST.reduce(ee.Reducer.min());
  var max = LST.reduce(ee.Reducer.max());
  var tci = max.subtract(image1).divide(max.subtract(min)).multiply(100);

  return tci.rename('TCI').copyProperties(image1, ['system:time_start', 'system:time_end']);
}

var TCI = filteredlst.filterDate(startDate, endDate).map(calcTCI);
// print(TCI)

// define viz params
var VisParams = {
      min: 0,
      max:100,
      palette: ['#d73027', '#fdae61', '#ffffbf', '#a6d96a', '#1a9850']
};

// Map.addLayer(VCI, VisParams,'VCI')
// Map.addLayer(TCI, VisParams, 'TCI')

// ------------------- Vegetation Health Index (VHI) ---------------------- //

// define filter and join parameters to combine VCI & TCI
var filter = ee.Filter.equals({leftField: 'system:time_start', rightField: 'system:time_start'});
var join = ee.Join.saveFirst({matchKey: 'match'});

// combine the two image collections
var both = ee.ImageCollection(join.apply(VCI, TCI, filter))
  .map(function(img) {
    return img.addBands(img.get('match')).set('date', img.date().format('YYYY_MM_dd'));
  });

// compute VHI and add it as a band to the collection
var VHI = both.map(function(img) {
  return img.addBands(
    img.expression('a1/2 + b1/2', {
      "a1": img.select('VCI'),
      "b1": img.select('TCI'),
    }).rename('VHI')
  );
});

// print(VHI)

// Create list of images corresponding to May of each year
var imageList = VHI.toList(VHI.size());
var my_indices = ee.List([9,32,55,78,101,124,147,170,193,216,239,262,285]); 
// print(my_indices);

// select images using their index
function getImages(list){
var img = ee.Image(imageList.get(list));
return img;
} 

// create a image collection of the images
var finalCollection = ee.ImageCollection.fromImages(my_indices.map(getImages));
// print(finalCollection);

var imgList = finalCollection.toList(finalCollection.size());
var image2010 = ee.Image(imgList.get(0));
var image2011 = ee.Image(imgList.get(1));
var image2012 = ee.Image(imgList.get(2));
var image2013 = ee.Image(imgList.get(3));
var image2014 = ee.Image(imgList.get(4));
var image2015 = ee.Image(imgList.get(5));
var image2016 = ee.Image(imgList.get(6));
var image2017 = ee.Image(imgList.get(7));
var image2018 = ee.Image(imgList.get(8));
var image2019 = ee.Image(imgList.get(9));
var image2020 = ee.Image(imgList.get(10));
var image2021 = ee.Image(imgList.get(11));
var image2022 = ee.Image(imgList.get(12));

// select VHI band in each image and clip to aoi
var image2010VHI = image2010.select("VHI").clip(aoi);
var image2011VHI = image2011.select("VHI").clip(aoi);
var image2012VHI = image2012.select("VHI").clip(aoi);
var image2013VHI = image2013.select("VHI").clip(aoi);
var image2014VHI = image2014.select("VHI").clip(aoi);
var image2015VHI = image2015.select("VHI").clip(aoi);
var image2016VHI = image2016.select("VHI").clip(aoi);
var image2017VHI = image2017.select("VHI").clip(aoi);
var image2018VHI = image2018.select("VHI").clip(aoi);
var image2019VHI = image2019.select("VHI").clip(aoi);
var image2020VHI = image2020.select("VHI").clip(aoi);
var image2021VHI = image2021.select("VHI").clip(aoi);
var image2022VHI = image2022.select("VHI").clip(aoi);

// Convert the list of images into an image collection.
var coll = ee.ImageCollection.fromImages([image2010VHI, image2011VHI, image2012VHI, image2013VHI, image2014VHI,
image2015VHI, image2016VHI, image2017VHI, image2018VHI, image2019VHI, image2020VHI, image2021VHI, image2022VHI]);
// print('Collection from list of images', coll);

// reclassify image 
// var reclassified2010 = image2010VHI.expression('b(0) < 10 ? 1 : b(0) < 20 ? 2 : b(0) < 30 ? 3 : b(0) < 40 ? 4 : 5');

Map.centerObject(aoi, 4);
Map.addLayer(image2014VHI.clip(aoi), VisParams, 'VHI 2014');