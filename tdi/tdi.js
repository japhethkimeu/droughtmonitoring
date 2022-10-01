var som: Table users/kimeu/somaliaboundary

// Load CHIRPS PENTAD data and filtering based on somalia boundry

var CHIRPS= ee.ImageCollection('UCSB-CHG/CHIRPS/PENTAD')
            .filterBounds(som);

//selecting only pecipitation data 

var precipitation = CHIRPS.select('precipitation').first();




// Get information about the MODIS projection.
var chirpsProjection = precipitation.projection();
print('MODIS projection:', chirpsProjection);




var dataset = ee.ImageCollection('MODIS/006/MOD11A1')
                  .filterBounds(som);
                  
var landSurfaceTemperature = dataset.select('LST_Day_1km');

// Scale to Kelvin and convert to Celsius, set image acquisition timel.7
var modLSTc = landSurfaceTemperature.map(function(img) {
  return img
    .multiply(0.02)
    .subtract(273.15)
    .copyProperties(img, ['system:time_start']);
});



//loading the temperature data for each month from 2001 to present

var p_2001_01 = ((modLSTc.filter(ee.Filter.date('2001-01-01','2001-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_02 = ((modLSTc.filter(ee.Filter.date('2001-02-01','2001-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_03 = ((modLSTc.filter(ee.Filter.date('2001-03-01','2001-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_04 = ((modLSTc.filter(ee.Filter.date('2001-04-01','2001-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_05 = ((modLSTc.filter(ee.Filter.date('2001-05-01','2001-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_06 = ((modLSTc.filter(ee.Filter.date('2001-06-01','2001-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_07 = ((modLSTc.filter(ee.Filter.date('2001-07-01','2001-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_08 = ((modLSTc.filter(ee.Filter.date('2001-08-01','2001-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_09 = ((modLSTc.filter(ee.Filter.date('2001-09-01','2001-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_10 = ((modLSTc.filter(ee.Filter.date('2001-10-01','2001-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_11 = ((modLSTc.filter(ee.Filter.date('2001-11-01','2001-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2001_12 = ((modLSTc.filter(ee.Filter.date('2001-12-01','2001-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2002_01 = ((modLSTc.filter(ee.Filter.date('2002-01-01','2002-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_02 = ((modLSTc.filter(ee.Filter.date('2002-02-01','2002-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_03 = ((modLSTc.filter(ee.Filter.date('2002-03-01','2002-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_04 = ((modLSTc.filter(ee.Filter.date('2002-04-01','2002-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_05 = ((modLSTc.filter(ee.Filter.date('2002-05-01','2002-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_06 = ((modLSTc.filter(ee.Filter.date('2002-06-01','2002-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_07 = ((modLSTc.filter(ee.Filter.date('2002-07-01','2002-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_08 = ((modLSTc.filter(ee.Filter.date('2002-08-01','2002-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_09 = ((modLSTc.filter(ee.Filter.date('2002-09-01','2002-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_10 = ((modLSTc.filter(ee.Filter.date('2002-10-01','2002-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_11 = ((modLSTc.filter(ee.Filter.date('2002-11-01','2002-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2002_12 = ((modLSTc.filter(ee.Filter.date('2002-12-01','2002-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2003_01 = ((modLSTc.filter(ee.Filter.date('2003-01-01','2003-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_02 = ((modLSTc.filter(ee.Filter.date('2003-02-01','2003-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_03 = ((modLSTc.filter(ee.Filter.date('2003-03-01','2003-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_04 = ((modLSTc.filter(ee.Filter.date('2003-04-01','2003-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_05 = ((modLSTc.filter(ee.Filter.date('2003-05-01','2003-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_06 = ((modLSTc.filter(ee.Filter.date('2003-06-01','2003-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_07 = ((modLSTc.filter(ee.Filter.date('2003-07-01','2003-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_08 = ((modLSTc.filter(ee.Filter.date('2003-08-01','2003-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_09 = ((modLSTc.filter(ee.Filter.date('2003-09-01','2003-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_10 = ((modLSTc.filter(ee.Filter.date('2003-10-01','2003-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_11 = ((modLSTc.filter(ee.Filter.date('2003-11-01','2003-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2003_12 = ((modLSTc.filter(ee.Filter.date('2003-12-01','2003-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2004_01 = ((modLSTc.filter(ee.Filter.date('2004-01-01','2004-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_02 = ((modLSTc.filter(ee.Filter.date('2004-02-01','2004-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_03 = ((modLSTc.filter(ee.Filter.date('2004-03-01','2004-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_04 = ((modLSTc.filter(ee.Filter.date('2004-04-01','2004-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_05 = ((modLSTc.filter(ee.Filter.date('2004-05-01','2004-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_06 = ((modLSTc.filter(ee.Filter.date('2004-06-01','2004-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_07 = ((modLSTc.filter(ee.Filter.date('2004-07-01','2004-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_08 = ((modLSTc.filter(ee.Filter.date('2004-08-01','2004-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_09 = ((modLSTc.filter(ee.Filter.date('2004-09-01','2004-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_10 = ((modLSTc.filter(ee.Filter.date('2004-10-01','2004-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_11 = ((modLSTc.filter(ee.Filter.date('2004-11-01','2004-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2004_12 = ((modLSTc.filter(ee.Filter.date('2004-12-01','2004-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2005_01 = ((modLSTc.filter(ee.Filter.date('2005-01-01','2005-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_02 = ((modLSTc.filter(ee.Filter.date('2005-02-01','2005-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_03 = ((modLSTc.filter(ee.Filter.date('2005-03-01','2005-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_04 = ((modLSTc.filter(ee.Filter.date('2005-04-01','2005-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_05 = ((modLSTc.filter(ee.Filter.date('2005-05-01','2005-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_06 = ((modLSTc.filter(ee.Filter.date('2005-06-01','2005-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_07 = ((modLSTc.filter(ee.Filter.date('2005-07-01','2005-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_08 = ((modLSTc.filter(ee.Filter.date('2005-08-01','2005-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_09 = ((modLSTc.filter(ee.Filter.date('2005-09-01','2005-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_10 = ((modLSTc.filter(ee.Filter.date('2005-10-01','2005-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_11 = ((modLSTc.filter(ee.Filter.date('2005-11-01','2005-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2005_12 = ((modLSTc.filter(ee.Filter.date('2005-12-01','2005-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2006_01 = ((modLSTc.filter(ee.Filter.date('2006-01-01','2006-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_02 = ((modLSTc.filter(ee.Filter.date('2006-02-01','2006-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_03 = ((modLSTc.filter(ee.Filter.date('2006-03-01','2006-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_04 = ((modLSTc.filter(ee.Filter.date('2006-04-01','2006-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_05 = ((modLSTc.filter(ee.Filter.date('2006-05-01','2006-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_06 = ((modLSTc.filter(ee.Filter.date('2006-06-01','2006-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_07 = ((modLSTc.filter(ee.Filter.date('2006-07-01','2006-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_08 = ((modLSTc.filter(ee.Filter.date('2006-08-01','2006-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_09 = ((modLSTc.filter(ee.Filter.date('2006-09-01','2006-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_10 = ((modLSTc.filter(ee.Filter.date('2006-10-01','2006-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_11 = ((modLSTc.filter(ee.Filter.date('2006-11-01','2006-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2006_12 = ((modLSTc.filter(ee.Filter.date('2006-12-01','2006-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2007_01 = ((modLSTc.filter(ee.Filter.date('2007-01-01','2007-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_02 = ((modLSTc.filter(ee.Filter.date('2007-02-01','2007-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_03 = ((modLSTc.filter(ee.Filter.date('2007-03-01','2007-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_04 = ((modLSTc.filter(ee.Filter.date('2007-04-01','2007-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_05 = ((modLSTc.filter(ee.Filter.date('2007-05-01','2007-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_06 = ((modLSTc.filter(ee.Filter.date('2007-06-01','2007-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_07 = ((modLSTc.filter(ee.Filter.date('2007-07-01','2007-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_08 = ((modLSTc.filter(ee.Filter.date('2007-08-01','2007-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_09 = ((modLSTc.filter(ee.Filter.date('2007-09-01','2007-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_10 = ((modLSTc.filter(ee.Filter.date('2007-10-01','2007-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_11 = ((modLSTc.filter(ee.Filter.date('2007-11-01','2007-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2007_12 = ((modLSTc.filter(ee.Filter.date('2007-12-01','2007-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2008_01 = ((modLSTc.filter(ee.Filter.date('2008-01-01','2008-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_02 = ((modLSTc.filter(ee.Filter.date('2008-02-01','2008-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_03 = ((modLSTc.filter(ee.Filter.date('2008-03-01','2008-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_04 = ((modLSTc.filter(ee.Filter.date('2008-04-01','2008-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_05 = ((modLSTc.filter(ee.Filter.date('2008-05-01','2008-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_06 = ((modLSTc.filter(ee.Filter.date('2008-06-01','2008-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_07 = ((modLSTc.filter(ee.Filter.date('2008-07-01','2008-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_08 = ((modLSTc.filter(ee.Filter.date('2008-08-01','2008-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_09 = ((modLSTc.filter(ee.Filter.date('2008-09-01','2008-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_10 = ((modLSTc.filter(ee.Filter.date('2008-10-01','2008-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_11 = ((modLSTc.filter(ee.Filter.date('2008-11-01','2008-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2008_12 = ((modLSTc.filter(ee.Filter.date('2008-12-01','2008-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2009_01 = ((modLSTc.filter(ee.Filter.date('2009-01-01','2009-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_02 = ((modLSTc.filter(ee.Filter.date('2009-02-01','2009-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_03 = ((modLSTc.filter(ee.Filter.date('2009-03-01','2009-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_04 = ((modLSTc.filter(ee.Filter.date('2009-04-01','2009-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_05 = ((modLSTc.filter(ee.Filter.date('2009-05-01','2009-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_06 = ((modLSTc.filter(ee.Filter.date('2009-06-01','2009-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_07 = ((modLSTc.filter(ee.Filter.date('2009-07-01','2009-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_08 = ((modLSTc.filter(ee.Filter.date('2009-08-01','2009-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_09 = ((modLSTc.filter(ee.Filter.date('2009-09-01','2009-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_10 = ((modLSTc.filter(ee.Filter.date('2009-10-01','2009-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_11 = ((modLSTc.filter(ee.Filter.date('2009-11-01','2009-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2009_12 = ((modLSTc.filter(ee.Filter.date('2009-12-01','2009-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2010_01 = ((modLSTc.filter(ee.Filter.date('2010-01-01','2010-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_02 = ((modLSTc.filter(ee.Filter.date('2010-02-01','2010-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_03 = ((modLSTc.filter(ee.Filter.date('2010-03-01','2010-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_04 = ((modLSTc.filter(ee.Filter.date('2010-04-01','2010-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_05 = ((modLSTc.filter(ee.Filter.date('2010-05-01','2010-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_06 = ((modLSTc.filter(ee.Filter.date('2010-06-01','2010-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_07 = ((modLSTc.filter(ee.Filter.date('2010-07-01','2010-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_08 = ((modLSTc.filter(ee.Filter.date('2010-08-01','2010-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_09 = ((modLSTc.filter(ee.Filter.date('2010-09-01','2010-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_10 = ((modLSTc.filter(ee.Filter.date('2010-10-01','2010-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_11 = ((modLSTc.filter(ee.Filter.date('2010-11-01','2010-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2010_12 = ((modLSTc.filter(ee.Filter.date('2010-12-01','2010-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2011_01 = ((modLSTc.filter(ee.Filter.date('2011-01-01','2011-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_02 = ((modLSTc.filter(ee.Filter.date('2011-02-01','2011-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_03 = ((modLSTc.filter(ee.Filter.date('2011-03-01','2011-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_04 = ((modLSTc.filter(ee.Filter.date('2011-04-01','2011-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_05 = ((modLSTc.filter(ee.Filter.date('2011-05-01','2011-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_06 = ((modLSTc.filter(ee.Filter.date('2011-06-01','2011-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_07 = ((modLSTc.filter(ee.Filter.date('2011-07-01','2011-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_08 = ((modLSTc.filter(ee.Filter.date('2011-08-01','2011-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_09 = ((modLSTc.filter(ee.Filter.date('2011-09-01','2011-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_10 = ((modLSTc.filter(ee.Filter.date('2011-10-01','2011-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_11 = ((modLSTc.filter(ee.Filter.date('2011-11-01','2011-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2011_12 = ((modLSTc.filter(ee.Filter.date('2011-12-01','2011-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2012_01 = ((modLSTc.filter(ee.Filter.date('2012-01-01','2012-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_02 = ((modLSTc.filter(ee.Filter.date('2012-02-01','2012-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_03 = ((modLSTc.filter(ee.Filter.date('2012-03-01','2012-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_04 = ((modLSTc.filter(ee.Filter.date('2012-04-01','2012-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_05 = ((modLSTc.filter(ee.Filter.date('2012-05-01','2012-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_06 = ((modLSTc.filter(ee.Filter.date('2012-06-01','2012-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_07 = ((modLSTc.filter(ee.Filter.date('2012-07-01','2012-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_08 = ((modLSTc.filter(ee.Filter.date('2012-08-01','2012-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_09 = ((modLSTc.filter(ee.Filter.date('2012-09-01','2012-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_10 = ((modLSTc.filter(ee.Filter.date('2012-10-01','2012-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_11 = ((modLSTc.filter(ee.Filter.date('2012-11-01','2012-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2012_12 = ((modLSTc.filter(ee.Filter.date('2012-12-01','2012-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2013_01 = ((modLSTc.filter(ee.Filter.date('2013-01-01','2013-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_02 = ((modLSTc.filter(ee.Filter.date('2013-02-01','2013-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_03 = ((modLSTc.filter(ee.Filter.date('2013-03-01','2013-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_04 = ((modLSTc.filter(ee.Filter.date('2013-04-01','2013-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_05 = ((modLSTc.filter(ee.Filter.date('2013-05-01','2013-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_06 = ((modLSTc.filter(ee.Filter.date('2013-06-01','2013-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_07 = ((modLSTc.filter(ee.Filter.date('2013-07-01','2013-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_08 = ((modLSTc.filter(ee.Filter.date('2013-08-01','2013-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_09 = ((modLSTc.filter(ee.Filter.date('2013-09-01','2013-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_10 = ((modLSTc.filter(ee.Filter.date('2013-10-01','2013-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_11 = ((modLSTc.filter(ee.Filter.date('2013-11-01','2013-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2013_12 = ((modLSTc.filter(ee.Filter.date('2013-12-01','2013-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2014_01 = ((modLSTc.filter(ee.Filter.date('2014-01-01','2014-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_02 = ((modLSTc.filter(ee.Filter.date('2014-02-01','2014-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_03 = ((modLSTc.filter(ee.Filter.date('2014-03-01','2014-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_04 = ((modLSTc.filter(ee.Filter.date('2014-04-01','2014-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_05 = ((modLSTc.filter(ee.Filter.date('2014-05-01','2014-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_06 = ((modLSTc.filter(ee.Filter.date('2014-06-01','2014-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_07 = ((modLSTc.filter(ee.Filter.date('2014-07-01','2014-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_08 = ((modLSTc.filter(ee.Filter.date('2014-08-01','2014-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_09 = ((modLSTc.filter(ee.Filter.date('2014-09-01','2014-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_10 = ((modLSTc.filter(ee.Filter.date('2014-10-01','2014-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_11 = ((modLSTc.filter(ee.Filter.date('2014-11-01','2014-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2014_12 = ((modLSTc.filter(ee.Filter.date('2014-12-01','2014-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2015_01 = ((modLSTc.filter(ee.Filter.date('2015-01-01','2015-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_02 = ((modLSTc.filter(ee.Filter.date('2015-02-01','2015-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_03 = ((modLSTc.filter(ee.Filter.date('2015-03-01','2015-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_04 = ((modLSTc.filter(ee.Filter.date('2015-04-01','2015-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_05 = ((modLSTc.filter(ee.Filter.date('2015-05-01','2015-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_06 = ((modLSTc.filter(ee.Filter.date('2015-06-01','2015-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_07 = ((modLSTc.filter(ee.Filter.date('2015-07-01','2015-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_08 = ((modLSTc.filter(ee.Filter.date('2015-08-01','2015-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_09 = ((modLSTc.filter(ee.Filter.date('2015-09-01','2015-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_10 = ((modLSTc.filter(ee.Filter.date('2015-10-01','2015-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_11 = ((modLSTc.filter(ee.Filter.date('2015-11-01','2015-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2015_12 = ((modLSTc.filter(ee.Filter.date('2015-12-01','2015-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2016_01 = ((modLSTc.filter(ee.Filter.date('2016-01-01','2016-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_02 = ((modLSTc.filter(ee.Filter.date('2016-02-01','2016-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_03 = ((modLSTc.filter(ee.Filter.date('2016-03-01','2016-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_04 = ((modLSTc.filter(ee.Filter.date('2016-04-01','2016-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_05 = ((modLSTc.filter(ee.Filter.date('2016-05-01','2016-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_06 = ((modLSTc.filter(ee.Filter.date('2016-06-01','2016-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_07 = ((modLSTc.filter(ee.Filter.date('2016-07-01','2016-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_08 = ((modLSTc.filter(ee.Filter.date('2016-08-01','2016-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_09 = ((modLSTc.filter(ee.Filter.date('2016-09-01','2016-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_10 = ((modLSTc.filter(ee.Filter.date('2016-10-01','2016-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_11 = ((modLSTc.filter(ee.Filter.date('2016-11-01','2016-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2016_12 = ((modLSTc.filter(ee.Filter.date('2016-12-01','2016-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2017_01 = ((modLSTc.filter(ee.Filter.date('2017-01-01','2017-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_02 = ((modLSTc.filter(ee.Filter.date('2017-02-01','2017-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_03 = ((modLSTc.filter(ee.Filter.date('2017-03-01','2017-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_04 = ((modLSTc.filter(ee.Filter.date('2017-04-01','2017-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_05 = ((modLSTc.filter(ee.Filter.date('2017-05-01','2017-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_06 = ((modLSTc.filter(ee.Filter.date('2017-06-01','2017-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_07 = ((modLSTc.filter(ee.Filter.date('2017-07-01','2017-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_08 = ((modLSTc.filter(ee.Filter.date('2017-08-01','2017-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_09 = ((modLSTc.filter(ee.Filter.date('2017-09-01','2017-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_10 = ((modLSTc.filter(ee.Filter.date('2017-10-01','2017-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_11 = ((modLSTc.filter(ee.Filter.date('2017-11-01','2017-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2017_12 = ((modLSTc.filter(ee.Filter.date('2017-12-01','2017-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2018_01 = ((modLSTc.filter(ee.Filter.date('2018-01-01','2018-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_02 = ((modLSTc.filter(ee.Filter.date('2018-02-01','2018-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_03 = ((modLSTc.filter(ee.Filter.date('2018-03-01','2018-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_04 = ((modLSTc.filter(ee.Filter.date('2018-04-01','2018-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_05 = ((modLSTc.filter(ee.Filter.date('2018-05-01','2018-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_06 = ((modLSTc.filter(ee.Filter.date('2018-06-01','2018-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_07 = ((modLSTc.filter(ee.Filter.date('2018-07-01','2018-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_08 = ((modLSTc.filter(ee.Filter.date('2018-08-01','2018-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_09 = ((modLSTc.filter(ee.Filter.date('2018-09-01','2018-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_10 = ((modLSTc.filter(ee.Filter.date('2018-10-01','2018-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_11 = ((modLSTc.filter(ee.Filter.date('2018-11-01','2018-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2018_12 = ((modLSTc.filter(ee.Filter.date('2018-12-01','2018-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2019_01 = ((modLSTc.filter(ee.Filter.date('2019-01-01','2019-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_02 = ((modLSTc.filter(ee.Filter.date('2019-02-01','2019-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_03 = ((modLSTc.filter(ee.Filter.date('2019-03-01','2019-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_04 = ((modLSTc.filter(ee.Filter.date('2019-04-01','2019-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_05 = ((modLSTc.filter(ee.Filter.date('2019-05-01','2019-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_06 = ((modLSTc.filter(ee.Filter.date('2019-06-01','2019-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_07 = ((modLSTc.filter(ee.Filter.date('2019-07-01','2019-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_08 = ((modLSTc.filter(ee.Filter.date('2019-08-01','2019-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_09 = ((modLSTc.filter(ee.Filter.date('2019-09-01','2019-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_10 = ((modLSTc.filter(ee.Filter.date('2019-10-01','2019-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_11 = ((modLSTc.filter(ee.Filter.date('2019-11-01','2019-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2019_12 = ((modLSTc.filter(ee.Filter.date('2019-12-01','2019-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2020_01 = ((modLSTc.filter(ee.Filter.date('2020-01-01','2020-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_02 = ((modLSTc.filter(ee.Filter.date('2020-02-01','2020-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_03 = ((modLSTc.filter(ee.Filter.date('2020-03-01','2020-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_04 = ((modLSTc.filter(ee.Filter.date('2020-04-01','2020-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_05 = ((modLSTc.filter(ee.Filter.date('2020-05-01','2020-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_06 = ((modLSTc.filter(ee.Filter.date('2020-06-01','2020-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_07 = ((modLSTc.filter(ee.Filter.date('2020-07-01','2020-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_08 = ((modLSTc.filter(ee.Filter.date('2020-08-01','2020-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_09 = ((modLSTc.filter(ee.Filter.date('2020-09-01','2020-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_10 = ((modLSTc.filter(ee.Filter.date('2020-10-01','2020-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_11 = ((modLSTc.filter(ee.Filter.date('2020-11-01','2020-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2020_12 = ((modLSTc.filter(ee.Filter.date('2020-12-01','2020-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});



var p_2021_01 = ((modLSTc.filter(ee.Filter.date('2021-01-01','2021-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_02 = ((modLSTc.filter(ee.Filter.date('2021-02-01','2021-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_03 = ((modLSTc.filter(ee.Filter.date('2021-03-01','2021-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_04 = ((modLSTc.filter(ee.Filter.date('2021-04-01','2021-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_05 = ((modLSTc.filter(ee.Filter.date('2021-05-01','2021-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_06 = ((modLSTc.filter(ee.Filter.date('2021-06-01','2021-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_07 = ((modLSTc.filter(ee.Filter.date('2021-07-01','2021-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_08 = ((modLSTc.filter(ee.Filter.date('2021-08-01','2021-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_09 = ((modLSTc.filter(ee.Filter.date('2021-09-01','2021-09-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_10 = ((modLSTc.filter(ee.Filter.date('2021-10-01','2021-10-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_11 = ((modLSTc.filter(ee.Filter.date('2021-11-01','2021-11-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2021_12 = ((modLSTc.filter(ee.Filter.date('2021-12-01','2021-12-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});


var p_2022_01 = ((modLSTc.filter(ee.Filter.date('2022-01-01','2022-01-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_02 = ((modLSTc.filter(ee.Filter.date('2022-02-01','2022-02-27'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_03 = ((modLSTc.filter(ee.Filter.date('2022-03-01','2022-03-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_04 = ((modLSTc.filter(ee.Filter.date('2022-04-01','2022-04-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_05 = ((modLSTc.filter(ee.Filter.date('2022-05-01','2022-05-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_06 = ((modLSTc.filter(ee.Filter.date('2022-06-01','2022-06-30'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_07 = ((modLSTc.filter(ee.Filter.date('2022-07-01','2022-07-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});
var p_2022_08 = ((modLSTc.filter(ee.Filter.date('2022-08-01','2022-08-31'))).reduce(ee.Reducer.mean())).clip(som).reproject({crs: chirpsProjection}).reduceResolution({reducer: ee.Reducer.mean()});

// end of loading the temperature data for each month from 2001 to present



// modifying the data by adding 1. temp modified = (p+1)


var p_mod_2001_01 = ((p_2001_01).multiply(-1)).add(45.45);
var p_mod_2001_02 = ((p_2001_02).multiply(-1)).add(45.45);
var p_mod_2001_03 = ((p_2001_03).multiply(-1)).add(45.45);
var p_mod_2001_04 = ((p_2001_04).multiply(-1)).add(45.45);
var p_mod_2001_05 = ((p_2001_05).multiply(-1)).add(45.45);
var p_mod_2001_06 = ((p_2001_06).multiply(-1)).add(45.45);
var p_mod_2001_07 = ((p_2001_07).multiply(-1)).add(45.45);
var p_mod_2001_08 = ((p_2001_08).multiply(-1)).add(45.45);
var p_mod_2001_09 = ((p_2001_09).multiply(-1)).add(45.45);
var p_mod_2001_10 = ((p_2001_10).multiply(-1)).add(45.45);
var p_mod_2001_11 = ((p_2001_11).multiply(-1)).add(45.45);
var p_mod_2001_12 = ((p_2001_12).multiply(-1)).add(45.45);


var p_mod_2002_01 = ((p_2002_01).multiply(-1)).add(45.45);
var p_mod_2002_02 = ((p_2002_02).multiply(-1)).add(45.45);
var p_mod_2002_03 = ((p_2002_03).multiply(-1)).add(45.45);
var p_mod_2002_04 = ((p_2002_04).multiply(-1)).add(45.45);
var p_mod_2002_05 = ((p_2002_05).multiply(-1)).add(45.45);
var p_mod_2002_06 = ((p_2002_06).multiply(-1)).add(45.45);
var p_mod_2002_07 = ((p_2002_07).multiply(-1)).add(45.45);
var p_mod_2002_08 = ((p_2002_08).multiply(-1)).add(45.45);
var p_mod_2002_09 = ((p_2002_09).multiply(-1)).add(45.45);
var p_mod_2002_10 = ((p_2002_10).multiply(-1)).add(45.45);
var p_mod_2002_11 = ((p_2002_11).multiply(-1)).add(45.45);
var p_mod_2002_12 = ((p_2002_12).multiply(-1)).add(45.45);


var p_mod_2003_01 = ((p_2003_01).multiply(-1)).add(45.45);
var p_mod_2003_02 = ((p_2003_02).multiply(-1)).add(45.45);
var p_mod_2003_03 = ((p_2003_03).multiply(-1)).add(45.45);
var p_mod_2003_04 = ((p_2003_04).multiply(-1)).add(45.45);
var p_mod_2003_05 = ((p_2003_05).multiply(-1)).add(45.45);
var p_mod_2003_06 = ((p_2003_06).multiply(-1)).add(45.45);
var p_mod_2003_07 = ((p_2003_07).multiply(-1)).add(45.45);
var p_mod_2003_08 = ((p_2003_08).multiply(-1)).add(45.45);
var p_mod_2003_09 = ((p_2003_09).multiply(-1)).add(45.45);
var p_mod_2003_10 = ((p_2003_10).multiply(-1)).add(45.45);
var p_mod_2003_11 = ((p_2003_11).multiply(-1)).add(45.45);
var p_mod_2003_12 = ((p_2003_12).multiply(-1)).add(45.45);


var p_mod_2004_01 = ((p_2004_01).multiply(-1)).add(45.45);
var p_mod_2004_02 = ((p_2004_02).multiply(-1)).add(45.45);
var p_mod_2004_03 = ((p_2004_03).multiply(-1)).add(45.45);
var p_mod_2004_04 = ((p_2004_04).multiply(-1)).add(45.45);
var p_mod_2004_05 = ((p_2004_05).multiply(-1)).add(45.45);
var p_mod_2004_06 = ((p_2004_06).multiply(-1)).add(45.45);
var p_mod_2004_07 = ((p_2004_07).multiply(-1)).add(45.45);
var p_mod_2004_08 = ((p_2004_08).multiply(-1)).add(45.45);
var p_mod_2004_09 = ((p_2004_09).multiply(-1)).add(45.45);
var p_mod_2004_10 = ((p_2004_10).multiply(-1)).add(45.45);
var p_mod_2004_11 = ((p_2004_11).multiply(-1)).add(45.45);
var p_mod_2004_12 = ((p_2004_12).multiply(-1)).add(45.45);



var p_mod_2005_01 = ((p_2005_01).multiply(-1)).add(45.45);
var p_mod_2005_02 = ((p_2005_02).multiply(-1)).add(45.45);
var p_mod_2005_03 = ((p_2005_03).multiply(-1)).add(45.45);
var p_mod_2005_04 = ((p_2005_04).multiply(-1)).add(45.45);
var p_mod_2005_05 = ((p_2005_05).multiply(-1)).add(45.45);
var p_mod_2005_06 = ((p_2005_06).multiply(-1)).add(45.45);
var p_mod_2005_07 = ((p_2005_07).multiply(-1)).add(45.45);
var p_mod_2005_08 = ((p_2005_08).multiply(-1)).add(45.45);
var p_mod_2005_09 = ((p_2005_09).multiply(-1)).add(45.45);
var p_mod_2005_10 = ((p_2005_10).multiply(-1)).add(45.45);
var p_mod_2005_11 = ((p_2005_11).multiply(-1)).add(45.45);
var p_mod_2005_12 = ((p_2005_12).multiply(-1)).add(45.45);


var p_mod_2006_01 = ((p_2006_01).multiply(-1)).add(45.45);
var p_mod_2006_02 = ((p_2006_02).multiply(-1)).add(45.45);
var p_mod_2006_03 = ((p_2006_03).multiply(-1)).add(45.45);
var p_mod_2006_04 = ((p_2006_04).multiply(-1)).add(45.45);
var p_mod_2006_05 = ((p_2006_05).multiply(-1)).add(45.45);
var p_mod_2006_06 = ((p_2006_06).multiply(-1)).add(45.45);
var p_mod_2006_07 = ((p_2006_07).multiply(-1)).add(45.45);
var p_mod_2006_08 = ((p_2006_08).multiply(-1)).add(45.45);
var p_mod_2006_09 = ((p_2006_09).multiply(-1)).add(45.45);
var p_mod_2006_10 = ((p_2006_10).multiply(-1)).add(45.45);
var p_mod_2006_11 = ((p_2006_11).multiply(-1)).add(45.45);
var p_mod_2006_12 = ((p_2006_12).multiply(-1)).add(45.45);



var p_mod_2007_01 = ((p_2007_01).multiply(-1)).add(45.45);
var p_mod_2007_02 = ((p_2007_02).multiply(-1)).add(45.45);
var p_mod_2007_03 = ((p_2007_03).multiply(-1)).add(45.45);
var p_mod_2007_04 = ((p_2007_04).multiply(-1)).add(45.45);
var p_mod_2007_05 = ((p_2007_05).multiply(-1)).add(45.45);
var p_mod_2007_06 = ((p_2007_06).multiply(-1)).add(45.45);
var p_mod_2007_07 = ((p_2007_07).multiply(-1)).add(45.45);
var p_mod_2007_08 = ((p_2007_08).multiply(-1)).add(45.45);
var p_mod_2007_09 = ((p_2007_09).multiply(-1)).add(45.45);
var p_mod_2007_10 = ((p_2007_10).multiply(-1)).add(45.45);
var p_mod_2007_11 = ((p_2007_11).multiply(-1)).add(45.45);
var p_mod_2007_12 = ((p_2007_12).multiply(-1)).add(45.45);


var p_mod_2008_01 = ((p_2008_01).multiply(-1)).add(45.45);
var p_mod_2008_02 = ((p_2008_02).multiply(-1)).add(45.45);
var p_mod_2008_03 = ((p_2008_03).multiply(-1)).add(45.45);
var p_mod_2008_04 = ((p_2008_04).multiply(-1)).add(45.45);
var p_mod_2008_05 = ((p_2008_05).multiply(-1)).add(45.45);
var p_mod_2008_06 = ((p_2008_06).multiply(-1)).add(45.45);
var p_mod_2008_07 = ((p_2008_07).multiply(-1)).add(45.45);
var p_mod_2008_08 = ((p_2008_08).multiply(-1)).add(45.45);
var p_mod_2008_09 = ((p_2008_09).multiply(-1)).add(45.45);
var p_mod_2008_10 = ((p_2008_10).multiply(-1)).add(45.45);
var p_mod_2008_11 = ((p_2008_11).multiply(-1)).add(45.45);
var p_mod_2008_12 = ((p_2008_12).multiply(-1)).add(45.45);


var p_mod_2009_01 = ((p_2009_01).multiply(-1)).add(45.45);
var p_mod_2009_02 = ((p_2009_02).multiply(-1)).add(45.45);
var p_mod_2009_03 = ((p_2009_03).multiply(-1)).add(45.45);
var p_mod_2009_04 = ((p_2009_04).multiply(-1)).add(45.45);
var p_mod_2009_05 = ((p_2009_05).multiply(-1)).add(45.45);
var p_mod_2009_06 = ((p_2009_06).multiply(-1)).add(45.45);
var p_mod_2009_07 = ((p_2009_07).multiply(-1)).add(45.45);
var p_mod_2009_08 = ((p_2009_08).multiply(-1)).add(45.45);
var p_mod_2009_09 = ((p_2009_09).multiply(-1)).add(45.45);
var p_mod_2009_10 = ((p_2009_10).multiply(-1)).add(45.45);
var p_mod_2009_11 = ((p_2009_11).multiply(-1)).add(45.45);
var p_mod_2009_12 = ((p_2009_12).multiply(-1)).add(45.45);



var p_mod_2010_01 = ((p_2010_01).multiply(-1)).add(45.45);
var p_mod_2010_02 = ((p_2010_02).multiply(-1)).add(45.45);
var p_mod_2010_03 = ((p_2010_03).multiply(-1)).add(45.45);
var p_mod_2010_04 = ((p_2010_04).multiply(-1)).add(45.45);
var p_mod_2010_05 = ((p_2010_05).multiply(-1)).add(45.45);
var p_mod_2010_06 = ((p_2010_06).multiply(-1)).add(45.45);
var p_mod_2010_07 = ((p_2010_07).multiply(-1)).add(45.45);
var p_mod_2010_08 = ((p_2010_08).multiply(-1)).add(45.45);
var p_mod_2010_09 = ((p_2010_09).multiply(-1)).add(45.45);
var p_mod_2010_10 = ((p_2010_10).multiply(-1)).add(45.45);
var p_mod_2010_11 = ((p_2010_11).multiply(-1)).add(45.45);
var p_mod_2010_12 = ((p_2010_12).multiply(-1)).add(45.45);



var p_mod_2011_01 = ((p_2011_01).multiply(-1)).add(45.45);
var p_mod_2011_02 = ((p_2011_02).multiply(-1)).add(45.45);
var p_mod_2011_03 = ((p_2011_03).multiply(-1)).add(45.45);
var p_mod_2011_04 = ((p_2011_04).multiply(-1)).add(45.45);
var p_mod_2011_05 = ((p_2011_05).multiply(-1)).add(45.45);
var p_mod_2011_06 = ((p_2011_06).multiply(-1)).add(45.45);
var p_mod_2011_07 = ((p_2011_07).multiply(-1)).add(45.45);
var p_mod_2011_08 = ((p_2011_08).multiply(-1)).add(45.45);
var p_mod_2011_09 = ((p_2011_09).multiply(-1)).add(45.45);
var p_mod_2011_10 = ((p_2011_10).multiply(-1)).add(45.45);
var p_mod_2011_11 = ((p_2011_11).multiply(-1)).add(45.45);
var p_mod_2011_12 = ((p_2011_12).multiply(-1)).add(45.45);


var p_mod_2012_01 = ((p_2012_01).multiply(-1)).add(45.45);
var p_mod_2012_02 = ((p_2012_02).multiply(-1)).add(45.45);
var p_mod_2012_03 = ((p_2012_03).multiply(-1)).add(45.45);
var p_mod_2012_04 = ((p_2012_04).multiply(-1)).add(45.45);
var p_mod_2012_05 = ((p_2012_05).multiply(-1)).add(45.45);
var p_mod_2012_06 = ((p_2012_06).multiply(-1)).add(45.45);
var p_mod_2012_07 = ((p_2012_07).multiply(-1)).add(45.45);
var p_mod_2012_08 = ((p_2012_08).multiply(-1)).add(45.45);
var p_mod_2012_09 = ((p_2012_09).multiply(-1)).add(45.45);
var p_mod_2012_10 = ((p_2012_10).multiply(-1)).add(45.45);
var p_mod_2012_11 = ((p_2012_11).multiply(-1)).add(45.45);
var p_mod_2012_12 = ((p_2012_12).multiply(-1)).add(45.45);


var p_mod_2013_01 = ((p_2013_01).multiply(-1)).add(45.45);
var p_mod_2013_02 = ((p_2013_02).multiply(-1)).add(45.45);
var p_mod_2013_03 = ((p_2013_03).multiply(-1)).add(45.45);
var p_mod_2013_04 = ((p_2013_04).multiply(-1)).add(45.45);
var p_mod_2013_05 = ((p_2013_05).multiply(-1)).add(45.45);
var p_mod_2013_06 = ((p_2013_06).multiply(-1)).add(45.45);
var p_mod_2013_07 = ((p_2013_07).multiply(-1)).add(45.45);
var p_mod_2013_08 = ((p_2013_08).multiply(-1)).add(45.45);
var p_mod_2013_09 = ((p_2013_09).multiply(-1)).add(45.45);
var p_mod_2013_10 = ((p_2013_10).multiply(-1)).add(45.45);
var p_mod_2013_11 = ((p_2013_11).multiply(-1)).add(45.45);
var p_mod_2013_12 = ((p_2013_12).multiply(-1)).add(45.45);


var p_mod_2014_01 = ((p_2014_01).multiply(-1)).add(45.45);
var p_mod_2014_02 = ((p_2014_02).multiply(-1)).add(45.45);
var p_mod_2014_03 = ((p_2014_03).multiply(-1)).add(45.45);
var p_mod_2014_04 = ((p_2014_04).multiply(-1)).add(45.45);
var p_mod_2014_05 = ((p_2014_05).multiply(-1)).add(45.45);
var p_mod_2014_06 = ((p_2014_06).multiply(-1)).add(45.45);
var p_mod_2014_07 = ((p_2014_07).multiply(-1)).add(45.45);
var p_mod_2014_08 = ((p_2014_08).multiply(-1)).add(45.45);
var p_mod_2014_09 = ((p_2014_09).multiply(-1)).add(45.45);
var p_mod_2014_10 = ((p_2014_10).multiply(-1)).add(45.45);
var p_mod_2014_11 = ((p_2014_11).multiply(-1)).add(45.45);
var p_mod_2014_12 = ((p_2014_12).multiply(-1)).add(45.45);



var p_mod_2015_01 = ((p_2015_01).multiply(-1)).add(45.45);
var p_mod_2015_02 = ((p_2015_02).multiply(-1)).add(45.45);
var p_mod_2015_03 = ((p_2015_03).multiply(-1)).add(45.45);
var p_mod_2015_04 = ((p_2015_04).multiply(-1)).add(45.45);
var p_mod_2015_05 = ((p_2015_05).multiply(-1)).add(45.45);
var p_mod_2015_06 = ((p_2015_06).multiply(-1)).add(45.45);
var p_mod_2015_07 = ((p_2015_07).multiply(-1)).add(45.45);
var p_mod_2015_08 = ((p_2015_08).multiply(-1)).add(45.45);
var p_mod_2015_09 = ((p_2015_09).multiply(-1)).add(45.45);
var p_mod_2015_10 = ((p_2015_10).multiply(-1)).add(45.45);
var p_mod_2015_11 = ((p_2015_11).multiply(-1)).add(45.45);
var p_mod_2015_12 = ((p_2015_12).multiply(-1)).add(45.45);


var p_mod_2016_01 = ((p_2016_01).multiply(-1)).add(45.45);
var p_mod_2016_02 = ((p_2016_02).multiply(-1)).add(45.45);
var p_mod_2016_03 = ((p_2016_03).multiply(-1)).add(45.45);
var p_mod_2016_04 = ((p_2016_04).multiply(-1)).add(45.45);
var p_mod_2016_05 = ((p_2016_05).multiply(-1)).add(45.45);
var p_mod_2016_06 = ((p_2016_06).multiply(-1)).add(45.45);
var p_mod_2016_07 = ((p_2016_07).multiply(-1)).add(45.45);
var p_mod_2016_08 = ((p_2016_08).multiply(-1)).add(45.45);
var p_mod_2016_09 = ((p_2016_09).multiply(-1)).add(45.45);
var p_mod_2016_10 = ((p_2016_10).multiply(-1)).add(45.45);
var p_mod_2016_11 = ((p_2016_11).multiply(-1)).add(45.45);
var p_mod_2016_12 = ((p_2016_12).multiply(-1)).add(45.45);



var p_mod_2017_01 = ((p_2017_01).multiply(-1)).add(45.45);
var p_mod_2017_02 = ((p_2017_02).multiply(-1)).add(45.45);
var p_mod_2017_03 = ((p_2017_03).multiply(-1)).add(45.45);
var p_mod_2017_04 = ((p_2017_04).multiply(-1)).add(45.45);
var p_mod_2017_05 = ((p_2017_05).multiply(-1)).add(45.45);
var p_mod_2017_06 = ((p_2017_06).multiply(-1)).add(45.45);
var p_mod_2017_07 = ((p_2017_07).multiply(-1)).add(45.45);
var p_mod_2017_08 = ((p_2017_08).multiply(-1)).add(45.45);
var p_mod_2017_09 = ((p_2017_09).multiply(-1)).add(45.45);
var p_mod_2017_10 = ((p_2017_10).multiply(-1)).add(45.45);
var p_mod_2017_11 = ((p_2017_11).multiply(-1)).add(45.45);
var p_mod_2017_12 = ((p_2017_12).multiply(-1)).add(45.45);


var p_mod_2018_01 = ((p_2018_01).multiply(-1)).add(45.45);
var p_mod_2018_02 = ((p_2018_02).multiply(-1)).add(45.45);
var p_mod_2018_03 = ((p_2018_03).multiply(-1)).add(45.45);
var p_mod_2018_04 = ((p_2018_04).multiply(-1)).add(45.45);
var p_mod_2018_05 = ((p_2018_05).multiply(-1)).add(45.45);
var p_mod_2018_06 = ((p_2018_06).multiply(-1)).add(45.45);
var p_mod_2018_07 = ((p_2018_07).multiply(-1)).add(45.45);
var p_mod_2018_08 = ((p_2018_08).multiply(-1)).add(45.45);
var p_mod_2018_09 = ((p_2018_09).multiply(-1)).add(45.45);
var p_mod_2018_10 = ((p_2018_10).multiply(-1)).add(45.45);
var p_mod_2018_11 = ((p_2018_11).multiply(-1)).add(45.45);
var p_mod_2018_12 = ((p_2018_12).multiply(-1)).add(45.45);


var p_mod_2019_01 = ((p_2019_01).multiply(-1)).add(45.45);
var p_mod_2019_02 = ((p_2019_02).multiply(-1)).add(45.45);
var p_mod_2019_03 = ((p_2019_03).multiply(-1)).add(45.45);
var p_mod_2019_04 = ((p_2019_04).multiply(-1)).add(45.45);
var p_mod_2019_05 = ((p_2019_05).multiply(-1)).add(45.45);
var p_mod_2019_06 = ((p_2019_06).multiply(-1)).add(45.45);
var p_mod_2019_07 = ((p_2019_07).multiply(-1)).add(45.45);
var p_mod_2019_08 = ((p_2019_08).multiply(-1)).add(45.45);
var p_mod_2019_09 = ((p_2019_09).multiply(-1)).add(45.45);
var p_mod_2019_10 = ((p_2019_10).multiply(-1)).add(45.45);
var p_mod_2019_11 = ((p_2019_11).multiply(-1)).add(45.45);
var p_mod_2019_12 = ((p_2019_12).multiply(-1)).add(45.45);


var p_mod_2020_01 = ((p_2020_01).multiply(-1)).add(45.45);
var p_mod_2020_02 = ((p_2020_02).multiply(-1)).add(45.45);
var p_mod_2020_03 = ((p_2020_03).multiply(-1)).add(45.45);
var p_mod_2020_04 = ((p_2020_04).multiply(-1)).add(45.45);
var p_mod_2020_05 = ((p_2020_05).multiply(-1)).add(45.45);
var p_mod_2020_06 = ((p_2020_06).multiply(-1)).add(45.45);
var p_mod_2020_07 = ((p_2020_07).multiply(-1)).add(45.45);
var p_mod_2020_08 = ((p_2020_08).multiply(-1)).add(45.45);
var p_mod_2020_09 = ((p_2020_09).multiply(-1)).add(45.45);
var p_mod_2020_10 = ((p_2020_10).multiply(-1)).add(45.45);
var p_mod_2020_11 = ((p_2020_11).multiply(-1)).add(45.45);
var p_mod_2020_12 = ((p_2020_12).multiply(-1)).add(45.45);


var p_mod_2021_01 = ((p_2021_01).multiply(-1)).add(45.45);
var p_mod_2021_02 = ((p_2021_02).multiply(-1)).add(45.45);
var p_mod_2021_03 = ((p_2021_03).multiply(-1)).add(45.45);
var p_mod_2021_04 = ((p_2021_04).multiply(-1)).add(45.45);
var p_mod_2021_05 = ((p_2021_05).multiply(-1)).add(45.45);
var p_mod_2021_06 = ((p_2021_06).multiply(-1)).add(45.45);
var p_mod_2021_07 = ((p_2021_07).multiply(-1)).add(45.45);
var p_mod_2021_08 = ((p_2021_08).multiply(-1)).add(45.45);
var p_mod_2021_09 = ((p_2021_09).multiply(-1)).add(45.45);
var p_mod_2021_10 = ((p_2021_10).multiply(-1)).add(45.45);
var p_mod_2021_11 = ((p_2021_11).multiply(-1)).add(45.45);
var p_mod_2021_12 = ((p_2021_12).multiply(-1)).add(45.45);


var p_mod_2022_01 = ((p_2022_01).multiply(-1)).add(45.45);
var p_mod_2022_02 = ((p_2022_02).multiply(-1)).add(45.45);
var p_mod_2022_03 = ((p_2022_03).multiply(-1)).add(45.45);
var p_mod_2022_04 = ((p_2022_04).multiply(-1)).add(45.45);
var p_mod_2022_05 = ((p_2022_05).multiply(-1)).add(45.45);
var p_mod_2022_06 = ((p_2022_06).multiply(-1)).add(45.45);
var p_mod_2022_07 = ((p_2022_07).multiply(-1)).add(45.45);
var p_mod_2022_08 = ((p_2022_08).multiply(-1)).add(45.45);

  
// end of modifying the data by adding 1. temp modified = (p+1)




// getting the means for the months e.g mean of all januaries from 2001 to present 


var p_mod_january_mean = (ee.ImageCollection([p_mod_2001_01,p_mod_2002_01,p_mod_2003_01,p_mod_2004_01,p_mod_2005_01,p_mod_2006_01,p_mod_2007_01,p_mod_2008_01,p_mod_2009_01
,p_mod_2010_01,p_mod_2011_01,p_mod_2012_01,p_mod_2013_01,p_mod_2014_01,p_mod_2015_01,p_mod_2016_01,p_mod_2017_01,p_mod_2018_01,p_mod_2019_01,p_mod_2020_01,p_mod_2021_01,p_mod_2022_01])).mean();

var p_mod_february_mean = (ee.ImageCollection([p_mod_2001_02,p_mod_2002_02,p_mod_2003_02,p_mod_2004_02,p_mod_2005_02,p_mod_2006_02,p_mod_2007_02,p_mod_2008_02,p_mod_2009_02
,p_mod_2010_02,p_mod_2011_02,p_mod_2012_02,p_mod_2013_02,p_mod_2014_02,p_mod_2015_02,p_mod_2016_02,p_mod_2017_02,p_mod_2018_02,p_mod_2019_02,p_mod_2020_02,p_mod_2021_02,p_mod_2022_02])).mean();


var p_mod_march_mean = (ee.ImageCollection([p_mod_2001_03,p_mod_2002_03,p_mod_2003_03,p_mod_2004_03,p_mod_2005_03,p_mod_2006_03,p_mod_2007_03,p_mod_2008_03,p_mod_2009_03
,p_mod_2010_03,p_mod_2011_03,p_mod_2012_03,p_mod_2013_03,p_mod_2014_03,p_mod_2015_03,p_mod_2016_03,p_mod_2017_03,p_mod_2018_03,p_mod_2019_03,p_mod_2020_03,p_mod_2021_03,p_mod_2022_03])).mean();


var p_mod_april_mean = (ee.ImageCollection([p_mod_2001_04,p_mod_2002_04,p_mod_2003_04,p_mod_2004_04,p_mod_2005_04,p_mod_2006_04,p_mod_2007_04,p_mod_2008_04,p_mod_2009_04
,p_mod_2010_04,p_mod_2011_04,p_mod_2012_04,p_mod_2013_04,p_mod_2014_04,p_mod_2015_04,p_mod_2016_04,p_mod_2017_04,p_mod_2018_04,p_mod_2019_04,p_mod_2020_04,p_mod_2021_04, p_mod_2022_04])).mean();


var p_mod_may_mean = (ee.ImageCollection([p_mod_2001_05,p_mod_2002_05,p_mod_2003_05,p_mod_2004_05,p_mod_2005_05,p_mod_2006_05,p_mod_2007_05,p_mod_2008_05,p_mod_2009_05
,p_mod_2010_05,p_mod_2011_05,p_mod_2012_05,p_mod_2013_05,p_mod_2014_05,p_mod_2015_05,p_mod_2016_05,p_mod_2017_05,p_mod_2018_05,p_mod_2019_05,p_mod_2020_05,p_mod_2021_05, p_mod_2022_05])).mean();


var p_mod_june_mean = (ee.ImageCollection([p_mod_2001_06,p_mod_2002_06,p_mod_2003_06,p_mod_2004_06,p_mod_2005_06,p_mod_2006_06,p_mod_2007_06,p_mod_2008_06,p_mod_2009_06
,p_mod_2010_06,p_mod_2011_06,p_mod_2012_06,p_mod_2013_06,p_mod_2014_06,p_mod_2015_06,p_mod_2016_06,p_mod_2017_06,p_mod_2018_06,p_mod_2019_06,p_mod_2020_06,p_mod_2021_06, p_mod_2022_06])).mean();


var p_mod_july_mean = (ee.ImageCollection([p_mod_2001_07,p_mod_2002_07,p_mod_2003_07,p_mod_2004_07,p_mod_2005_07,p_mod_2006_07,p_mod_2007_07,p_mod_2008_07,p_mod_2009_07
,p_mod_2010_07,p_mod_2011_07,p_mod_2012_07,p_mod_2013_07,p_mod_2014_07,p_mod_2015_07,p_mod_2016_07,p_mod_2017_07,p_mod_2018_07,p_mod_2019_07,p_mod_2020_07,p_mod_2021_07,p_mod_2022_07])).mean();



var p_mod_august_mean = (ee.ImageCollection([p_mod_2001_08,p_mod_2002_08,p_mod_2003_08,p_mod_2004_08,p_mod_2005_08,p_mod_2006_08,p_mod_2007_08,p_mod_2008_08,p_mod_2009_08
,p_mod_2010_08,p_mod_2011_08,p_mod_2012_08,p_mod_2013_08,p_mod_2014_08,p_mod_2015_08,p_mod_2016_08,p_mod_2017_08,p_mod_2018_08,p_mod_2019_08,p_mod_2020_08,p_mod_2021_08,p_mod_2022_08])).mean();


var p_mod_september_mean = (ee.ImageCollection([p_mod_2001_09,p_mod_2002_09,p_mod_2003_09,p_mod_2004_09,p_mod_2005_09,p_mod_2006_09,p_mod_2007_09,p_mod_2008_09,p_mod_2009_09
,p_mod_2010_09,p_mod_2011_09,p_mod_2012_09,p_mod_2013_09,p_mod_2014_09,p_mod_2015_09,p_mod_2016_09,p_mod_2017_09,p_mod_2018_09,p_mod_2019_09,p_mod_2020_09,p_mod_2021_09])).mean();


var p_mod_october_mean = (ee.ImageCollection([p_mod_2001_10,p_mod_2002_10,p_mod_2003_10,p_mod_2004_10,p_mod_2005_10,p_mod_2006_10,p_mod_2007_10,p_mod_2008_10,p_mod_2009_10
,p_mod_2010_10,p_mod_2011_10,p_mod_2012_10,p_mod_2013_10,p_mod_2014_10,p_mod_2015_10,p_mod_2016_10,p_mod_2017_10,p_mod_2018_10,p_mod_2019_10,p_mod_2020_10,p_mod_2021_10])).mean();



var p_mod_november_mean = (ee.ImageCollection([p_mod_2001_11,p_mod_2002_11,p_mod_2003_11,p_mod_2004_11,p_mod_2005_11,p_mod_2006_11,p_mod_2007_11,p_mod_2008_11,p_mod_2009_11
,p_mod_2010_11,p_mod_2011_11,p_mod_2012_11,p_mod_2013_11,p_mod_2014_11,p_mod_2015_11,p_mod_2016_11,p_mod_2017_11,p_mod_2018_11,p_mod_2019_11,p_mod_2020_11,p_mod_2021_11])).mean();



var p_mod_december_mean = (ee.ImageCollection([p_mod_2001_12,p_mod_2002_12,p_mod_2003_12,p_mod_2004_12,p_mod_2005_12,p_mod_2006_12,p_mod_2007_12,p_mod_2008_12,p_mod_2009_12
,p_mod_2010_12,p_mod_2011_12,p_mod_2012_12,p_mod_2013_12,p_mod_2014_12,p_mod_2015_12,p_mod_2016_12,p_mod_2017_12,p_mod_2018_12,p_mod_2019_12,p_mod_2020_12,p_mod_2021_12])).mean();


// end of  getting the means for the months e.g mean of all januaries from 2001 to present 









//getting average for interest period of 6 months before


var p_mod_2001_01_runlgth_average = p_mod_2001_01;
var p_mod_2001_02_runlgth_average = (ee.ImageCollection([p_mod_2001_01,p_mod_2001_02])).mean();
var p_mod_2001_03_runlgth_average = (ee.ImageCollection([p_mod_2001_03,p_mod_2001_02,p_mod_2001_01])).mean();
var p_mod_2001_04_runlgth_average = (ee.ImageCollection([p_mod_2001_04,p_mod_2001_03,p_mod_2001_02,p_mod_2001_01])).mean();
var p_mod_2001_05_runlgth_average = (ee.ImageCollection([p_mod_2001_05,p_mod_2001_04,p_mod_2001_03,p_mod_2001_02,p_mod_2001_01])).mean();
var p_mod_2001_06_runlgth_average = (ee.ImageCollection([p_mod_2001_06,p_mod_2001_05,p_mod_2001_04,p_mod_2001_03,p_mod_2001_02,p_mod_2001_01])).mean();
var p_mod_2001_07_runlgth_average = (ee.ImageCollection([p_mod_2001_07,p_mod_2001_06,p_mod_2001_05,p_mod_2001_04,p_mod_2001_03,p_mod_2001_02])).mean();
var p_mod_2001_08_runlgth_average = (ee.ImageCollection([p_mod_2001_08,p_mod_2001_07,p_mod_2001_06,p_mod_2001_05,p_mod_2001_04,p_mod_2001_03])).mean();
var p_mod_2001_09_runlgth_average = (ee.ImageCollection([p_mod_2001_09,p_mod_2001_08,p_mod_2001_07,p_mod_2001_06,p_mod_2001_05,p_mod_2001_04])).mean();
var p_mod_2001_10_runlgth_average = (ee.ImageCollection([p_mod_2001_10,p_mod_2001_09,p_mod_2001_08,p_mod_2001_07,p_mod_2001_06,p_mod_2001_05])).mean();
var p_mod_2001_11_runlgth_average = (ee.ImageCollection([p_mod_2001_11,p_mod_2001_10,p_mod_2001_09,p_mod_2001_08,p_mod_2001_07,p_mod_2001_06])).mean();
var p_mod_2001_12_runlgth_average = (ee.ImageCollection([p_mod_2001_12,p_mod_2001_11,p_mod_2001_10,p_mod_2001_09,p_mod_2001_08,p_mod_2001_07])).mean();




var p_mod_2002_01_runlgth_average = (ee.ImageCollection([p_mod_2002_01,p_mod_2001_12,p_mod_2001_11,p_mod_2001_10,p_mod_2001_09,p_mod_2001_08])).mean();
var p_mod_2002_02_runlgth_average = (ee.ImageCollection([p_mod_2002_02,p_mod_2002_01,p_mod_2001_12,p_mod_2001_11,p_mod_2001_10,p_mod_2001_09])).mean();
var p_mod_2002_03_runlgth_average = (ee.ImageCollection([p_mod_2002_03,p_mod_2002_02,p_mod_2002_01,p_mod_2001_12,p_mod_2001_11,p_mod_2001_10])).mean();
var p_mod_2002_04_runlgth_average = (ee.ImageCollection([p_mod_2002_04,p_mod_2002_03,p_mod_2002_02,p_mod_2002_01,p_mod_2001_12,p_mod_2001_11])).mean();
var p_mod_2002_05_runlgth_average = (ee.ImageCollection([p_mod_2002_05,p_mod_2002_04,p_mod_2002_03,p_mod_2002_02,p_mod_2002_01,p_mod_2001_12])).mean();
var p_mod_2002_06_runlgth_average = (ee.ImageCollection([p_mod_2002_06,p_mod_2002_05,p_mod_2002_04,p_mod_2002_03,p_mod_2002_02,p_mod_2002_01])).mean();
var p_mod_2002_07_runlgth_average = (ee.ImageCollection([p_mod_2002_07,p_mod_2002_06,p_mod_2002_05,p_mod_2002_04,p_mod_2002_03,p_mod_2002_02])).mean();
var p_mod_2002_08_runlgth_average = (ee.ImageCollection([p_mod_2002_08,p_mod_2002_07,p_mod_2002_06,p_mod_2002_05,p_mod_2002_04,p_mod_2002_03])).mean();
var p_mod_2002_09_runlgth_average = (ee.ImageCollection([p_mod_2002_09,p_mod_2002_08,p_mod_2002_07,p_mod_2002_06,p_mod_2002_05,p_mod_2002_04])).mean();
var p_mod_2002_10_runlgth_average = (ee.ImageCollection([p_mod_2002_10,p_mod_2002_09,p_mod_2002_08,p_mod_2002_07,p_mod_2002_06,p_mod_2002_05])).mean();
var p_mod_2002_11_runlgth_average = (ee.ImageCollection([p_mod_2002_11,p_mod_2002_10,p_mod_2002_09,p_mod_2002_08,p_mod_2002_07,p_mod_2002_06])).mean();
var p_mod_2002_12_runlgth_average = (ee.ImageCollection([p_mod_2002_12,p_mod_2002_11,p_mod_2002_10,p_mod_2002_09,p_mod_2002_08,p_mod_2002_07])).mean();



var p_mod_2003_01_runlgth_average = (ee.ImageCollection([p_mod_2003_01,p_mod_2002_12,p_mod_2002_11,p_mod_2002_10,p_mod_2002_09,p_mod_2002_08])).mean();
var p_mod_2003_02_runlgth_average = (ee.ImageCollection([p_mod_2003_02,p_mod_2003_01,p_mod_2002_12,p_mod_2002_11,p_mod_2002_10,p_mod_2002_09])).mean();
var p_mod_2003_03_runlgth_average = (ee.ImageCollection([p_mod_2003_03,p_mod_2003_02,p_mod_2003_01,p_mod_2002_12,p_mod_2002_11,p_mod_2002_10])).mean();
var p_mod_2003_04_runlgth_average = (ee.ImageCollection([p_mod_2003_04,p_mod_2003_03,p_mod_2003_02,p_mod_2003_01,p_mod_2002_12,p_mod_2002_11])).mean();
var p_mod_2003_05_runlgth_average = (ee.ImageCollection([p_mod_2003_05,p_mod_2003_04,p_mod_2003_03,p_mod_2003_02,p_mod_2003_01,p_mod_2002_12])).mean();
var p_mod_2003_06_runlgth_average = (ee.ImageCollection([p_mod_2003_06,p_mod_2003_05,p_mod_2003_04,p_mod_2003_03,p_mod_2003_02,p_mod_2003_01])).mean();
var p_mod_2003_07_runlgth_average = (ee.ImageCollection([p_mod_2003_07,p_mod_2003_06,p_mod_2003_05,p_mod_2003_04,p_mod_2003_03,p_mod_2003_02])).mean();
var p_mod_2003_08_runlgth_average = (ee.ImageCollection([p_mod_2003_08,p_mod_2003_07,p_mod_2003_06,p_mod_2003_05,p_mod_2003_04,p_mod_2003_03])).mean();
var p_mod_2003_09_runlgth_average = (ee.ImageCollection([p_mod_2003_09,p_mod_2003_08,p_mod_2003_07,p_mod_2003_06,p_mod_2003_05,p_mod_2003_04])).mean();
var p_mod_2003_10_runlgth_average = (ee.ImageCollection([p_mod_2003_10,p_mod_2003_09,p_mod_2003_08,p_mod_2003_07,p_mod_2003_06,p_mod_2003_05])).mean();
var p_mod_2003_11_runlgth_average = (ee.ImageCollection([p_mod_2003_11,p_mod_2003_10,p_mod_2003_09,p_mod_2003_08,p_mod_2003_07,p_mod_2003_06])).mean();
var p_mod_2003_12_runlgth_average = (ee.ImageCollection([p_mod_2003_12,p_mod_2003_11,p_mod_2003_10,p_mod_2003_09,p_mod_2003_08,p_mod_2003_07])).mean();



var p_mod_2004_01_runlgth_average = (ee.ImageCollection([p_mod_2004_01,p_mod_2003_12,p_mod_2003_11,p_mod_2003_10,p_mod_2003_09,p_mod_2003_08])).mean();
var p_mod_2004_02_runlgth_average = (ee.ImageCollection([p_mod_2004_02,p_mod_2004_01,p_mod_2003_12,p_mod_2003_11,p_mod_2003_10,p_mod_2003_09])).mean();
var p_mod_2004_03_runlgth_average = (ee.ImageCollection([p_mod_2004_03,p_mod_2004_02,p_mod_2004_01,p_mod_2003_12,p_mod_2003_11,p_mod_2003_10])).mean();
var p_mod_2004_04_runlgth_average = (ee.ImageCollection([p_mod_2004_04,p_mod_2004_03,p_mod_2004_02,p_mod_2004_01,p_mod_2003_12,p_mod_2003_11])).mean();
var p_mod_2004_05_runlgth_average = (ee.ImageCollection([p_mod_2004_05,p_mod_2004_04,p_mod_2004_03,p_mod_2004_02,p_mod_2004_01,p_mod_2003_12])).mean();
var p_mod_2004_06_runlgth_average = (ee.ImageCollection([p_mod_2004_06,p_mod_2004_05,p_mod_2004_04,p_mod_2004_03,p_mod_2004_02,p_mod_2004_01])).mean();
var p_mod_2004_07_runlgth_average = (ee.ImageCollection([p_mod_2004_07,p_mod_2004_06,p_mod_2004_05,p_mod_2004_04,p_mod_2004_03,p_mod_2004_02])).mean();
var p_mod_2004_08_runlgth_average = (ee.ImageCollection([p_mod_2004_08,p_mod_2004_07,p_mod_2004_06,p_mod_2004_05,p_mod_2004_04,p_mod_2004_03])).mean();
var p_mod_2004_09_runlgth_average = (ee.ImageCollection([p_mod_2004_09,p_mod_2004_08,p_mod_2004_07,p_mod_2004_06,p_mod_2004_05,p_mod_2004_04])).mean();
var p_mod_2004_10_runlgth_average = (ee.ImageCollection([p_mod_2004_10,p_mod_2004_09,p_mod_2004_08,p_mod_2004_07,p_mod_2004_06,p_mod_2004_05])).mean();
var p_mod_2004_11_runlgth_average = (ee.ImageCollection([p_mod_2004_11,p_mod_2004_10,p_mod_2004_09,p_mod_2004_08,p_mod_2004_07,p_mod_2004_06])).mean();
var p_mod_2004_12_runlgth_average = (ee.ImageCollection([p_mod_2004_12,p_mod_2004_11,p_mod_2004_10,p_mod_2004_09,p_mod_2004_08,p_mod_2004_07])).mean();



var p_mod_2005_01_runlgth_average = (ee.ImageCollection([p_mod_2005_01,p_mod_2004_12,p_mod_2004_11,p_mod_2004_10,p_mod_2004_09,p_mod_2004_08])).mean();
var p_mod_2005_02_runlgth_average = (ee.ImageCollection([p_mod_2005_02,p_mod_2005_01,p_mod_2004_12,p_mod_2004_11,p_mod_2004_10,p_mod_2004_09])).mean();
var p_mod_2005_03_runlgth_average = (ee.ImageCollection([p_mod_2005_03,p_mod_2005_02,p_mod_2005_01,p_mod_2004_12,p_mod_2004_11,p_mod_2004_10])).mean();
var p_mod_2005_04_runlgth_average = (ee.ImageCollection([p_mod_2005_04,p_mod_2005_03,p_mod_2005_02,p_mod_2005_01,p_mod_2004_12,p_mod_2004_11])).mean();
var p_mod_2005_05_runlgth_average = (ee.ImageCollection([p_mod_2005_05,p_mod_2005_04,p_mod_2005_03,p_mod_2005_02,p_mod_2005_01,p_mod_2004_12])).mean();
var p_mod_2005_06_runlgth_average = (ee.ImageCollection([p_mod_2005_06,p_mod_2005_05,p_mod_2005_04,p_mod_2005_03,p_mod_2005_02,p_mod_2005_01])).mean();
var p_mod_2005_07_runlgth_average = (ee.ImageCollection([p_mod_2005_07,p_mod_2005_06,p_mod_2005_05,p_mod_2005_04,p_mod_2005_03,p_mod_2005_02])).mean();
var p_mod_2005_08_runlgth_average = (ee.ImageCollection([p_mod_2005_08,p_mod_2005_07,p_mod_2005_06,p_mod_2005_05,p_mod_2005_04,p_mod_2005_03])).mean();
var p_mod_2005_09_runlgth_average = (ee.ImageCollection([p_mod_2005_09,p_mod_2005_08,p_mod_2005_07,p_mod_2005_06,p_mod_2005_05,p_mod_2005_04])).mean();
var p_mod_2005_10_runlgth_average = (ee.ImageCollection([p_mod_2005_10,p_mod_2005_09,p_mod_2005_08,p_mod_2005_07,p_mod_2005_06,p_mod_2005_05])).mean();
var p_mod_2005_11_runlgth_average = (ee.ImageCollection([p_mod_2005_11,p_mod_2005_10,p_mod_2005_09,p_mod_2005_08,p_mod_2005_07,p_mod_2005_06])).mean();
var p_mod_2005_12_runlgth_average = (ee.ImageCollection([p_mod_2005_12,p_mod_2005_11,p_mod_2005_10,p_mod_2005_09,p_mod_2005_08,p_mod_2005_07])).mean();


var p_mod_2006_01_runlgth_average = (ee.ImageCollection([p_mod_2006_01,p_mod_2005_12,p_mod_2005_11,p_mod_2005_10,p_mod_2005_09,p_mod_2005_08])).mean();
var p_mod_2006_02_runlgth_average = (ee.ImageCollection([p_mod_2006_02,p_mod_2006_01,p_mod_2005_12,p_mod_2005_11,p_mod_2005_10,p_mod_2005_09])).mean();
var p_mod_2006_03_runlgth_average = (ee.ImageCollection([p_mod_2006_03,p_mod_2006_02,p_mod_2006_01,p_mod_2005_12,p_mod_2005_11,p_mod_2005_10])).mean();
var p_mod_2006_04_runlgth_average = (ee.ImageCollection([p_mod_2006_04,p_mod_2006_03,p_mod_2006_02,p_mod_2006_01,p_mod_2005_12,p_mod_2005_11])).mean();
var p_mod_2006_05_runlgth_average = (ee.ImageCollection([p_mod_2006_05,p_mod_2006_04,p_mod_2006_03,p_mod_2006_02,p_mod_2006_01,p_mod_2005_12])).mean();
var p_mod_2006_06_runlgth_average = (ee.ImageCollection([p_mod_2006_06,p_mod_2006_05,p_mod_2006_04,p_mod_2006_03,p_mod_2006_02,p_mod_2006_01])).mean();
var p_mod_2006_07_runlgth_average = (ee.ImageCollection([p_mod_2006_07,p_mod_2006_06,p_mod_2006_05,p_mod_2006_04,p_mod_2006_03,p_mod_2006_02])).mean();
var p_mod_2006_08_runlgth_average = (ee.ImageCollection([p_mod_2006_08,p_mod_2006_07,p_mod_2006_06,p_mod_2006_05,p_mod_2006_04,p_mod_2006_03])).mean();
var p_mod_2006_09_runlgth_average = (ee.ImageCollection([p_mod_2006_09,p_mod_2006_08,p_mod_2006_07,p_mod_2006_06,p_mod_2006_05,p_mod_2006_04])).mean();
var p_mod_2006_10_runlgth_average = (ee.ImageCollection([p_mod_2006_10,p_mod_2006_09,p_mod_2006_08,p_mod_2006_07,p_mod_2006_06,p_mod_2006_05])).mean();
var p_mod_2006_11_runlgth_average = (ee.ImageCollection([p_mod_2006_11,p_mod_2006_10,p_mod_2006_09,p_mod_2006_08,p_mod_2006_07,p_mod_2006_06])).mean();
var p_mod_2006_12_runlgth_average = (ee.ImageCollection([p_mod_2006_12,p_mod_2006_11,p_mod_2006_10,p_mod_2006_09,p_mod_2006_08,p_mod_2006_07])).mean();



var p_mod_2007_01_runlgth_average = (ee.ImageCollection([p_mod_2007_01,p_mod_2006_12,p_mod_2006_11,p_mod_2006_10,p_mod_2006_09,p_mod_2006_08])).mean();
var p_mod_2007_02_runlgth_average = (ee.ImageCollection([p_mod_2007_02,p_mod_2007_01,p_mod_2006_12,p_mod_2006_11,p_mod_2006_10,p_mod_2006_09])).mean();
var p_mod_2007_03_runlgth_average = (ee.ImageCollection([p_mod_2007_03,p_mod_2007_02,p_mod_2007_01,p_mod_2006_12,p_mod_2006_11,p_mod_2006_10])).mean();
var p_mod_2007_04_runlgth_average = (ee.ImageCollection([p_mod_2007_04,p_mod_2007_03,p_mod_2007_02,p_mod_2007_01,p_mod_2006_12,p_mod_2006_11])).mean();
var p_mod_2007_05_runlgth_average = (ee.ImageCollection([p_mod_2007_05,p_mod_2007_04,p_mod_2007_03,p_mod_2007_02,p_mod_2007_01,p_mod_2006_12])).mean();
var p_mod_2007_06_runlgth_average = (ee.ImageCollection([p_mod_2007_06,p_mod_2007_05,p_mod_2007_04,p_mod_2007_03,p_mod_2007_02,p_mod_2007_01])).mean();
var p_mod_2007_07_runlgth_average = (ee.ImageCollection([p_mod_2007_07,p_mod_2007_06,p_mod_2007_05,p_mod_2007_04,p_mod_2007_03,p_mod_2007_02])).mean();
var p_mod_2007_08_runlgth_average = (ee.ImageCollection([p_mod_2007_08,p_mod_2007_07,p_mod_2007_06,p_mod_2007_05,p_mod_2007_04,p_mod_2007_03])).mean();
var p_mod_2007_09_runlgth_average = (ee.ImageCollection([p_mod_2007_09,p_mod_2007_08,p_mod_2007_07,p_mod_2007_06,p_mod_2007_05,p_mod_2007_04])).mean();
var p_mod_2007_10_runlgth_average = (ee.ImageCollection([p_mod_2007_10,p_mod_2007_09,p_mod_2007_08,p_mod_2007_07,p_mod_2007_06,p_mod_2007_05])).mean();
var p_mod_2007_11_runlgth_average = (ee.ImageCollection([p_mod_2007_11,p_mod_2007_10,p_mod_2007_09,p_mod_2007_08,p_mod_2007_07,p_mod_2007_06])).mean();
var p_mod_2007_12_runlgth_average = (ee.ImageCollection([p_mod_2007_12,p_mod_2007_11,p_mod_2007_10,p_mod_2007_09,p_mod_2007_08,p_mod_2007_07])).mean();



var p_mod_2008_01_runlgth_average = (ee.ImageCollection([p_mod_2008_01,p_mod_2007_12,p_mod_2007_11,p_mod_2007_10,p_mod_2007_09,p_mod_2007_08])).mean();
var p_mod_2008_02_runlgth_average = (ee.ImageCollection([p_mod_2008_02,p_mod_2008_01,p_mod_2007_12,p_mod_2007_11,p_mod_2007_10,p_mod_2007_09])).mean();
var p_mod_2008_03_runlgth_average = (ee.ImageCollection([p_mod_2008_03,p_mod_2008_02,p_mod_2008_01,p_mod_2007_12,p_mod_2007_11,p_mod_2007_10])).mean();
var p_mod_2008_04_runlgth_average = (ee.ImageCollection([p_mod_2008_04,p_mod_2008_03,p_mod_2008_02,p_mod_2008_01,p_mod_2007_12,p_mod_2007_11])).mean();
var p_mod_2008_05_runlgth_average = (ee.ImageCollection([p_mod_2008_05,p_mod_2008_04,p_mod_2008_03,p_mod_2008_02,p_mod_2008_01,p_mod_2007_12])).mean();
var p_mod_2008_06_runlgth_average = (ee.ImageCollection([p_mod_2008_06,p_mod_2008_05,p_mod_2008_04,p_mod_2008_03,p_mod_2008_02,p_mod_2008_01])).mean();
var p_mod_2008_07_runlgth_average = (ee.ImageCollection([p_mod_2008_07,p_mod_2008_06,p_mod_2008_05,p_mod_2008_04,p_mod_2008_03,p_mod_2008_02])).mean();
var p_mod_2008_08_runlgth_average = (ee.ImageCollection([p_mod_2008_08,p_mod_2008_07,p_mod_2008_06,p_mod_2008_05,p_mod_2008_04,p_mod_2008_03])).mean();
var p_mod_2008_09_runlgth_average = (ee.ImageCollection([p_mod_2008_09,p_mod_2008_08,p_mod_2008_07,p_mod_2008_06,p_mod_2008_05,p_mod_2008_04])).mean();
var p_mod_2008_10_runlgth_average = (ee.ImageCollection([p_mod_2008_10,p_mod_2008_09,p_mod_2008_08,p_mod_2008_07,p_mod_2008_06,p_mod_2008_05])).mean();
var p_mod_2008_11_runlgth_average = (ee.ImageCollection([p_mod_2008_11,p_mod_2008_10,p_mod_2008_09,p_mod_2008_08,p_mod_2008_07,p_mod_2008_06])).mean();
var p_mod_2008_12_runlgth_average = (ee.ImageCollection([p_mod_2008_12,p_mod_2008_11,p_mod_2008_10,p_mod_2008_09,p_mod_2008_08,p_mod_2008_07])).mean();




var p_mod_2009_01_runlgth_average = (ee.ImageCollection([p_mod_2009_01,p_mod_2008_12,p_mod_2008_11,p_mod_2008_10,p_mod_2008_09,p_mod_2008_08])).mean();
var p_mod_2009_02_runlgth_average = (ee.ImageCollection([p_mod_2009_02,p_mod_2009_01,p_mod_2008_12,p_mod_2008_11,p_mod_2008_10,p_mod_2008_09])).mean();
var p_mod_2009_03_runlgth_average = (ee.ImageCollection([p_mod_2009_03,p_mod_2009_02,p_mod_2009_01,p_mod_2008_12,p_mod_2008_11,p_mod_2008_10])).mean();
var p_mod_2009_04_runlgth_average = (ee.ImageCollection([p_mod_2009_04,p_mod_2009_03,p_mod_2009_02,p_mod_2009_01,p_mod_2008_12,p_mod_2008_11])).mean();
var p_mod_2009_05_runlgth_average = (ee.ImageCollection([p_mod_2009_05,p_mod_2009_04,p_mod_2009_03,p_mod_2009_02,p_mod_2009_01,p_mod_2008_12])).mean();
var p_mod_2009_06_runlgth_average = (ee.ImageCollection([p_mod_2009_06,p_mod_2009_05,p_mod_2009_04,p_mod_2009_03,p_mod_2009_02,p_mod_2009_01])).mean();
var p_mod_2009_07_runlgth_average = (ee.ImageCollection([p_mod_2009_07,p_mod_2009_06,p_mod_2009_05,p_mod_2009_04,p_mod_2009_03,p_mod_2009_02])).mean();
var p_mod_2009_08_runlgth_average = (ee.ImageCollection([p_mod_2009_08,p_mod_2009_07,p_mod_2009_06,p_mod_2009_05,p_mod_2009_04,p_mod_2009_03])).mean();
var p_mod_2009_09_runlgth_average = (ee.ImageCollection([p_mod_2009_09,p_mod_2009_08,p_mod_2009_07,p_mod_2009_06,p_mod_2009_05,p_mod_2009_04])).mean();
var p_mod_2009_10_runlgth_average = (ee.ImageCollection([p_mod_2009_10,p_mod_2009_09,p_mod_2009_08,p_mod_2009_07,p_mod_2009_06,p_mod_2009_05])).mean();
var p_mod_2009_11_runlgth_average = (ee.ImageCollection([p_mod_2009_11,p_mod_2009_10,p_mod_2009_09,p_mod_2009_08,p_mod_2009_07,p_mod_2009_06])).mean();
var p_mod_2009_12_runlgth_average = (ee.ImageCollection([p_mod_2009_12,p_mod_2009_11,p_mod_2009_10,p_mod_2009_09,p_mod_2009_08,p_mod_2009_07])).mean();



var p_mod_2010_01_runlgth_average = (ee.ImageCollection([p_mod_2010_01,p_mod_2009_12,p_mod_2009_11,p_mod_2009_10,p_mod_2009_09,p_mod_2009_08])).mean();
var p_mod_2010_02_runlgth_average = (ee.ImageCollection([p_mod_2010_02,p_mod_2010_01,p_mod_2009_12,p_mod_2009_11,p_mod_2009_10,p_mod_2009_09])).mean();
var p_mod_2010_03_runlgth_average = (ee.ImageCollection([p_mod_2010_03,p_mod_2010_02,p_mod_2010_01,p_mod_2009_12,p_mod_2009_11,p_mod_2009_10])).mean();
var p_mod_2010_04_runlgth_average = (ee.ImageCollection([p_mod_2010_04,p_mod_2010_03,p_mod_2010_02,p_mod_2010_01,p_mod_2009_12,p_mod_2009_11])).mean();
var p_mod_2010_05_runlgth_average = (ee.ImageCollection([p_mod_2010_05,p_mod_2010_04,p_mod_2010_03,p_mod_2010_02,p_mod_2010_01,p_mod_2009_12])).mean();
var p_mod_2010_06_runlgth_average = (ee.ImageCollection([p_mod_2010_06,p_mod_2010_05,p_mod_2010_04,p_mod_2010_03,p_mod_2010_02,p_mod_2010_01])).mean();
var p_mod_2010_07_runlgth_average = (ee.ImageCollection([p_mod_2010_07,p_mod_2010_06,p_mod_2010_05,p_mod_2010_04,p_mod_2010_03,p_mod_2010_02])).mean();
var p_mod_2010_08_runlgth_average = (ee.ImageCollection([p_mod_2010_08,p_mod_2010_07,p_mod_2010_06,p_mod_2010_05,p_mod_2010_04,p_mod_2010_03])).mean();
var p_mod_2010_09_runlgth_average = (ee.ImageCollection([p_mod_2010_09,p_mod_2010_08,p_mod_2010_07,p_mod_2010_06,p_mod_2010_05,p_mod_2010_04])).mean();
var p_mod_2010_10_runlgth_average = (ee.ImageCollection([p_mod_2010_10,p_mod_2010_09,p_mod_2010_08,p_mod_2010_07,p_mod_2010_06,p_mod_2010_05])).mean();
var p_mod_2010_11_runlgth_average = (ee.ImageCollection([p_mod_2010_11,p_mod_2010_10,p_mod_2010_09,p_mod_2010_08,p_mod_2010_07,p_mod_2010_06])).mean();
var p_mod_2010_12_runlgth_average = (ee.ImageCollection([p_mod_2010_12,p_mod_2010_11,p_mod_2010_10,p_mod_2010_09,p_mod_2010_08,p_mod_2010_07])).mean();



var p_mod_2011_01_runlgth_average = (ee.ImageCollection([p_mod_2011_01,p_mod_2010_12,p_mod_2010_11,p_mod_2010_10,p_mod_2010_09,p_mod_2010_08])).mean();
var p_mod_2011_02_runlgth_average = (ee.ImageCollection([p_mod_2011_02,p_mod_2011_01,p_mod_2010_12,p_mod_2010_11,p_mod_2010_10,p_mod_2010_09])).mean();
var p_mod_2011_03_runlgth_average = (ee.ImageCollection([p_mod_2011_03,p_mod_2011_02,p_mod_2011_01,p_mod_2010_12,p_mod_2010_11,p_mod_2010_10])).mean();
var p_mod_2011_04_runlgth_average = (ee.ImageCollection([p_mod_2011_04,p_mod_2011_03,p_mod_2011_02,p_mod_2011_01,p_mod_2010_12,p_mod_2010_11])).mean();
var p_mod_2011_05_runlgth_average = (ee.ImageCollection([p_mod_2011_05,p_mod_2011_04,p_mod_2011_03,p_mod_2011_02,p_mod_2011_01,p_mod_2010_12])).mean();
var p_mod_2011_06_runlgth_average = (ee.ImageCollection([p_mod_2011_06,p_mod_2011_05,p_mod_2011_04,p_mod_2011_03,p_mod_2011_02,p_mod_2011_01])).mean();
var p_mod_2011_07_runlgth_average = (ee.ImageCollection([p_mod_2011_07,p_mod_2011_06,p_mod_2011_05,p_mod_2011_04,p_mod_2011_03,p_mod_2011_02])).mean();
var p_mod_2011_08_runlgth_average = (ee.ImageCollection([p_mod_2011_08,p_mod_2011_07,p_mod_2011_06,p_mod_2011_05,p_mod_2011_04,p_mod_2011_03])).mean();
var p_mod_2011_09_runlgth_average = (ee.ImageCollection([p_mod_2011_09,p_mod_2011_08,p_mod_2011_07,p_mod_2011_06,p_mod_2011_05,p_mod_2011_04])).mean();
var p_mod_2011_10_runlgth_average = (ee.ImageCollection([p_mod_2011_10,p_mod_2011_09,p_mod_2011_08,p_mod_2011_07,p_mod_2011_06,p_mod_2011_05])).mean();
var p_mod_2011_11_runlgth_average = (ee.ImageCollection([p_mod_2011_11,p_mod_2011_10,p_mod_2011_09,p_mod_2011_08,p_mod_2011_07,p_mod_2011_06])).mean();
var p_mod_2011_12_runlgth_average = (ee.ImageCollection([p_mod_2011_12,p_mod_2011_11,p_mod_2011_10,p_mod_2011_09,p_mod_2011_08,p_mod_2011_07])).mean();


var p_mod_2012_01_runlgth_average = (ee.ImageCollection([p_mod_2012_01,p_mod_2011_12,p_mod_2011_11,p_mod_2011_10,p_mod_2011_09,p_mod_2011_08])).mean();
var p_mod_2012_02_runlgth_average = (ee.ImageCollection([p_mod_2012_02,p_mod_2012_01,p_mod_2011_12,p_mod_2011_11,p_mod_2011_10,p_mod_2011_09])).mean();
var p_mod_2012_03_runlgth_average = (ee.ImageCollection([p_mod_2012_03,p_mod_2012_02,p_mod_2012_01,p_mod_2011_12,p_mod_2011_11,p_mod_2011_10])).mean();
var p_mod_2012_04_runlgth_average = (ee.ImageCollection([p_mod_2012_04,p_mod_2012_03,p_mod_2012_02,p_mod_2012_01,p_mod_2011_12,p_mod_2011_11])).mean();
var p_mod_2012_05_runlgth_average = (ee.ImageCollection([p_mod_2012_05,p_mod_2012_04,p_mod_2012_03,p_mod_2012_02,p_mod_2012_01,p_mod_2011_12])).mean();
var p_mod_2012_06_runlgth_average = (ee.ImageCollection([p_mod_2012_06,p_mod_2012_05,p_mod_2012_04,p_mod_2012_03,p_mod_2012_02,p_mod_2012_01])).mean();
var p_mod_2012_07_runlgth_average = (ee.ImageCollection([p_mod_2012_07,p_mod_2012_06,p_mod_2012_05,p_mod_2012_04,p_mod_2012_03,p_mod_2012_02])).mean();
var p_mod_2012_08_runlgth_average = (ee.ImageCollection([p_mod_2012_08,p_mod_2012_07,p_mod_2012_06,p_mod_2012_05,p_mod_2012_04,p_mod_2012_03])).mean();
var p_mod_2012_09_runlgth_average = (ee.ImageCollection([p_mod_2012_09,p_mod_2012_08,p_mod_2012_07,p_mod_2012_06,p_mod_2012_05,p_mod_2012_04])).mean();
var p_mod_2012_10_runlgth_average = (ee.ImageCollection([p_mod_2012_10,p_mod_2012_09,p_mod_2012_08,p_mod_2012_07,p_mod_2012_06,p_mod_2012_05])).mean();
var p_mod_2012_11_runlgth_average = (ee.ImageCollection([p_mod_2012_11,p_mod_2012_10,p_mod_2012_09,p_mod_2012_08,p_mod_2012_07,p_mod_2012_06])).mean();
var p_mod_2012_12_runlgth_average = (ee.ImageCollection([p_mod_2012_12,p_mod_2012_11,p_mod_2012_10,p_mod_2012_09,p_mod_2012_08,p_mod_2012_07])).mean();



var p_mod_2013_01_runlgth_average = (ee.ImageCollection([p_mod_2013_01,p_mod_2012_12,p_mod_2012_11,p_mod_2012_10,p_mod_2012_09,p_mod_2012_08])).mean();
var p_mod_2013_02_runlgth_average = (ee.ImageCollection([p_mod_2013_02,p_mod_2013_01,p_mod_2012_12,p_mod_2012_11,p_mod_2012_10,p_mod_2012_09])).mean();
var p_mod_2013_03_runlgth_average = (ee.ImageCollection([p_mod_2013_03,p_mod_2013_02,p_mod_2013_01,p_mod_2012_12,p_mod_2012_11,p_mod_2012_10])).mean();
var p_mod_2013_04_runlgth_average = (ee.ImageCollection([p_mod_2013_04,p_mod_2013_03,p_mod_2013_02,p_mod_2013_01,p_mod_2012_12,p_mod_2012_11])).mean();
var p_mod_2013_05_runlgth_average = (ee.ImageCollection([p_mod_2013_05,p_mod_2013_04,p_mod_2013_03,p_mod_2013_02,p_mod_2013_01,p_mod_2012_12])).mean();
var p_mod_2013_06_runlgth_average = (ee.ImageCollection([p_mod_2013_06,p_mod_2013_05,p_mod_2013_04,p_mod_2013_03,p_mod_2013_02,p_mod_2013_01])).mean();
var p_mod_2013_07_runlgth_average = (ee.ImageCollection([p_mod_2013_07,p_mod_2013_06,p_mod_2013_05,p_mod_2013_04,p_mod_2013_03,p_mod_2013_02])).mean();
var p_mod_2013_08_runlgth_average = (ee.ImageCollection([p_mod_2013_08,p_mod_2013_07,p_mod_2013_06,p_mod_2013_05,p_mod_2013_04,p_mod_2013_03])).mean();
var p_mod_2013_09_runlgth_average = (ee.ImageCollection([p_mod_2013_09,p_mod_2013_08,p_mod_2013_07,p_mod_2013_06,p_mod_2013_05,p_mod_2013_04])).mean();
var p_mod_2013_10_runlgth_average = (ee.ImageCollection([p_mod_2013_10,p_mod_2013_09,p_mod_2013_08,p_mod_2013_07,p_mod_2013_06,p_mod_2013_05])).mean();
var p_mod_2013_11_runlgth_average = (ee.ImageCollection([p_mod_2013_11,p_mod_2013_10,p_mod_2013_09,p_mod_2013_08,p_mod_2013_07,p_mod_2013_06])).mean();
var p_mod_2013_12_runlgth_average = (ee.ImageCollection([p_mod_2013_12,p_mod_2013_11,p_mod_2013_10,p_mod_2013_09,p_mod_2013_08,p_mod_2013_07])).mean();



var p_mod_2014_01_runlgth_average = (ee.ImageCollection([p_mod_2014_01,p_mod_2013_12,p_mod_2013_11,p_mod_2013_10,p_mod_2013_09,p_mod_2013_08])).mean();
var p_mod_2014_02_runlgth_average = (ee.ImageCollection([p_mod_2014_02,p_mod_2014_01,p_mod_2013_12,p_mod_2013_11,p_mod_2013_10,p_mod_2013_09])).mean();
var p_mod_2014_03_runlgth_average = (ee.ImageCollection([p_mod_2014_03,p_mod_2014_02,p_mod_2014_01,p_mod_2013_12,p_mod_2013_11,p_mod_2013_10])).mean();
var p_mod_2014_04_runlgth_average = (ee.ImageCollection([p_mod_2014_04,p_mod_2014_03,p_mod_2014_02,p_mod_2014_01,p_mod_2013_12,p_mod_2013_11])).mean();
var p_mod_2014_05_runlgth_average = (ee.ImageCollection([p_mod_2014_05,p_mod_2014_04,p_mod_2014_03,p_mod_2014_02,p_mod_2014_01,p_mod_2013_12])).mean();
var p_mod_2014_06_runlgth_average = (ee.ImageCollection([p_mod_2014_06,p_mod_2014_05,p_mod_2014_04,p_mod_2014_03,p_mod_2014_02,p_mod_2014_01])).mean();
var p_mod_2014_07_runlgth_average = (ee.ImageCollection([p_mod_2014_07,p_mod_2014_06,p_mod_2014_05,p_mod_2014_04,p_mod_2014_03,p_mod_2014_02])).mean();
var p_mod_2014_08_runlgth_average = (ee.ImageCollection([p_mod_2014_08,p_mod_2014_07,p_mod_2014_06,p_mod_2014_05,p_mod_2014_04,p_mod_2014_03])).mean();
var p_mod_2014_09_runlgth_average = (ee.ImageCollection([p_mod_2014_09,p_mod_2014_08,p_mod_2014_07,p_mod_2014_06,p_mod_2014_05,p_mod_2014_04])).mean();
var p_mod_2014_10_runlgth_average = (ee.ImageCollection([p_mod_2014_10,p_mod_2014_09,p_mod_2014_08,p_mod_2014_07,p_mod_2014_06,p_mod_2014_05])).mean();
var p_mod_2014_11_runlgth_average = (ee.ImageCollection([p_mod_2014_11,p_mod_2014_10,p_mod_2014_09,p_mod_2014_08,p_mod_2014_07,p_mod_2014_06])).mean();
var p_mod_2014_12_runlgth_average = (ee.ImageCollection([p_mod_2014_12,p_mod_2014_11,p_mod_2014_10,p_mod_2014_09,p_mod_2014_08,p_mod_2014_07])).mean();



var p_mod_2015_01_runlgth_average = (ee.ImageCollection([p_mod_2015_01,p_mod_2014_12,p_mod_2014_11,p_mod_2014_10,p_mod_2014_09,p_mod_2014_08])).mean();
var p_mod_2015_02_runlgth_average = (ee.ImageCollection([p_mod_2015_02,p_mod_2015_01,p_mod_2014_12,p_mod_2014_11,p_mod_2014_10,p_mod_2014_09])).mean();
var p_mod_2015_03_runlgth_average = (ee.ImageCollection([p_mod_2015_03,p_mod_2015_02,p_mod_2015_01,p_mod_2014_12,p_mod_2014_11,p_mod_2014_10])).mean();
var p_mod_2015_04_runlgth_average = (ee.ImageCollection([p_mod_2015_04,p_mod_2015_03,p_mod_2015_02,p_mod_2015_01,p_mod_2014_12,p_mod_2014_11])).mean();
var p_mod_2015_05_runlgth_average = (ee.ImageCollection([p_mod_2015_05,p_mod_2015_04,p_mod_2015_03,p_mod_2015_02,p_mod_2015_01,p_mod_2014_12])).mean();
var p_mod_2015_06_runlgth_average = (ee.ImageCollection([p_mod_2015_06,p_mod_2015_05,p_mod_2015_04,p_mod_2015_03,p_mod_2015_02,p_mod_2015_01])).mean();
var p_mod_2015_07_runlgth_average = (ee.ImageCollection([p_mod_2015_07,p_mod_2015_06,p_mod_2015_05,p_mod_2015_04,p_mod_2015_03,p_mod_2015_02])).mean();
var p_mod_2015_08_runlgth_average = (ee.ImageCollection([p_mod_2015_08,p_mod_2015_07,p_mod_2015_06,p_mod_2015_05,p_mod_2015_04,p_mod_2015_03])).mean();
var p_mod_2015_09_runlgth_average = (ee.ImageCollection([p_mod_2015_09,p_mod_2015_08,p_mod_2015_07,p_mod_2015_06,p_mod_2015_05,p_mod_2015_04])).mean();
var p_mod_2015_10_runlgth_average = (ee.ImageCollection([p_mod_2015_10,p_mod_2015_09,p_mod_2015_08,p_mod_2015_07,p_mod_2015_06,p_mod_2015_05])).mean();
var p_mod_2015_11_runlgth_average = (ee.ImageCollection([p_mod_2015_11,p_mod_2015_10,p_mod_2015_09,p_mod_2015_08,p_mod_2015_07,p_mod_2015_06])).mean();
var p_mod_2015_12_runlgth_average = (ee.ImageCollection([p_mod_2015_12,p_mod_2015_11,p_mod_2015_10,p_mod_2015_09,p_mod_2015_08,p_mod_2015_07])).mean();


var p_mod_2016_01_runlgth_average = (ee.ImageCollection([p_mod_2016_01,p_mod_2015_12,p_mod_2015_11,p_mod_2015_10,p_mod_2015_09,p_mod_2015_08])).mean();
var p_mod_2016_02_runlgth_average = (ee.ImageCollection([p_mod_2016_02,p_mod_2016_01,p_mod_2015_12,p_mod_2015_11,p_mod_2015_10,p_mod_2015_09])).mean();
var p_mod_2016_03_runlgth_average = (ee.ImageCollection([p_mod_2016_03,p_mod_2016_02,p_mod_2016_01,p_mod_2015_12,p_mod_2015_11,p_mod_2015_10])).mean();
var p_mod_2016_04_runlgth_average = (ee.ImageCollection([p_mod_2016_04,p_mod_2016_03,p_mod_2016_02,p_mod_2016_01,p_mod_2015_12,p_mod_2015_11])).mean();
var p_mod_2016_05_runlgth_average = (ee.ImageCollection([p_mod_2016_05,p_mod_2016_04,p_mod_2016_03,p_mod_2016_02,p_mod_2016_01,p_mod_2015_12])).mean();
var p_mod_2016_06_runlgth_average = (ee.ImageCollection([p_mod_2016_06,p_mod_2016_05,p_mod_2016_04,p_mod_2016_03,p_mod_2016_02,p_mod_2016_01])).mean();
var p_mod_2016_07_runlgth_average = (ee.ImageCollection([p_mod_2016_07,p_mod_2016_06,p_mod_2016_05,p_mod_2016_04,p_mod_2016_03,p_mod_2016_02])).mean();
var p_mod_2016_08_runlgth_average = (ee.ImageCollection([p_mod_2016_08,p_mod_2016_07,p_mod_2016_06,p_mod_2016_05,p_mod_2016_04,p_mod_2016_03])).mean();
var p_mod_2016_09_runlgth_average = (ee.ImageCollection([p_mod_2016_09,p_mod_2016_08,p_mod_2016_07,p_mod_2016_06,p_mod_2016_05,p_mod_2016_04])).mean();
var p_mod_2016_10_runlgth_average = (ee.ImageCollection([p_mod_2016_10,p_mod_2016_09,p_mod_2016_08,p_mod_2016_07,p_mod_2016_06,p_mod_2016_05])).mean();
var p_mod_2016_11_runlgth_average = (ee.ImageCollection([p_mod_2016_11,p_mod_2016_10,p_mod_2016_09,p_mod_2016_08,p_mod_2016_07,p_mod_2016_06])).mean();
var p_mod_2016_12_runlgth_average = (ee.ImageCollection([p_mod_2016_12,p_mod_2016_11,p_mod_2016_10,p_mod_2016_09,p_mod_2016_08,p_mod_2016_07])).mean();



var p_mod_2017_01_runlgth_average = (ee.ImageCollection([p_mod_2017_01,p_mod_2016_12,p_mod_2016_11,p_mod_2016_10,p_mod_2016_09,p_mod_2016_08])).mean();
var p_mod_2017_02_runlgth_average = (ee.ImageCollection([p_mod_2017_02,p_mod_2017_01,p_mod_2016_12,p_mod_2016_11,p_mod_2016_10,p_mod_2016_09])).mean();
var p_mod_2017_03_runlgth_average = (ee.ImageCollection([p_mod_2017_03,p_mod_2017_02,p_mod_2017_01,p_mod_2016_12,p_mod_2016_11,p_mod_2016_10])).mean();
var p_mod_2017_04_runlgth_average = (ee.ImageCollection([p_mod_2017_04,p_mod_2017_03,p_mod_2017_02,p_mod_2017_01,p_mod_2016_12,p_mod_2016_11])).mean();
var p_mod_2017_05_runlgth_average = (ee.ImageCollection([p_mod_2017_05,p_mod_2017_04,p_mod_2017_03,p_mod_2017_02,p_mod_2017_01,p_mod_2016_12])).mean();
var p_mod_2017_06_runlgth_average = (ee.ImageCollection([p_mod_2017_06,p_mod_2017_05,p_mod_2017_04,p_mod_2017_03,p_mod_2017_02,p_mod_2017_01])).mean();
var p_mod_2017_07_runlgth_average = (ee.ImageCollection([p_mod_2017_07,p_mod_2017_06,p_mod_2017_05,p_mod_2017_04,p_mod_2017_03,p_mod_2017_02])).mean();
var p_mod_2017_08_runlgth_average = (ee.ImageCollection([p_mod_2017_08,p_mod_2017_07,p_mod_2017_06,p_mod_2017_05,p_mod_2017_04,p_mod_2017_03])).mean();
var p_mod_2017_09_runlgth_average = (ee.ImageCollection([p_mod_2017_09,p_mod_2017_08,p_mod_2017_07,p_mod_2017_06,p_mod_2017_05,p_mod_2017_04])).mean();
var p_mod_2017_10_runlgth_average = (ee.ImageCollection([p_mod_2017_10,p_mod_2017_09,p_mod_2017_08,p_mod_2017_07,p_mod_2017_06,p_mod_2017_05])).mean();
var p_mod_2017_11_runlgth_average = (ee.ImageCollection([p_mod_2017_11,p_mod_2017_10,p_mod_2017_09,p_mod_2017_08,p_mod_2017_07,p_mod_2017_06])).mean();
var p_mod_2017_12_runlgth_average = (ee.ImageCollection([p_mod_2017_12,p_mod_2017_11,p_mod_2017_10,p_mod_2017_09,p_mod_2017_08,p_mod_2017_07])).mean();




var p_mod_2018_01_runlgth_average = (ee.ImageCollection([p_mod_2018_01,p_mod_2017_12,p_mod_2017_11,p_mod_2017_10,p_mod_2017_09,p_mod_2017_08])).mean();
var p_mod_2018_02_runlgth_average = (ee.ImageCollection([p_mod_2018_02,p_mod_2018_01,p_mod_2017_12,p_mod_2017_11,p_mod_2017_10,p_mod_2017_09])).mean();
var p_mod_2018_03_runlgth_average = (ee.ImageCollection([p_mod_2018_03,p_mod_2018_02,p_mod_2018_01,p_mod_2017_12,p_mod_2017_11,p_mod_2017_10])).mean();
var p_mod_2018_04_runlgth_average = (ee.ImageCollection([p_mod_2018_04,p_mod_2018_03,p_mod_2018_02,p_mod_2018_01,p_mod_2017_12,p_mod_2017_11])).mean();
var p_mod_2018_05_runlgth_average = (ee.ImageCollection([p_mod_2018_05,p_mod_2018_04,p_mod_2018_03,p_mod_2018_02,p_mod_2018_01,p_mod_2017_12])).mean();
var p_mod_2018_06_runlgth_average = (ee.ImageCollection([p_mod_2018_06,p_mod_2018_05,p_mod_2018_04,p_mod_2018_03,p_mod_2018_02,p_mod_2018_01])).mean();
var p_mod_2018_07_runlgth_average = (ee.ImageCollection([p_mod_2018_07,p_mod_2018_06,p_mod_2018_05,p_mod_2018_04,p_mod_2018_03,p_mod_2018_02])).mean();
var p_mod_2018_08_runlgth_average = (ee.ImageCollection([p_mod_2018_08,p_mod_2018_07,p_mod_2018_06,p_mod_2018_05,p_mod_2018_04,p_mod_2018_03])).mean();
var p_mod_2018_09_runlgth_average = (ee.ImageCollection([p_mod_2018_09,p_mod_2018_08,p_mod_2018_07,p_mod_2018_06,p_mod_2018_05,p_mod_2018_04])).mean();
var p_mod_2018_10_runlgth_average = (ee.ImageCollection([p_mod_2018_10,p_mod_2018_09,p_mod_2018_08,p_mod_2018_07,p_mod_2018_06,p_mod_2018_05])).mean();
var p_mod_2018_11_runlgth_average = (ee.ImageCollection([p_mod_2018_11,p_mod_2018_10,p_mod_2018_09,p_mod_2018_08,p_mod_2018_07,p_mod_2018_06])).mean();
var p_mod_2018_12_runlgth_average = (ee.ImageCollection([p_mod_2018_12,p_mod_2018_11,p_mod_2018_10,p_mod_2018_09,p_mod_2018_08,p_mod_2018_07])).mean();



var p_mod_2019_01_runlgth_average = (ee.ImageCollection([p_mod_2019_01,p_mod_2018_12,p_mod_2018_11,p_mod_2018_10,p_mod_2018_09,p_mod_2018_08])).mean();
var p_mod_2019_02_runlgth_average = (ee.ImageCollection([p_mod_2019_02,p_mod_2019_01,p_mod_2018_12,p_mod_2018_11,p_mod_2018_10,p_mod_2018_09])).mean();
var p_mod_2019_03_runlgth_average = (ee.ImageCollection([p_mod_2019_03,p_mod_2019_02,p_mod_2019_01,p_mod_2018_12,p_mod_2018_11,p_mod_2018_10])).mean();
var p_mod_2019_04_runlgth_average = (ee.ImageCollection([p_mod_2019_04,p_mod_2019_03,p_mod_2019_02,p_mod_2019_01,p_mod_2018_12,p_mod_2018_11])).mean();
var p_mod_2019_05_runlgth_average = (ee.ImageCollection([p_mod_2019_05,p_mod_2019_04,p_mod_2019_03,p_mod_2019_02,p_mod_2019_01,p_mod_2018_12])).mean();
var p_mod_2019_06_runlgth_average = (ee.ImageCollection([p_mod_2019_06,p_mod_2019_05,p_mod_2019_04,p_mod_2019_03,p_mod_2019_02,p_mod_2019_01])).mean();
var p_mod_2019_07_runlgth_average = (ee.ImageCollection([p_mod_2019_07,p_mod_2019_06,p_mod_2019_05,p_mod_2019_04,p_mod_2019_03,p_mod_2019_02])).mean();
var p_mod_2019_08_runlgth_average = (ee.ImageCollection([p_mod_2019_08,p_mod_2019_07,p_mod_2019_06,p_mod_2019_05,p_mod_2019_04,p_mod_2019_03])).mean();
var p_mod_2019_09_runlgth_average = (ee.ImageCollection([p_mod_2019_09,p_mod_2019_08,p_mod_2019_07,p_mod_2019_06,p_mod_2019_05,p_mod_2019_04])).mean();
var p_mod_2019_10_runlgth_average = (ee.ImageCollection([p_mod_2019_10,p_mod_2019_09,p_mod_2019_08,p_mod_2019_07,p_mod_2019_06,p_mod_2019_05])).mean();
var p_mod_2019_11_runlgth_average = (ee.ImageCollection([p_mod_2019_11,p_mod_2019_10,p_mod_2019_09,p_mod_2019_08,p_mod_2019_07,p_mod_2019_06])).mean();
var p_mod_2019_12_runlgth_average = (ee.ImageCollection([p_mod_2019_12,p_mod_2019_11,p_mod_2019_10,p_mod_2019_09,p_mod_2019_08,p_mod_2019_07])).mean();



var p_mod_2020_01_runlgth_average = (ee.ImageCollection([p_mod_2020_01,p_mod_2019_12,p_mod_2019_11,p_mod_2019_10,p_mod_2019_09,p_mod_2019_08])).mean();
var p_mod_2020_02_runlgth_average = (ee.ImageCollection([p_mod_2020_02,p_mod_2020_01,p_mod_2019_12,p_mod_2019_11,p_mod_2019_10,p_mod_2019_09])).mean();
var p_mod_2020_03_runlgth_average = (ee.ImageCollection([p_mod_2020_03,p_mod_2020_02,p_mod_2020_01,p_mod_2019_12,p_mod_2019_11,p_mod_2019_10])).mean();
var p_mod_2020_04_runlgth_average = (ee.ImageCollection([p_mod_2020_04,p_mod_2020_03,p_mod_2020_02,p_mod_2020_01,p_mod_2019_12,p_mod_2019_11])).mean();
var p_mod_2020_05_runlgth_average = (ee.ImageCollection([p_mod_2020_05,p_mod_2020_04,p_mod_2020_03,p_mod_2020_02,p_mod_2020_01,p_mod_2019_12])).mean();
var p_mod_2020_06_runlgth_average = (ee.ImageCollection([p_mod_2020_06,p_mod_2020_05,p_mod_2020_04,p_mod_2020_03,p_mod_2020_02,p_mod_2020_01])).mean();
var p_mod_2020_07_runlgth_average = (ee.ImageCollection([p_mod_2020_07,p_mod_2020_06,p_mod_2020_05,p_mod_2020_04,p_mod_2020_03,p_mod_2020_02])).mean();
var p_mod_2020_08_runlgth_average = (ee.ImageCollection([p_mod_2020_08,p_mod_2020_07,p_mod_2020_06,p_mod_2020_05,p_mod_2020_04,p_mod_2020_03])).mean();
var p_mod_2020_09_runlgth_average = (ee.ImageCollection([p_mod_2020_09,p_mod_2020_08,p_mod_2020_07,p_mod_2020_06,p_mod_2020_05,p_mod_2020_04])).mean();
var p_mod_2020_10_runlgth_average = (ee.ImageCollection([p_mod_2020_10,p_mod_2020_09,p_mod_2020_08,p_mod_2020_07,p_mod_2020_06,p_mod_2020_05])).mean();
var p_mod_2020_11_runlgth_average = (ee.ImageCollection([p_mod_2020_11,p_mod_2020_10,p_mod_2020_09,p_mod_2020_08,p_mod_2020_07,p_mod_2020_06])).mean();
var p_mod_2020_12_runlgth_average = (ee.ImageCollection([p_mod_2020_12,p_mod_2020_11,p_mod_2020_10,p_mod_2020_09,p_mod_2020_08,p_mod_2020_07])).mean();


var p_mod_2021_01_runlgth_average = (ee.ImageCollection([p_mod_2021_01,p_mod_2020_12,p_mod_2020_11,p_mod_2020_10,p_mod_2020_09,p_mod_2020_08])).mean();
var p_mod_2021_02_runlgth_average = (ee.ImageCollection([p_mod_2021_02,p_mod_2021_01,p_mod_2020_12,p_mod_2020_11,p_mod_2020_10,p_mod_2020_09])).mean();
var p_mod_2021_03_runlgth_average = (ee.ImageCollection([p_mod_2021_03,p_mod_2021_02,p_mod_2021_01,p_mod_2020_12,p_mod_2020_11,p_mod_2020_10])).mean();
var p_mod_2021_04_runlgth_average = (ee.ImageCollection([p_mod_2021_04,p_mod_2021_03,p_mod_2021_02,p_mod_2021_01,p_mod_2020_12,p_mod_2020_11])).mean();
var p_mod_2021_05_runlgth_average = (ee.ImageCollection([p_mod_2021_05,p_mod_2021_04,p_mod_2021_03,p_mod_2021_02,p_mod_2021_01,p_mod_2020_12])).mean();
var p_mod_2021_06_runlgth_average = (ee.ImageCollection([p_mod_2021_06,p_mod_2021_05,p_mod_2021_04,p_mod_2021_03,p_mod_2021_02,p_mod_2021_01])).mean();
var p_mod_2021_07_runlgth_average = (ee.ImageCollection([p_mod_2021_07,p_mod_2021_06,p_mod_2021_05,p_mod_2021_04,p_mod_2021_03,p_mod_2021_02])).mean();
var p_mod_2021_08_runlgth_average = (ee.ImageCollection([p_mod_2021_08,p_mod_2021_07,p_mod_2021_06,p_mod_2021_05,p_mod_2021_04,p_mod_2021_03])).mean();
var p_mod_2021_09_runlgth_average = (ee.ImageCollection([p_mod_2021_09,p_mod_2021_08,p_mod_2021_07,p_mod_2021_06,p_mod_2021_05,p_mod_2021_04])).mean();
var p_mod_2021_10_runlgth_average = (ee.ImageCollection([p_mod_2021_10,p_mod_2021_09,p_mod_2021_08,p_mod_2021_07,p_mod_2021_06,p_mod_2021_05])).mean();
var p_mod_2021_11_runlgth_average = (ee.ImageCollection([p_mod_2021_11,p_mod_2021_10,p_mod_2021_09,p_mod_2021_08,p_mod_2021_07,p_mod_2021_06])).mean();
var p_mod_2021_12_runlgth_average = (ee.ImageCollection([p_mod_2021_12,p_mod_2021_11,p_mod_2021_10,p_mod_2021_09,p_mod_2021_08,p_mod_2021_07])).mean();


var p_mod_2022_01_runlgth_average = (ee.ImageCollection([p_mod_2022_01,p_mod_2021_12,p_mod_2021_11,p_mod_2021_10,p_mod_2021_09,p_mod_2021_08])).mean();
var p_mod_2022_02_runlgth_average = (ee.ImageCollection([p_mod_2022_02,p_mod_2022_01,p_mod_2021_12,p_mod_2021_11,p_mod_2021_10,p_mod_2021_09])).mean();
var p_mod_2022_03_runlgth_average = (ee.ImageCollection([p_mod_2022_03,p_mod_2022_02,p_mod_2022_01,p_mod_2021_12,p_mod_2021_11,p_mod_2021_10])).mean();
var p_mod_2022_04_runlgth_average = (ee.ImageCollection([p_mod_2022_04,p_mod_2022_03,p_mod_2022_02,p_mod_2022_01,p_mod_2021_12,p_mod_2021_11])).mean();
var p_mod_2022_05_runlgth_average = (ee.ImageCollection([p_mod_2022_05,p_mod_2022_04,p_mod_2022_03,p_mod_2022_02,p_mod_2022_01,p_mod_2021_12])).mean();
var p_mod_2022_06_runlgth_average = (ee.ImageCollection([p_mod_2022_06,p_mod_2022_05,p_mod_2022_04,p_mod_2022_03,p_mod_2022_02,p_mod_2022_01])).mean();
var p_mod_2022_07_runlgth_average = (ee.ImageCollection([p_mod_2022_06,p_mod_2022_07,p_mod_2022_05,p_mod_2022_04,p_mod_2022_03,p_mod_2022_02])).mean();
var p_mod_2022_08_runlgth_average = (ee.ImageCollection([p_mod_2022_08,p_mod_2022_07,p_mod_2022_06,p_mod_2022_05,p_mod_2022_04,p_mod_2022_03])).mean();




//end of getting average for interest period of 6 months before



// getting average for interest period of 6 months before but for the months e.g mean of all januaries

var p_mod_january_runlgth_mean = (ee.ImageCollection([p_mod_2022_01_runlgth_average,p_mod_2021_01_runlgth_average,p_mod_2020_01_runlgth_average,p_mod_2019_01_runlgth_average,p_mod_2018_01_runlgth_average,p_mod_2017_01_runlgth_average
,p_mod_2016_01_runlgth_average,p_mod_2015_01_runlgth_average,p_mod_2014_01_runlgth_average,p_mod_2013_01_runlgth_average,p_mod_2012_01_runlgth_average,p_mod_2011_01_runlgth_average,p_mod_2010_01_runlgth_average,
p_mod_2009_01_runlgth_average,p_mod_2008_01_runlgth_average,p_mod_2007_01_runlgth_average,p_mod_2006_01_runlgth_average,p_mod_2005_01_runlgth_average,p_mod_2004_01_runlgth_average,
p_mod_2003_01_runlgth_average,p_mod_2002_01_runlgth_average,p_mod_2001_01_runlgth_average])).mean();


var p_mod_february_runlgth_mean = (ee.ImageCollection([p_mod_2022_02_runlgth_average,p_mod_2021_02_runlgth_average,p_mod_2020_02_runlgth_average,p_mod_2019_02_runlgth_average,p_mod_2018_02_runlgth_average,p_mod_2017_02_runlgth_average
,p_mod_2016_02_runlgth_average,p_mod_2015_02_runlgth_average,p_mod_2014_02_runlgth_average,p_mod_2013_02_runlgth_average,p_mod_2012_02_runlgth_average,p_mod_2011_02_runlgth_average,p_mod_2010_02_runlgth_average,
p_mod_2009_02_runlgth_average,p_mod_2008_02_runlgth_average,p_mod_2007_02_runlgth_average,p_mod_2006_02_runlgth_average,p_mod_2005_02_runlgth_average,p_mod_2004_02_runlgth_average,
p_mod_2003_02_runlgth_average,p_mod_2002_02_runlgth_average,p_mod_2001_02_runlgth_average])).mean();


var p_mod_march_runlgth_mean = (ee.ImageCollection([p_mod_2022_03_runlgth_average, p_mod_2021_03_runlgth_average,p_mod_2020_03_runlgth_average,p_mod_2019_03_runlgth_average,p_mod_2018_03_runlgth_average,p_mod_2017_03_runlgth_average
,p_mod_2016_03_runlgth_average,p_mod_2015_03_runlgth_average,p_mod_2014_03_runlgth_average,p_mod_2013_03_runlgth_average,p_mod_2012_03_runlgth_average,p_mod_2011_03_runlgth_average,p_mod_2010_03_runlgth_average,
p_mod_2009_03_runlgth_average,p_mod_2008_03_runlgth_average,p_mod_2007_03_runlgth_average,p_mod_2006_03_runlgth_average,p_mod_2005_03_runlgth_average,p_mod_2004_03_runlgth_average,
p_mod_2003_03_runlgth_average,p_mod_2002_03_runlgth_average,p_mod_2001_03_runlgth_average])).mean();


var p_mod_april_runlgth_mean = (ee.ImageCollection([p_mod_2022_04_runlgth_average, p_mod_2021_04_runlgth_average,p_mod_2020_04_runlgth_average,p_mod_2019_04_runlgth_average,p_mod_2018_04_runlgth_average,p_mod_2017_04_runlgth_average
,p_mod_2016_04_runlgth_average,p_mod_2015_04_runlgth_average,p_mod_2014_04_runlgth_average,p_mod_2013_04_runlgth_average,p_mod_2012_04_runlgth_average,p_mod_2011_04_runlgth_average,p_mod_2010_04_runlgth_average,
p_mod_2009_04_runlgth_average,p_mod_2008_04_runlgth_average,p_mod_2007_04_runlgth_average,p_mod_2006_04_runlgth_average,p_mod_2005_04_runlgth_average,p_mod_2004_04_runlgth_average,
p_mod_2003_04_runlgth_average,p_mod_2002_04_runlgth_average,p_mod_2001_04_runlgth_average])).mean();


var p_mod_may_runlgth_mean = (ee.ImageCollection([p_mod_2022_05_runlgth_average,p_mod_2021_05_runlgth_average,p_mod_2020_05_runlgth_average,p_mod_2019_05_runlgth_average,p_mod_2018_05_runlgth_average,p_mod_2017_05_runlgth_average
,p_mod_2016_05_runlgth_average,p_mod_2015_05_runlgth_average,p_mod_2014_05_runlgth_average,p_mod_2013_05_runlgth_average,p_mod_2012_05_runlgth_average,p_mod_2011_05_runlgth_average,p_mod_2010_05_runlgth_average,
p_mod_2009_05_runlgth_average,p_mod_2008_05_runlgth_average,p_mod_2007_05_runlgth_average,p_mod_2006_05_runlgth_average,p_mod_2005_05_runlgth_average,p_mod_2004_05_runlgth_average,
p_mod_2003_05_runlgth_average,p_mod_2002_05_runlgth_average,p_mod_2001_05_runlgth_average])).mean();


var p_mod_june_runlgth_mean = (ee.ImageCollection([p_mod_2022_06_runlgth_average, p_mod_2021_06_runlgth_average,p_mod_2020_06_runlgth_average,p_mod_2019_06_runlgth_average,p_mod_2018_06_runlgth_average,p_mod_2017_06_runlgth_average
,p_mod_2016_06_runlgth_average,p_mod_2015_06_runlgth_average,p_mod_2014_06_runlgth_average,p_mod_2013_06_runlgth_average,p_mod_2012_06_runlgth_average,p_mod_2011_06_runlgth_average,p_mod_2010_06_runlgth_average,
p_mod_2009_06_runlgth_average,p_mod_2008_06_runlgth_average,p_mod_2007_06_runlgth_average,p_mod_2006_06_runlgth_average,p_mod_2005_06_runlgth_average,p_mod_2004_06_runlgth_average,
p_mod_2003_06_runlgth_average,p_mod_2002_06_runlgth_average,p_mod_2001_06_runlgth_average])).mean();


var p_mod_july_runlgth_mean = (ee.ImageCollection([p_mod_2022_07_runlgth_average,p_mod_2021_07_runlgth_average,p_mod_2020_07_runlgth_average,p_mod_2019_07_runlgth_average,p_mod_2018_07_runlgth_average,p_mod_2017_07_runlgth_average
,p_mod_2016_07_runlgth_average,p_mod_2015_07_runlgth_average,p_mod_2014_07_runlgth_average,p_mod_2013_07_runlgth_average,p_mod_2012_07_runlgth_average,p_mod_2011_07_runlgth_average,p_mod_2010_07_runlgth_average,
p_mod_2009_07_runlgth_average,p_mod_2008_07_runlgth_average,p_mod_2007_07_runlgth_average,p_mod_2006_07_runlgth_average,p_mod_2005_07_runlgth_average,p_mod_2004_07_runlgth_average,
p_mod_2003_07_runlgth_average,p_mod_2002_07_runlgth_average,p_mod_2001_07_runlgth_average])).mean();


var p_mod_august_runlgth_mean = (ee.ImageCollection([p_mod_2022_08_runlgth_average,p_mod_2021_08_runlgth_average,p_mod_2020_08_runlgth_average,p_mod_2019_08_runlgth_average,p_mod_2018_08_runlgth_average,p_mod_2017_08_runlgth_average
,p_mod_2016_08_runlgth_average,p_mod_2015_08_runlgth_average,p_mod_2014_08_runlgth_average,p_mod_2013_08_runlgth_average,p_mod_2012_08_runlgth_average,p_mod_2011_08_runlgth_average,p_mod_2010_08_runlgth_average,
p_mod_2009_08_runlgth_average,p_mod_2008_08_runlgth_average,p_mod_2007_08_runlgth_average,p_mod_2006_08_runlgth_average,p_mod_2005_08_runlgth_average,p_mod_2004_08_runlgth_average,
p_mod_2003_08_runlgth_average,p_mod_2002_08_runlgth_average,p_mod_2001_08_runlgth_average])).mean();


var p_mod_september_runlgth_mean = (ee.ImageCollection([p_mod_2021_09_runlgth_average,p_mod_2020_09_runlgth_average,p_mod_2019_09_runlgth_average,p_mod_2018_09_runlgth_average,p_mod_2017_09_runlgth_average
,p_mod_2016_09_runlgth_average,p_mod_2015_09_runlgth_average,p_mod_2014_09_runlgth_average,p_mod_2013_09_runlgth_average,p_mod_2012_09_runlgth_average,p_mod_2011_09_runlgth_average,p_mod_2010_09_runlgth_average,
p_mod_2009_09_runlgth_average,p_mod_2008_09_runlgth_average,p_mod_2007_09_runlgth_average,p_mod_2006_09_runlgth_average,p_mod_2005_09_runlgth_average,p_mod_2004_09_runlgth_average,
p_mod_2003_09_runlgth_average,p_mod_2002_09_runlgth_average,p_mod_2001_09_runlgth_average])).mean();


var p_mod_october_runlgth_mean = (ee.ImageCollection([p_mod_2021_10_runlgth_average,p_mod_2020_10_runlgth_average,p_mod_2019_10_runlgth_average,p_mod_2018_10_runlgth_average,p_mod_2017_10_runlgth_average
,p_mod_2016_10_runlgth_average,p_mod_2015_10_runlgth_average,p_mod_2014_10_runlgth_average,p_mod_2013_10_runlgth_average,p_mod_2012_10_runlgth_average,p_mod_2011_10_runlgth_average,p_mod_2010_10_runlgth_average,
p_mod_2009_10_runlgth_average,p_mod_2008_10_runlgth_average,p_mod_2007_10_runlgth_average,p_mod_2006_10_runlgth_average,p_mod_2005_10_runlgth_average,p_mod_2004_10_runlgth_average,
p_mod_2003_10_runlgth_average,p_mod_2002_10_runlgth_average,p_mod_2001_10_runlgth_average])).mean();


var p_mod_november_runlgth_mean = (ee.ImageCollection([p_mod_2021_11_runlgth_average,p_mod_2020_11_runlgth_average,p_mod_2019_11_runlgth_average,p_mod_2018_11_runlgth_average,p_mod_2017_11_runlgth_average
,p_mod_2016_11_runlgth_average,p_mod_2015_11_runlgth_average,p_mod_2014_11_runlgth_average,p_mod_2013_11_runlgth_average,p_mod_2012_11_runlgth_average,p_mod_2011_11_runlgth_average,p_mod_2010_11_runlgth_average,
p_mod_2009_11_runlgth_average,p_mod_2008_11_runlgth_average,p_mod_2007_11_runlgth_average,p_mod_2006_11_runlgth_average,p_mod_2005_11_runlgth_average,p_mod_2004_11_runlgth_average,
p_mod_2003_11_runlgth_average,p_mod_2002_11_runlgth_average,p_mod_2001_11_runlgth_average])).mean();


var p_mod_december_runlgth_mean = (ee.ImageCollection([p_mod_2021_12_runlgth_average,p_mod_2020_12_runlgth_average,p_mod_2019_12_runlgth_average,p_mod_2018_12_runlgth_average,p_mod_2017_12_runlgth_average
,p_mod_2016_12_runlgth_average,p_mod_2015_12_runlgth_average,p_mod_2014_12_runlgth_average,p_mod_2013_12_runlgth_average,p_mod_2012_12_runlgth_average,p_mod_2011_12_runlgth_average,p_mod_2010_12_runlgth_average,
p_mod_2009_12_runlgth_average,p_mod_2008_12_runlgth_average,p_mod_2007_12_runlgth_average,p_mod_2006_12_runlgth_average,p_mod_2005_12_runlgth_average,p_mod_2004_12_runlgth_average,
p_mod_2003_12_runlgth_average,p_mod_2002_12_runlgth_average,p_mod_2001_12_runlgth_average])).mean();


// end of getting average for interest period of 6 months before but for the months e.g mean of all januaries


// reclassifying into 0's and 1st in order to compute the runlength

var DTstring = ['1) root 9999 9999 9999',
'2) LST_Day_1km_mean<=0 9999 9999 0 *',
'3) LST_Day_1km_mean>0 9999 9999 1 *'].join("\n");


var classifier = ee.Classifier.decisionTree(DTstring);




// end of Deficit - where modified T is more than long term mean. The resultant images have either a 0 or 1 as their pixel value

var deficit_2001_january = (p_mod_2001_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_january = (p_mod_2002_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_january = (p_mod_2003_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_january = (p_mod_2004_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_january = (p_mod_2005_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_january = (p_mod_2006_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_january = (p_mod_2007_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_january = (p_mod_2008_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_january = (p_mod_2009_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_january = (p_mod_2010_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_january = (p_mod_2011_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_january = (p_mod_2012_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_january = (p_mod_2013_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_january = (p_mod_2014_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_january = (p_mod_2015_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_january = (p_mod_2016_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_january = (p_mod_2017_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_january = (p_mod_2018_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_january = (p_mod_2019_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_january = (p_mod_2020_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_january = (p_mod_2021_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_january = (p_mod_2022_01.subtract(p_mod_january_mean)).select('LST_Day_1km_mean').classify(classifier);





var deficit_2001_february = (p_mod_2001_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_february = (p_mod_2002_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_february = (p_mod_2003_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_february = (p_mod_2004_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_february = (p_mod_2005_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_february = (p_mod_2006_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_february = (p_mod_2007_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_february = (p_mod_2008_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_february = (p_mod_2009_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_february = (p_mod_2010_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_february = (p_mod_2011_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_february = (p_mod_2012_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_february = (p_mod_2013_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_february = (p_mod_2014_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_february = (p_mod_2015_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_february = (p_mod_2016_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_february = (p_mod_2017_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_february = (p_mod_2018_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_february = (p_mod_2019_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_february = (p_mod_2020_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_february = (p_mod_2021_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_february = (p_mod_2022_02.subtract(p_mod_february_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_march = (p_mod_2001_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_march = (p_mod_2002_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_march = (p_mod_2003_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_march = (p_mod_2004_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_march = (p_mod_2005_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_march = (p_mod_2006_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_march = (p_mod_2007_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_march = (p_mod_2008_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_march = (p_mod_2009_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_march = (p_mod_2010_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_march = (p_mod_2011_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_march = (p_mod_2012_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_march = (p_mod_2013_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_march = (p_mod_2014_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_march = (p_mod_2015_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_march = (p_mod_2016_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_march = (p_mod_2017_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_march = (p_mod_2018_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_march = (p_mod_2019_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_march = (p_mod_2020_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_march = (p_mod_2021_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_march = (p_mod_2022_03.subtract(p_mod_march_mean)).select('LST_Day_1km_mean').classify(classifier);


var deficit_2001_april = (p_mod_2001_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_april = (p_mod_2002_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_april = (p_mod_2003_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_april = (p_mod_2004_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_april = (p_mod_2005_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_april = (p_mod_2006_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_april = (p_mod_2007_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_april = (p_mod_2008_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_april = (p_mod_2009_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_april = (p_mod_2010_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_april = (p_mod_2011_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_april = (p_mod_2012_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_april = (p_mod_2013_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_april = (p_mod_2014_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_april = (p_mod_2015_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_april = (p_mod_2016_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_april = (p_mod_2017_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_april = (p_mod_2018_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_april = (p_mod_2019_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_april = (p_mod_2020_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_april = (p_mod_2021_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_april = (p_mod_2022_04.subtract(p_mod_april_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_may = (p_mod_2001_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_may = (p_mod_2002_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_may = (p_mod_2003_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_may = (p_mod_2004_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_may = (p_mod_2005_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_may = (p_mod_2006_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_may = (p_mod_2007_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_may = (p_mod_2008_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_may = (p_mod_2009_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_may = (p_mod_2010_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_may = (p_mod_2011_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_may = (p_mod_2012_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_may = (p_mod_2013_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_may = (p_mod_2014_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_may = (p_mod_2015_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_may = (p_mod_2016_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_may = (p_mod_2017_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_may = (p_mod_2018_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_may = (p_mod_2019_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_may = (p_mod_2020_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_may = (p_mod_2021_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_may = (p_mod_2022_05.subtract(p_mod_may_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_june = (p_mod_2001_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_june = (p_mod_2002_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_june = (p_mod_2003_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_june = (p_mod_2004_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_june = (p_mod_2005_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_june = (p_mod_2006_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_june = (p_mod_2007_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_june = (p_mod_2008_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_june = (p_mod_2009_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_june = (p_mod_2010_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_june = (p_mod_2011_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_june = (p_mod_2012_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_june = (p_mod_2013_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_june = (p_mod_2014_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_june = (p_mod_2015_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_june = (p_mod_2016_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_june = (p_mod_2017_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_june = (p_mod_2018_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_june = (p_mod_2019_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_june = (p_mod_2020_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_june = (p_mod_2021_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_june = (p_mod_2022_06.subtract(p_mod_june_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_july = (p_mod_2001_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_july = (p_mod_2002_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_july = (p_mod_2003_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_july = (p_mod_2004_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_july = (p_mod_2005_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_july = (p_mod_2006_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_july = (p_mod_2007_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_july = (p_mod_2008_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_july = (p_mod_2009_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_july = (p_mod_2010_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_july = (p_mod_2011_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_july = (p_mod_2012_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_july = (p_mod_2013_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_july = (p_mod_2014_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_july = (p_mod_2015_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_july = (p_mod_2016_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_july = (p_mod_2017_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_july = (p_mod_2018_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_july = (p_mod_2019_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_july = (p_mod_2020_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_july = (p_mod_2021_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_july = (p_mod_2022_07.subtract(p_mod_july_mean)).select('LST_Day_1km_mean').classify(classifier);


var deficit_2001_august = (p_mod_2001_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_august = (p_mod_2002_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_august = (p_mod_2003_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_august = (p_mod_2004_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_august = (p_mod_2005_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_august = (p_mod_2006_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_august = (p_mod_2007_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_august = (p_mod_2008_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_august = (p_mod_2009_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_august = (p_mod_2010_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_august = (p_mod_2011_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_august = (p_mod_2012_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_august = (p_mod_2013_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_august = (p_mod_2014_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_august = (p_mod_2015_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_august = (p_mod_2016_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_august = (p_mod_2017_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_august = (p_mod_2018_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_august = (p_mod_2019_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_august = (p_mod_2020_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_august = (p_mod_2021_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2022_august = (p_mod_2022_08.subtract(p_mod_august_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_september = (p_mod_2001_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_september = (p_mod_2002_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_september = (p_mod_2003_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_september = (p_mod_2004_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_september = (p_mod_2005_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_september = (p_mod_2006_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_september = (p_mod_2007_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_september = (p_mod_2008_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_september = (p_mod_2009_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_september = (p_mod_2010_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_september = (p_mod_2011_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_september = (p_mod_2012_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_september = (p_mod_2013_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_september = (p_mod_2014_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_september = (p_mod_2015_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_september = (p_mod_2016_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_september = (p_mod_2017_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_september = (p_mod_2018_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_september = (p_mod_2019_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_september = (p_mod_2020_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_september = (p_mod_2021_09.subtract(p_mod_september_mean)).select('LST_Day_1km_mean').classify(classifier);


var deficit_2001_october = (p_mod_2001_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_october = (p_mod_2002_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_october = (p_mod_2003_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_october = (p_mod_2004_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_october = (p_mod_2005_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_october = (p_mod_2006_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_october = (p_mod_2007_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_october = (p_mod_2008_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_october = (p_mod_2009_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_october = (p_mod_2010_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_october = (p_mod_2011_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_october = (p_mod_2012_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_october = (p_mod_2013_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_october = (p_mod_2014_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_october = (p_mod_2015_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_october = (p_mod_2016_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_october = (p_mod_2017_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_october = (p_mod_2018_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_october = (p_mod_2019_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_october = (p_mod_2020_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_october = (p_mod_2021_10.subtract(p_mod_october_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_november = (p_mod_2001_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_november = (p_mod_2002_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_november = (p_mod_2003_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_november = (p_mod_2004_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_november = (p_mod_2005_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_november = (p_mod_2006_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_november = (p_mod_2007_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_november = (p_mod_2008_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_november = (p_mod_2009_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_november = (p_mod_2010_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_november = (p_mod_2011_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_november = (p_mod_2012_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_november = (p_mod_2013_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_november = (p_mod_2014_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_november = (p_mod_2015_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_november = (p_mod_2016_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_november = (p_mod_2017_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_november = (p_mod_2018_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_november = (p_mod_2019_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_november = (p_mod_2020_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_november = (p_mod_2021_11.subtract(p_mod_november_mean)).select('LST_Day_1km_mean').classify(classifier);



var deficit_2001_december = (p_mod_2001_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2002_december = (p_mod_2002_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2003_december = (p_mod_2003_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2004_december = (p_mod_2004_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2005_december = (p_mod_2005_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2006_december = (p_mod_2006_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2007_december = (p_mod_2007_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2008_december = (p_mod_2008_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2009_december = (p_mod_2009_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2010_december = (p_mod_2010_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2011_december = (p_mod_2011_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2012_december = (p_mod_2012_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2013_december = (p_mod_2013_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2014_december = (p_mod_2014_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2015_december = (p_mod_2015_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2016_december = (p_mod_2016_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2017_december = (p_mod_2017_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2018_december = (p_mod_2018_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2019_december = (p_mod_2019_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2020_december = (p_mod_2020_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);
var deficit_2021_december = (p_mod_2021_12.subtract(p_mod_december_mean)).select('LST_Day_1km_mean').classify(classifier);


// end of Deficit - where modified T is more than long term mean. The resultant images have either a 0 or 1 as their pixel value




//Grouping the images into a collection of 6 in order to compute the runlength

var runlength_2001_june = (ee.ImageCollection([deficit_2001_june,deficit_2001_may,deficit_2001_april,deficit_2001_march
,deficit_2001_february,deficit_2001_january]));


var runlength_2001_july = (ee.ImageCollection([deficit_2001_july,deficit_2001_june,deficit_2001_may,deficit_2001_april,deficit_2001_march,deficit_2001_february]));
var runlength_2001_august = (ee.ImageCollection([deficit_2001_august,deficit_2001_july,deficit_2001_june,deficit_2001_may,deficit_2001_april,deficit_2001_march]));
var runlength_2001_september = (ee.ImageCollection([deficit_2001_september,deficit_2001_august,deficit_2001_july,deficit_2001_june,deficit_2001_may,deficit_2001_april]));
var runlength_2001_october = (ee.ImageCollection([deficit_2001_october,deficit_2001_september,deficit_2001_august,deficit_2001_july,deficit_2001_june,deficit_2001_may]));
var runlength_2001_november = (ee.ImageCollection([deficit_2001_november,deficit_2001_october,deficit_2001_september,deficit_2001_august,deficit_2001_july,deficit_2001_june]));
var runlength_2001_december = (ee.ImageCollection([deficit_2001_december,deficit_2001_november,deficit_2001_october,deficit_2001_september,deficit_2001_august,deficit_2001_july]));

                                                                                                                                             





var runlength_2002_january = (ee.ImageCollection([deficit_2002_january, deficit_2001_december,deficit_2001_november,deficit_2001_october,deficit_2001_september,deficit_2001_august]));
var runlength_2002_february = (ee.ImageCollection([deficit_2002_february, deficit_2002_january, deficit_2001_december,deficit_2001_november,deficit_2001_october,deficit_2001_september]));
var runlength_2002_march = (ee.ImageCollection([deficit_2002_march,deficit_2002_february, deficit_2002_january, deficit_2001_december,deficit_2001_november,deficit_2001_october]));
var runlength_2002_april = (ee.ImageCollection([deficit_2002_april,deficit_2002_march,deficit_2002_february, deficit_2002_january, deficit_2001_december,deficit_2001_november]));
var runlength_2002_may = (ee.ImageCollection([deficit_2002_may, deficit_2002_april,deficit_2002_march,deficit_2002_february, deficit_2002_january,deficit_2001_december]));
var runlength_2002_june = (ee.ImageCollection([deficit_2002_june,deficit_2002_may, deficit_2002_april,deficit_2002_march,deficit_2002_february,deficit_2002_january]));
var runlength_2002_july = (ee.ImageCollection([deficit_2002_july,deficit_2002_june,deficit_2002_may,deficit_2002_april,deficit_2002_march,deficit_2002_february]));
var runlength_2002_august = (ee.ImageCollection([deficit_2002_august,deficit_2002_july,deficit_2002_june,deficit_2002_may,deficit_2002_april,deficit_2002_march]));
var runlength_2002_september = (ee.ImageCollection([deficit_2002_september,deficit_2002_august,deficit_2002_july,deficit_2002_june,deficit_2002_may,deficit_2002_april]));
var runlength_2002_october = (ee.ImageCollection([deficit_2002_october,deficit_2002_september,deficit_2002_august,deficit_2002_july,deficit_2002_june,deficit_2002_may]));
var runlength_2002_november = (ee.ImageCollection([deficit_2002_november,deficit_2002_october,deficit_2002_september,deficit_2002_august,deficit_2002_july,deficit_2002_june]));
var runlength_2002_december = (ee.ImageCollection([deficit_2002_december,deficit_2002_november,deficit_2002_october,deficit_2002_september,deficit_2002_august,deficit_2002_july]));



var runlength_2003_january = (ee.ImageCollection([deficit_2003_january, deficit_2002_december,deficit_2002_november,deficit_2002_october,deficit_2002_september,deficit_2002_august]));
var runlength_2003_february = (ee.ImageCollection([deficit_2003_february, deficit_2003_january, deficit_2002_december,deficit_2002_november,deficit_2002_october,deficit_2002_september]));
var runlength_2003_march = (ee.ImageCollection([deficit_2003_march,deficit_2003_february, deficit_2003_january, deficit_2002_december,deficit_2002_november,deficit_2002_october]));
var runlength_2003_april = (ee.ImageCollection([deficit_2003_april,deficit_2003_march,deficit_2003_february, deficit_2003_january, deficit_2002_december,deficit_2002_november]));
var runlength_2003_may = (ee.ImageCollection([deficit_2003_may, deficit_2003_april,deficit_2003_march,deficit_2003_february, deficit_2003_january,deficit_2002_december]));
var runlength_2003_june = (ee.ImageCollection([deficit_2003_june,deficit_2003_may, deficit_2003_april,deficit_2003_march,deficit_2003_february,deficit_2003_january]));
var runlength_2003_july = (ee.ImageCollection([deficit_2003_july,deficit_2003_june,deficit_2003_may,deficit_2003_april,deficit_2003_march,deficit_2003_february]));
var runlength_2003_august = (ee.ImageCollection([deficit_2003_august,deficit_2003_july,deficit_2003_june,deficit_2003_may,deficit_2003_april,deficit_2003_march]));
var runlength_2003_september = (ee.ImageCollection([deficit_2003_september,deficit_2003_august,deficit_2003_july,deficit_2003_june,deficit_2003_may,deficit_2003_april]));
var runlength_2003_october = (ee.ImageCollection([deficit_2003_october,deficit_2003_september,deficit_2003_august,deficit_2003_july,deficit_2003_june,deficit_2003_may]));
var runlength_2003_november = (ee.ImageCollection([deficit_2003_november,deficit_2003_october,deficit_2003_september,deficit_2003_august,deficit_2003_july,deficit_2003_june]));
var runlength_2003_december = (ee.ImageCollection([deficit_2003_december,deficit_2003_november,deficit_2003_october,deficit_2003_september,deficit_2003_august,deficit_2003_july]));


var runlength_2004_january = (ee.ImageCollection([deficit_2004_january, deficit_2003_december,deficit_2003_november,deficit_2003_october,deficit_2003_september,deficit_2003_august]));
var runlength_2004_february = (ee.ImageCollection([deficit_2004_february, deficit_2004_january, deficit_2003_december,deficit_2003_november,deficit_2003_october,deficit_2003_september]));
var runlength_2004_march = (ee.ImageCollection([deficit_2004_march,deficit_2004_february, deficit_2004_january, deficit_2003_december,deficit_2003_november,deficit_2003_october]));
var runlength_2004_april = (ee.ImageCollection([deficit_2004_april,deficit_2004_march,deficit_2004_february, deficit_2004_january, deficit_2003_december,deficit_2003_november]));
var runlength_2004_may = (ee.ImageCollection([deficit_2004_may, deficit_2004_april,deficit_2004_march,deficit_2004_february, deficit_2004_january,deficit_2003_december]));
var runlength_2004_june = (ee.ImageCollection([deficit_2004_june,deficit_2004_may, deficit_2004_april,deficit_2004_march,deficit_2004_february,deficit_2004_january]));
var runlength_2004_july = (ee.ImageCollection([deficit_2004_july,deficit_2004_june,deficit_2004_may,deficit_2004_april,deficit_2004_march,deficit_2004_february]));
var runlength_2004_august = (ee.ImageCollection([deficit_2004_august,deficit_2004_july,deficit_2004_june,deficit_2004_may,deficit_2004_april,deficit_2004_march]));
var runlength_2004_september = (ee.ImageCollection([deficit_2004_september,deficit_2004_august,deficit_2004_july,deficit_2004_june,deficit_2004_may,deficit_2004_april]));
var runlength_2004_october = (ee.ImageCollection([deficit_2004_october,deficit_2004_september,deficit_2004_august,deficit_2004_july,deficit_2004_june,deficit_2004_may]));
var runlength_2004_november = (ee.ImageCollection([deficit_2004_november,deficit_2004_october,deficit_2004_september,deficit_2004_august,deficit_2004_july,deficit_2004_june]));
var runlength_2004_december = (ee.ImageCollection([deficit_2004_december,deficit_2004_november,deficit_2004_october,deficit_2004_september,deficit_2004_august,deficit_2004_july]));



var runlength_2005_january = (ee.ImageCollection([deficit_2005_january, deficit_2004_december,deficit_2004_november,deficit_2004_october,deficit_2004_september,deficit_2004_august]));
var runlength_2005_february = (ee.ImageCollection([deficit_2005_february, deficit_2005_january, deficit_2004_december,deficit_2004_november,deficit_2004_october,deficit_2004_september]));
var runlength_2005_march = (ee.ImageCollection([deficit_2005_march,deficit_2005_february, deficit_2005_january, deficit_2004_december,deficit_2004_november,deficit_2004_october]));
var runlength_2005_april = (ee.ImageCollection([deficit_2005_april,deficit_2005_march,deficit_2005_february, deficit_2005_january, deficit_2004_december,deficit_2004_november]));
var runlength_2005_may = (ee.ImageCollection([deficit_2005_may, deficit_2005_april,deficit_2005_march,deficit_2005_february, deficit_2005_january,deficit_2004_december]));
var runlength_2005_june = (ee.ImageCollection([deficit_2005_june,deficit_2005_may, deficit_2005_april,deficit_2005_march,deficit_2005_february,deficit_2005_january]));
var runlength_2005_july = (ee.ImageCollection([deficit_2005_july,deficit_2005_june,deficit_2005_may,deficit_2005_april,deficit_2005_march,deficit_2005_february]));
var runlength_2005_august = (ee.ImageCollection([deficit_2005_august,deficit_2005_july,deficit_2005_june,deficit_2005_may,deficit_2005_april,deficit_2005_march]));
var runlength_2005_september = (ee.ImageCollection([deficit_2005_september,deficit_2005_august,deficit_2005_july,deficit_2005_june,deficit_2005_may,deficit_2005_april]));
var runlength_2005_october = (ee.ImageCollection([deficit_2005_october,deficit_2005_september,deficit_2005_august,deficit_2005_july,deficit_2005_june,deficit_2005_may]));
var runlength_2005_november = (ee.ImageCollection([deficit_2005_november,deficit_2005_october,deficit_2005_september,deficit_2005_august,deficit_2005_july,deficit_2005_june]));
var runlength_2005_december = (ee.ImageCollection([deficit_2005_december,deficit_2005_november,deficit_2005_october,deficit_2005_september,deficit_2005_august,deficit_2005_july]));



var runlength_2006_january = (ee.ImageCollection([deficit_2006_january, deficit_2005_december,deficit_2005_november,deficit_2005_october,deficit_2005_september,deficit_2005_august]));
var runlength_2006_february = (ee.ImageCollection([deficit_2006_february, deficit_2006_january, deficit_2005_december,deficit_2005_november,deficit_2005_october,deficit_2005_september]));
var runlength_2006_march = (ee.ImageCollection([deficit_2006_march,deficit_2006_february, deficit_2006_january, deficit_2005_december,deficit_2005_november,deficit_2005_october]));
var runlength_2006_april = (ee.ImageCollection([deficit_2006_april,deficit_2006_march,deficit_2006_february, deficit_2006_january, deficit_2005_december,deficit_2005_november]));
var runlength_2006_may = (ee.ImageCollection([deficit_2006_may, deficit_2006_april,deficit_2006_march,deficit_2006_february, deficit_2006_january,deficit_2005_december]));
var runlength_2006_june = (ee.ImageCollection([deficit_2006_june,deficit_2006_may, deficit_2006_april,deficit_2006_march,deficit_2006_february,deficit_2006_january]));
var runlength_2006_july = (ee.ImageCollection([deficit_2006_july,deficit_2006_june,deficit_2006_may,deficit_2006_april,deficit_2006_march,deficit_2006_february]));
var runlength_2006_august = (ee.ImageCollection([deficit_2006_august,deficit_2006_july,deficit_2006_june,deficit_2006_may,deficit_2006_april,deficit_2006_march]));
var runlength_2006_september = (ee.ImageCollection([deficit_2006_september,deficit_2006_august,deficit_2006_july,deficit_2006_june,deficit_2006_may,deficit_2006_april]));
var runlength_2006_october = (ee.ImageCollection([deficit_2006_october,deficit_2006_september,deficit_2006_august,deficit_2006_july,deficit_2006_june,deficit_2006_may]));
var runlength_2006_november = (ee.ImageCollection([deficit_2006_november,deficit_2006_october,deficit_2006_september,deficit_2006_august,deficit_2006_july,deficit_2006_june]));
var runlength_2006_december = (ee.ImageCollection([deficit_2006_december,deficit_2006_november,deficit_2006_october,deficit_2006_september,deficit_2006_august,deficit_2006_july]));



var runlength_2007_january = (ee.ImageCollection([deficit_2007_january, deficit_2006_december,deficit_2006_november,deficit_2006_october,deficit_2006_september,deficit_2006_august]));
var runlength_2007_february = (ee.ImageCollection([deficit_2007_february, deficit_2007_january, deficit_2006_december,deficit_2006_november,deficit_2006_october,deficit_2006_september]));
var runlength_2007_march = (ee.ImageCollection([deficit_2007_march,deficit_2007_february, deficit_2007_january, deficit_2006_december,deficit_2006_november,deficit_2006_october]));
var runlength_2007_april = (ee.ImageCollection([deficit_2007_april,deficit_2007_march,deficit_2007_february, deficit_2007_january, deficit_2006_december,deficit_2006_november]));
var runlength_2007_may = (ee.ImageCollection([deficit_2007_may, deficit_2007_april,deficit_2007_march,deficit_2007_february, deficit_2007_january,deficit_2006_december]));
var runlength_2007_june = (ee.ImageCollection([deficit_2007_june,deficit_2007_may, deficit_2007_april,deficit_2007_march,deficit_2007_february,deficit_2007_january]));
var runlength_2007_july = (ee.ImageCollection([deficit_2007_july,deficit_2007_june,deficit_2007_may,deficit_2007_april,deficit_2007_march,deficit_2007_february]));
var runlength_2007_august = (ee.ImageCollection([deficit_2007_august,deficit_2007_july,deficit_2007_june,deficit_2007_may,deficit_2007_april,deficit_2007_march]));
var runlength_2007_september = (ee.ImageCollection([deficit_2007_september,deficit_2007_august,deficit_2007_july,deficit_2007_june,deficit_2007_may,deficit_2007_april]));
var runlength_2007_october = (ee.ImageCollection([deficit_2007_october,deficit_2007_september,deficit_2007_august,deficit_2007_july,deficit_2007_june,deficit_2007_may]));
var runlength_2007_november = (ee.ImageCollection([deficit_2007_november,deficit_2007_october,deficit_2007_september,deficit_2007_august,deficit_2007_july,deficit_2007_june]));
var runlength_2007_december = (ee.ImageCollection([deficit_2007_december,deficit_2007_november,deficit_2007_october,deficit_2007_september,deficit_2007_august,deficit_2007_july]));



var runlength_2008_january = (ee.ImageCollection([deficit_2008_january, deficit_2007_december,deficit_2007_november,deficit_2007_october,deficit_2007_september,deficit_2007_august]));
var runlength_2008_february = (ee.ImageCollection([deficit_2008_february, deficit_2008_january, deficit_2007_december,deficit_2007_november,deficit_2007_october,deficit_2007_september]));
var runlength_2008_march = (ee.ImageCollection([deficit_2008_march,deficit_2008_february, deficit_2008_january, deficit_2007_december,deficit_2007_november,deficit_2007_october]));
var runlength_2008_april = (ee.ImageCollection([deficit_2008_april,deficit_2008_march,deficit_2008_february, deficit_2008_january, deficit_2007_december,deficit_2007_november]));
var runlength_2008_may = (ee.ImageCollection([deficit_2008_may, deficit_2008_april,deficit_2008_march,deficit_2008_february, deficit_2008_january,deficit_2007_december]));
var runlength_2008_june = (ee.ImageCollection([deficit_2008_june,deficit_2008_may, deficit_2008_april,deficit_2008_march,deficit_2008_february,deficit_2008_january]));
var runlength_2008_july = (ee.ImageCollection([deficit_2008_july,deficit_2008_june,deficit_2008_may,deficit_2008_april,deficit_2008_march,deficit_2008_february]));
var runlength_2008_august = (ee.ImageCollection([deficit_2008_august,deficit_2008_july,deficit_2008_june,deficit_2008_may,deficit_2008_april,deficit_2008_march]));
var runlength_2008_september = (ee.ImageCollection([deficit_2008_september,deficit_2008_august,deficit_2008_july,deficit_2008_june,deficit_2008_may,deficit_2008_april]));
var runlength_2008_october = (ee.ImageCollection([deficit_2008_october,deficit_2008_september,deficit_2008_august,deficit_2008_july,deficit_2008_june,deficit_2008_may]));
var runlength_2008_november = (ee.ImageCollection([deficit_2008_november,deficit_2008_october,deficit_2008_september,deficit_2008_august,deficit_2008_july,deficit_2008_june]));
var runlength_2008_december = (ee.ImageCollection([deficit_2008_december,deficit_2008_november,deficit_2008_october,deficit_2008_september,deficit_2008_august,deficit_2008_july]));



var runlength_2009_january = (ee.ImageCollection([deficit_2009_january, deficit_2008_december,deficit_2008_november,deficit_2008_october,deficit_2008_september,deficit_2008_august]));
var runlength_2009_february = (ee.ImageCollection([deficit_2009_february, deficit_2009_january, deficit_2008_december,deficit_2008_november,deficit_2008_october,deficit_2008_september]));
var runlength_2009_march = (ee.ImageCollection([deficit_2009_march,deficit_2009_february, deficit_2009_january, deficit_2008_december,deficit_2008_november,deficit_2008_october]));
var runlength_2009_april = (ee.ImageCollection([deficit_2009_april,deficit_2009_march,deficit_2009_february, deficit_2009_january, deficit_2008_december,deficit_2008_november]));
var runlength_2009_may = (ee.ImageCollection([deficit_2009_may, deficit_2009_april,deficit_2009_march,deficit_2009_february, deficit_2009_january,deficit_2008_december]));
var runlength_2009_june = (ee.ImageCollection([deficit_2009_june,deficit_2009_may, deficit_2009_april,deficit_2009_march,deficit_2009_february,deficit_2009_january]));
var runlength_2009_july = (ee.ImageCollection([deficit_2009_july,deficit_2009_june,deficit_2009_may,deficit_2009_april,deficit_2009_march,deficit_2009_february]));
var runlength_2009_august = (ee.ImageCollection([deficit_2009_august,deficit_2009_july,deficit_2009_june,deficit_2009_may,deficit_2009_april,deficit_2009_march]));
var runlength_2009_september = (ee.ImageCollection([deficit_2009_september,deficit_2009_august,deficit_2009_july,deficit_2009_june,deficit_2009_may,deficit_2009_april]));
var runlength_2009_october = (ee.ImageCollection([deficit_2009_october,deficit_2009_september,deficit_2009_august,deficit_2009_july,deficit_2009_june,deficit_2009_may]));
var runlength_2009_november = (ee.ImageCollection([deficit_2009_november,deficit_2009_october,deficit_2009_september,deficit_2009_august,deficit_2009_july,deficit_2009_june]));
var runlength_2009_december = (ee.ImageCollection([deficit_2009_december,deficit_2009_november,deficit_2009_october,deficit_2009_september,deficit_2009_august,deficit_2009_july]));



var runlength_2010_january = (ee.ImageCollection([deficit_2010_january, deficit_2009_december,deficit_2009_november,deficit_2009_october,deficit_2009_september,deficit_2009_august]));
var runlength_2010_february = (ee.ImageCollection([deficit_2010_february, deficit_2010_january, deficit_2009_december,deficit_2009_november,deficit_2009_october,deficit_2009_september]));
var runlength_2010_march = (ee.ImageCollection([deficit_2010_march,deficit_2010_february, deficit_2010_january, deficit_2009_december,deficit_2009_november,deficit_2009_october]));
var runlength_2010_april = (ee.ImageCollection([deficit_2010_april,deficit_2010_march,deficit_2010_february, deficit_2010_january, deficit_2009_december,deficit_2009_november]));
var runlength_2010_may = (ee.ImageCollection([deficit_2010_may, deficit_2010_april,deficit_2010_march,deficit_2010_february, deficit_2010_january,deficit_2009_december]));
var runlength_2010_june = (ee.ImageCollection([deficit_2010_june,deficit_2010_may, deficit_2010_april,deficit_2010_march,deficit_2010_february,deficit_2010_january]));
var runlength_2010_july = (ee.ImageCollection([deficit_2010_july,deficit_2010_june,deficit_2010_may,deficit_2010_april,deficit_2010_march,deficit_2010_february]));
var runlength_2010_august = (ee.ImageCollection([deficit_2010_august,deficit_2010_july,deficit_2010_june,deficit_2010_may,deficit_2010_april,deficit_2010_march]));
var runlength_2010_september = (ee.ImageCollection([deficit_2010_september,deficit_2010_august,deficit_2010_july,deficit_2010_june,deficit_2010_may,deficit_2010_april]));
var runlength_2010_october = (ee.ImageCollection([deficit_2010_october,deficit_2010_september,deficit_2010_august,deficit_2010_july,deficit_2010_june,deficit_2010_may]));
var runlength_2010_november = (ee.ImageCollection([deficit_2010_november,deficit_2010_october,deficit_2010_september,deficit_2010_august,deficit_2010_july,deficit_2010_june]));
var runlength_2010_december = (ee.ImageCollection([deficit_2010_december,deficit_2010_november,deficit_2010_october,deficit_2010_september,deficit_2010_august,deficit_2010_july]));



var runlength_2011_january = (ee.ImageCollection([deficit_2011_january, deficit_2010_december,deficit_2010_november,deficit_2010_october,deficit_2010_september,deficit_2010_august]));
var runlength_2011_february = (ee.ImageCollection([deficit_2011_february, deficit_2011_january, deficit_2010_december,deficit_2010_november,deficit_2010_october,deficit_2010_september]));
var runlength_2011_march = (ee.ImageCollection([deficit_2011_march,deficit_2011_february, deficit_2011_january, deficit_2010_december,deficit_2010_november,deficit_2010_october]));
var runlength_2011_april = (ee.ImageCollection([deficit_2011_april,deficit_2011_march,deficit_2011_february, deficit_2011_january, deficit_2010_december,deficit_2010_november]));
var runlength_2011_may = (ee.ImageCollection([deficit_2011_may, deficit_2011_april,deficit_2011_march,deficit_2011_february, deficit_2011_january,deficit_2010_december]));
var runlength_2011_june = (ee.ImageCollection([deficit_2011_june,deficit_2011_may, deficit_2011_april,deficit_2011_march,deficit_2011_february,deficit_2011_january]));
var runlength_2011_july = (ee.ImageCollection([deficit_2011_july,deficit_2011_june,deficit_2011_may,deficit_2011_april,deficit_2011_march,deficit_2011_february]));
var runlength_2011_august = (ee.ImageCollection([deficit_2011_august,deficit_2011_july,deficit_2011_june,deficit_2011_may,deficit_2011_april,deficit_2011_march]));
var runlength_2011_september = (ee.ImageCollection([deficit_2011_september,deficit_2011_august,deficit_2011_july,deficit_2011_june,deficit_2011_may,deficit_2011_april]));
var runlength_2011_october = (ee.ImageCollection([deficit_2011_october,deficit_2011_september,deficit_2011_august,deficit_2011_july,deficit_2011_june,deficit_2011_may]));
var runlength_2011_november = (ee.ImageCollection([deficit_2011_november,deficit_2011_october,deficit_2011_september,deficit_2011_august,deficit_2011_july,deficit_2011_june]));
var runlength_2011_december = (ee.ImageCollection([deficit_2011_december,deficit_2011_november,deficit_2011_october,deficit_2011_september,deficit_2011_august,deficit_2011_july]));



var runlength_2012_january = (ee.ImageCollection([deficit_2012_january, deficit_2011_december,deficit_2011_november,deficit_2011_october,deficit_2011_september,deficit_2011_august]));
var runlength_2012_february = (ee.ImageCollection([deficit_2012_february, deficit_2012_january, deficit_2011_december,deficit_2011_november,deficit_2011_october,deficit_2011_september]));
var runlength_2012_march = (ee.ImageCollection([deficit_2012_march,deficit_2012_february, deficit_2012_january, deficit_2011_december,deficit_2011_november,deficit_2011_october]));
var runlength_2012_april = (ee.ImageCollection([deficit_2012_april,deficit_2012_march,deficit_2012_february, deficit_2012_january, deficit_2011_december,deficit_2011_november]));
var runlength_2012_may = (ee.ImageCollection([deficit_2012_may, deficit_2012_april,deficit_2012_march,deficit_2012_february, deficit_2012_january,deficit_2011_december]));
var runlength_2012_june = (ee.ImageCollection([deficit_2012_june,deficit_2012_may, deficit_2012_april,deficit_2012_march,deficit_2012_february,deficit_2012_january]));
var runlength_2012_july = (ee.ImageCollection([deficit_2012_july,deficit_2012_june,deficit_2012_may,deficit_2012_april,deficit_2012_march,deficit_2012_february]));
var runlength_2012_august = (ee.ImageCollection([deficit_2012_august,deficit_2012_july,deficit_2012_june,deficit_2012_may,deficit_2012_april,deficit_2012_march]));
var runlength_2012_september = (ee.ImageCollection([deficit_2012_september,deficit_2012_august,deficit_2012_july,deficit_2012_june,deficit_2012_may,deficit_2012_april]));
var runlength_2012_october = (ee.ImageCollection([deficit_2012_october,deficit_2012_september,deficit_2012_august,deficit_2012_july,deficit_2012_june,deficit_2012_may]));
var runlength_2012_november = (ee.ImageCollection([deficit_2012_november,deficit_2012_october,deficit_2012_september,deficit_2012_august,deficit_2012_july,deficit_2012_june]));
var runlength_2012_december = (ee.ImageCollection([deficit_2012_december,deficit_2012_november,deficit_2012_october,deficit_2012_september,deficit_2012_august,deficit_2012_july]));


var runlength_2013_january = (ee.ImageCollection([deficit_2013_january, deficit_2012_december,deficit_2012_november,deficit_2012_october,deficit_2012_september,deficit_2012_august]));
var runlength_2013_february = (ee.ImageCollection([deficit_2013_february, deficit_2013_january, deficit_2012_december,deficit_2012_november,deficit_2012_october,deficit_2012_september]));
var runlength_2013_march = (ee.ImageCollection([deficit_2013_march,deficit_2013_february, deficit_2013_january, deficit_2012_december,deficit_2012_november,deficit_2012_october]));
var runlength_2013_april = (ee.ImageCollection([deficit_2013_april,deficit_2013_march,deficit_2013_february, deficit_2013_january, deficit_2012_december,deficit_2012_november]));
var runlength_2013_may = (ee.ImageCollection([deficit_2013_may, deficit_2013_april,deficit_2013_march,deficit_2013_february, deficit_2013_january,deficit_2012_december]));
var runlength_2013_june = (ee.ImageCollection([deficit_2013_june,deficit_2013_may, deficit_2013_april,deficit_2013_march,deficit_2013_february,deficit_2013_january]));
var runlength_2013_july = (ee.ImageCollection([deficit_2013_july,deficit_2013_june,deficit_2013_may,deficit_2013_april,deficit_2013_march,deficit_2013_february]));
var runlength_2013_august = (ee.ImageCollection([deficit_2013_august,deficit_2013_july,deficit_2013_june,deficit_2013_may,deficit_2013_april,deficit_2013_march]));
var runlength_2013_september = (ee.ImageCollection([deficit_2013_september,deficit_2013_august,deficit_2013_july,deficit_2013_june,deficit_2013_may,deficit_2013_april]));
var runlength_2013_october = (ee.ImageCollection([deficit_2013_october,deficit_2013_september,deficit_2013_august,deficit_2013_july,deficit_2013_june,deficit_2013_may]));
var runlength_2013_november = (ee.ImageCollection([deficit_2013_november,deficit_2013_october,deficit_2013_september,deficit_2013_august,deficit_2013_july,deficit_2013_june]));
var runlength_2013_december = (ee.ImageCollection([deficit_2013_december,deficit_2013_november,deficit_2013_october,deficit_2013_september,deficit_2013_august,deficit_2013_july]));



var runlength_2014_january = (ee.ImageCollection([deficit_2014_january, deficit_2013_december,deficit_2013_november,deficit_2013_october,deficit_2013_september,deficit_2013_august]));
var runlength_2014_february = (ee.ImageCollection([deficit_2014_february, deficit_2014_january, deficit_2013_december,deficit_2013_november,deficit_2013_october,deficit_2013_september]));
var runlength_2014_march = (ee.ImageCollection([deficit_2014_march,deficit_2014_february, deficit_2014_january, deficit_2013_december,deficit_2013_november,deficit_2013_october]));
var runlength_2014_april = (ee.ImageCollection([deficit_2014_april,deficit_2014_march,deficit_2014_february, deficit_2014_january, deficit_2013_december,deficit_2013_november]));
var runlength_2014_may = (ee.ImageCollection([deficit_2014_may, deficit_2014_april,deficit_2014_march,deficit_2014_february, deficit_2014_january,deficit_2013_december]));
var runlength_2014_june = (ee.ImageCollection([deficit_2014_june,deficit_2014_may, deficit_2014_april,deficit_2014_march,deficit_2014_february,deficit_2014_january]));
var runlength_2014_july = (ee.ImageCollection([deficit_2014_july,deficit_2014_june,deficit_2014_may,deficit_2014_april,deficit_2014_march,deficit_2014_february]));
var runlength_2014_august = (ee.ImageCollection([deficit_2014_august,deficit_2014_july,deficit_2014_june,deficit_2014_may,deficit_2014_april,deficit_2014_march]));
var runlength_2014_september = (ee.ImageCollection([deficit_2014_september,deficit_2014_august,deficit_2014_july,deficit_2014_june,deficit_2014_may,deficit_2014_april]));
var runlength_2014_october = (ee.ImageCollection([deficit_2014_october,deficit_2014_september,deficit_2014_august,deficit_2014_july,deficit_2014_june,deficit_2014_may]));
var runlength_2014_november = (ee.ImageCollection([deficit_2014_november,deficit_2014_october,deficit_2014_september,deficit_2014_august,deficit_2014_july,deficit_2014_june]));
var runlength_2014_december = (ee.ImageCollection([deficit_2014_december,deficit_2014_november,deficit_2014_october,deficit_2014_september,deficit_2014_august,deficit_2014_july]));


var runlength_2015_january = (ee.ImageCollection([deficit_2015_january, deficit_2014_december,deficit_2014_november,deficit_2014_october,deficit_2014_september,deficit_2014_august]));
var runlength_2015_february = (ee.ImageCollection([deficit_2015_february, deficit_2015_january, deficit_2014_december,deficit_2014_november,deficit_2014_october,deficit_2014_september]));
var runlength_2015_march = (ee.ImageCollection([deficit_2015_march,deficit_2015_february, deficit_2015_january, deficit_2014_december,deficit_2014_november,deficit_2014_october]));
var runlength_2015_april = (ee.ImageCollection([deficit_2015_april,deficit_2015_march,deficit_2015_february, deficit_2015_january, deficit_2014_december,deficit_2014_november]));
var runlength_2015_may = (ee.ImageCollection([deficit_2015_may, deficit_2015_april,deficit_2015_march,deficit_2015_february, deficit_2015_january,deficit_2014_december]));
var runlength_2015_june = (ee.ImageCollection([deficit_2015_june,deficit_2015_may, deficit_2015_april,deficit_2015_march,deficit_2015_february,deficit_2015_january]));
var runlength_2015_july = (ee.ImageCollection([deficit_2015_july,deficit_2015_june,deficit_2015_may,deficit_2015_april,deficit_2015_march,deficit_2015_february]));
var runlength_2015_august = (ee.ImageCollection([deficit_2015_august,deficit_2015_july,deficit_2015_june,deficit_2015_may,deficit_2015_april,deficit_2015_march]));
var runlength_2015_september = (ee.ImageCollection([deficit_2015_september,deficit_2015_august,deficit_2015_july,deficit_2015_june,deficit_2015_may,deficit_2015_april]));
var runlength_2015_october = (ee.ImageCollection([deficit_2015_october,deficit_2015_september,deficit_2015_august,deficit_2015_july,deficit_2015_june,deficit_2015_may]));
var runlength_2015_november = (ee.ImageCollection([deficit_2015_november,deficit_2015_october,deficit_2015_september,deficit_2015_august,deficit_2015_july,deficit_2015_june]));
var runlength_2015_december = (ee.ImageCollection([deficit_2015_december,deficit_2015_november,deficit_2015_october,deficit_2015_september,deficit_2015_august,deficit_2015_july]));



var runlength_2016_january = (ee.ImageCollection([deficit_2016_january, deficit_2015_december,deficit_2015_november,deficit_2015_october,deficit_2015_september,deficit_2015_august]));
var runlength_2016_february = (ee.ImageCollection([deficit_2016_february, deficit_2016_january, deficit_2015_december,deficit_2015_november,deficit_2015_october,deficit_2015_september]));
var runlength_2016_march = (ee.ImageCollection([deficit_2016_march,deficit_2016_february, deficit_2016_january, deficit_2015_december,deficit_2015_november,deficit_2015_october]));
var runlength_2016_april = (ee.ImageCollection([deficit_2016_april,deficit_2016_march,deficit_2016_february, deficit_2016_january, deficit_2015_december,deficit_2015_november]));
var runlength_2016_may = (ee.ImageCollection([deficit_2016_may, deficit_2016_april,deficit_2016_march,deficit_2016_february, deficit_2016_january,deficit_2015_december]));
var runlength_2016_june = (ee.ImageCollection([deficit_2016_june,deficit_2016_may, deficit_2016_april,deficit_2016_march,deficit_2016_february,deficit_2016_january]));
var runlength_2016_july = (ee.ImageCollection([deficit_2016_july,deficit_2016_june,deficit_2016_may,deficit_2016_april,deficit_2016_march,deficit_2016_february]));
var runlength_2016_august = (ee.ImageCollection([deficit_2016_august,deficit_2016_july,deficit_2016_june,deficit_2016_may,deficit_2016_april,deficit_2016_march]));
var runlength_2016_september = (ee.ImageCollection([deficit_2016_september,deficit_2016_august,deficit_2016_july,deficit_2016_june,deficit_2016_may,deficit_2016_april]));
var runlength_2016_october = (ee.ImageCollection([deficit_2016_october,deficit_2016_september,deficit_2016_august,deficit_2016_july,deficit_2016_june,deficit_2016_may]));
var runlength_2016_november = (ee.ImageCollection([deficit_2016_november,deficit_2016_october,deficit_2016_september,deficit_2016_august,deficit_2016_july,deficit_2016_june]));
var runlength_2016_december = (ee.ImageCollection([deficit_2016_december,deficit_2016_november,deficit_2016_october,deficit_2016_september,deficit_2016_august,deficit_2016_july]));


var runlength_2017_january = (ee.ImageCollection([deficit_2017_january, deficit_2016_december,deficit_2016_november,deficit_2016_october,deficit_2016_september,deficit_2016_august]));
var runlength_2017_february = (ee.ImageCollection([deficit_2017_february, deficit_2017_january, deficit_2016_december,deficit_2016_november,deficit_2016_october,deficit_2016_september]));
var runlength_2017_march = (ee.ImageCollection([deficit_2017_march,deficit_2017_february, deficit_2017_january, deficit_2016_december,deficit_2016_november,deficit_2016_october]));
var runlength_2017_april = (ee.ImageCollection([deficit_2017_april,deficit_2017_march,deficit_2017_february, deficit_2017_january, deficit_2016_december,deficit_2016_november]));
var runlength_2017_may = (ee.ImageCollection([deficit_2017_may, deficit_2017_april,deficit_2017_march,deficit_2017_february, deficit_2017_january,deficit_2016_december]));
var runlength_2017_june = (ee.ImageCollection([deficit_2017_june,deficit_2017_may, deficit_2017_april,deficit_2017_march,deficit_2017_february,deficit_2017_january]));
var runlength_2017_july = (ee.ImageCollection([deficit_2017_july,deficit_2017_june,deficit_2017_may,deficit_2017_april,deficit_2017_march,deficit_2017_february]));
var runlength_2017_august = (ee.ImageCollection([deficit_2017_august,deficit_2017_july,deficit_2017_june,deficit_2017_may,deficit_2017_april,deficit_2017_march]));
var runlength_2017_september = (ee.ImageCollection([deficit_2017_september,deficit_2017_august,deficit_2017_july,deficit_2017_june,deficit_2017_may,deficit_2017_april]));
var runlength_2017_october = (ee.ImageCollection([deficit_2017_october,deficit_2017_september,deficit_2017_august,deficit_2017_july,deficit_2017_june,deficit_2017_may]));
var runlength_2017_november = (ee.ImageCollection([deficit_2017_november,deficit_2017_october,deficit_2017_september,deficit_2017_august,deficit_2017_july,deficit_2017_june]));
var runlength_2017_december = (ee.ImageCollection([deficit_2017_december,deficit_2017_november,deficit_2017_october,deficit_2017_september,deficit_2017_august,deficit_2017_july]));


var runlength_2018_january = (ee.ImageCollection([deficit_2018_january, deficit_2017_december,deficit_2017_november,deficit_2017_october,deficit_2017_september,deficit_2017_august]));
var runlength_2018_february = (ee.ImageCollection([deficit_2018_february, deficit_2018_january, deficit_2017_december,deficit_2017_november,deficit_2017_october,deficit_2017_september]));
var runlength_2018_march = (ee.ImageCollection([deficit_2018_march,deficit_2018_february, deficit_2018_january, deficit_2017_december,deficit_2017_november,deficit_2017_october]));
var runlength_2018_april = (ee.ImageCollection([deficit_2018_april,deficit_2018_march,deficit_2018_february, deficit_2018_january, deficit_2017_december,deficit_2017_november]));
var runlength_2018_may = (ee.ImageCollection([deficit_2018_may, deficit_2018_april,deficit_2018_march,deficit_2018_february, deficit_2018_january,deficit_2017_december]));
var runlength_2018_june = (ee.ImageCollection([deficit_2018_june,deficit_2018_may, deficit_2018_april,deficit_2018_march,deficit_2018_february,deficit_2018_january]));
var runlength_2018_july = (ee.ImageCollection([deficit_2018_july,deficit_2018_june,deficit_2018_may,deficit_2018_april,deficit_2018_march,deficit_2018_february]));
var runlength_2018_august = (ee.ImageCollection([deficit_2018_august,deficit_2018_july,deficit_2018_june,deficit_2018_may,deficit_2018_april,deficit_2018_march]));
var runlength_2018_september = (ee.ImageCollection([deficit_2018_september,deficit_2018_august,deficit_2018_july,deficit_2018_june,deficit_2018_may,deficit_2018_april]));
var runlength_2018_october = (ee.ImageCollection([deficit_2018_october,deficit_2018_september,deficit_2018_august,deficit_2018_july,deficit_2018_june,deficit_2018_may]));
var runlength_2018_november = (ee.ImageCollection([deficit_2018_november,deficit_2018_october,deficit_2018_september,deficit_2018_august,deficit_2018_july,deficit_2018_june]));
var runlength_2018_december = (ee.ImageCollection([deficit_2018_december,deficit_2018_november,deficit_2018_october,deficit_2018_september,deficit_2018_august,deficit_2018_july]));


var runlength_2019_january = (ee.ImageCollection([deficit_2019_january, deficit_2018_december,deficit_2018_november,deficit_2018_october,deficit_2018_september,deficit_2018_august]));
var runlength_2019_february = (ee.ImageCollection([deficit_2019_february, deficit_2019_january, deficit_2018_december,deficit_2018_november,deficit_2018_october,deficit_2018_september]));
var runlength_2019_march = (ee.ImageCollection([deficit_2019_march,deficit_2019_february, deficit_2019_january, deficit_2018_december,deficit_2018_november,deficit_2018_october]));
var runlength_2019_april = (ee.ImageCollection([deficit_2019_april,deficit_2019_march,deficit_2019_february, deficit_2019_january, deficit_2018_december,deficit_2018_november]));
var runlength_2019_may = (ee.ImageCollection([deficit_2019_may, deficit_2019_april,deficit_2019_march,deficit_2019_february, deficit_2019_january,deficit_2018_december]));
var runlength_2019_june = (ee.ImageCollection([deficit_2019_june,deficit_2019_may, deficit_2019_april,deficit_2019_march,deficit_2019_february,deficit_2019_january]));
var runlength_2019_july = (ee.ImageCollection([deficit_2019_july,deficit_2019_june,deficit_2019_may,deficit_2019_april,deficit_2019_march,deficit_2019_february]));
var runlength_2019_august = (ee.ImageCollection([deficit_2019_august,deficit_2019_july,deficit_2019_june,deficit_2019_may,deficit_2019_april,deficit_2019_march]));
var runlength_2019_september = (ee.ImageCollection([deficit_2019_september,deficit_2019_august,deficit_2019_july,deficit_2019_june,deficit_2019_may,deficit_2019_april]));
var runlength_2019_october = (ee.ImageCollection([deficit_2019_october,deficit_2019_september,deficit_2019_august,deficit_2019_july,deficit_2019_june,deficit_2019_may]));
var runlength_2019_november = (ee.ImageCollection([deficit_2019_november,deficit_2019_october,deficit_2019_september,deficit_2019_august,deficit_2019_july,deficit_2019_june]));
var runlength_2019_december = (ee.ImageCollection([deficit_2019_december,deficit_2019_november,deficit_2019_october,deficit_2019_september,deficit_2019_august,deficit_2019_july]));


var runlength_2020_january = (ee.ImageCollection([deficit_2020_january, deficit_2019_december,deficit_2019_november,deficit_2019_october,deficit_2019_september,deficit_2019_august]));
var runlength_2020_february = (ee.ImageCollection([deficit_2020_february, deficit_2020_january, deficit_2019_december,deficit_2019_november,deficit_2019_october,deficit_2019_september]));
var runlength_2020_march = (ee.ImageCollection([deficit_2020_march,deficit_2020_february, deficit_2020_january, deficit_2019_december,deficit_2019_november,deficit_2019_october]));
var runlength_2020_april = (ee.ImageCollection([deficit_2020_april,deficit_2020_march,deficit_2020_february, deficit_2020_january, deficit_2019_december,deficit_2019_november]));
var runlength_2020_may = (ee.ImageCollection([deficit_2020_may, deficit_2020_april,deficit_2020_march,deficit_2020_february, deficit_2020_january,deficit_2019_december]));
var runlength_2020_june = (ee.ImageCollection([deficit_2020_june,deficit_2020_may, deficit_2020_april,deficit_2020_march,deficit_2020_february,deficit_2020_january]));
var runlength_2020_july = (ee.ImageCollection([deficit_2020_july,deficit_2020_june,deficit_2020_may,deficit_2020_april,deficit_2020_march,deficit_2020_february]));
var runlength_2020_august = (ee.ImageCollection([deficit_2020_august,deficit_2020_july,deficit_2020_june,deficit_2020_may,deficit_2020_april,deficit_2020_march]));
var runlength_2020_september = (ee.ImageCollection([deficit_2020_september,deficit_2020_august,deficit_2020_july,deficit_2020_june,deficit_2020_may,deficit_2020_april]));
var runlength_2020_october = (ee.ImageCollection([deficit_2020_october,deficit_2020_september,deficit_2020_august,deficit_2020_july,deficit_2020_june,deficit_2020_may]));
var runlength_2020_november = (ee.ImageCollection([deficit_2020_november,deficit_2020_october,deficit_2020_september,deficit_2020_august,deficit_2020_july,deficit_2020_june]));
var runlength_2020_december = (ee.ImageCollection([deficit_2020_december,deficit_2020_november,deficit_2020_october,deficit_2020_september,deficit_2020_august,deficit_2020_july]));


var runlength_2021_january = (ee.ImageCollection([deficit_2021_january, deficit_2020_december,deficit_2020_november,deficit_2020_october,deficit_2020_september,deficit_2020_august]));
var runlength_2021_february = (ee.ImageCollection([deficit_2021_february, deficit_2021_january, deficit_2020_december,deficit_2020_november,deficit_2020_october,deficit_2020_september]));
var runlength_2021_march = (ee.ImageCollection([deficit_2021_march,deficit_2021_february, deficit_2021_january, deficit_2020_december,deficit_2020_november,deficit_2020_october]));
var runlength_2021_april = (ee.ImageCollection([deficit_2021_april,deficit_2021_march,deficit_2021_february, deficit_2021_january, deficit_2020_december,deficit_2020_november]));
var runlength_2021_may = (ee.ImageCollection([deficit_2021_may, deficit_2021_april,deficit_2021_march,deficit_2021_february, deficit_2021_january,deficit_2020_december]));
var runlength_2021_june = (ee.ImageCollection([deficit_2021_june,deficit_2021_may, deficit_2021_april,deficit_2021_march,deficit_2021_february,deficit_2021_january]));
var runlength_2021_july = (ee.ImageCollection([deficit_2021_july,deficit_2021_june,deficit_2021_may,deficit_2021_april,deficit_2021_march,deficit_2021_february]));
var runlength_2021_august = (ee.ImageCollection([deficit_2021_august,deficit_2021_july,deficit_2021_june,deficit_2021_may,deficit_2021_april,deficit_2021_march]));
var runlength_2021_september = (ee.ImageCollection([deficit_2021_september,deficit_2021_august,deficit_2021_july,deficit_2021_june,deficit_2021_may,deficit_2021_april]));
var runlength_2021_october = (ee.ImageCollection([deficit_2021_october,deficit_2021_september,deficit_2021_august,deficit_2021_july,deficit_2021_june,deficit_2021_may]));
var runlength_2021_november = (ee.ImageCollection([deficit_2021_november,deficit_2021_october,deficit_2021_september,deficit_2021_august,deficit_2021_july,deficit_2021_june]));
var runlength_2021_december = (ee.ImageCollection([deficit_2021_december,deficit_2021_november,deficit_2021_october,deficit_2021_september,deficit_2021_august,deficit_2021_july]));



var runlength_2022_january = (ee.ImageCollection([deficit_2022_january,deficit_2021_december,deficit_2021_november,deficit_2021_october,deficit_2021_september,deficit_2021_august]));
var runlength_2022_february = (ee.ImageCollection([deficit_2022_february,deficit_2022_january,deficit_2021_december,deficit_2021_november,deficit_2021_october,deficit_2021_september]));
var runlength_2022_march = (ee.ImageCollection([deficit_2022_march,deficit_2022_february, deficit_2022_january, deficit_2021_december,deficit_2021_november,deficit_2021_october]));
var runlength_2022_april = (ee.ImageCollection([deficit_2022_april,deficit_2022_march,deficit_2022_february, deficit_2022_january, deficit_2021_december,deficit_2021_november]));
var runlength_2022_may = (ee.ImageCollection([deficit_2022_may, deficit_2022_april,deficit_2022_march,deficit_2022_february, deficit_2022_january,deficit_2021_december]));
var runlength_2022_june = (ee.ImageCollection([deficit_2022_june,deficit_2022_may, deficit_2022_april,deficit_2022_march,deficit_2022_february,deficit_2022_january]));
var runlength_2022_july = (ee.ImageCollection([deficit_2022_july,deficit_2022_june,deficit_2022_may, deficit_2022_april,deficit_2022_march,deficit_2022_february]));
var runlength_2022_august = (ee.ImageCollection([deficit_2022_august,deficit_2022_july,deficit_2022_june,deficit_2022_may,deficit_2022_april,deficit_2022_march]));
//end of Grouping the images into a collection of 6 in order to compute the runlength


// A function to compute the runlegth


function drySpells(imgcollection){
  // We're only working with a single axis: #0
  var axis = 0;
  // computes the foward difference of an array image.
  var forwardDifference = function(image) {
    var left = image.arraySlice(0, 0, -1)
    var right = image.arraySlice(0, 1)
    return left.subtract(right)
  }
  
  // Convert to a 2D array-valued image and flatten to 1D using arrayReshape().
  var precipitation = imgcollection.toArray()
  
  precipitation = precipitation.arrayReshape(precipitation.arrayLength(0).toArray(), 1)
  
  // Compute the forward difference
  var difference = forwardDifference(precipitation);
  var ones = ee.Image(ee.Array([1]))
  difference = ones.addBands(difference).toArray(0); // Prepend a 1 to the differences.
  
  
  // Make an index array sized for the length of the data in each pixel.
  var maxSize = imgcollection.size()
  var indexes = ee.Image.constant(ee.Array(ee.List.sequence(0, maxSize)));
  indexes = indexes.arraySlice(axis, 0, precipitation.arrayLength(0));
  
  
  var runStarts = indexes.arrayMask(difference.neq(0))
  var runValues = precipitation.arrayMask(difference.neq(0))
  // Append an extra index to mark the end of the last run.
  var runLengths = runStarts.addBands(precipitation.arrayLengths()).toArray(0);
  var runLengths = forwardDifference(runLengths.multiply(-1));

  var dryRunStarts = runStarts.arrayMask(runValues.eq(0))
  var dryRunLengths = runLengths.arrayMask(runValues.eq(0))
  var maxIndex = dryRunLengths.arrayArgmax().arrayGet(0)
  
  var final_dry_lengths_image = dryRunLengths.arrayGet(maxIndex)
  
  var unmasked_final_dry_lengths_image = final_dry_lengths_image.unmask({sameFootprint: false});
  
  return unmasked_final_dry_lengths_image.clip(som)
  
}

//end of  A function to compute the runlegth

//final runlength calculation. This is for april. Change this to the month you are interested in


var final_runlength_2001_august = drySpells(runlength_2001_august);
var final_runlength_2002_august = drySpells(runlength_2002_august);
var final_runlength_2003_august = drySpells(runlength_2003_august);
var final_runlength_2004_august = drySpells(runlength_2004_august);
var final_runlength_2005_august = drySpells(runlength_2005_august);
var final_runlength_2006_august = drySpells(runlength_2006_august);
var final_runlength_2007_august = drySpells(runlength_2007_august);
var final_runlength_2008_august = drySpells(runlength_2008_august);
var final_runlength_2009_august = drySpells(runlength_2009_august);
var final_runlength_2010_august = drySpells(runlength_2010_august);
var final_runlength_2011_august = drySpells(runlength_2011_august);
var final_runlength_2012_august = drySpells(runlength_2012_august);
var final_runlength_2013_august = drySpells(runlength_2013_august);
var final_runlength_2014_august = drySpells(runlength_2014_august);
var final_runlength_2015_august = drySpells(runlength_2015_august);
var final_runlength_2016_august = drySpells(runlength_2016_august);
var final_runlength_2017_august = drySpells(runlength_2017_august);
var final_runlength_2018_august = drySpells(runlength_2018_august);
var final_runlength_2019_august = drySpells(runlength_2019_august);
var final_runlength_2020_august = drySpells(runlength_2020_august);
var final_runlength_2021_august = drySpells(runlength_2021_august);
var final_runlength_2022_august = drySpells(runlength_2022_august);

//end of final runlength calculation



//modified runlength (modified RL =(Rlmax+1)-RL). This is for august. Change this to the month you are interested in

var modified_runlength_august_2001 = ((final_runlength_2001_august).multiply(-1)).add(7)
var modified_runlength_august_2002 = ((final_runlength_2002_august).multiply(-1)).add(7)
var modified_runlength_august_2003 = ((final_runlength_2003_august).multiply(-1)).add(7)
var modified_runlength_august_2004 = ((final_runlength_2004_august).multiply(-1)).add(7)
var modified_runlength_august_2005 = ((final_runlength_2005_august).multiply(-1)).add(7)
var modified_runlength_august_2006 = ((final_runlength_2006_august).multiply(-1)).add(7)
var modified_runlength_august_2007 = ((final_runlength_2007_august).multiply(-1)).add(7)
var modified_runlength_august_2008 = ((final_runlength_2008_august).multiply(-1)).add(7)
var modified_runlength_august_2009 = ((final_runlength_2009_august).multiply(-1)).add(7)
var modified_runlength_august_2010 = ((final_runlength_2010_august).multiply(-1)).add(7)
var modified_runlength_august_2011 = ((final_runlength_2011_august).multiply(-1)).add(7)
var modified_runlength_august_2012 = ((final_runlength_2012_august).multiply(-1)).add(7)
var modified_runlength_august_2013 = ((final_runlength_2013_august).multiply(-1)).add(7)
var modified_runlength_august_2014 = ((final_runlength_2014_august).multiply(-1)).add(7)
var modified_runlength_august_2015 = ((final_runlength_2015_august).multiply(-1)).add(7)
var modified_runlength_august_2016 = ((final_runlength_2016_august).multiply(-1)).add(7)
var modified_runlength_august_2017 = ((final_runlength_2017_august).multiply(-1)).add(7)
var modified_runlength_august_2018 = ((final_runlength_2018_august).multiply(-1)).add(7)
var modified_runlength_august_2019 = ((final_runlength_2019_august).multiply(-1)).add(7)
var modified_runlength_august_2020 = ((final_runlength_2020_august).multiply(-1)).add(7)
var modified_runlength_august_2021 = ((final_runlength_2021_august).multiply(-1)).add(7)
var modified_runlength_august_2022 = ((final_runlength_2022_august).multiply(-1)).add(7)

//end of modified runlength (modified RL =(Rlmax+1)-RL)

//mean values for the modified runlenths, per month. This is for august. Change this to the month you are interested in

var mean_modified_RL_august = (ee.ImageCollection([modified_runlength_august_2001,modified_runlength_august_2002, modified_runlength_august_2003,modified_runlength_august_2004,
modified_runlength_august_2005,modified_runlength_august_2006,modified_runlength_august_2007,modified_runlength_august_2008,modified_runlength_august_2009,
modified_runlength_august_2010,modified_runlength_august_2011,modified_runlength_august_2012,modified_runlength_august_2013,modified_runlength_august_2014,
modified_runlength_august_2015,modified_runlength_august_2016,modified_runlength_august_2017,modified_runlength_august_2018,modified_runlength_august_2019,
modified_runlength_august_2020,modified_runlength_august_2021,modified_runlength_august_2022])).mean();



//calculating PDI. This is for august. Change this to the month you are interested in



var TDI_august_2022 = ((p_mod_2022_08_runlgth_average).divide(p_mod_august_runlgth_mean)).multiply(((modified_runlength_august_2022).divide(mean_modified_RL_august)).sqrt())










// Reclassifyng the PDI values in to 5 groups as displayed in the CDI web application. below 0.4, 0.4 to 0.6, 0.6 to 0.8, 0.8 to 1 and aove 1


var pd_reclass = ['1) root 9999 9999 9999',
'2) LST_Day_1km_mean<=0.4 9999 9999 1 *',
'3) LST_Day_1km_mean>0.4 9999 9999 9999',
'6) LST_Day_1km_mean<=0.6 9999 9999 2 *',
'7) LST_Day_1km_mean>0.6 9999 9999 9999',
'14) LST_Day_1km_mean<=0.8 9999 9999 3 *',
'15) LST_Day_1km_mean>0.8 9999 9999 9999',
'30) LST_Day_1km_mean<=1 9999 9999 4 *',
'31) LST_Day_1km_mean>1 9999 9999 5 *'].join("\n");



var tdi_classifier = ee.Classifier.decisionTree(pd_reclass);

var tdi_2022_august_reclass = (TDI_august_2022).select('LST_Day_1km_mean').classify(tdi_classifier);




//Add to map


var cdiVis = {
  min: 1,
  max: 5,
  palette: ['#930905', '#d03a27', '#e6987b', '#ffffbe', '#d2fbd2'],
};


Map.centerObject(som, 8);
Map.addLayer(tdi_2022_august_reclass.clip(som), cdiVis, "TDI_august_2022");

/*Map.addLayer(p_mod_2022_02_runlgth_average, {min:0, max:6}, "p_mod_2002_02_runlgth_average")

Map.addLayer(p_mod_august_mean, {min:0, max:6}, "p_mod_august_mean")



Map.addLayer(modified_runlength_august_2022, {min:0, max:6}, "modified_runlength_august_2002")

Map.addLayer(mean_modified_RL_august, {min:0, max:6}, "mean_modified_RL_august")


Map.addLayer(TDI_august_2022, {min:0, max:6}, "mean_modified_RL_august")*/

//Exporting to drive

Export.image.toDrive({
  image:tdi_2022_august_reclass.clip(som),
  description:'tdi_2022_august_reclass_EA',
  scale:5566,
  folder:'cdi',
  maxPixels:1e13,
  region:som
});


Export.image.toDrive({
  image:TDI_august_2022.clip(som),
  description:'TDI_august_2022_RAW_EA',
  scale:5566,
  folder:'cdi',
  maxPixels:1e13,
  region:som
});

/*Export.image.toDrive({
  image:TDI_feb_2022.clip(som),
  description:'tdi_2022_feb_RAW_version10',
  scale:5566,
  folder:'earthengine',
  maxPixels:1e13,
  region:som
});*/

