Ext.namespace("Heron.gaul");

Heron.gaul.searchPanelConfig = {
  xtype: 'hr_multisearchcenterpanel',
  height: 600,
  hropts: [{
      searchPanel: { // search by attribute
        xtype: 'hr_formsearchpanel',
        name: __('Search by Attributes'),
        header: false,
        protocol: new OpenLayers.Protocol.WFS({
          version: "1.1.0",
          url: "http://atlas.ihpan.edu.pl/geoserver/ows?",
          srsName: "EPSG:2180",
          featureType: "miejscowosci",
          // featurePrefix: "gaul"
        }),
        items: [{
            xtype: "textfield",
            name: "name__like",
            value: '',
            fieldLabel: "  name"
          },
          {
            xtype: "label",
            id: "helplabel",
            html: 'Type in the name of Locality',
            style: {
              fontSize: '10px',
              color: '#AAAAAA'
            }
          }
        ],
        hropts: {
          onSearchCompleteZoom: 7,
          autoWildCardAttach: true,
          caseInsensitiveMatch: true,
          logicalOperator: OpenLayers.Filter.Logical.AND
        }
      },
      resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        autoConfig: true,
        hropts: {
          zoomOnRowDoubleClick: true,
          zoomOnFeatureSelect: false,
          zoomLevelPointSelect: 8,
          zoomToDataExtent: false
        }
      }
    },
    {
      searchPanel: {
        xtype: 'hr_searchbydrawpanel',
        name: __('Search by Drawing'),
        header: false
      },
      resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        autoConfig: true,
        autoConfigMaxSniff: 100,
        exportFormats: ['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
        gridCellRenderers: Heron.options.gridCellRenderers,
        hropts: {
          zoomOnRowDoubleClick: true,
          zoomOnFeatureSelect: false,
          zoomLevelPointSelect: 8,
          zoomToDataExtent: false
        }
      }
    },
    {
      searchPanel: {
        xtype: 'hr_searchbyfeaturepanel',
        name: __('Search using spatial relations'),
        description: 'Select feature-geometries from one layer and use these to perform a spatial search in another layer.',
        header: false,
        border: false,
        bodyStyle: 'padding: 6px',
        style: {
          fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
          fontSize: '12px'
        }
      },
      resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        border: false,
        autoConfig: true,
        exportFormats: ['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
        gridCellRenderers: Heron.options.gridCellRenderers,
        hropts: {
          zoomOnRowDoubleClick: true,
          zoomOnFeatureSelect: false,
          zoomLevelPointSelect: 8,
          zoomToDataExtent: false
        }
      }
    },
    {
      searchPanel: {
        xtype: 'hr_gxpquerypanel',
        name: __('Build your own searches'),
        description: 'This search uses both search within Map extent and/or your own attribute criteria',
        header: false,
        border: false,
        caseInsensitiveMatch: true,
        autoWildCardAttach: true
      },
      resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        border: false,
        autoConfig: true,
        exportFormats: ['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
        gridCellRenderers: Heron.options.gridCellRenderers,
        hropts: {
          zoomOnRowDoubleClick: true,
          zoomOnFeatureSelect: false,
          zoomLevelPointSelect: 8,
          zoomToDataExtent: true
        }
      }
    }

  ]
};

Heron.options.map.toolbar = [{
    type: "scale",
    options: {
      width: 100
    }
  },
  {
    type: "featureinfo",
    options: {
      popupWindow: {
        width: 600,
        height: 200,
        featureInfoPanel: {
          displayPanels: ['Table'],
          // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
          exportFormats: ['CSV', 'XLS'],
          // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
          // exportFormats: ['CSV', 'XLS'],
          maxFeatures: 10,
          gridColumns: [{
              featureType: 'Localities',
              columns: [{
                  header: "source name",
                  width: 100,
                  dataIndex: "naz"
                },
                {
                  header: "modern name",
                  width: 100,
                  dataIndex: "naz_glowna"
                },
                {
                  header: "type",
                  width: 100,
                  dataIndex: "nazwa_h"
                },
                {
                  header: "source",
                  width: 120,
                  dataIndex: "SOURCE"
                }

              ]
            },
            {
              featureType: 'HAP_settle_16c',
              columns: [{
                header: "16th century name",
                width: 120,
                dataIndex: "nazwa_16w"
              }]
            }
          ]
        }
      }
    }
  },
  {
    type: "-"
  },
  {
    type: "pan"
  },
  {
    type: "zoomin"
  },
  {
    type: "zoomout"
  },
  {
    type: "coordinatesearch",
    options: {
      onSearchCompleteZoom: 8
    }
  },
  {
    type: "-"
  },
  {
    type: "zoomprevious"
  },
  {
    type: "zoomnext"
  },
  {
    type: "measurelength",
    options: {
      geodesic: true
    }
  },
  {
    type: "measurearea",
    options: {
      geodesic: true
    }
  },
  {
    type: "-"
  },
  {
    type: "searchcenter",
    options: {
      show: false,
      searchWindow: {
        title: __('Multiple Searches'),
        x: 100,
        y: undefined,
        width: 400,
        height: 300,
        items: [
          Heron.gaul.searchPanelConfig
        ]
      }
    }
  },

];
