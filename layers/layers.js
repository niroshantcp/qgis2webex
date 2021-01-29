var wms_layers = [];

        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_District_1.addFeatures(features_District_1);var lyr_District_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_1, 
                style: style_District_1,
                title: '<img src="styles/legend/District_1.png" /> District'
            });var format_DSD_2 = new ol.format.GeoJSON();
var features_DSD_2 = format_DSD_2.readFeatures(json_DSD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSD_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_DSD_2.addFeatures(features_DSD_2);var lyr_DSD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DSD_2, 
                style: style_DSD_2,
                title: '<img src="styles/legend/DSD_2.png" /> DSD'
            });var format_GND_3 = new ol.format.GeoJSON();
var features_GND_3 = format_GND_3.readFeatures(json_GND_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GND_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GND_3.addFeatures(features_GND_3);var lyr_GND_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GND_3, 
                style: style_GND_3,
                title: '<img src="styles/legend/GND_3.png" /> GND'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_District_1.setVisible(true);lyr_DSD_2.setVisible(true);lyr_GND_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_District_1,lyr_DSD_2,lyr_GND_3];
lyr_District_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_DSD_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Area': 'Area', });
lyr_GND_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'GND_C': 'GND_C', 'DSDCODE4': 'DSDCODE4', 'GNDCODE7': 'GNDCODE7', 'GNDPCODE5': 'GNDPCODE5', 'GNDPCODE3': 'GNDPCODE3', });
lyr_District_1.set('fieldImages', {'PROVINCE_N': '', 'Area': '', 'District': '', 'Sinhalese': '', 'SL_Tamils': '', 'Ind_Tamils': '', 'Moor': '', 'Burgher': '', 'Malay': '', 'Other': '', 'Male': '', 'Female': '', 'Pop1963': '', 'Pop1971': '', 'Pop1981_': '', 'Pop2001_': '', 'Pop2012': '', 'Sin_2012': '', 'In_Tam2012': '', 'Sl_Tam2012': '', 'Mus_2012': '', 'Other_2012': '', });
lyr_DSD_2.set('fieldImages', {'PROVINCE_N': '', 'DCODE': '', 'DIST': '', 'CODE': '', 'DIVISEC': '', 'Area': '', });
lyr_GND_3.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'GND_N': '', 'GND_C': '', 'DSDCODE4': '', 'GNDCODE7': '', 'GNDPCODE5': '', 'GNDPCODE3': '', });
lyr_District_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_DSD_2.set('fieldLabels', {'PROVINCE_N': 'no label', 'DCODE': 'no label', 'DIST': 'no label', 'CODE': 'no label', 'DIVISEC': 'no label', 'Area': 'no label', });
lyr_GND_3.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', 'GND_C': 'no label', 'DSDCODE4': 'no label', 'GNDCODE7': 'no label', 'GNDPCODE5': 'no label', 'GNDPCODE3': 'no label', });
lyr_GND_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});