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
    "German (c.a. 1890)",
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
    "Polish (c.a. 1930)",
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
    "Digital elevation model",
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
    "National Register of Geographic Names",
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
    "National Register of Borders",
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
    "Topographic map",
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
    "Satellite imagery",
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
    "Mosaicked map",
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
    "Mosaicked map (colored)",
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
    "Forests",
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
    "Hydrography (lines)",
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
    "Hydrography (area)",
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
    "Swamps",
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
    "Roads",
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
    "Districts",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:powiaty",
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
    "Buildings and constructions",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Buildings",
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
    "Natural landscape names",
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
    "Industrial and economic facilities",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Industrial",
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
    "Settlements",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Settlements",
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
    "Settlements - 16th c. (HAP)",
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
  '<p>About the project</p>' +
  '<p>Old maps into the digital! A digital edition of "Gaul/Raczyński" topographic map</p>' +
  '<p><i>author: Tomasz Panecki <a href="mailto:tpanecki@uw.edu.pl">tpanecki@uw.edu.pl</a></i></p>' +
  '<p><a href="https://github.com/Obywatelecki/gaul">GitHub repository</a></p>' +
  '<p><a href="http://atlasfontium.pl/index.php?article=gaul">Zobacz główną stronę projektu</a></p>' +
  '<p><a href="http://atlasfontium.pl/index.php?article=gaul&language=en">See project webpage</a></p>' +
  '</div>';

Ext.namespace("Heron");
Ext.namespace("Heron.options");
Ext.namespace("Heron.options.layertree");

var treeTheme = [{
    text: "Additional data",
    nodeType: 'hr_cascader',
    expanded: false,
    children: [
      {
        nodeType: "gx_layer",
        layer: "Settlements - 16th c. (HAP)"
      }
    ]
  },
  {
    text: 'Gaul/Raczyński map data',
    nodeType: 'hr_cascader',
    expanded: true,
    children: [
      {
        nodeType: "gx_layer",
        layer: "Settlements"
      },
      {
        nodeType: "gx_layer",
        layer: "Industrial and economic facilities"
      },
      {
        nodeType: "gx_layer",
        layer: "Buildings and constructions"
      },
      {
        nodeType: "gx_layer",
        layer: "Natural landscape names"
      },
      {
        nodeType: "gx_layer",
        layer: "Roads"
      },
      {
        nodeType: "gx_layer",
        layer: "Hydrography (area)"
      },
      {
        nodeType: "gx_layer",
        layer: "Hydrography (lines)"
      },
      {
        nodeType: "gx_layer",
        layer: "Swamps"
      },
      {
        nodeType: "gx_layer",
        layer: "Forests"
      },
      {
        nodeType: "gx_layer",
        layer: "Districts"
      }
    ]
  },
  {
    text: 'BaseMaps',
    expanded: false,
    children: [
      {
        text: "Gaul/Raczyński map",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: "Mosaicked map"
          },
          {
            nodeType: "gx_layer",
            layer: "Mosaicked map (colored)"
          }
        ]
      },
      {
        text: "Historical maps",
        expanded: false,
        children: [
          {
          nodeType: "gx_layer",
          layer: "Prussian (c.a. 1800)"
          },
          {
          nodeType: "gx_layer",
          layer: "German (c.a. 1890)"
          },
          {
            nodeType: "gx_layer",
            layer: "Polish (c.a. 1930)"
          }
        ]
      },
      {
        text: "Modern maps and data",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: "Topographic map"
          },
          {
            nodeType: "gx_layer",
            layer: "Satellite imagery"
          },
          {
            nodeType: "gx_layer",
            layer: "National Register of Geographic Names"
          },
          {
            nodeType: "gx_layer",
            layer: "National Register of Borders"
          },
          {
            nodeType: "gx_layer",
            layer: "Digital elevation model"
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
          title: "Data",
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
          title: 'About the project'
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
        title: "<center>Old maps into digital! The digital edition of Gaul/Raczyński topographic map</center>",
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
