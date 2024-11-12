var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Landmarks_1 = new ol.format.GeoJSON();
var features_Landmarks_1 = format_Landmarks_1.readFeatures(json_Landmarks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmarks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmarks_1.addFeatures(features_Landmarks_1);
var lyr_Landmarks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landmarks_1, 
                style: style_Landmarks_1,
                popuplayertitle: "Landmarks",
                interactive: true,
                title: '<img src="styles/legend/Landmarks_1.png" /> Landmarks'
            });
var format_Emergency_Services_2 = new ol.format.GeoJSON();
var features_Emergency_Services_2 = format_Emergency_Services_2.readFeatures(json_Emergency_Services_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emergency_Services_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emergency_Services_2.addFeatures(features_Emergency_Services_2);
var lyr_Emergency_Services_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emergency_Services_2, 
                style: style_Emergency_Services_2,
                popuplayertitle: "Emergency_Services",
                interactive: true,
    title: 'Emergency_Services<br />\
    <img src="styles/legend/Emergency_Services_2_0.png" /> AMBULANCE STATION<br />\
    <img src="styles/legend/Emergency_Services_2_1.png" /> CLINIC<br />\
    <img src="styles/legend/Emergency_Services_2_2.png" /> FIRE STATION<br />\
    <img src="styles/legend/Emergency_Services_2_3.png" /> HELIPORT<br />\
    <img src="styles/legend/Emergency_Services_2_4.png" /> HOSPITAL<br />\
    <img src="styles/legend/Emergency_Services_2_5.png" /> HOSPITAL CLINIC<br />\
    <img src="styles/legend/Emergency_Services_2_6.png" /> POLICE STATION<br />\
    <img src="styles/legend/Emergency_Services_2_7.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Landmarks_1.setVisible(true);lyr_Emergency_Services_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Landmarks_1,lyr_Emergency_Services_2];
lyr_Landmarks_1.set('fieldAliases', {'LANDMARKID': 'LANDMARKID', 'LANDMARK': 'LANDMARK', 'CATEGORY': 'CATEGORY', 'SUBCATEGOR': 'SUBCATEGOR', 'SUBSUBCATE': 'SUBSUBCATE', 'MUNICIPALI': 'MUNICIPALI', 'MUNICIPAL_': 'MUNICIPAL_', 'CREATE_DAT': 'CREATE_DAT', 'UPDATE_DAT': 'UPDATE_DAT', 'SOURCE': 'SOURCE', 'SOURCE_DAT': 'SOURCE_DAT', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'CIVIC_NO': 'CIVIC_NO', 'UNIT_NO': 'UNIT_NO', 'STREET': 'STREET', 'BUILDINGID': 'BUILDINGID', 'WARDID': 'WARDID', 'PLANNINGCO': 'PLANNINGCO', 'MAPLABEL1': 'MAPLABEL1', 'MAPLABEL2': 'MAPLABEL2', 'MAPLABEL3': 'MAPLABEL3', 'ON_CALL': 'ON_CALL', 'DIVISION_R': 'DIVISION_R', 'OWNERSHIP': 'OWNERSHIP', 'STATUS': 'STATUS', 'HYPERLINK': 'HYPERLINK', 'STATUS_DAT': 'STATUS_DAT', 'MAP_LABEL': 'MAP_LABEL', });
lyr_Emergency_Services_2.set('fieldAliases', {'LANDMARKID': 'LANDMARKID', 'LANDMARK': 'LANDMARK', 'CATEGORY': 'CATEGORY', 'CIVIC_NO': 'CIVIC_NO', 'STREET': 'STREET', 'OWNERSHIP': 'OWNERSHIP', 'CREATE_DAT': 'CREATE_DAT', 'UPDATE_DAT': 'UPDATE_DAT', 'SOURCE': 'SOURCE', 'SOURCE_DAT': 'SOURCE_DAT', 'SUBCATEGOR': 'SUBCATEGOR', 'STATUS': 'STATUS', 'STATUS_DAT': 'STATUS_DAT', 'MUNICIPAL_': 'MUNICIPAL_', 'COMMON_LOC': 'COMMON_LOC', 'LOCATION_D': 'LOCATION_D', 'ON_CALL': 'ON_CALL', 'DIVISION_R': 'DIVISION_R', 'ASSOCIATED': 'ASSOCIATED', 'CONSTRUCTI': 'CONSTRUCTI', 'MAP_LABEL': 'MAP_LABEL', });
lyr_Landmarks_1.set('fieldImages', {'LANDMARKID': 'TextEdit', 'LANDMARK': 'TextEdit', 'CATEGORY': 'TextEdit', 'SUBCATEGOR': 'TextEdit', 'SUBSUBCATE': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'MUNICIPAL_': 'TextEdit', 'CREATE_DAT': 'DateTime', 'UPDATE_DAT': 'DateTime', 'SOURCE': 'TextEdit', 'SOURCE_DAT': 'DateTime', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'CIVIC_NO': 'TextEdit', 'UNIT_NO': 'TextEdit', 'STREET': 'TextEdit', 'BUILDINGID': 'TextEdit', 'WARDID': 'Range', 'PLANNINGCO': 'Range', 'MAPLABEL1': 'TextEdit', 'MAPLABEL2': 'TextEdit', 'MAPLABEL3': 'TextEdit', 'ON_CALL': 'TextEdit', 'DIVISION_R': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'STATUS': 'TextEdit', 'HYPERLINK': 'TextEdit', 'STATUS_DAT': 'DateTime', 'MAP_LABEL': 'TextEdit', });
lyr_Emergency_Services_2.set('fieldImages', {'LANDMARKID': 'TextEdit', 'LANDMARK': 'TextEdit', 'CATEGORY': 'TextEdit', 'CIVIC_NO': 'TextEdit', 'STREET': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'CREATE_DAT': 'DateTime', 'UPDATE_DAT': 'DateTime', 'SOURCE': 'TextEdit', 'SOURCE_DAT': 'DateTime', 'SUBCATEGOR': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_DAT': 'DateTime', 'MUNICIPAL_': 'TextEdit', 'COMMON_LOC': 'TextEdit', 'LOCATION_D': 'TextEdit', 'ON_CALL': 'TextEdit', 'DIVISION_R': 'TextEdit', 'ASSOCIATED': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'MAP_LABEL': 'TextEdit', });
lyr_Landmarks_1.set('fieldLabels', {'LANDMARKID': 'no label', 'LANDMARK': 'inline label - visible with data', 'CATEGORY': 'inline label - always visible', 'SUBCATEGOR': 'no label', 'SUBSUBCATE': 'no label', 'MUNICIPALI': 'no label', 'MUNICIPAL_': 'no label', 'CREATE_DAT': 'no label', 'UPDATE_DAT': 'no label', 'SOURCE': 'no label', 'SOURCE_DAT': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'CIVIC_NO': 'no label', 'UNIT_NO': 'no label', 'STREET': 'no label', 'BUILDINGID': 'no label', 'WARDID': 'no label', 'PLANNINGCO': 'no label', 'MAPLABEL1': 'no label', 'MAPLABEL2': 'no label', 'MAPLABEL3': 'no label', 'ON_CALL': 'no label', 'DIVISION_R': 'no label', 'OWNERSHIP': 'no label', 'STATUS': 'no label', 'HYPERLINK': 'no label', 'STATUS_DAT': 'no label', 'MAP_LABEL': 'no label', });
lyr_Emergency_Services_2.set('fieldLabels', {'LANDMARKID': 'no label', 'LANDMARK': 'inline label - always visible', 'CATEGORY': 'inline label - always visible', 'CIVIC_NO': 'inline label - visible with data', 'STREET': 'inline label - visible with data', 'OWNERSHIP': 'inline label - visible with data', 'CREATE_DAT': 'no label', 'UPDATE_DAT': 'no label', 'SOURCE': 'no label', 'SOURCE_DAT': 'no label', 'SUBCATEGOR': 'no label', 'STATUS': 'no label', 'STATUS_DAT': 'no label', 'MUNICIPAL_': 'no label', 'COMMON_LOC': 'no label', 'LOCATION_D': 'no label', 'ON_CALL': 'no label', 'DIVISION_R': 'no label', 'ASSOCIATED': 'no label', 'CONSTRUCTI': 'no label', 'MAP_LABEL': 'no label', });
lyr_Emergency_Services_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});