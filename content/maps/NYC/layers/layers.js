var wms_layers = [];

var format_Boroughs_0 = new ol.format.GeoJSON();
var features_Boroughs_0 = format_Boroughs_0.readFeatures(json_Boroughs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boroughs_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boroughs_0.addFeatures(features_Boroughs_0);
var lyr_Boroughs_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boroughs_0, 
                style: style_Boroughs_0,
                popuplayertitle: 'Boroughs',
                interactive: false,
                title: '<img src="styles/legend/Boroughs_0.png" /> Boroughs'
            });

lyr_Boroughs_0.setVisible(true);
var layersList = [lyr_Boroughs_0];
lyr_Boroughs_0.set('fieldAliases', {'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boroughs_0.set('fieldImages', {'BoroCode': 'Range', 'BoroName': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Boroughs_0.set('fieldLabels', {'BoroCode': 'no label', 'BoroName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Boroughs_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});