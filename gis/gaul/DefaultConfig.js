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
  tileSize: new OpenLayers.Size(512, 512),
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

Heron.options.map.layers = [

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
    "Satellite imaginary",
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
    "Mosaicked Map",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:mosaicked_v2",
      transparent: false,
      format: 'image/png'  // szybszy niz jpeg???
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
      layers: "gaul:lasy",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: true,
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
    "Sheets",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:Sheets",
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
    "Roads",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:roads",
      transparent: true,
      format: 'image/jpeg'
    }, {
      singleTile: false,
      isBaseLayer: false,
      visibility: true,
      noLegend: false,
      // featureInfoFormat: 'application/vnd.ogc.gml',
      transitionEffect: 'resize'
    }
  ),

  new OpenLayers.Layer.WMS(
    "Localities",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "gaul:ADMS",
      transparent: true,
      format: 'image/png'
    }, {
      singleTile: true,
      opacity: 0.95,
      isBaseLayer: false,
      visibility: true,
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

  // Koscian

  // new OpenLayers.Layer.WMS(
  //   "Koscian - color",
  //   'http://atlas.ihpan.edu.pl/geoserver/ows?', {
  //     layers: "gaul:Koscian_color",
  //     transparent: false,
  //     format: 'image/jpeg'
  //   }, {
  //     // maxResolution: 22,
  //     singleTile: false,
  //     opacity: 0.7,
  //     isBaseLayer: false,
  //     visibility: false,
  //     noLegend: true,
  //     // featureInfoFormat: 'application/vnd.ogc.gml',
  //     transitionEffect: 'resize'
  //   }
  // ),

  // aux data

  new OpenLayers.Layer.WMS(
    "Localities - 16th c.",
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
    "Localities - 21st c.",
    'http://atlas.ihpan.edu.pl/geoserver/ows?', {
      layers: "ontohgis:miejscowosci_codgik",
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

  // z tym jest problem. Nie mogę wyrzucić tej warstwy.

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
  '<p>Old maps into the digital! A digital edition of "Gaul-Raczynski" topographic map</p>' +
  '<p><i>IH PAN - Tomasz Panecki</i></p>' +
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
      layer: "Localities - 21st c."
    },
    {
      nodeType: "gx_layer",
      layer: "Localities - 16th c."
    }
  ]
  },
  {
    text: 'Digital edition',
    nodeType: 'hr_cascader',
    expanded: true,
    children: [{
        text: 'Gaul-Raczynski map data',
        nodeType: 'hr_cascader',
        expanded: true,
        children: [
          {
            nodeType: "gx_layer",
            layer: "Localities"
          },
          {
            nodeType: "gx_layer",
            layer: "Roads"
          },
          {
            nodeType: "gx_layer",
            layer: "Forests"
          },
          {
            nodeType: "gx_layer",
            layer: "Sheets"
          },
          {
            nodeType: "gx_layer",
            layer: "Mosaicked Map"
          }
        ]
      },
      {
        text: 'Individual sheets data',
        nodeType: 'hr_cascader',
        expanded: false,
        children: [{
            text: "Babimost",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              nodeType: "gx_layer",
              layer: "Babimost - pkt"
            }]
          },
          {
            text: "Kościan",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [
            {
              // nodeType: "gx_layer",
              // layer: "Koscian - color"
            }
          ]
          },
          {
            text: "Krobia",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
          {
            text: "Międzyrzecz",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
          {
            text: "Oborniki",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
          {
            text: "Poznań",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
          {
            text: "Śrem",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
          {
            text: "Wschowa",
            nodeType: 'hr_cascader',
            expanded: false,
            children: [{
              //TODO - add data
            }]
          },
        ]
      }
    ]
  },
  {
    text: 'BaseMaps',
    expanded: false,
    children: [{
        text: "Historical",
        expanded: false,
        children: [{
          nodeType: "gx_layer",
          layer: "Topographic map"
        }]
      },
      {
        text: "Geoportal.gov.pl",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: "Topographic map"
          },
          {
            nodeType: "gx_layer",
            layer: "Satellite imaginary"
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
      width: 200,
      collapsible: true,
      border: false,
      items: [{
        xtype: 'hr_layertreepanel',
        border: true,
        layerIcons: 'bylayertype',
        enableDD: false,
        contextMenu: [{
          xtype: 'hr_layernodemenuopacityslider'
        }],
        hropts: Heron.options.layertree
      }]
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
        title: "<center>Old maps into digital! The digital edition of Gaul-Raczynski topographic map</center>",
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