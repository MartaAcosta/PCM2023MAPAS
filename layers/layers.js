var wms_layers = [];


        var lyr_bw_0 = new ol.layer.Tile({
            'title': 'bw',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
            })
        });
var format_CAPAVOTOSPORCENTAJESOK_1 = new ol.format.GeoJSON();
var features_CAPAVOTOSPORCENTAJESOK_1 = format_CAPAVOTOSPORCENTAJESOK_1.readFeatures(json_CAPAVOTOSPORCENTAJESOK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPAVOTOSPORCENTAJESOK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPAVOTOSPORCENTAJESOK_1.addFeatures(features_CAPAVOTOSPORCENTAJESOK_1);
var lyr_CAPAVOTOSPORCENTAJESOK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAPAVOTOSPORCENTAJESOK_1, 
                style: style_CAPAVOTOSPORCENTAJESOK_1,
                interactive: true,
    title: 'CAPAVOTOSPORCENTAJESOK<br />\
    <img src="styles/legend/CAPAVOTOSPORCENTAJESOK_1_0.png" /> 0 - 4<br />\
    <img src="styles/legend/CAPAVOTOSPORCENTAJESOK_1_1.png" /> 4 - 8<br />\
    <img src="styles/legend/CAPAVOTOSPORCENTAJESOK_1_2.png" /> 8 - 12<br />\
    <img src="styles/legend/CAPAVOTOSPORCENTAJESOK_1_3.png" /> 12 - 28<br />'
        });
var format_mercado_2 = new ol.format.GeoJSON();
var features_mercado_2 = format_mercado_2.readFeatures(json_mercado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mercado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mercado_2.addFeatures(features_mercado_2);
var lyr_mercado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mercado_2, 
                style: style_mercado_2,
                interactive: true,
                title: '<img src="styles/legend/mercado_2.png" /> mercado'
            });
var format_mercadillos_3 = new ol.format.GeoJSON();
var features_mercadillos_3 = format_mercadillos_3.readFeatures(json_mercadillos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mercadillos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mercadillos_3.addFeatures(features_mercadillos_3);
var lyr_mercadillos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mercadillos_3, 
                style: style_mercadillos_3,
                interactive: true,
                title: '<img src="styles/legend/mercadillos_3.png" /> mercadillos'
            });
var format_bocas_4 = new ol.format.GeoJSON();
var features_bocas_4 = format_bocas_4.readFeatures(json_bocas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bocas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bocas_4.addFeatures(features_bocas_4);
var lyr_bocas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bocas_4, 
                style: style_bocas_4,
                interactive: true,
                title: '<img src="styles/legend/bocas_4.png" /> bocas'
            });
var format_parques_5 = new ol.format.GeoJSON();
var features_parques_5 = format_parques_5.readFeatures(json_parques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parques_5.addFeatures(features_parques_5);
var lyr_parques_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parques_5, 
                style: style_parques_5,
                interactive: true,
                title: '<img src="styles/legend/parques_5.png" /> parques'
            });
var format_estcerca_6 = new ol.format.GeoJSON();
var features_estcerca_6 = format_estcerca_6.readFeatures(json_estcerca_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estcerca_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estcerca_6.addFeatures(features_estcerca_6);
var lyr_estcerca_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estcerca_6, 
                style: style_estcerca_6,
                interactive: true,
                title: '<img src="styles/legend/estcerca_6.png" /> estcerca'
            });

lyr_bw_0.setVisible(true);lyr_CAPAVOTOSPORCENTAJESOK_1.setVisible(true);lyr_mercado_2.setVisible(true);lyr_mercadillos_3.setVisible(true);lyr_bocas_4.setVisible(true);lyr_parques_5.setVisible(true);lyr_estcerca_6.setVisible(true);
var layersList = [lyr_bw_0,lyr_CAPAVOTOSPORCENTAJESOK_1,lyr_mercado_2,lyr_mercadillos_3,lyr_bocas_4,lyr_parques_5,lyr_estcerca_6];
lyr_CAPAVOTOSPORCENTAJESOK_1.set('fieldAliases', {'fid': 'fid', 'CUSEC': 'CUSEC', 'CUMUN': 'CUMUN', 'CSEC': 'CSEC', 'CDIS': 'CDIS', 'CMUN': 'CMUN', 'CPRO': 'CPRO', 'CCA': 'CCA', 'CUDIS': 'CUDIS', 'CLAU2': 'CLAU2', 'NPRO': 'NPRO', 'NCA': 'NCA', 'CNUT0': 'CNUT0', 'CNUT1': 'CNUT1', 'CNUT2': 'CNUT2', 'CNUT3': 'CNUT3', 'NMUN': 'NMUN', 'rentaporseccion3_RBH15-18': 'rentaporseccion3_RBH15-18', 'rentaporseccion3_nombres': 'rentaporseccion3_nombres', '2021_field_1': '2021_field_1', '2021_censo_inicial2': '2021_censo_inicial2', '2021_MM2': '2021_MM2', '2021_PODEMOSIU2': '2021_PODEMOSIU2', '2021_PSOE2': '2021_PSOE2', '2021_PP2': '2021_PP2', '2021_Cs2': '2021_Cs2', '2021_VOX2': '2021_VOX2', '2021_votos_total2': '2021_votos_total2', '2021_electores2': '2021_electores2', '2021_votos_electores2': '2021_votos_electores2', '2021_2019_field_1': '2021_2019_field_1', '2021_2019_censo_inicial2': '2021_2019_censo_inicial2', '2021_2019_MM2': '2021_2019_MM2', '2021_2019_PODEMOSIU2': '2021_2019_PODEMOSIU2', '2021_2019_PSOE2': '2021_2019_PSOE2', '2021_2019_PP2': '2021_2019_PP2', '2021_2019_CS2': '2021_2019_CS2', '2021_2019_VOX2': '2021_2019_VOX2', '2021_2019_votos_total2': '2021_2019_votos_total2', '2021_2019_electores2': '2021_2019_electores2', '2021_2019_votos_electores2': '2021_2019_votos_electores2', 'CL': 'CL', '2021_ABSTENCION': '2021_ABSTENCION', '2019_ABSTENCION': '2019_ABSTENCION', '2021_ABSPERCENT': '2021_ABSPERCENT', '2019_ABSPERCENT': '2019_ABSPERCENT', '2021_VOTOPODEMOSPERCENT': '2021_VOTOPODEMOSPERCENT', '2019_VOTOPODEMOSPERCENT': '2019_VOTOPODEMOSPERCENT', 'EVOLPODEMOS_PERCENT': 'EVOLPODEMOS_PERCENT', 'EVOLPODEMOS': 'EVOLPODEMOS', 'EVOL_ABSTENCION': 'EVOL_ABSTENCION', 'EVOL_ABSTENCION_PERCENT': 'EVOL_ABSTENCION_PERCENT', 'EVOLMM': 'EVOLMM', '2021_MMPERCENT': '2021_MMPERCENT', '2019_MMPERCENT': '2019_MMPERCENT', 'EVOL_MMPERCENT': 'EVOL_MMPERCENT', 'EVOLPSOE': 'EVOLPSOE', '2019_PSOE': '2019_PSOE', '2021_PSOEPERCENT ': '2021_PSOEPERCENT ', 'EVOLPSOE_PERCENT': 'EVOLPSOE_PERCENT', 'RAZON_PODMM_2021': 'RAZON_PODMM_2021', 'RAZON_PODIZQ_2021': 'RAZON_PODIZQ_2021', });
lyr_mercado_2.set('fieldAliases', {'CODIGO2': 'CODIGO2', 'CMUN': 'CMUN', 'MUNICIPIO': 'MUNICIPIO', 'ETIQUETA': 'ETIQUETA', 'DIRECCION': 'DIRECCION', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'CD_VIAL': 'CD_VIAL', });
lyr_mercadillos_3.set('fieldAliases', {'CMUN': 'CMUN', 'NOMBRE': 'NOMBRE', 'DIRECCI�N': 'DIRECCI�N', 'HORARIO': 'HORARIO', 'CODIGO2': 'CODIGO2', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'COD_SUCA': 'COD_SUCA', });
lyr_bocas_4.set('fieldAliases', {'ESTACION': 'ESTACION', 'LINEAS': 'LINEAS', 'SALIDA': 'SALIDA', 'DIRECCION': 'DIRECCION', 'MUNICIPIO': 'MUNICIPIO', 'CD_MUNI': 'CD_MUNI', 'HORARIO': 'HORARIO', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'COD_SUCA': 'COD_SUCA', });
lyr_parques_5.set('fieldAliases', {'CODIGO2': 'CODIGO2', 'MUNICIPIO': 'MUNICIPIO', 'ETIQUETA': 'ETIQUETA', 'DIRECCION': 'DIRECCION', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'CMUN': 'CMUN', 'COD_SUCA': 'COD_SUCA', });
lyr_estcerca_6.set('fieldAliases', {'LINEA': 'LINEA', 'MUNICIPIO': 'MUNICIPIO', 'CMUN': 'CMUN', 'CONEXION': 'CONEXION', 'ETIQUETA': 'ETIQUETA', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'COD_SUCA': 'COD_SUCA', });
lyr_CAPAVOTOSPORCENTAJESOK_1.set('fieldImages', {'fid': 'TextEdit', 'CUSEC': 'TextEdit', 'CUMUN': 'TextEdit', 'CSEC': 'TextEdit', 'CDIS': 'TextEdit', 'CMUN': 'TextEdit', 'CPRO': 'TextEdit', 'CCA': 'TextEdit', 'CUDIS': 'TextEdit', 'CLAU2': 'TextEdit', 'NPRO': 'TextEdit', 'NCA': 'TextEdit', 'CNUT0': 'TextEdit', 'CNUT1': 'TextEdit', 'CNUT2': 'TextEdit', 'CNUT3': 'TextEdit', 'NMUN': 'TextEdit', 'rentaporseccion3_RBH15-18': 'TextEdit', 'rentaporseccion3_nombres': 'TextEdit', '2021_field_1': 'TextEdit', '2021_censo_inicial2': 'TextEdit', '2021_MM2': 'TextEdit', '2021_PODEMOSIU2': 'TextEdit', '2021_PSOE2': 'TextEdit', '2021_PP2': 'TextEdit', '2021_Cs2': 'TextEdit', '2021_VOX2': 'TextEdit', '2021_votos_total2': 'TextEdit', '2021_electores2': 'TextEdit', '2021_votos_electores2': 'TextEdit', '2021_2019_field_1': 'TextEdit', '2021_2019_censo_inicial2': 'TextEdit', '2021_2019_MM2': 'TextEdit', '2021_2019_PODEMOSIU2': 'TextEdit', '2021_2019_PSOE2': 'TextEdit', '2021_2019_PP2': 'TextEdit', '2021_2019_CS2': 'TextEdit', '2021_2019_VOX2': 'TextEdit', '2021_2019_votos_total2': 'TextEdit', '2021_2019_electores2': 'TextEdit', '2021_2019_votos_electores2': 'TextEdit', 'CL': 'TextEdit', '2021_ABSTENCION': 'Range', '2019_ABSTENCION': 'Range', '2021_ABSPERCENT': 'Range', '2019_ABSPERCENT': 'Range', '2021_VOTOPODEMOSPERCENT': 'Range', '2019_VOTOPODEMOSPERCENT': 'Range', 'EVOLPODEMOS_PERCENT': 'Range', 'EVOLPODEMOS': 'Range', 'EVOL_ABSTENCION': 'Range', 'EVOL_ABSTENCION_PERCENT': 'Range', 'EVOLMM': 'Range', '2021_MMPERCENT': 'Range', '2019_MMPERCENT': 'Range', 'EVOL_MMPERCENT': 'Range', 'EVOLPSOE': 'Range', '2019_PSOE': 'Range', '2021_PSOEPERCENT ': 'Range', 'EVOLPSOE_PERCENT': 'Range', 'RAZON_PODMM_2021': 'TextEdit', 'RAZON_PODIZQ_2021': 'TextEdit', });
lyr_mercado_2.set('fieldImages', {'CODIGO2': 'Range', 'CMUN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'DIRECCION': 'TextEdit', 'UTM_X': 'TextEdit', 'UTM_Y': 'TextEdit', 'CD_VIAL': 'TextEdit', });
lyr_mercadillos_3.set('fieldImages', {'CMUN': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCI�N': 'TextEdit', 'HORARIO': 'TextEdit', 'CODIGO2': 'TextEdit', 'UTM_X': 'TextEdit', 'UTM_Y': 'TextEdit', 'COD_SUCA': 'TextEdit', });
lyr_bocas_4.set('fieldImages', {'ESTACION': 'TextEdit', 'LINEAS': 'TextEdit', 'SALIDA': 'TextEdit', 'DIRECCION': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CD_MUNI': 'TextEdit', 'HORARIO': 'TextEdit', 'UTM_X': 'TextEdit', 'UTM_Y': 'TextEdit', 'COD_SUCA': 'TextEdit', });
lyr_parques_5.set('fieldImages', {'CODIGO2': 'Range', 'MUNICIPIO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'DIRECCION': 'TextEdit', 'UTM_X': 'TextEdit', 'UTM_Y': 'TextEdit', 'CMUN': 'TextEdit', 'COD_SUCA': 'TextEdit', });
lyr_estcerca_6.set('fieldImages', {'LINEA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CMUN': 'TextEdit', 'CONEXION': 'TextEdit', 'ETIQUETA': 'TextEdit', 'UTM_X': 'Range', 'UTM_Y': 'Range', 'COD_SUCA': 'TextEdit', });
lyr_CAPAVOTOSPORCENTAJESOK_1.set('fieldLabels', {'fid': 'no label', 'CUSEC': 'no label', 'CUMUN': 'no label', 'CSEC': 'no label', 'CDIS': 'no label', 'CMUN': 'no label', 'CPRO': 'no label', 'CCA': 'no label', 'CUDIS': 'no label', 'CLAU2': 'no label', 'NPRO': 'no label', 'NCA': 'no label', 'CNUT0': 'no label', 'CNUT1': 'no label', 'CNUT2': 'no label', 'CNUT3': 'no label', 'NMUN': 'no label', 'rentaporseccion3_RBH15-18': 'no label', 'rentaporseccion3_nombres': 'no label', '2021_field_1': 'no label', '2021_censo_inicial2': 'no label', '2021_MM2': 'no label', '2021_PODEMOSIU2': 'no label', '2021_PSOE2': 'no label', '2021_PP2': 'no label', '2021_Cs2': 'no label', '2021_VOX2': 'no label', '2021_votos_total2': 'no label', '2021_electores2': 'no label', '2021_votos_electores2': 'no label', '2021_2019_field_1': 'no label', '2021_2019_censo_inicial2': 'no label', '2021_2019_MM2': 'no label', '2021_2019_PODEMOSIU2': 'no label', '2021_2019_PSOE2': 'no label', '2021_2019_PP2': 'no label', '2021_2019_CS2': 'no label', '2021_2019_VOX2': 'no label', '2021_2019_votos_total2': 'no label', '2021_2019_electores2': 'no label', '2021_2019_votos_electores2': 'no label', 'CL': 'no label', '2021_ABSTENCION': 'no label', '2019_ABSTENCION': 'no label', '2021_ABSPERCENT': 'no label', '2019_ABSPERCENT': 'no label', '2021_VOTOPODEMOSPERCENT': 'no label', '2019_VOTOPODEMOSPERCENT': 'no label', 'EVOLPODEMOS_PERCENT': 'no label', 'EVOLPODEMOS': 'no label', 'EVOL_ABSTENCION': 'no label', 'EVOL_ABSTENCION_PERCENT': 'no label', 'EVOLMM': 'no label', '2021_MMPERCENT': 'no label', '2019_MMPERCENT': 'no label', 'EVOL_MMPERCENT': 'no label', 'EVOLPSOE': 'no label', '2019_PSOE': 'no label', '2021_PSOEPERCENT ': 'no label', 'EVOLPSOE_PERCENT': 'no label', 'RAZON_PODMM_2021': 'no label', 'RAZON_PODIZQ_2021': 'no label', });
lyr_mercado_2.set('fieldLabels', {'CODIGO2': 'no label', 'CMUN': 'no label', 'MUNICIPIO': 'no label', 'ETIQUETA': 'no label', 'DIRECCION': 'no label', 'UTM_X': 'no label', 'UTM_Y': 'no label', 'CD_VIAL': 'no label', });
lyr_mercadillos_3.set('fieldLabels', {'CMUN': 'no label', 'NOMBRE': 'no label', 'DIRECCI�N': 'no label', 'HORARIO': 'no label', 'CODIGO2': 'no label', 'UTM_X': 'no label', 'UTM_Y': 'no label', 'COD_SUCA': 'no label', });
lyr_bocas_4.set('fieldLabels', {'ESTACION': 'no label', 'LINEAS': 'no label', 'SALIDA': 'no label', 'DIRECCION': 'no label', 'MUNICIPIO': 'no label', 'CD_MUNI': 'no label', 'HORARIO': 'no label', 'UTM_X': 'no label', 'UTM_Y': 'no label', 'COD_SUCA': 'no label', });
lyr_parques_5.set('fieldLabels', {'CODIGO2': 'no label', 'MUNICIPIO': 'no label', 'ETIQUETA': 'no label', 'DIRECCION': 'no label', 'UTM_X': 'no label', 'UTM_Y': 'no label', 'CMUN': 'no label', 'COD_SUCA': 'no label', });
lyr_estcerca_6.set('fieldLabels', {'LINEA': 'no label', 'MUNICIPIO': 'no label', 'CMUN': 'no label', 'CONEXION': 'no label', 'ETIQUETA': 'no label', 'UTM_X': 'no label', 'UTM_Y': 'no label', 'COD_SUCA': 'no label', });
lyr_estcerca_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});