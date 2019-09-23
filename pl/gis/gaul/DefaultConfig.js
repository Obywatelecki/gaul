//OpenLayers.Util.onImageLoadErrorColor = "transparent";
Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 9;


Ext.namespace("Heron.options.map");
Heron.options.map.settings = {
  projection: 'EPSG:2180',
  units: 'm',
  maxExtent: '220000, 42000, 380000, 570000',
  center: '304288, 496595',
  scales: [2000000, 1500000, 1000000, 750000, 500000, 250000, 125000, 75000, 50000, 30000, 20000, 10000, 5000, 2500, 1000, 500],
  zoom: 1,
  xy_precision: 3,
  max_features: 10,
  tileSize: new OpenLayers.Size(256, 256),
  theme: null,
  permalinks: {
    paramPrefix: 'map',
    encodeType: false,
    prettyLayerNames: true
  },
  controls: [
    new OpenLayers.Control.Attribution(),
    new OpenLayers.Control.ZoomBox(),
    new OpenLayers.Control.Navigation({
      dragPanOptions: {
        enableKinetic: true
      }
    }),
    new OpenLayers.Control.PanPanel(),
    new OpenLayers.Control.ZoomPanel(),
    new OpenLayers.Control.ScaleLine({
      geodesic: true,
      maxWidth: 150
    })
  ]
};

Ext.namespace("Heron.options.wfs");

Heron.options.wfs.downloadFormats = [{
    name: 'CSV',
    outputFormat: 'csv',
    fileExt: '.csv'
  },
  {
    name: 'GML (version 2.1.2)',
    outputFormat: 'text/xml; subtype=gml/2.1.2',
    fileExt: '.gml'
  },
  {
    name: 'GeoJSON',
    outputFormat: 'json',
    fileExt: '.json'
  }
];

// edition data

OpenLayers.Projection.defaults['EPSG:2180'] = {yx: true};

Heron.options.map.layers = [

  //basemap historical data

  new OpenLayers.Layer.WMS(
    "Mapa pruska (ok. 1800)",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Gilly_150k_1803",
      transparent: false,
      format: 'image/png' // szybszy niz jpeg???
    }, {
      // maxResolution: 22,
      singleTile: false,
      opacity: 0.7,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Mapa niemiecka (ok. 1890)",
    "http://wms.hgis.cartomatic.pl/topo/2180/kdr", {
      layers: "kdr",
      transparent: true,
      VERSION: '1.3.0'
      // format: 'image/jpeg'
    }, {
      opacity: 0.7,
      singleTile: false,
      visibility: true,
      // maxResolution: 22,
      // singleTile: false,
      isBaseLayer: false,
      visibility: false,
      // noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      // transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Mapa polska (ok. 1930)",
    "http://wms.hgis.cartomatic.pl/topo/2180/wig100k", {
      layers: "wig100k",
      transparent: true,
      VERSION: '1.3.0'
      // format: 'image/jpeg'
    }, {
      opacity: 0.7,
      singleTile: false,
      visibility: true,
      // maxResolution: 22,
      // singleTile: false,
      isBaseLayer: false,
      visibility: false,
      // noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      // transitionEffect: 'resize'
    }
  ),

  // basemap data

  new OpenLayers.Layer.WMS(
    "Numeryczny Model Terenu",
    'http://mapy.geoportal.gov.pl/wss/service/img/guest/CIEN/MapServer/WMSServer', {
      layers: "NMT_100,NMT_30,NMT_5",
      transparent: true,
      format: 'image/jpeg'
    }, {
      maxResolution: 22,
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Państwowy Rejestr Nazw Geograficznych",
    'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_PRNG_WMS/MapServer/WMSServer', {
      layers: "Miasto,Wies,PozostaleMiejscowosci",
      transparent: true,
      format: 'image/jpeg'
    }, {
      maxResolution: 22,
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Państwowy Rejestr Granic",
    'http://mapy.geoportal.gov.pl/wss/service/PZGIKINSP/guest/services/G2_PRGJT_WMS/MapServer/WMSServer', {
      layers: "Granice_wojewodztw,Granice_powiatow,Granice_gmin",
      transparent: true,
      format: 'image/jpeg'
    }, {
      maxResolution: 22,
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Mapa topograficzna",
    'http://mapy.geoportal.gov.pl/wss/service/img/guest/TOPO/MapServer/WMSServer', {
      layers: "Raster",
      transparent: true,
      format: 'image/jpeg'
    }, {
      opacity: 0.95,
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Ortofotomapa",
    'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer', {
      layers: "Raster",
      transparent: true,
      format: 'image/jpeg'
    }, {
      opacity: 0.95,
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),


  new OpenLayers.Layer.WMS(
    "Mapa połączona",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:mosaicked_v3",
      transparent: false,
      format: 'image/png' // szybszy niz jpeg???
    }, {
      // maxResolution: 22,
      singleTile: false,
      opacity: 0.7,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Mapa połączona (kolorowa)",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:mosaicked_color_v2",
      transparent: false,
      format: 'image/png' // szybszy niz jpeg???
    }, {
      // maxResolution: 22,
      singleTile: false,
      opacity: 0.7,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Lasy",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Forests",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Rzeki",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Hydro_line",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Akweny",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Hydro_polygon",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 1,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Bagna",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Swamps",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Drogi",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Roads",
      transparent: true,
      format: 'image/jpeg'
    }, {
      singleTile: false,
      isBaseLayer: false,
      visibility: false,
      noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Powiaty",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Districts",
      transparent: true,
      format: 'image/jpeg'
    }, {
      singleTile: false,
      isBaseLayer: false,
      visibility: true,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),
  new OpenLayers.Layer.WMS(
    "Budynki i konstrukcje",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Buildings_pl",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Nazwy fizjograficzne",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Natural_landscape",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Zakłady przemysłowe",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Industrial_pl",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "Miejscowości",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Settlements_pl",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'gaul',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  // aux data

  new OpenLayers.Layer.WMS(
    "Miejscowości - XVI w. (AHP)",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "ihpan:pkt_zbiorcza_pri",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: false,
      noLegend: false,
      featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize',
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          // featurePrefix: 'ihpan',
          // featureNS: 'http://www.ihpan.edu.pl',
          // downloadFormats: Heron.options.wfs.downloadFormats
        }
      }
    }
  ),

  new OpenLayers.Layer.WMS(
    "bbox",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:bbox",
      transparent: true,
      format: 'image/jpeg'
    }, {
      maxResolution: 22,
      singleTile: false,
      isBaseLayer: true, // tego nie można zmienic :(
      visibility: false,
      noLegend: true,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  )

];


Ext.namespace("Heron.options.info");
Heron.options.info.html =
  '<div class="hr-html-panel-body">' +
  '<p>Cyfrowa edycja mapy Gaula/Raczyńskiego (1807-1812)</p>' +
  '<p><i>autorzy: </a></i></p>' +
  '<i>Tomasz Panecki <a href="mailto:tpanecki@uw.edu.pl">tpanecki@uw.edu.pl</a></i>' +
  '<p><i>Piotr Kann <a href="mailto:piotrkann@wp.pl">piotrkann@wp.pl</a></i></p>' +
  '<p><a href="https://github.com/Obywatelecki/gaul">Repozytorium GitHub</a></p>' +
  '<p><a href="http://atlasfontium.pl/index.php?article=gaul">Zobacz główną stronę projektu</a></p>'
  '</div>';

Ext.namespace("Heron");
Ext.namespace("Heron.options");
Ext.namespace("Heron.options.layertree");

var treeTheme = [{
    text: "Dane dodatkowe",
    nodeType: 'hr_cascader',
    expanded: false,
    children: [
      {
        nodeType: "gx_layer",
        layer: "Miejscowości - XVI w. (AHP)"
      }
    ]
  },
  {
    text: 'Dane kartograficzne',
    nodeType: 'hr_cascader',
    expanded: true,
    children: [
      {
        nodeType: "gx_layer",
        layer: "Miejscowości"
      },
      {
        nodeType: "gx_layer",
        layer: "Zakłady przemysłowe"
      },
      {
        nodeType: "gx_layer",
        layer: "Budynki i konstrukcje"
      },
      {
        nodeType: "gx_layer",
        layer: "Nazwy fizjograficzne"
      },
      {
        nodeType: "gx_layer",
        layer: "Drogi"
      },
      {
        nodeType: "gx_layer",
        layer: "Akweny"
      },
      {
        nodeType: "gx_layer",
        layer: "Rzeki"
      },
      {
        nodeType: "gx_layer",
        layer: "Bagna"
      },
      {
        nodeType: "gx_layer",
        layer: "Lasy"
      },
      {
        nodeType: "gx_layer",
        layer: "Powiaty"
      }
    ]
  },
  {
    text: 'Mapy podkładowe',
    expanded: false,
    children: [
      {
        text: "Mapa Gaula/Raczyńskiego",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: "Mapa połączona"
          },
          {
            nodeType: "gx_layer",
            layer: "Mapa połączona (kolorowa)"
          }
        ]
      },
      {
        text: "Inne mapy dawne",
        expanded: false,
        children: [
          {
          nodeType: "gx_layer",
          layer: "Mapa pruska (ok. 1800)"
          },
          {
          nodeType: "gx_layer",
          layer: "Mapa niemiecka (ok. 1890)"
          },
          {
            nodeType: "gx_layer",
            layer: "Mapa polska (ok. 1930)"
          }
        ]
      },
      {
        text: "Mapy i dane współczesne",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: "Mapa topograficzna"
          },
          {
            nodeType: "gx_layer",
            layer: "Ortofotomapa"
          },
          {
            nodeType: "gx_layer",
            layer: "Państwowy Rejestr Nazw Geograficznych"
          },
          {
            nodeType: "gx_layer",
            layer: "Państwowy Rejestr Granic"
          },
          {
            nodeType: "gx_layer",
            layer: "Numeryczny Model Terenu"
          }
        ]
      }
    ]
  }
];

Heron.options.layertree.tree = treeTheme;

Heron.layout = {
  xtype: 'panel',
  id: 'hr-container-main',
  layout: 'border',
  border: false,
  items: [{
      xtype: 'panel',
      id: 'hr-menu-left-container',
      layout: 'accordion',
      region: "west",
      width: 230,
      collapsible: true,
      border: false,
      items: [{
          xtype: 'hr_layertreepanel',
          border: true,
          layerIcons: 'bylayertype',
          enableDD: false,
          title: "Cyfrowa edycja",
          contextMenu: [{
              xtype: 'hr_layernodemenulayerinfo'
            },
            {
              xtype: 'hr_layernodemenuzoomextent'
            },
            {
              xtype: 'hr_layernodemenuopacityslider'
            }
          ],
          hropts: Heron.options.layertree
        },
        {
          xtype: 'hr_htmlpanel',
          id: 'hr-info-west',
          html: Heron.options.info.html,
          preventBodyReset: true,
          title: 'O projekcie'
        }
      ]
    },
    {
      xtype: 'panel',
      id: 'hr-map-and-info-container',
      layout: 'border',
      region: 'center',
      width: '100%',
      collapsible: false,
      split: false,
      border: false,
      items: [{
        xtype: 'hr_mappanel',
        id: 'hr-map',
        title: "<center>Cyfrowa edycja mapy Gaula/Raczyńskiego (1807-1812)</center>",
        region: 'center',
        collapsible: false,
        border: false,
        hropts: Heron.options.map
      }]
    },
    {
      xtype: 'panel',
      id: 'hr-menu-right-container',
      layout: 'accordion',
      region: "east",
      width: 160,
      collapsible: true,
      split: false,
      border: false,
      items: [{
        xtype: 'hr_layerlegendpanel',
        id: 'hr-layerlegend-panel',
        border: true,
        defaults: {
          useScaleParameter: true,
          baseParams: {
            FORMAT: 'image/png'
          }
        },
        legendFromCapabilities: false,
        hropts: {
          prefetchLegends: false
        }
      }]
    }
  ]
};
