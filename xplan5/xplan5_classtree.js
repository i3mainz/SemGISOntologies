var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbgrenzungenTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_AbgrenzungenTypen",
        "type": "instance",
        "text": "1000 (xplan5:BP_AbgrenzungenTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbgrenzungenTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_AbgrenzungenTypen",
        "type": "instance",
        "text": "9999 (xplan5:BP_AbgrenzungenTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbgrenzungenTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_AbgrenzungenTypen (xplan5:BP_AbgrenzungenTypen) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "Enumeration (xplan5:Enumeration)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 3,
              "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF": 3
            },
            "http://www.w3.org/2002/07/owl#allValuesFrom": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise",
        "type": "instance",
        "text": "1000 (xplan5:BP_Bauweise_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise",
        "type": "instance",
        "text": "2000 (xplan5:BP_Bauweise_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise",
        "type": "instance",
        "text": "3000 (xplan5:BP_Bauweise_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Bauweise",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Bauweise (xplan5:BP_Bauweise) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "1000 (xplan5:BP_BebauungsArt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "2000 (xplan5:BP_BebauungsArt_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "3000 (xplan5:BP_BebauungsArt_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "4000 (xplan5:BP_BebauungsArt_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "5000 (xplan5:BP_BebauungsArt_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "6000 (xplan5:BP_BebauungsArt_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "type": "instance",
        "text": "7000 (xplan5:BP_BebauungsArt_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BebauungsArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_BebauungsArt (xplan5:BP_BebauungsArt) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen",
        "type": "instance",
        "text": "1000 (xplan5:BP_BereichOhneEinAusfahrtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen",
        "type": "instance",
        "text": "2000 (xplan5:BP_BereichOhneEinAusfahrtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen",
        "type": "instance",
        "text": "3000 (xplan5:BP_BereichOhneEinAusfahrtTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_BereichOhneEinAusfahrtTypen (xplan5:BP_BereichOhneEinAusfahrtTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "1000 (xplan5:BP_Dachform_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "2100 (xplan5:BP_Dachform_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "2200 (xplan5:BP_Dachform_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3100 (xplan5:BP_Dachform_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3200 (xplan5:BP_Dachform_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3300 (xplan5:BP_Dachform_3300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3400 (xplan5:BP_Dachform_3400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3500 (xplan5:BP_Dachform_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3600",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3600 (xplan5:BP_Dachform_3600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3700",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3700 (xplan5:BP_Dachform_3700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3800",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3800 (xplan5:BP_Dachform_3800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_3900",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "3900 (xplan5:BP_Dachform_3900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "4000 (xplan5:BP_Dachform_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "5000 (xplan5:BP_Dachform_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "type": "instance",
        "text": "9999 (xplan5:BP_Dachform_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Dachform",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Dachform (xplan5:BP_Dachform) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen",
        "type": "instance",
        "text": "1000 (xplan5:BP_EinfahrtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen",
        "type": "instance",
        "text": "2000 (xplan5:BP_EinfahrtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen",
        "type": "instance",
        "text": "3000 (xplan5:BP_EinfahrtTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_EinfahrtTypen (xplan5:BP_EinfahrtTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund",
        "type": "instance",
        "text": "1000 (xplan5:BP_ErhaltungsGrund_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund",
        "type": "instance",
        "text": "2000 (xplan5:BP_ErhaltungsGrund_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund",
        "type": "instance",
        "text": "3000 (xplan5:BP_ErhaltungsGrund_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsGrund",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_ErhaltungsGrund (xplan5:BP_ErhaltungsGrund) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung",
        "type": "instance",
        "text": "1000 (xplan5:BP_GrenzBebauung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung",
        "type": "instance",
        "text": "2000 (xplan5:BP_GrenzBebauung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung",
        "type": "instance",
        "text": "3000 (xplan5:BP_GrenzBebauung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GrenzBebauung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_GrenzBebauung (xplan5:BP_GrenzBebauung) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1000 (xplan5:BP_Laerrmpegelbereich_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1100 (xplan5:BP_Laerrmpegelbereich_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1200 (xplan5:BP_Laerrmpegelbereich_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1300 (xplan5:BP_Laerrmpegelbereich_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1400 (xplan5:BP_Laerrmpegelbereich_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1500 (xplan5:BP_Laerrmpegelbereich_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "type": "instance",
        "text": "1600 (xplan5:BP_Laerrmpegelbereich_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Laerrmpegelbereich",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Laerrmpegelbereich (xplan5:BP_Laerrmpegelbereich) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussTyp_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussTyp",
        "type": "instance",
        "text": "1000 (xplan5:BP_NebenanlagenAusschlussTyp_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussTyp_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussTyp",
        "type": "instance",
        "text": "2000 (xplan5:BP_NebenanlagenAusschlussTyp_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussTyp",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_NebenanlagenAusschlussTyp (xplan5:BP_NebenanlagenAusschlussTyp) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "1000 (xplan5:BP_PlanArt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "10000 (xplan5:BP_PlanArt_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "10001 (xplan5:BP_PlanArt_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "3000 (xplan5:BP_PlanArt_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "4000 (xplan5:BP_PlanArt_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_40000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "40000 (xplan5:BP_PlanArt_40000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_40001",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "40001 (xplan5:BP_PlanArt_40001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_40002",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "40002 (xplan5:BP_PlanArt_40002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "5000 (xplan5:BP_PlanArt_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "7000 (xplan5:BP_PlanArt_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "type": "instance",
        "text": "9999 (xplan5:BP_PlanArt_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PlanArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_PlanArt (xplan5:BP_PlanArt) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "1000 (xplan5:BP_Rechtscharakter_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "2000 (xplan5:BP_Rechtscharakter_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "3000 (xplan5:BP_Rechtscharakter_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "4000 (xplan5:BP_Rechtscharakter_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "5000 (xplan5:BP_Rechtscharakter_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "type": "instance",
        "text": "9998 (xplan5:BP_Rechtscharakter_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtscharakter",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Rechtscharakter (xplan5:BP_Rechtscharakter) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "1000 (xplan5:BP_Rechtsstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "2000 (xplan5:BP_Rechtsstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "2100 (xplan5:BP_Rechtsstand_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "2200 (xplan5:BP_Rechtsstand_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "2300 (xplan5:BP_Rechtsstand_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "2400 (xplan5:BP_Rechtsstand_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "3000 (xplan5:BP_Rechtsstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "4000 (xplan5:BP_Rechtsstand_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_4500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "4500 (xplan5:BP_Rechtsstand_4500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "type": "instance",
        "text": "5000 (xplan5:BP_Rechtsstand_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Rechtsstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Rechtsstand (xplan5:BP_Rechtsstand) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1000 (xplan5:BP_SpezielleBauweiseTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1100 (xplan5:BP_SpezielleBauweiseTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1200 (xplan5:BP_SpezielleBauweiseTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1300 (xplan5:BP_SpezielleBauweiseTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1400 (xplan5:BP_SpezielleBauweiseTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "1500 (xplan5:BP_SpezielleBauweiseTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "type": "instance",
        "text": "9999 (xplan5:BP_SpezielleBauweiseTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweiseTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_SpezielleBauweiseTypen (xplan5:BP_SpezielleBauweiseTypen) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung",
        "type": "instance",
        "text": "1000 (xplan5:BP_StrassenkoerperHerstellung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung",
        "type": "instance",
        "text": "2000 (xplan5:BP_StrassenkoerperHerstellung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung",
        "type": "instance",
        "text": "3000 (xplan5:BP_StrassenkoerperHerstellung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenkoerperHerstellung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_StrassenkoerperHerstellung (xplan5:BP_StrassenkoerperHerstellung) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren",
        "type": "instance",
        "text": "1000 (xplan5:BP_Verfahren_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren",
        "type": "instance",
        "text": "2000 (xplan5:BP_Verfahren_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren",
        "type": "instance",
        "text": "3000 (xplan5:BP_Verfahren_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Verfahren",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Verfahren (xplan5:BP_Verfahren) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "1000 (xplan5:BP_WegerechtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "2000 (xplan5:BP_WegerechtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "3000 (xplan5:BP_WegerechtTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "4000 (xplan5:BP_WegerechtTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_4100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "4100 (xplan5:BP_WegerechtTypen_4100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_4200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "4200 (xplan5:BP_WegerechtTypen_4200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "type": "instance",
        "text": "5000 (xplan5:BP_WegerechtTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WegerechtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_WegerechtTypen (xplan5:BP_WegerechtTypen) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit",
        "type": "instance",
        "text": "1000 (xplan5:BP_Zulaessigkeit_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit",
        "type": "instance",
        "text": "2000 (xplan5:BP_Zulaessigkeit_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit",
        "type": "instance",
        "text": "3000 (xplan5:BP_Zulaessigkeit_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Zulaessigkeit",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_Zulaessigkeit (xplan5:BP_Zulaessigkeit) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "1000 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "2000 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3000 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3100 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3200 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3300 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3400 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3500 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3600",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3600 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3700",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3700 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3800",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3800 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_3900",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "3900 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_3900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "4000 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "type": "instance",
        "text": "9999 (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungGemeinschaftsanlagen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_ZweckbestimmungGemeinschaftsanlagen (xplan5:BP_ZweckbestimmungGemeinschaftsanlagen) [14]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "1000 (xplan5:BP_ZweckbestimmungNebenanlagen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "2000 (xplan5:BP_ZweckbestimmungNebenanlagen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3000 (xplan5:BP_ZweckbestimmungNebenanlagen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3100 (xplan5:BP_ZweckbestimmungNebenanlagen_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3200 (xplan5:BP_ZweckbestimmungNebenanlagen_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3300 (xplan5:BP_ZweckbestimmungNebenanlagen_3300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3400 (xplan5:BP_ZweckbestimmungNebenanlagen_3400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3500 (xplan5:BP_ZweckbestimmungNebenanlagen_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_3600",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "3600 (xplan5:BP_ZweckbestimmungNebenanlagen_3600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "type": "instance",
        "text": "9999 (xplan5:BP_ZweckbestimmungNebenanlagen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungNebenanlagen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_ZweckbestimmungNebenanlagen (xplan5:BP_ZweckbestimmungNebenanlagen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1000 (xplan5:BP_ZweckbestimmungStrassenverkehr_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1100 (xplan5:BP_ZweckbestimmungStrassenverkehr_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1200 (xplan5:BP_ZweckbestimmungStrassenverkehr_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1300 (xplan5:BP_ZweckbestimmungStrassenverkehr_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1400 (xplan5:BP_ZweckbestimmungStrassenverkehr_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1500 (xplan5:BP_ZweckbestimmungStrassenverkehr_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1550",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1550 (xplan5:BP_ZweckbestimmungStrassenverkehr_1550)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1580",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1580 (xplan5:BP_ZweckbestimmungStrassenverkehr_1580)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1600 (xplan5:BP_ZweckbestimmungStrassenverkehr_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1700 (xplan5:BP_ZweckbestimmungStrassenverkehr_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1800 (xplan5:BP_ZweckbestimmungStrassenverkehr_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "2000 (xplan5:BP_ZweckbestimmungStrassenverkehr_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "2100 (xplan5:BP_ZweckbestimmungStrassenverkehr_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "2200 (xplan5:BP_ZweckbestimmungStrassenverkehr_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "2300 (xplan5:BP_ZweckbestimmungStrassenverkehr_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "2400 (xplan5:BP_ZweckbestimmungStrassenverkehr_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "9999 (xplan5:BP_ZweckbestimmungStrassenverkehr_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungStrassenverkehr",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_ZweckbestimmungStrassenverkehr (xplan5:BP_ZweckbestimmungStrassenverkehr) [17]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF",
        "type": "instance",
        "text": "1000 (xplan5:BP_ZweckbestimmungenTMF_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF",
        "type": "instance",
        "text": "2000 (xplan5:BP_ZweckbestimmungenTMF_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF",
        "type": "instance",
        "text": "3000 (xplan5:BP_ZweckbestimmungenTMF_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ZweckbestimmungenTMF",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "BP_ZweckbestimmungenTMF (xplan5:BP_ZweckbestimmungenTMF) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "1000 (xplan5:FP_PlanArt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "2000 (xplan5:FP_PlanArt_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "3000 (xplan5:FP_PlanArt_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "4000 (xplan5:FP_PlanArt_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "5000 (xplan5:FP_PlanArt_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "type": "instance",
        "text": "9999 (xplan5:FP_PlanArt_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PlanArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_PlanArt (xplan5:FP_PlanArt) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "1000 (xplan5:FP_Rechtscharakter_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "2000 (xplan5:FP_Rechtscharakter_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "3000 (xplan5:FP_Rechtscharakter_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "4000 (xplan5:FP_Rechtscharakter_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "5000 (xplan5:FP_Rechtscharakter_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "type": "instance",
        "text": "9998 (xplan5:FP_Rechtscharakter_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtscharakter",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_Rechtscharakter (xplan5:FP_Rechtscharakter) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "1000 (xplan5:FP_Rechtsstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "2000 (xplan5:FP_Rechtsstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "2100 (xplan5:FP_Rechtsstand_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "2200 (xplan5:FP_Rechtsstand_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "2300 (xplan5:FP_Rechtsstand_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "2400 (xplan5:FP_Rechtsstand_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "3000 (xplan5:FP_Rechtsstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "4000 (xplan5:FP_Rechtsstand_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "type": "instance",
        "text": "5000 (xplan5:FP_Rechtsstand_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Rechtsstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_Rechtsstand (xplan5:FP_Rechtsstand) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Verfahren_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Verfahren",
        "type": "instance",
        "text": "1000 (xplan5:FP_Verfahren_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Verfahren_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Verfahren",
        "type": "instance",
        "text": "2000 (xplan5:FP_Verfahren_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Verfahren",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_Verfahren (xplan5:FP_Verfahren) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "1000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "10000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "10001 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "10002 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_10003",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "10003 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_10003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_10004",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "10004 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_10004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "1200 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12001 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12002",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12002 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12003",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12003 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12004",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12004 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_12005",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "12005 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_12005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "1400 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "1600 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "16000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "16001 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_16002",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "16002 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_16002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "1800 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_18000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "18000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_18000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_18001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "18001 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_18001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_18002",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "18002 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_18002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_18003",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "18003 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_18003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "2000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_20000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "20000 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_20000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_20001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "20001 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_20001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "9999 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_99990",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "99990 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_99990)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben_99991",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "type": "instance",
        "text": "99991 (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben_99991)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungPrivilegiertesVorhaben",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_ZweckbestimmungPrivilegiertesVorhaben (xplan5:FP_ZweckbestimmungPrivilegiertesVorhaben) [29]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1000 (xplan5:FP_ZweckbestimmungStrassenverkehr_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1200 (xplan5:FP_ZweckbestimmungStrassenverkehr_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1400 (xplan5:FP_ZweckbestimmungStrassenverkehr_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14000 (xplan5:FP_ZweckbestimmungStrassenverkehr_14000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14001 (xplan5:FP_ZweckbestimmungStrassenverkehr_14001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_140010",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "140010 (xplan5:FP_ZweckbestimmungStrassenverkehr_140010)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_140011",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "140011 (xplan5:FP_ZweckbestimmungStrassenverkehr_140011)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14002",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14002 (xplan5:FP_ZweckbestimmungStrassenverkehr_14002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14003",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14003 (xplan5:FP_ZweckbestimmungStrassenverkehr_14003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14004",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14004 (xplan5:FP_ZweckbestimmungStrassenverkehr_14004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14005",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14005 (xplan5:FP_ZweckbestimmungStrassenverkehr_14005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14006",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14006 (xplan5:FP_ZweckbestimmungStrassenverkehr_14006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14007",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14007 (xplan5:FP_ZweckbestimmungStrassenverkehr_14007)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14008",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14008 (xplan5:FP_ZweckbestimmungStrassenverkehr_14008)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_14009",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "14009 (xplan5:FP_ZweckbestimmungStrassenverkehr_14009)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "1600 (xplan5:FP_ZweckbestimmungStrassenverkehr_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "16000 (xplan5:FP_ZweckbestimmungStrassenverkehr_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "16001 (xplan5:FP_ZweckbestimmungStrassenverkehr_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "type": "instance",
        "text": "9999 (xplan5:FP_ZweckbestimmungStrassenverkehr_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZweckbestimmungStrassenverkehr",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "FP_ZweckbestimmungStrassenverkehr (xplan5:FP_ZweckbestimmungStrassenverkehr) [19]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_BodenschutzrechtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_BodenschutzrechtTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_BodenschutzrechtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_BodenschutzrechtTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_BodenschutzrechtTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_BodenschutzrechtTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_BodenschutzrechtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_BodenschutzrechtTypen (xplan5:LP_BodenschutzrechtTypen) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1000 (xplan5:LP_ErholungFreizeitFunktionen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1030",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1030 (xplan5:LP_ErholungFreizeitFunktionen_1030)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1050",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1050 (xplan5:LP_ErholungFreizeitFunktionen_1050)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1100 (xplan5:LP_ErholungFreizeitFunktionen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1200 (xplan5:LP_ErholungFreizeitFunktionen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1300 (xplan5:LP_ErholungFreizeitFunktionen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1400 (xplan5:LP_ErholungFreizeitFunktionen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1500 (xplan5:LP_ErholungFreizeitFunktionen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1600 (xplan5:LP_ErholungFreizeitFunktionen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1700 (xplan5:LP_ErholungFreizeitFunktionen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1800 (xplan5:LP_ErholungFreizeitFunktionen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "1900 (xplan5:LP_ErholungFreizeitFunktionen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2000 (xplan5:LP_ErholungFreizeitFunktionen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2100 (xplan5:LP_ErholungFreizeitFunktionen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2200 (xplan5:LP_ErholungFreizeitFunktionen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2300 (xplan5:LP_ErholungFreizeitFunktionen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2400 (xplan5:LP_ErholungFreizeitFunktionen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2500 (xplan5:LP_ErholungFreizeitFunktionen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2600 (xplan5:LP_ErholungFreizeitFunktionen_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2700",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2700 (xplan5:LP_ErholungFreizeitFunktionen_2700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2800",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2800 (xplan5:LP_ErholungFreizeitFunktionen_2800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_2900",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "2900 (xplan5:LP_ErholungFreizeitFunktionen_2900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3000 (xplan5:LP_ErholungFreizeitFunktionen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3100 (xplan5:LP_ErholungFreizeitFunktionen_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3200 (xplan5:LP_ErholungFreizeitFunktionen_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3300",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3300 (xplan5:LP_ErholungFreizeitFunktionen_3300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3400",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3400 (xplan5:LP_ErholungFreizeitFunktionen_3400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3500 (xplan5:LP_ErholungFreizeitFunktionen_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3600",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3600 (xplan5:LP_ErholungFreizeitFunktionen_3600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3700",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3700 (xplan5:LP_ErholungFreizeitFunktionen_3700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3800",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3800 (xplan5:LP_ErholungFreizeitFunktionen_3800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_3900",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "3900 (xplan5:LP_ErholungFreizeitFunktionen_3900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "4000 (xplan5:LP_ErholungFreizeitFunktionen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_4100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "4100 (xplan5:LP_ErholungFreizeitFunktionen_4100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "5000 (xplan5:LP_ErholungFreizeitFunktionen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "type": "instance",
        "text": "9999 (xplan5:LP_ErholungFreizeitFunktionen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeitFunktionen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_ErholungFreizeitFunktionen (xplan5:LP_ErholungFreizeitFunktionen) [36]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_ForstrechtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2000 (xplan5:LP_ForstrechtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2100 (xplan5:LP_ForstrechtTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2200 (xplan5:LP_ForstrechtTypen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2300 (xplan5:LP_ForstrechtTypen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2400 (xplan5:LP_ForstrechtTypen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "2500 (xplan5:LP_ForstrechtTypen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "3000 (xplan5:LP_ForstrechtTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "3100 (xplan5:LP_ForstrechtTypen_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "3200 (xplan5:LP_ForstrechtTypen_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_ForstrechtTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ForstrechtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_ForstrechtTypen (xplan5:LP_ForstrechtTypen) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_InternatSchutzobjektTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen",
        "type": "instance",
        "text": "2000 (xplan5:LP_InternatSchutzobjektTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_InternatSchutzobjektTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_InternatSchutzobjektTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_InternatSchutzobjektTypen (xplan5:LP_InternatSchutzobjektTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "type": "instance",
        "text": "1000 (xplan5:LP_PlanArt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "type": "instance",
        "text": "2000 (xplan5:LP_PlanArt_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "type": "instance",
        "text": "3000 (xplan5:LP_PlanArt_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "type": "instance",
        "text": "4000 (xplan5:LP_PlanArt_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "type": "instance",
        "text": "9999 (xplan5:LP_PlanArt_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_PlanArt (xplan5:LP_PlanArt) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "1000 (xplan5:LP_Rechtscharakter_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "2000 (xplan5:LP_Rechtscharakter_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "3000 (xplan5:LP_Rechtscharakter_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "4000 (xplan5:LP_Rechtscharakter_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "5000 (xplan5:LP_Rechtscharakter_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "9998 (xplan5:LP_Rechtscharakter_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "type": "instance",
        "text": "9999 (xplan5:LP_Rechtscharakter_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtscharakter",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_Rechtscharakter (xplan5:LP_Rechtscharakter) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "type": "instance",
        "text": "1000 (xplan5:LP_Rechtsstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "type": "instance",
        "text": "2000 (xplan5:LP_Rechtsstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "type": "instance",
        "text": "3000 (xplan5:LP_Rechtsstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "type": "instance",
        "text": "4000 (xplan5:LP_Rechtsstand_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "type": "instance",
        "text": "5000 (xplan5:LP_Rechtsstand_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Rechtsstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_Rechtsstand (xplan5:LP_Rechtsstand) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Regelungen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Regelungen",
        "type": "instance",
        "text": "1000 (xplan5:LP_Regelungen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Regelungen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Regelungen",
        "type": "instance",
        "text": "9999 (xplan5:LP_Regelungen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Regelungen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_Regelungen (xplan5:LP_Regelungen) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_SonstRechtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen",
        "type": "instance",
        "text": "2000 (xplan5:LP_SonstRechtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_SonstRechtTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SonstRechtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_SonstRechtTypen (xplan5:LP_SonstRechtTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_WasserrechtSchutzgebietTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen",
        "type": "instance",
        "text": "2000 (xplan5:LP_WasserrechtSchutzgebietTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen",
        "type": "instance",
        "text": "3000 (xplan5:LP_WasserrechtSchutzgebietTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_WasserrechtSchutzgebietTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebietTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_WasserrechtSchutzgebietTypen (xplan5:LP_WasserrechtSchutzgebietTypen) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen",
        "type": "instance",
        "text": "1000 (xplan5:LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen",
        "type": "instance",
        "text": "2000 (xplan5:LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen",
        "type": "instance",
        "text": "9999 (xplan5:LP_WasserrechtWirtschaftAbflussHochwSchutzTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutzTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "LP_WasserrechtWirtschaftAbflussHochwSchutzTypen (xplan5:LP_WasserrechtWirtschaftAbflussHochwSchutzTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_AbfallTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_AbfallTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_AbfallTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_AbfallTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_AbfallTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_AbfallTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_AbfallTypen (xplan5:RP_AbfallTypen) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_AbfallentsorgungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_AbfallentsorgungTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1101 (xplan5:RP_AbfallentsorgungTypen_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_AbfallentsorgungTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_AbfallentsorgungTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_AbfallentsorgungTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_AbfallentsorgungTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_AbfallentsorgungTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_AbfallentsorgungTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_AbfallentsorgungTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_AbfallentsorgungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbfallentsorgungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_AbfallentsorgungTypen (xplan5:RP_AbfallentsorgungTypen) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_AbwasserTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_AbwasserTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_AbwasserTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_AbwasserTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_AbwasserTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_AbwasserTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_AbwasserTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AbwasserTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_AbwasserTypen (xplan5:RP_AbwasserTypen) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_AchsenTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_AchsenTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_AchsenTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_AchsenTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_3002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "3002 (xplan5:RP_AchsenTypen_3002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_3003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "3003 (xplan5:RP_AchsenTypen_3003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_AchsenTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_AchsenTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_AchsenTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_AchsenTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_AchsenTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_AchsenTypen (xplan5:RP_AchsenTypen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "1000 (xplan5:RP_Art_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "2000 (xplan5:RP_Art_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "2001 (xplan5:RP_Art_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "3000 (xplan5:RP_Art_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "4000 (xplan5:RP_Art_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "5000 (xplan5:RP_Art_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_5001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "5001 (xplan5:RP_Art_5001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "6000 (xplan5:RP_Art_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "type": "instance",
        "text": "9999 (xplan5:RP_Art_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Art",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Art (xplan5:RP_Art) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "1000 (xplan5:RP_Bedeutsamkeit_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "2000 (xplan5:RP_Bedeutsamkeit_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "3000 (xplan5:RP_Bedeutsamkeit_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "4000 (xplan5:RP_Bedeutsamkeit_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "5000 (xplan5:RP_Bedeutsamkeit_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "6000 (xplan5:RP_Bedeutsamkeit_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "7000 (xplan5:RP_Bedeutsamkeit_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "8000 (xplan5:RP_Bedeutsamkeit_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "type": "instance",
        "text": "9000 (xplan5:RP_Bedeutsamkeit_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bedeutsamkeit",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Bedeutsamkeit (xplan5:RP_Bedeutsamkeit) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "1000 (xplan5:RP_BergbauFolgenutzung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "2000 (xplan5:RP_BergbauFolgenutzung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "3000 (xplan5:RP_BergbauFolgenutzung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "4000 (xplan5:RP_BergbauFolgenutzung_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "5000 (xplan5:RP_BergbauFolgenutzung_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "6000 (xplan5:RP_BergbauFolgenutzung_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "7000 (xplan5:RP_BergbauFolgenutzung_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "8000 (xplan5:RP_BergbauFolgenutzung_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "9000 (xplan5:RP_BergbauFolgenutzung_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "type": "instance",
        "text": "9999 (xplan5:RP_BergbauFolgenutzung_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauFolgenutzung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BergbauFolgenutzung (xplan5:RP_BergbauFolgenutzung) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BergbauplanungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_BergbauplanungTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_BergbauplanungTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_BergbauplanungTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_BergbauplanungTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_BergbauplanungTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_BergbauplanungTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_BergbauplanungTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_BergbauplanungTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_BergbauplanungTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_BergbauplanungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BergbauplanungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BergbauplanungTypen (xplan5:RP_BergbauplanungTypen) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BesondereRaumkategorieTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BesondereRaumkategorieTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_BesondereRaumkategorieTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereRaumkategorieTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BesondereRaumkategorieTypen (xplan5:RP_BesondereRaumkategorieTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BesondereTourismusErholungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BesondereTourismusErholungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_BesondereTourismusErholungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondereTourismusErholungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BesondereTourismusErholungTypen (xplan5:RP_BesondereTourismusErholungTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BesondererSchienenverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_BesondererSchienenverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_BesondererSchienenverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BesondererSchienenverkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_BesondererSchienenverkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_BesondererSchienenverkehrTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_BesondererSchienenverkehrTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_4001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "4001 (xplan5:RP_BesondererSchienenverkehrTypen_4001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_BesondererSchienenverkehrTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_BesondererSchienenverkehrTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_6001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "6001 (xplan5:RP_BesondererSchienenverkehrTypen_6001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_BesondererSchienenverkehrTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_7001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "7001 (xplan5:RP_BesondererSchienenverkehrTypen_7001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_BesondererSchienenverkehrTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen_8001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "type": "instance",
        "text": "8001 (xplan5:RP_BesondererSchienenverkehrTypen_8001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererSchienenverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BesondererSchienenverkehrTypen (xplan5:RP_BesondererSchienenverkehrTypen) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BesondererStrassenverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_BesondererStrassenverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_BesondererStrassenverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_1003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "1003 (xplan5:RP_BesondererStrassenverkehrTypen_1003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BesondererStrassenverkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_BesondererStrassenverkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BesondererStrassenverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BesondererStrassenverkehrTypen (xplan5:RP_BesondererStrassenverkehrTypen) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschatzTiefen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschatzTiefen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BodenschatzTiefen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschatzTiefen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschatzTiefen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BodenschatzTiefen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschatzTiefen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BodenschatzTiefen (xplan5:RP_BodenschatzTiefen) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_BodenschutzTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_BodenschutzTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_BodenschutzTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_BodenschutzTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_BodenschutzTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_BodenschutzTypen (xplan5:RP_BodenschutzTypen) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_EinzelhandelTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_EinzelhandelTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_EinzelhandelTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_EinzelhandelTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_EinzelhandelTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_EinzelhandelTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_EinzelhandelTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_EinzelhandelTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "9000 (xplan5:RP_EinzelhandelTypen_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_EinzelhandelTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EinzelhandelTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_EinzelhandelTypen (xplan5:RP_EinzelhandelTypen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_EnergieversorgungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_EnergieversorgungTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_EnergieversorgungTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_EnergieversorgungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_EnergieversorgungTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_EnergieversorgungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_EnergieversorgungTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_3002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "3002 (xplan5:RP_EnergieversorgungTypen_3002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_EnergieversorgungTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_4001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "4001 (xplan5:RP_EnergieversorgungTypen_4001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_4002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "4002 (xplan5:RP_EnergieversorgungTypen_4002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_EnergieversorgungTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_EnergieversorgungTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_EnergieversorgungTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_EnergieversorgungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_EnergieversorgungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_EnergieversorgungTypen (xplan5:RP_EnergieversorgungTypen) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ErholungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ErholungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_ErholungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_ErholungTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_ErholungTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_5001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "5001 (xplan5:RP_ErholungTypen_5001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_ErholungTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_ErholungTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_ErholungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErholungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ErholungTypen (xplan5:RP_ErholungTypen) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ErneuerbareEnergieTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ErneuerbareEnergieTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_ErneuerbareEnergieTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_ErneuerbareEnergieTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_ErneuerbareEnergieTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergieTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ErneuerbareEnergieTypen (xplan5:RP_ErneuerbareEnergieTypen) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ForstwirtschaftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_ForstwirtschaftTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_ForstwirtschaftTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ForstwirtschaftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_ForstwirtschaftTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "2002 (xplan5:RP_ForstwirtschaftTypen_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_ForstwirtschaftTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_ForstwirtschaftTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_ForstwirtschaftTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_ForstwirtschaftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ForstwirtschaftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ForstwirtschaftTypen (xplan5:RP_ForstwirtschaftTypen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_FunktionszuweisungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_FunktionszuweisungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_FunktionszuweisungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_FunktionszuweisungTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_FunktionszuweisungTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_FunktionszuweisungTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_FunktionszuweisungTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_FunktionszuweisungTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_FunktionszuweisungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_FunktionszuweisungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_FunktionszuweisungTypen (xplan5:RP_FunktionszuweisungTypen) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1000 (xplan5:RP_GebietsTyp_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1001 (xplan5:RP_GebietsTyp_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1100 (xplan5:RP_GebietsTyp_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1101 (xplan5:RP_GebietsTyp_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1200 (xplan5:RP_GebietsTyp_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1300 (xplan5:RP_GebietsTyp_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1400 (xplan5:RP_GebietsTyp_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1500 (xplan5:RP_GebietsTyp_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1501",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1501 (xplan5:RP_GebietsTyp_1501)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1600 (xplan5:RP_GebietsTyp_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1700 (xplan5:RP_GebietsTyp_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "1800 (xplan5:RP_GebietsTyp_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "type": "instance",
        "text": "9999 (xplan5:RP_GebietsTyp_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GebietsTyp",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_GebietsTyp (xplan5:RP_GebietsTyp) [13]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_HochwasserschutzTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_HochwasserschutzTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_HochwasserschutzTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1101 (xplan5:RP_HochwasserschutzTypen_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1102",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1102 (xplan5:RP_HochwasserschutzTypen_1102)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_HochwasserschutzTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_HochwasserschutzTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1301",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1301 (xplan5:RP_HochwasserschutzTypen_1301)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1302",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1302 (xplan5:RP_HochwasserschutzTypen_1302)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1303",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1303 (xplan5:RP_HochwasserschutzTypen_1303)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_HochwasserschutzTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_HochwasserschutzTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_HochwasserschutzTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_HochwasserschutzTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_HochwasserschutzTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_1801",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "1801 (xplan5:RP_HochwasserschutzTypen_1801)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_HochwasserschutzTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_HochwasserschutzTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_HochwasserschutzTypen (xplan5:RP_HochwasserschutzTypen) [17]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_IndustrieGewerbeTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_IndustrieGewerbeTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_IndustrieGewerbeTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_IndustrieGewerbeTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "2002 (xplan5:RP_IndustrieGewerbeTypen_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_2003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "2003 (xplan5:RP_IndustrieGewerbeTypen_2003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_IndustrieGewerbeTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_IndustrieGewerbeTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_IndustrieGewerbeTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_IndustrieGewerbeTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_IndustrieGewerbeTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_IndustrieGewerbeTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_IndustrieGewerbeTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "9000 (xplan5:RP_IndustrieGewerbeTypen_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_IndustrieGewerbeTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbeTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_IndustrieGewerbeTypen (xplan5:RP_IndustrieGewerbeTypen) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_KommunikationTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_KommunikationTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_KommunikationTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "type": "instance",
        "text": "2002 (xplan5:RP_KommunikationTypen_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_KommunikationTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KommunikationTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_KommunikationTypen (xplan5:RP_KommunikationTypen) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_KulturlandschaftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_KulturlandschaftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_KulturlandschaftTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_KulturlandschaftTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_KulturlandschaftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_KulturlandschaftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_KulturlandschaftTypen (xplan5:RP_KulturlandschaftTypen) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_LaermschutzTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_LaermschutzTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_LaermschutzTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_LaermschutzTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_LaermschutzTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_LaermschutzTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_LaermschutzTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_LaermschutzTypen (xplan5:RP_LaermschutzTypen) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_LandwirtschaftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_LandwirtschaftTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_LandwirtschaftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_LandwirtschaftTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_LandwirtschaftTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_LandwirtschaftTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_LandwirtschaftTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_LandwirtschaftTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_LandwirtschaftTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_LandwirtschaftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LandwirtschaftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_LandwirtschaftTypen (xplan5:RP_LandwirtschaftTypen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_LuftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_LuftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_LuftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_LuftTypen (xplan5:RP_LuftTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_LuftverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_LuftverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_LuftverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1003 (xplan5:RP_LuftverkehrTypen_1003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1004",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1004 (xplan5:RP_LuftverkehrTypen_1004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_1005",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "1005 (xplan5:RP_LuftverkehrTypen_1005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_LuftverkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_LuftverkehrTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "2002 (xplan5:RP_LuftverkehrTypen_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_2003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "2003 (xplan5:RP_LuftverkehrTypen_2003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_LuftverkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_LuftverkehrTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_LuftverkehrTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_5001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "5001 (xplan5:RP_LuftverkehrTypen_5001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_5002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "5002 (xplan5:RP_LuftverkehrTypen_5002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_5003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "5003 (xplan5:RP_LuftverkehrTypen_5003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_LuftverkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LuftverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_LuftverkehrTypen (xplan5:RP_LuftverkehrTypen) [17]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_NaturLandschaftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_NaturLandschaftTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1101 (xplan5:RP_NaturLandschaftTypen_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_NaturLandschaftTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_NaturLandschaftTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1301",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1301 (xplan5:RP_NaturLandschaftTypen_1301)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_NaturLandschaftTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_NaturLandschaftTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1501",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1501 (xplan5:RP_NaturLandschaftTypen_1501)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_NaturLandschaftTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_NaturLandschaftTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1701",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1701 (xplan5:RP_NaturLandschaftTypen_1701)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1702",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1702 (xplan5:RP_NaturLandschaftTypen_1702)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1703",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1703 (xplan5:RP_NaturLandschaftTypen_1703)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1704",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1704 (xplan5:RP_NaturLandschaftTypen_1704)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_NaturLandschaftTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_NaturLandschaftTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_NaturLandschaftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2100 (xplan5:RP_NaturLandschaftTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2200 (xplan5:RP_NaturLandschaftTypen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2300 (xplan5:RP_NaturLandschaftTypen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2400 (xplan5:RP_NaturLandschaftTypen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "2500 (xplan5:RP_NaturLandschaftTypen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_NaturLandschaftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_NaturLandschaftTypen (xplan5:RP_NaturLandschaftTypen) [24]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_PrimaerenergieTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_PrimaerenergieTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_PrimaerenergieTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_PrimaerenergieTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_PrimaerenergieTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_PrimaerenergieTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_PrimaerenergieTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_PrimaerenergieTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_PrimaerenergieTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "9000 (xplan5:RP_PrimaerenergieTypen_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_9001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "9001 (xplan5:RP_PrimaerenergieTypen_9001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_PrimaerenergieTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_PrimaerenergieTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_PrimaerenergieTypen (xplan5:RP_PrimaerenergieTypen) [12]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_RadwegWanderwegTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_RadwegWanderwegTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_RadwegWanderwegTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_RadwegWanderwegTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_RadwegWanderwegTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_RadwegWanderwegTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_RadwegWanderwegTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderwegTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_RadwegWanderwegTypen (xplan5:RP_RadwegWanderwegTypen) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_RaumkategorieTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_RaumkategorieTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_RaumkategorieTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1101 (xplan5:RP_RaumkategorieTypen_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1102",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1102 (xplan5:RP_RaumkategorieTypen_1102)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1103",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1103 (xplan5:RP_RaumkategorieTypen_1103)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1104",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1104 (xplan5:RP_RaumkategorieTypen_1104)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1105",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1105 (xplan5:RP_RaumkategorieTypen_1105)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1106",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1106 (xplan5:RP_RaumkategorieTypen_1106)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_RaumkategorieTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1201",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1201 (xplan5:RP_RaumkategorieTypen_1201)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1202",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1202 (xplan5:RP_RaumkategorieTypen_1202)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1203",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1203 (xplan5:RP_RaumkategorieTypen_1203)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_RaumkategorieTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1301",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1301 (xplan5:RP_RaumkategorieTypen_1301)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_RaumkategorieTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_RaumkategorieTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_RaumkategorieTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_RaumkategorieTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_RaumkategorieTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_RaumkategorieTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_RaumkategorieTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2100 (xplan5:RP_RaumkategorieTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2200 (xplan5:RP_RaumkategorieTypen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2300 (xplan5:RP_RaumkategorieTypen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2400 (xplan5:RP_RaumkategorieTypen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "2500 (xplan5:RP_RaumkategorieTypen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_RaumkategorieTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RaumkategorieTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_RaumkategorieTypen (xplan5:RP_RaumkategorieTypen) [28]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "1000 (xplan5:RP_Rechtscharakter_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "2000 (xplan5:RP_Rechtscharakter_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "3000 (xplan5:RP_Rechtscharakter_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "4000 (xplan5:RP_Rechtscharakter_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "5000 (xplan5:RP_Rechtscharakter_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "6000 (xplan5:RP_Rechtscharakter_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "7000 (xplan5:RP_Rechtscharakter_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "8000 (xplan5:RP_Rechtscharakter_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "9000 (xplan5:RP_Rechtscharakter_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "type": "instance",
        "text": "9998 (xplan5:RP_Rechtscharakter_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtscharakter",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Rechtscharakter (xplan5:RP_Rechtscharakter) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "1000 (xplan5:RP_Rechtsstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "2000 (xplan5:RP_Rechtsstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "2001 (xplan5:RP_Rechtsstand_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "2002 (xplan5:RP_Rechtsstand_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_2003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "2003 (xplan5:RP_Rechtsstand_2003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_2004",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "2004 (xplan5:RP_Rechtsstand_2004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "3000 (xplan5:RP_Rechtsstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "4000 (xplan5:RP_Rechtsstand_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "5000 (xplan5:RP_Rechtsstand_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "6000 (xplan5:RP_Rechtsstand_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "type": "instance",
        "text": "7000 (xplan5:RP_Rechtsstand_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rechtsstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Rechtsstand (xplan5:RP_Rechtsstand) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_RohstoffTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_RohstoffTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_RohstoffTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_RohstoffTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_RohstoffTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_RohstoffTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_RohstoffTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_RohstoffTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_RohstoffTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_RohstoffTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_RohstoffTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2100 (xplan5:RP_RohstoffTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2200 (xplan5:RP_RohstoffTypen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2300 (xplan5:RP_RohstoffTypen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2400 (xplan5:RP_RohstoffTypen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2500 (xplan5:RP_RohstoffTypen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2600 (xplan5:RP_RohstoffTypen_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2700 (xplan5:RP_RohstoffTypen_2700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2800 (xplan5:RP_RohstoffTypen_2800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_2900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "2900 (xplan5:RP_RohstoffTypen_2900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_RohstoffTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3100 (xplan5:RP_RohstoffTypen_3100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3200 (xplan5:RP_RohstoffTypen_3200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3300 (xplan5:RP_RohstoffTypen_3300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3400 (xplan5:RP_RohstoffTypen_3400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3500 (xplan5:RP_RohstoffTypen_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3600 (xplan5:RP_RohstoffTypen_3600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3700 (xplan5:RP_RohstoffTypen_3700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3800 (xplan5:RP_RohstoffTypen_3800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_3900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "3900 (xplan5:RP_RohstoffTypen_3900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_RohstoffTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4100 (xplan5:RP_RohstoffTypen_4100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4200 (xplan5:RP_RohstoffTypen_4200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4300 (xplan5:RP_RohstoffTypen_4300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4400 (xplan5:RP_RohstoffTypen_4400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4500 (xplan5:RP_RohstoffTypen_4500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4600 (xplan5:RP_RohstoffTypen_4600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4700 (xplan5:RP_RohstoffTypen_4700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4800 (xplan5:RP_RohstoffTypen_4800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_4900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "4900 (xplan5:RP_RohstoffTypen_4900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_RohstoffTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5100 (xplan5:RP_RohstoffTypen_5100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5200 (xplan5:RP_RohstoffTypen_5200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5300 (xplan5:RP_RohstoffTypen_5300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5400 (xplan5:RP_RohstoffTypen_5400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5500 (xplan5:RP_RohstoffTypen_5500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5600 (xplan5:RP_RohstoffTypen_5600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5700 (xplan5:RP_RohstoffTypen_5700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5800 (xplan5:RP_RohstoffTypen_5800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_5900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "5900 (xplan5:RP_RohstoffTypen_5900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_RohstoffTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6100 (xplan5:RP_RohstoffTypen_6100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6200 (xplan5:RP_RohstoffTypen_6200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6300 (xplan5:RP_RohstoffTypen_6300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6400 (xplan5:RP_RohstoffTypen_6400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6500 (xplan5:RP_RohstoffTypen_6500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6600 (xplan5:RP_RohstoffTypen_6600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6700 (xplan5:RP_RohstoffTypen_6700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6800 (xplan5:RP_RohstoffTypen_6800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_6900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "6900 (xplan5:RP_RohstoffTypen_6900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_RohstoffTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_7100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "7100 (xplan5:RP_RohstoffTypen_7100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_RohstoffTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RohstoffTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_RohstoffTypen (xplan5:RP_RohstoffTypen) [63]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SchienenverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_SchienenverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_SchienenverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_SchienenverkehrTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_SchienenverkehrTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_SchienenverkehrTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1301",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1301 (xplan5:RP_SchienenverkehrTypen_1301)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1302",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1302 (xplan5:RP_SchienenverkehrTypen_1302)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1303",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1303 (xplan5:RP_SchienenverkehrTypen_1303)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_SchienenverkehrTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_SchienenverkehrTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_SchienenverkehrTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_SchienenverkehrTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_SchienenverkehrTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_1801",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "1801 (xplan5:RP_SchienenverkehrTypen_1801)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_SchienenverkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SchienenverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SchienenverkehrTypen (xplan5:RP_SchienenverkehrTypen) [16]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SonstVerkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_SonstVerkehrTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_SonstVerkehrTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_SonstVerkehrTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_SonstVerkehrTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_SonstVerkehrTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_SonstVerkehrTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_SonstVerkehrTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_SonstVerkehrTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_SonstVerkehrTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SonstVerkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_SonstVerkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SonstVerkehrTypen (xplan5:RP_SonstVerkehrTypen) [12]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SozialeInfrastrukturTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SozialeInfrastrukturTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_SozialeInfrastrukturTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_SozialeInfrastrukturTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_SozialeInfrastrukturTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_4001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "4001 (xplan5:RP_SozialeInfrastrukturTypen_4001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_SozialeInfrastrukturTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_SozialeInfrastrukturTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastrukturTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SozialeInfrastrukturTypen (xplan5:RP_SozialeInfrastrukturTypen) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SpannungTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SpannungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_SpannungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_SpannungTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpannungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SpannungTypen (xplan5:RP_SpannungTypen) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SperrgebietTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SperrgebietTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_SperrgebietTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_SperrgebietTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_4001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "4001 (xplan5:RP_SperrgebietTypen_4001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_SperrgebietTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_SperrgebietTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_SperrgebietTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SperrgebietTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SperrgebietTypen (xplan5:RP_SperrgebietTypen) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SpezifischeGrenzeTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_SpezifischeGrenzeTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SpezifischeGrenzeTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_SpezifischeGrenzeTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_SpezifischeGrenzeTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_SpezifischeGrenzeTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_SpezifischeGrenzeTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_SpezifischeGrenzeTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_SpezifischeGrenzeTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SpezifischeGrenzeTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SpezifischeGrenzeTypen (xplan5:RP_SpezifischeGrenzeTypen) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_SportanlageTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_SportanlageTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_SportanlageTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_SportanlageTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_SportanlageTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_SportanlageTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_SportanlageTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_SportanlageTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SportanlageTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_SportanlageTypen (xplan5:RP_SportanlageTypen) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_StrassenverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_StrassenverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_StrassenverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1003 (xplan5:RP_StrassenverkehrTypen_1003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1004",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1004 (xplan5:RP_StrassenverkehrTypen_1004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1005",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1005 (xplan5:RP_StrassenverkehrTypen_1005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1006",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1006 (xplan5:RP_StrassenverkehrTypen_1006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_1007",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "1007 (xplan5:RP_StrassenverkehrTypen_1007)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_StrassenverkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_StrassenverkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_StrassenverkehrTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_StrassenverkehrTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_StrassenverkehrTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_StrassenverkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_StrassenverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_StrassenverkehrTypen (xplan5:RP_StrassenverkehrTypen) [14]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_TourismusTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_TourismusTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_TourismusTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_TourismusTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_TourismusTypen (xplan5:RP_TourismusTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "type": "instance",
        "text": "1000 (xplan5:RP_Verfahren_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "type": "instance",
        "text": "2000 (xplan5:RP_Verfahren_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "type": "instance",
        "text": "3000 (xplan5:RP_Verfahren_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "type": "instance",
        "text": "4000 (xplan5:RP_Verfahren_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "type": "instance",
        "text": "5000 (xplan5:RP_Verfahren_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verfahren",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Verfahren (xplan5:RP_Verfahren) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "1000 (xplan5:RP_VerkehrStatus_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "1001 (xplan5:RP_VerkehrStatus_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "2000 (xplan5:RP_VerkehrStatus_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "3000 (xplan5:RP_VerkehrStatus_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "4000 (xplan5:RP_VerkehrStatus_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "5000 (xplan5:RP_VerkehrStatus_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "6000 (xplan5:RP_VerkehrStatus_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "7000 (xplan5:RP_VerkehrStatus_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "8000 (xplan5:RP_VerkehrStatus_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "type": "instance",
        "text": "9999 (xplan5:RP_VerkehrStatus_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrStatus",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_VerkehrStatus (xplan5:RP_VerkehrStatus) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_VerkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_VerkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_VerkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_VerkehrTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_VerkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_VerkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_VerkehrTypen (xplan5:RP_VerkehrTypen) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_WasserschutzTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_WasserschutzTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_2001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "2001 (xplan5:RP_WasserschutzTypen_2001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_2002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "2002 (xplan5:RP_WasserschutzTypen_2002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_WasserschutzTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_WasserschutzTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_WasserschutzTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_WasserschutzTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_WasserschutzTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_WasserschutzTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_WasserschutzTypen (xplan5:RP_WasserschutzTypen) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen",
        "type": "instance",
        "text": "1000 (xplan5:RP_WasserschutzZonen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen",
        "type": "instance",
        "text": "2000 (xplan5:RP_WasserschutzZonen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen",
        "type": "instance",
        "text": "3000 (xplan5:RP_WasserschutzZonen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserschutzZonen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_WasserschutzZonen (xplan5:RP_WasserschutzZonen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_WasserverkehrTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_WasserverkehrTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_1002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "1002 (xplan5:RP_WasserverkehrTypen_1002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_1003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "1003 (xplan5:RP_WasserverkehrTypen_1003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_1004",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "1004 (xplan5:RP_WasserverkehrTypen_1004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_WasserverkehrTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_WasserverkehrTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_WasserverkehrTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_4001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "4001 (xplan5:RP_WasserverkehrTypen_4001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_4002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "4002 (xplan5:RP_WasserverkehrTypen_4002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_4003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "4003 (xplan5:RP_WasserverkehrTypen_4003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_WasserverkehrTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_WasserverkehrTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserverkehrTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_WasserverkehrTypen (xplan5:RP_WasserverkehrTypen) [13]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_WasserwirtschaftTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_WasserwirtschaftTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_WasserwirtschaftTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_WasserwirtschaftTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_WasserwirtschaftTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_WasserwirtschaftTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_WasserwirtschaftTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_WasserwirtschaftTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WasserwirtschaftTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_WasserwirtschaftTypen (xplan5:RP_WasserwirtschaftTypen) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_WohnenSiedlungTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_WohnenSiedlungTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_WohnenSiedlungTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_3002",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "3002 (xplan5:RP_WohnenSiedlungTypen_3002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_3003",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "3003 (xplan5:RP_WohnenSiedlungTypen_3003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_3004",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "3004 (xplan5:RP_WohnenSiedlungTypen_3004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_WohnenSiedlungTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_WohnenSiedlungTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_WohnenSiedlungTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlungTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_WohnenSiedlungTypen (xplan5:RP_WohnenSiedlungTypen) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ZaesurTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ZaesurTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_ZaesurTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZaesurTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ZaesurTypen (xplan5:RP_ZaesurTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Zeitstufen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Zeitstufen",
        "type": "instance",
        "text": "1000 (xplan5:RP_Zeitstufen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Zeitstufen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Zeitstufen",
        "type": "instance",
        "text": "2000 (xplan5:RP_Zeitstufen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Zeitstufen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_Zeitstufen (xplan5:RP_Zeitstufen) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ZentralerOrtSonstigeTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1100 (xplan5:RP_ZentralerOrtSonstigeTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1101 (xplan5:RP_ZentralerOrtSonstigeTypen_1101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1102",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1102 (xplan5:RP_ZentralerOrtSonstigeTypen_1102)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1200 (xplan5:RP_ZentralerOrtSonstigeTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1300 (xplan5:RP_ZentralerOrtSonstigeTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1301",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1301 (xplan5:RP_ZentralerOrtSonstigeTypen_1301)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1302",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1302 (xplan5:RP_ZentralerOrtSonstigeTypen_1302)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1400 (xplan5:RP_ZentralerOrtSonstigeTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_ZentralerOrtSonstigeTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1501",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1501 (xplan5:RP_ZentralerOrtSonstigeTypen_1501)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1600 (xplan5:RP_ZentralerOrtSonstigeTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1700 (xplan5:RP_ZentralerOrtSonstigeTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1800 (xplan5:RP_ZentralerOrtSonstigeTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "1900 (xplan5:RP_ZentralerOrtSonstigeTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ZentralerOrtSonstigeTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "2100 (xplan5:RP_ZentralerOrtSonstigeTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_2101",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "2101 (xplan5:RP_ZentralerOrtSonstigeTypen_2101)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_ZentralerOrtSonstigeTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtSonstigeTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ZentralerOrtSonstigeTypen (xplan5:RP_ZentralerOrtSonstigeTypen) [19]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "1000 (xplan5:RP_ZentralerOrtTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_1001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "1001 (xplan5:RP_ZentralerOrtTypen_1001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "1500 (xplan5:RP_ZentralerOrtTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "2000 (xplan5:RP_ZentralerOrtTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "2500 (xplan5:RP_ZentralerOrtTypen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "3000 (xplan5:RP_ZentralerOrtTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_3001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "3001 (xplan5:RP_ZentralerOrtTypen_3001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "3500 (xplan5:RP_ZentralerOrtTypen_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "4000 (xplan5:RP_ZentralerOrtTypen_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "5000 (xplan5:RP_ZentralerOrtTypen_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "6000 (xplan5:RP_ZentralerOrtTypen_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_6001",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "6001 (xplan5:RP_ZentralerOrtTypen_6001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "7000 (xplan5:RP_ZentralerOrtTypen_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "8000 (xplan5:RP_ZentralerOrtTypen_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_9000",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "9000 (xplan5:RP_ZentralerOrtTypen_9000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "type": "instance",
        "text": "9999 (xplan5:RP_ZentralerOrtTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrtTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "RP_ZentralerOrtTypen (xplan5:RP_ZentralerOrtTypen) [16]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1000 (xplan5:SO_GebietsArt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1100 (xplan5:SO_GebietsArt_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1200 (xplan5:SO_GebietsArt_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1300 (xplan5:SO_GebietsArt_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1400 (xplan5:SO_GebietsArt_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1500 (xplan5:SO_GebietsArt_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1600 (xplan5:SO_GebietsArt_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_1999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "1999 (xplan5:SO_GebietsArt_1999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "2000 (xplan5:SO_GebietsArt_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "2100 (xplan5:SO_GebietsArt_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "2200 (xplan5:SO_GebietsArt_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "type": "instance",
        "text": "9999 (xplan5:SO_GebietsArt_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_GebietsArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_GebietsArt (xplan5:SO_GebietsArt) [12]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachBodenschutzrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizNachBodenschutzrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht_20000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "type": "instance",
        "text": "20000 (xplan5:SO_KlassifizNachBodenschutzrecht_20000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht_20001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "type": "instance",
        "text": "20001 (xplan5:SO_KlassifizNachBodenschutzrecht_20001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht_20002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "type": "instance",
        "text": "20002 (xplan5:SO_KlassifizNachBodenschutzrecht_20002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachBodenschutzrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachBodenschutzrecht (xplan5:SO_KlassifizNachBodenschutzrecht) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachDenkmalschutzrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "1100 (xplan5:SO_KlassifizNachDenkmalschutzrecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_KlassifizNachDenkmalschutzrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "1300 (xplan5:SO_KlassifizNachDenkmalschutzrecht_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "1400 (xplan5:SO_KlassifizNachDenkmalschutzrecht_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachDenkmalschutzrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachDenkmalschutzrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachDenkmalschutzrecht (xplan5:SO_KlassifizNachDenkmalschutzrecht) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachForstrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizNachForstrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachForstrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachForstrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachForstrecht (xplan5:SO_KlassifizNachForstrecht) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "3000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "4000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "5000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_5200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "5200 (xplan5:SO_KlassifizNachLuftverkehrsrecht_5200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_5400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "5400 (xplan5:SO_KlassifizNachLuftverkehrsrecht_5400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "6000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "7000 (xplan5:SO_KlassifizNachLuftverkehrsrecht_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachLuftverkehrsrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachLuftverkehrsrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachLuftverkehrsrecht (xplan5:SO_KlassifizNachLuftverkehrsrecht) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "10000 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "10001 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "10002 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_10003",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "10003 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_10003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12000 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12001 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12002 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12003",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12003 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12004",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12004 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_12005",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "12005 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_12005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "1400 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_14000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "14000 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_14000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_14001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "14001 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_14001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_14002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "14002 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_14002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_14003",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "14003 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_14003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachSchienenverkehrsrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSchienenverkehrsrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachSchienenverkehrsrecht (xplan5:SO_KlassifizNachSchienenverkehrsrecht) [18]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachSonstigemRecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "1100 (xplan5:SO_KlassifizNachSonstigemRecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_KlassifizNachSonstigemRecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "1300 (xplan5:SO_KlassifizNachSonstigemRecht_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "1400 (xplan5:SO_KlassifizNachSonstigemRecht_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachSonstigemRecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachSonstigemRecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachSonstigemRecht (xplan5:SO_KlassifizNachSonstigemRecht) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachStrassenverkehrsrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "type": "instance",
        "text": "1100 (xplan5:SO_KlassifizNachStrassenverkehrsrecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_KlassifizNachStrassenverkehrsrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "type": "instance",
        "text": "1300 (xplan5:SO_KlassifizNachStrassenverkehrsrecht_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachStrassenverkehrsrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachStrassenverkehrsrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachStrassenverkehrsrecht (xplan5:SO_KlassifizNachStrassenverkehrsrecht) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizNachWasserrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "10000 (xplan5:SO_KlassifizNachWasserrecht_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "10001 (xplan5:SO_KlassifizNachWasserrecht_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "10002 (xplan5:SO_KlassifizNachWasserrecht_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizNachWasserrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_20000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "20000 (xplan5:SO_KlassifizNachWasserrecht_20000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_20001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "20001 (xplan5:SO_KlassifizNachWasserrecht_20001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_20002",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "20002 (xplan5:SO_KlassifizNachWasserrecht_20002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizNachWasserrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizNachWasserrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizNachWasserrecht (xplan5:SO_KlassifizNachWasserrecht) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizSchutzgebietSonstRecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizSchutzgebietSonstRecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizSchutzgebietSonstRecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietSonstRecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizSchutzgebietSonstRecht (xplan5:SO_KlassifizSchutzgebietSonstRecht) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_KlassifizSchutzgebietWasserrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "type": "instance",
        "text": "10000 (xplan5:SO_KlassifizSchutzgebietWasserrecht_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "type": "instance",
        "text": "10001 (xplan5:SO_KlassifizSchutzgebietWasserrecht_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_KlassifizSchutzgebietWasserrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "type": "instance",
        "text": "9999 (xplan5:SO_KlassifizSchutzgebietWasserrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_KlassifizSchutzgebietWasserrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_KlassifizSchutzgebietWasserrecht (xplan5:SO_KlassifizSchutzgebietWasserrecht) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen",
        "type": "instance",
        "text": "1000 (xplan5:SO_LaermschutzzoneTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen",
        "type": "instance",
        "text": "2000 (xplan5:SO_LaermschutzzoneTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen",
        "type": "instance",
        "text": "3000 (xplan5:SO_LaermschutzzoneTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_LaermschutzzoneTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_LaermschutzzoneTypen (xplan5:SO_LaermschutzzoneTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "1000 (xplan5:SO_Rechtscharakter_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "1500 (xplan5:SO_Rechtscharakter_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "1800 (xplan5:SO_Rechtscharakter_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "2000 (xplan5:SO_Rechtscharakter_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "3000 (xplan5:SO_Rechtscharakter_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "4000 (xplan5:SO_Rechtscharakter_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "5000 (xplan5:SO_Rechtscharakter_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "9998 (xplan5:SO_Rechtscharakter_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "type": "instance",
        "text": "9999 (xplan5:SO_Rechtscharakter_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Rechtscharakter",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_Rechtscharakter (xplan5:SO_Rechtscharakter) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "1000 (xplan5:SO_RechtsstandGebietTyp_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "2000 (xplan5:SO_RechtsstandGebietTyp_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "3000 (xplan5:SO_RechtsstandGebietTyp_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "4000 (xplan5:SO_RechtsstandGebietTyp_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "5000 (xplan5:SO_RechtsstandGebietTyp_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "type": "instance",
        "text": "9999 (xplan5:SO_RechtsstandGebietTyp_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_RechtsstandGebietTyp",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_RechtsstandGebietTyp (xplan5:SO_RechtsstandGebietTyp) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_SchutzzonenNaturschutzrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "1100 (xplan5:SO_SchutzzonenNaturschutzrecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_SchutzzonenNaturschutzrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "2000 (xplan5:SO_SchutzzonenNaturschutzrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "2100 (xplan5:SO_SchutzzonenNaturschutzrecht_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "2200 (xplan5:SO_SchutzzonenNaturschutzrecht_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "type": "instance",
        "text": "2300 (xplan5:SO_SchutzzonenNaturschutzrecht_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenNaturschutzrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_SchutzzonenNaturschutzrecht (xplan5:SO_SchutzzonenNaturschutzrecht) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1000 (xplan5:SO_SchutzzonenWasserrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1100 (xplan5:SO_SchutzzonenWasserrecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1200 (xplan5:SO_SchutzzonenWasserrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1300 (xplan5:SO_SchutzzonenWasserrecht_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1400 (xplan5:SO_SchutzzonenWasserrecht_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "type": "instance",
        "text": "1500 (xplan5:SO_SchutzzonenWasserrecht_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzzonenWasserrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "SO_SchutzzonenWasserrecht (xplan5:SO_SchutzzonenWasserrecht) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen",
        "type": "instance",
        "text": "1000 (xplan5:XP_ABEMassnahmenTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen",
        "type": "instance",
        "text": "2000 (xplan5:XP_ABEMassnahmenTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen",
        "type": "instance",
        "text": "3000 (xplan5:XP_ABEMassnahmenTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ABEMassnahmenTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ABEMassnahmenTypen (xplan5:XP_ABEMassnahmenTypen) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen",
        "type": "instance",
        "text": "1000 (xplan5:XP_AbweichungBauNVOTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen",
        "type": "instance",
        "text": "2000 (xplan5:XP_AbweichungBauNVOTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen",
        "type": "instance",
        "text": "3000 (xplan5:XP_AbweichungBauNVOTypen_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen",
        "type": "instance",
        "text": "9999 (xplan5:XP_AbweichungBauNVOTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbweichungBauNVOTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_AbweichungBauNVOTypen (xplan5:XP_AbweichungBauNVOTypen) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "type": "instance",
        "text": "1000 (xplan5:XP_AllgArtDerBaulNutzung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "type": "instance",
        "text": "2000 (xplan5:XP_AllgArtDerBaulNutzung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "type": "instance",
        "text": "3000 (xplan5:XP_AllgArtDerBaulNutzung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "type": "instance",
        "text": "4000 (xplan5:XP_AllgArtDerBaulNutzung_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "type": "instance",
        "text": "9999 (xplan5:XP_AllgArtDerBaulNutzung_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AllgArtDerBaulNutzung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_AllgArtDerBaulNutzung (xplan5:XP_AllgArtDerBaulNutzung) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "1000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "1100 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "1200 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "2000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_2050",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "2050 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_2050)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "2100 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "2200 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "3000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "4000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "5000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "type": "instance",
        "text": "6000 (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AnpflanzungBindungErhaltungsGegenstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_AnpflanzungBindungErhaltungsGegenstand (xplan5:XP_AnpflanzungBindungErhaltungsGegenstand) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug",
        "type": "instance",
        "text": "1000 (xplan5:XP_ArtHoehenbezug_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug",
        "type": "instance",
        "text": "2000 (xplan5:XP_ArtHoehenbezug_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug",
        "type": "instance",
        "text": "2500 (xplan5:XP_ArtHoehenbezug_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug",
        "type": "instance",
        "text": "3000 (xplan5:XP_ArtHoehenbezug_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezug",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ArtHoehenbezug (xplan5:XP_ArtHoehenbezug) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "1000 (xplan5:XP_ArtHoehenbezugspunkt_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "2000 (xplan5:XP_ArtHoehenbezugspunkt_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "3000 (xplan5:XP_ArtHoehenbezugspunkt_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_3500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "3500 (xplan5:XP_ArtHoehenbezugspunkt_3500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "4000 (xplan5:XP_ArtHoehenbezugspunkt_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_4500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "4500 (xplan5:XP_ArtHoehenbezugspunkt_4500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "5000 (xplan5:XP_ArtHoehenbezugspunkt_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_5500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "5500 (xplan5:XP_ArtHoehenbezugspunkt_5500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "type": "instance",
        "text": "6000 (xplan5:XP_ArtHoehenbezugspunkt_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ArtHoehenbezugspunkt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ArtHoehenbezugspunkt (xplan5:XP_ArtHoehenbezugspunkt) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich",
        "type": "instance",
        "text": "1600 (xplan5:XP_BedeutungenBereich_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich",
        "type": "instance",
        "text": "1800 (xplan5:XP_BedeutungenBereich_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich",
        "type": "instance",
        "text": "9999 (xplan5:XP_BedeutungenBereich_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BedeutungenBereich",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_BedeutungenBereich (xplan5:XP_BedeutungenBereich) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1000 (xplan5:XP_BesondereArtDerBaulNutzung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1100 (xplan5:XP_BesondereArtDerBaulNutzung_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1200 (xplan5:XP_BesondereArtDerBaulNutzung_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1300 (xplan5:XP_BesondereArtDerBaulNutzung_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1400 (xplan5:XP_BesondereArtDerBaulNutzung_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1500 (xplan5:XP_BesondereArtDerBaulNutzung_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1550",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1550 (xplan5:XP_BesondereArtDerBaulNutzung_1550)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1600 (xplan5:XP_BesondereArtDerBaulNutzung_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1700 (xplan5:XP_BesondereArtDerBaulNutzung_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "1800 (xplan5:XP_BesondereArtDerBaulNutzung_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "2000 (xplan5:XP_BesondereArtDerBaulNutzung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "2100 (xplan5:XP_BesondereArtDerBaulNutzung_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "3000 (xplan5:XP_BesondereArtDerBaulNutzung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "4000 (xplan5:XP_BesondereArtDerBaulNutzung_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "type": "instance",
        "text": "9999 (xplan5:XP_BesondereArtDerBaulNutzung_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BesondereArtDerBaulNutzung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_BesondereArtDerBaulNutzung (xplan5:XP_BesondereArtDerBaulNutzung) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1000 (xplan5:XP_Bundeslaender_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1100 (xplan5:XP_Bundeslaender_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1200 (xplan5:XP_Bundeslaender_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1300 (xplan5:XP_Bundeslaender_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1400 (xplan5:XP_Bundeslaender_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1500 (xplan5:XP_Bundeslaender_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1600 (xplan5:XP_Bundeslaender_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1700 (xplan5:XP_Bundeslaender_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1800 (xplan5:XP_Bundeslaender_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "1900 (xplan5:XP_Bundeslaender_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2000 (xplan5:XP_Bundeslaender_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2100 (xplan5:XP_Bundeslaender_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2200 (xplan5:XP_Bundeslaender_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2300 (xplan5:XP_Bundeslaender_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2400 (xplan5:XP_Bundeslaender_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "2500 (xplan5:XP_Bundeslaender_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "type": "instance",
        "text": "3000 (xplan5:XP_Bundeslaender_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bundeslaender",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_Bundeslaender (xplan5:XP_Bundeslaender) [17]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzArt_Dokument",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzArt",
        "type": "instance",
        "text": "Dokument (xplan5:XP_ExterneReferenzArt_Dokument)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzArt_PlanMitGeoreferenz",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzArt",
        "type": "instance",
        "text": "PlanMitGeoreferenz (xplan5:XP_ExterneReferenzArt_PlanMitGeoreferenz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzArt",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ExterneReferenzArt (xplan5:XP_ExterneReferenzArt) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1000 (xplan5:XP_ExterneReferenzTyp_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1010",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1010 (xplan5:XP_ExterneReferenzTyp_1010)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1020",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1020 (xplan5:XP_ExterneReferenzTyp_1020)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1030",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1030 (xplan5:XP_ExterneReferenzTyp_1030)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1040",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1040 (xplan5:XP_ExterneReferenzTyp_1040)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1050",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1050 (xplan5:XP_ExterneReferenzTyp_1050)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1060",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1060 (xplan5:XP_ExterneReferenzTyp_1060)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1070",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1070 (xplan5:XP_ExterneReferenzTyp_1070)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1080",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1080 (xplan5:XP_ExterneReferenzTyp_1080)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_1090",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "1090 (xplan5:XP_ExterneReferenzTyp_1090)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2000 (xplan5:XP_ExterneReferenzTyp_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2100 (xplan5:XP_ExterneReferenzTyp_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2200 (xplan5:XP_ExterneReferenzTyp_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2300 (xplan5:XP_ExterneReferenzTyp_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2400 (xplan5:XP_ExterneReferenzTyp_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "2500 (xplan5:XP_ExterneReferenzTyp_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_9998",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "9998 (xplan5:XP_ExterneReferenzTyp_9998)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "type": "instance",
        "text": "9999 (xplan5:XP_ExterneReferenzTyp_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenzTyp",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ExterneReferenzTyp (xplan5:XP_ExterneReferenzTyp) [18]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1000 (xplan5:XP_GrenzeTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1100 (xplan5:XP_GrenzeTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1200 (xplan5:XP_GrenzeTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1250",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1250 (xplan5:XP_GrenzeTypen_1250)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1300 (xplan5:XP_GrenzeTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1400 (xplan5:XP_GrenzeTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1450",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1450 (xplan5:XP_GrenzeTypen_1450)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1500 (xplan5:XP_GrenzeTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1510",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1510 (xplan5:XP_GrenzeTypen_1510)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1550",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1550 (xplan5:XP_GrenzeTypen_1550)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "1600 (xplan5:XP_GrenzeTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "2000 (xplan5:XP_GrenzeTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "2100 (xplan5:XP_GrenzeTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "type": "instance",
        "text": "9999 (xplan5:XP_GrenzeTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GrenzeTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_GrenzeTypen (xplan5:XP_GrenzeTypen) [14]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung_linksb\u00fcndig",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung",
        "type": "instance",
        "text": "linksb\u00fcndig (xplan5:XP_HorizontaleAusrichtung_linksb\u00fcndig)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung_rechtsb\u00fcndig",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung",
        "type": "instance",
        "text": "rechtsb\u00fcndig (xplan5:XP_HorizontaleAusrichtung_rechtsb\u00fcndig)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung_zentrisch",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung",
        "type": "instance",
        "text": "zentrisch (xplan5:XP_HorizontaleAusrichtung_zentrisch)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_HorizontaleAusrichtung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_HorizontaleAusrichtung (xplan5:XP_HorizontaleAusrichtung) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1000 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1100 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1200 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1300 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1400 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1500 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1600 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1700 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "1800 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_18000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "18000 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_18000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_18001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "18001 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_18001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "2000 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "type": "instance",
        "text": "9999 (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_KlassifizSchutzgebietNaturschutzrecht",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_KlassifizSchutzgebietNaturschutzrecht (xplan5:XP_KlassifizSchutzgebietNaturschutzrecht) [13]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsform_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsform",
        "type": "instance",
        "text": "1000 (xplan5:XP_Nutzungsform_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsform_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsform",
        "type": "instance",
        "text": "2000 (xplan5:XP_Nutzungsform_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsform",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_Nutzungsform (xplan5:XP_Nutzungsform) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung",
        "type": "instance",
        "text": "1000 (xplan5:XP_RechtscharakterPlanaenderung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung",
        "type": "instance",
        "text": "1100 (xplan5:XP_RechtscharakterPlanaenderung_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung",
        "type": "instance",
        "text": "2000 (xplan5:XP_RechtscharakterPlanaenderung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RechtscharakterPlanaenderung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_RechtscharakterPlanaenderung (xplan5:XP_RechtscharakterPlanaenderung) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand",
        "type": "instance",
        "text": "1000 (xplan5:XP_Rechtsstand_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand",
        "type": "instance",
        "text": "2000 (xplan5:XP_Rechtsstand_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand",
        "type": "instance",
        "text": "3000 (xplan5:XP_Rechtsstand_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Rechtsstand",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_Rechtsstand (xplan5:XP_Rechtsstand) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1000 (xplan5:XP_SPEMassnahmenTypen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1100 (xplan5:XP_SPEMassnahmenTypen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1200 (xplan5:XP_SPEMassnahmenTypen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1300 (xplan5:XP_SPEMassnahmenTypen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1400 (xplan5:XP_SPEMassnahmenTypen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1500 (xplan5:XP_SPEMassnahmenTypen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1600 (xplan5:XP_SPEMassnahmenTypen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1700 (xplan5:XP_SPEMassnahmenTypen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1800 (xplan5:XP_SPEMassnahmenTypen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "1900 (xplan5:XP_SPEMassnahmenTypen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "2000 (xplan5:XP_SPEMassnahmenTypen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "2100 (xplan5:XP_SPEMassnahmenTypen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "2200 (xplan5:XP_SPEMassnahmenTypen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "2300 (xplan5:XP_SPEMassnahmenTypen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "type": "instance",
        "text": "9999 (xplan5:XP_SPEMassnahmenTypen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenTypen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_SPEMassnahmenTypen (xplan5:XP_SPEMassnahmenTypen) [15]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "type": "instance",
        "text": "1000 (xplan5:XP_SPEZiele_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "type": "instance",
        "text": "2000 (xplan5:XP_SPEZiele_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "type": "instance",
        "text": "3000 (xplan5:XP_SPEZiele_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "type": "instance",
        "text": "4000 (xplan5:XP_SPEZiele_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "type": "instance",
        "text": "9999 (xplan5:XP_SPEZiele_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEZiele",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_SPEZiele (xplan5:XP_SPEZiele) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1000 (xplan5:XP_Sondernutzungen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1100 (xplan5:XP_Sondernutzungen_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1200 (xplan5:XP_Sondernutzungen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1300 (xplan5:XP_Sondernutzungen_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1400 (xplan5:XP_Sondernutzungen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1500 (xplan5:XP_Sondernutzungen_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1600 (xplan5:XP_Sondernutzungen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "16000 (xplan5:XP_Sondernutzungen_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "16001 (xplan5:XP_Sondernutzungen_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_16002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "16002 (xplan5:XP_Sondernutzungen_16002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1700 (xplan5:XP_Sondernutzungen_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1800 (xplan5:XP_Sondernutzungen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_1900",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "1900 (xplan5:XP_Sondernutzungen_1900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2000 (xplan5:XP_Sondernutzungen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2100 (xplan5:XP_Sondernutzungen_2100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2200 (xplan5:XP_Sondernutzungen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2300 (xplan5:XP_Sondernutzungen_2300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2400 (xplan5:XP_Sondernutzungen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2500 (xplan5:XP_Sondernutzungen_2500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2600 (xplan5:XP_Sondernutzungen_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2700 (xplan5:XP_Sondernutzungen_2700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2800 (xplan5:XP_Sondernutzungen_2800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_2900",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "2900 (xplan5:XP_Sondernutzungen_2900)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "type": "instance",
        "text": "9999 (xplan5:XP_Sondernutzungen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Sondernutzungen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_Sondernutzungen (xplan5:XP_Sondernutzungen) [24]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre",
        "type": "instance",
        "text": "1000 (xplan5:XP_VerlaengerungVeraenderungssperre_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre",
        "type": "instance",
        "text": "2000 (xplan5:XP_VerlaengerungVeraenderungssperre_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre",
        "type": "instance",
        "text": "3000 (xplan5:XP_VerlaengerungVeraenderungssperre_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerlaengerungVeraenderungssperre",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_VerlaengerungVeraenderungssperre (xplan5:XP_VerlaengerungVeraenderungssperre) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung_Basis",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung",
        "type": "instance",
        "text": "Basis (xplan5:XP_VertikaleAusrichtung_Basis)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung_Mitte",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung",
        "type": "instance",
        "text": "Mitte (xplan5:XP_VertikaleAusrichtung_Mitte)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung_Oben",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung",
        "type": "instance",
        "text": "Oben (xplan5:XP_VertikaleAusrichtung_Oben)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VertikaleAusrichtung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_VertikaleAusrichtung (xplan5:XP_VertikaleAusrichtung) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungGemeinbedarf_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "10000 (xplan5:XP_ZweckbestimmungGemeinbedarf_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "10001 (xplan5:XP_ZweckbestimmungGemeinbedarf_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "10002 (xplan5:XP_ZweckbestimmungGemeinbedarf_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_10003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "10003 (xplan5:XP_ZweckbestimmungGemeinbedarf_10003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungGemeinbedarf_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_12000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "12000 (xplan5:XP_ZweckbestimmungGemeinbedarf_12000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_12001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "12001 (xplan5:XP_ZweckbestimmungGemeinbedarf_12001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_12002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "12002 (xplan5:XP_ZweckbestimmungGemeinbedarf_12002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_12003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "12003 (xplan5:XP_ZweckbestimmungGemeinbedarf_12003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_12004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "12004 (xplan5:XP_ZweckbestimmungGemeinbedarf_12004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungGemeinbedarf_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_14000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "14000 (xplan5:XP_ZweckbestimmungGemeinbedarf_14000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_14001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "14001 (xplan5:XP_ZweckbestimmungGemeinbedarf_14001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_14002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "14002 (xplan5:XP_ZweckbestimmungGemeinbedarf_14002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_14003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "14003 (xplan5:XP_ZweckbestimmungGemeinbedarf_14003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "1600 (xplan5:XP_ZweckbestimmungGemeinbedarf_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "16000 (xplan5:XP_ZweckbestimmungGemeinbedarf_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "16001 (xplan5:XP_ZweckbestimmungGemeinbedarf_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_16002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "16002 (xplan5:XP_ZweckbestimmungGemeinbedarf_16002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_16003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "16003 (xplan5:XP_ZweckbestimmungGemeinbedarf_16003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_16004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "16004 (xplan5:XP_ZweckbestimmungGemeinbedarf_16004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "1800 (xplan5:XP_ZweckbestimmungGemeinbedarf_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_18000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "18000 (xplan5:XP_ZweckbestimmungGemeinbedarf_18000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_18001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "18001 (xplan5:XP_ZweckbestimmungGemeinbedarf_18001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "2000 (xplan5:XP_ZweckbestimmungGemeinbedarf_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_20000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "20000 (xplan5:XP_ZweckbestimmungGemeinbedarf_20000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_20001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "20001 (xplan5:XP_ZweckbestimmungGemeinbedarf_20001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_20002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "20002 (xplan5:XP_ZweckbestimmungGemeinbedarf_20002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "2200 (xplan5:XP_ZweckbestimmungGemeinbedarf_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_22000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "22000 (xplan5:XP_ZweckbestimmungGemeinbedarf_22000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_22001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "22001 (xplan5:XP_ZweckbestimmungGemeinbedarf_22001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_22002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "22002 (xplan5:XP_ZweckbestimmungGemeinbedarf_22002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "2400 (xplan5:XP_ZweckbestimmungGemeinbedarf_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_24000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "24000 (xplan5:XP_ZweckbestimmungGemeinbedarf_24000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_24001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "24001 (xplan5:XP_ZweckbestimmungGemeinbedarf_24001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_24002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "24002 (xplan5:XP_ZweckbestimmungGemeinbedarf_24002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_24003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "24003 (xplan5:XP_ZweckbestimmungGemeinbedarf_24003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "2600 (xplan5:XP_ZweckbestimmungGemeinbedarf_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_26000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "26000 (xplan5:XP_ZweckbestimmungGemeinbedarf_26000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_26001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "26001 (xplan5:XP_ZweckbestimmungGemeinbedarf_26001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungGemeinbedarf_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGemeinbedarf",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungGemeinbedarf (xplan5:XP_ZweckbestimmungGemeinbedarf) [42]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungGewaesser_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser",
        "type": "instance",
        "text": "1100 (xplan5:XP_ZweckbestimmungGewaesser_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungGewaesser_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungGewaesser_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGewaesser",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungGewaesser (xplan5:XP_ZweckbestimmungGewaesser) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungGruen_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "10000 (xplan5:XP_ZweckbestimmungGruen_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "10001 (xplan5:XP_ZweckbestimmungGruen_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "10002 (xplan5:XP_ZweckbestimmungGruen_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_10003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "10003 (xplan5:XP_ZweckbestimmungGruen_10003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungGruen_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_12000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "12000 (xplan5:XP_ZweckbestimmungGruen_12000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungGruen_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14000 (xplan5:XP_ZweckbestimmungGruen_14000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14001 (xplan5:XP_ZweckbestimmungGruen_14001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14002 (xplan5:XP_ZweckbestimmungGruen_14002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14003 (xplan5:XP_ZweckbestimmungGruen_14003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14004 (xplan5:XP_ZweckbestimmungGruen_14004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14005 (xplan5:XP_ZweckbestimmungGruen_14005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14006",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14006 (xplan5:XP_ZweckbestimmungGruen_14006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_14007",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "14007 (xplan5:XP_ZweckbestimmungGruen_14007)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "1600 (xplan5:XP_ZweckbestimmungGruen_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "16000 (xplan5:XP_ZweckbestimmungGruen_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "16001 (xplan5:XP_ZweckbestimmungGruen_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "1800 (xplan5:XP_ZweckbestimmungGruen_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_18000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "18000 (xplan5:XP_ZweckbestimmungGruen_18000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "2000 (xplan5:XP_ZweckbestimmungGruen_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "2200 (xplan5:XP_ZweckbestimmungGruen_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_22000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "22000 (xplan5:XP_ZweckbestimmungGruen_22000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_22001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "22001 (xplan5:XP_ZweckbestimmungGruen_22001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "2400 (xplan5:XP_ZweckbestimmungGruen_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24000 (xplan5:XP_ZweckbestimmungGruen_24000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24001 (xplan5:XP_ZweckbestimmungGruen_24001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24002 (xplan5:XP_ZweckbestimmungGruen_24002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24003 (xplan5:XP_ZweckbestimmungGruen_24003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24004 (xplan5:XP_ZweckbestimmungGruen_24004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24005 (xplan5:XP_ZweckbestimmungGruen_24005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_24006",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "24006 (xplan5:XP_ZweckbestimmungGruen_24006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "2600 (xplan5:XP_ZweckbestimmungGruen_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungGruen_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen_99990",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "type": "instance",
        "text": "99990 (xplan5:XP_ZweckbestimmungGruen_99990)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungGruen",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungGruen (xplan5:XP_ZweckbestimmungGruen) [36]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungKennzeichnung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "2000 (xplan5:XP_ZweckbestimmungKennzeichnung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "3000 (xplan5:XP_ZweckbestimmungKennzeichnung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_4000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "4000 (xplan5:XP_ZweckbestimmungKennzeichnung_4000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_5000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "5000 (xplan5:XP_ZweckbestimmungKennzeichnung_5000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_6000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "6000 (xplan5:XP_ZweckbestimmungKennzeichnung_6000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_7000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "7000 (xplan5:XP_ZweckbestimmungKennzeichnung_7000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_8000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "8000 (xplan5:XP_ZweckbestimmungKennzeichnung_8000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungKennzeichnung_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungKennzeichnung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungKennzeichnung (xplan5:XP_ZweckbestimmungKennzeichnung) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungLandwirtschaft_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1100 (xplan5:XP_ZweckbestimmungLandwirtschaft_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungLandwirtschaft_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1300 (xplan5:XP_ZweckbestimmungLandwirtschaft_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungLandwirtschaft_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1500",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1500 (xplan5:XP_ZweckbestimmungLandwirtschaft_1500)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1600 (xplan5:XP_ZweckbestimmungLandwirtschaft_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_1700",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "1700 (xplan5:XP_ZweckbestimmungLandwirtschaft_1700)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungLandwirtschaft_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungLandwirtschaft",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungLandwirtschaft (xplan5:XP_ZweckbestimmungLandwirtschaft) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungSpielSportanlage_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage",
        "type": "instance",
        "text": "2000 (xplan5:XP_ZweckbestimmungSpielSportanlage_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage",
        "type": "instance",
        "text": "3000 (xplan5:XP_ZweckbestimmungSpielSportanlage_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungSpielSportanlage_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungSpielSportanlage",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungSpielSportanlage (xplan5:XP_ZweckbestimmungSpielSportanlage) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungVerEntsorgung_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10000 (xplan5:XP_ZweckbestimmungVerEntsorgung_10000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10001 (xplan5:XP_ZweckbestimmungVerEntsorgung_10001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_100010",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "100010 (xplan5:XP_ZweckbestimmungVerEntsorgung_100010)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10002 (xplan5:XP_ZweckbestimmungVerEntsorgung_10002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10003 (xplan5:XP_ZweckbestimmungVerEntsorgung_10003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10004 (xplan5:XP_ZweckbestimmungVerEntsorgung_10004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10005 (xplan5:XP_ZweckbestimmungVerEntsorgung_10005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10006",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10006 (xplan5:XP_ZweckbestimmungVerEntsorgung_10006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10007",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10007 (xplan5:XP_ZweckbestimmungVerEntsorgung_10007)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10008",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10008 (xplan5:XP_ZweckbestimmungVerEntsorgung_10008)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_10009",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "10009 (xplan5:XP_ZweckbestimmungVerEntsorgung_10009)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungVerEntsorgung_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12000 (xplan5:XP_ZweckbestimmungVerEntsorgung_12000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12001 (xplan5:XP_ZweckbestimmungVerEntsorgung_12001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12002 (xplan5:XP_ZweckbestimmungVerEntsorgung_12002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12003 (xplan5:XP_ZweckbestimmungVerEntsorgung_12003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12004 (xplan5:XP_ZweckbestimmungVerEntsorgung_12004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_12005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "12005 (xplan5:XP_ZweckbestimmungVerEntsorgung_12005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1300 (xplan5:XP_ZweckbestimmungVerEntsorgung_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_13000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "13000 (xplan5:XP_ZweckbestimmungVerEntsorgung_13000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_13001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "13001 (xplan5:XP_ZweckbestimmungVerEntsorgung_13001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_13002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "13002 (xplan5:XP_ZweckbestimmungVerEntsorgung_13002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_13003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "13003 (xplan5:XP_ZweckbestimmungVerEntsorgung_13003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungVerEntsorgung_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_14000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "14000 (xplan5:XP_ZweckbestimmungVerEntsorgung_14000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_14001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "14001 (xplan5:XP_ZweckbestimmungVerEntsorgung_14001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_14002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "14002 (xplan5:XP_ZweckbestimmungVerEntsorgung_14002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1600 (xplan5:XP_ZweckbestimmungVerEntsorgung_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16000 (xplan5:XP_ZweckbestimmungVerEntsorgung_16000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16001 (xplan5:XP_ZweckbestimmungVerEntsorgung_16001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16002 (xplan5:XP_ZweckbestimmungVerEntsorgung_16002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16003 (xplan5:XP_ZweckbestimmungVerEntsorgung_16003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16004 (xplan5:XP_ZweckbestimmungVerEntsorgung_16004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_16005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "16005 (xplan5:XP_ZweckbestimmungVerEntsorgung_16005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "1800 (xplan5:XP_ZweckbestimmungVerEntsorgung_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18000 (xplan5:XP_ZweckbestimmungVerEntsorgung_18000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18001 (xplan5:XP_ZweckbestimmungVerEntsorgung_18001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18002 (xplan5:XP_ZweckbestimmungVerEntsorgung_18002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18003 (xplan5:XP_ZweckbestimmungVerEntsorgung_18003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18004 (xplan5:XP_ZweckbestimmungVerEntsorgung_18004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18005 (xplan5:XP_ZweckbestimmungVerEntsorgung_18005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_18006",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "18006 (xplan5:XP_ZweckbestimmungVerEntsorgung_18006)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_2000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "2000 (xplan5:XP_ZweckbestimmungVerEntsorgung_2000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_20000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "20000 (xplan5:XP_ZweckbestimmungVerEntsorgung_20000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_20001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "20001 (xplan5:XP_ZweckbestimmungVerEntsorgung_20001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_2200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "2200 (xplan5:XP_ZweckbestimmungVerEntsorgung_2200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_22000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "22000 (xplan5:XP_ZweckbestimmungVerEntsorgung_22000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_22001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "22001 (xplan5:XP_ZweckbestimmungVerEntsorgung_22001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_22002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "22002 (xplan5:XP_ZweckbestimmungVerEntsorgung_22002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_22003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "22003 (xplan5:XP_ZweckbestimmungVerEntsorgung_22003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_2400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "2400 (xplan5:XP_ZweckbestimmungVerEntsorgung_2400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24000 (xplan5:XP_ZweckbestimmungVerEntsorgung_24000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24001 (xplan5:XP_ZweckbestimmungVerEntsorgung_24001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24002 (xplan5:XP_ZweckbestimmungVerEntsorgung_24002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24003",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24003 (xplan5:XP_ZweckbestimmungVerEntsorgung_24003)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24004",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24004 (xplan5:XP_ZweckbestimmungVerEntsorgung_24004)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_24005",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "24005 (xplan5:XP_ZweckbestimmungVerEntsorgung_24005)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_2600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "2600 (xplan5:XP_ZweckbestimmungVerEntsorgung_2600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_26000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "26000 (xplan5:XP_ZweckbestimmungVerEntsorgung_26000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_26001",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "26001 (xplan5:XP_ZweckbestimmungVerEntsorgung_26001)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_26002",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "26002 (xplan5:XP_ZweckbestimmungVerEntsorgung_26002)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_2800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "2800 (xplan5:XP_ZweckbestimmungVerEntsorgung_2800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_3000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "3000 (xplan5:XP_ZweckbestimmungVerEntsorgung_3000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungVerEntsorgung_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung_99990",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "type": "instance",
        "text": "99990 (xplan5:XP_ZweckbestimmungVerEntsorgung_99990)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungVerEntsorgung",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungVerEntsorgung (xplan5:XP_ZweckbestimmungVerEntsorgung) [66]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungWald_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungWald_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungWald_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_1600",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "1600 (xplan5:XP_ZweckbestimmungWald_1600)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_1800",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "1800 (xplan5:XP_ZweckbestimmungWald_1800)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungWald_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWald",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungWald (xplan5:XP_ZweckbestimmungWald) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_1000",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "1000 (xplan5:XP_ZweckbestimmungWasserwirtschaft_1000)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_1100",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "1100 (xplan5:XP_ZweckbestimmungWasserwirtschaft_1100)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_1200",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "1200 (xplan5:XP_ZweckbestimmungWasserwirtschaft_1200)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_1300",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "1300 (xplan5:XP_ZweckbestimmungWasserwirtschaft_1300)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_1400",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "1400 (xplan5:XP_ZweckbestimmungWasserwirtschaft_1400)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft_9999",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "type": "instance",
        "text": "9999 (xplan5:XP_ZweckbestimmungWasserwirtschaft_9999)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ZweckbestimmungWasserwirtschaft",
        "parent": "http://www.xplanung.de/xplangml/5/0#Enumeration",
        "type": "class",
        "text": "XP_ZweckbestimmungWasserwirtschaft (xplan5:XP_ZweckbestimmungWasserwirtschaft) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3389",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3389",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3390",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3390",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3391",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3391",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3392",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3392",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3393",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3393",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3394",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3394",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3395",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3395",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3396",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3396",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3397",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3397",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3398",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3398",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3399",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3399",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3400",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3400",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3401",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3401",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3402",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3402",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3403",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3403",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3404",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3404",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3405",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3405",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3406",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3406",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3407",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3407",
        "data": {}
      },
      {
        "id": "n24b7e6772bcd43a5845b01ba9613abcfb3408",
        "parent": "http://www.w3.org/2000/01/rdf-schema#comment",
        "type": "instance",
        "text": "n24b7e6772bcd43a5845b01ba9613abcfb3408",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2000/01/rdf-schema#comment",
        "parent": "#",
        "type": "class",
        "text": "comment (rdfs:comment) [20]",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_AbstractFeature.html",
        "parent": "#",
        "type": "class",
        "text": "AbstractFeature (gml:#AbstractFeature)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_AbstractFeatureCollection.html",
        "parent": "#",
        "type": "class",
        "text": "AbstractFeatureCollection (gml:#AbstractFeatureCollection)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Angle.html",
        "parent": "#",
        "type": "class",
        "text": "Angle (gml:#Angle)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Area.html",
        "parent": "#",
        "type": "class",
        "text": "Area (gml:#Area)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Code.html",
        "parent": "#",
        "type": "class",
        "text": "Code (gml:#Code)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Geometry.html",
        "parent": "#",
        "type": "class",
        "text": "Geometry (gml:#Geometry)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Length.html",
        "parent": "#",
        "type": "class",
        "text": "Length (gml:#Length)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Scale.html",
        "parent": "#",
        "type": "class",
        "text": "Scale (gml:#Scale)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Volume.html",
        "parent": "#",
        "type": "class",
        "text": "Volume (gml:#Volume)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_Feature.html",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#abstractClass": {
              "instancecount": 1
            },
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 20,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 11
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "parent": "#",
        "type": "class",
        "text": "SpatialObject (gsp:SpatialObject)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Geometry (gsp:Geometry)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2001/XMLSchemaany",
        "parent": "#",
        "type": "class",
        "text": "XMLSchemaany (xsd1:any)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_XMLSchemaanyURI.html",
        "parent": "#",
        "type": "class",
        "text": "XMLSchemaanyURI (xsd1:anyURI)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_XMLSchemaboolean.html",
        "parent": "#",
        "type": "class",
        "text": "XMLSchemaboolean (xsd1:boolean)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#nonns_XMLSchemastring.html",
        "parent": "#",
        "type": "class",
        "text": "XMLSchemastring (xsd1:string)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbgrabungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "type": "class",
        "text": "BP_AbgrabungsFlaeche (xplan5:BP_AbgrabungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "parent": "#",
        "type": "class",
        "text": "BP_Flaechenobjekt (xplan5:BP_Flaechenobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#abstractClass": {
              "instancecount": 1
            },
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 9
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbstandsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_AbstandsFlaeche (xplan5:BP_AbstandsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AbstandsMass",
        "parent": "#",
        "type": "class",
        "text": "BP_AbstandsMass (xplan5:BP_AbstandsMass)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AnpflanzungBindungErhaltung",
        "parent": "#",
        "type": "class",
        "text": "BP_AnpflanzungBindungErhaltung (xplan5:BP_AnpflanzungBindungErhaltung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AufschuettungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "type": "class",
        "text": "BP_AufschuettungsFlaeche (xplan5:BP_AufschuettungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AusgleichsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_AusgleichsFlaeche (xplan5:BP_AusgleichsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_AusgleichsMassnahme",
        "parent": "#",
        "type": "class",
        "text": "BP_AusgleichsMassnahme (xplan5:BP_AusgleichsMassnahme)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BauGrenze",
        "parent": "#",
        "type": "class",
        "text": "BP_BauGrenze (xplan5:BP_BauGrenze)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BauLinie",
        "parent": "#",
        "type": "class",
        "text": "BP_BauLinie (xplan5:BP_BauLinie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BaugebietsTeilFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_BaugebietsTeilFlaeche (xplan5:BP_BaugebietsTeilFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Bereich",
        "parent": "#",
        "type": "class",
        "text": "BP_Bereich (xplan5:BP_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BereichOhneEinAusfahrtLinie",
        "parent": "#",
        "type": "class",
        "text": "BP_BereichOhneEinAusfahrtLinie (xplan5:BP_BereichOhneEinAusfahrtLinie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BesondererNutzungszweckFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_BesondererNutzungszweckFlaeche (xplan5:BP_BesondererNutzungszweckFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_BodenschaetzeFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_BodenschaetzeFlaeche (xplan5:BP_BodenschaetzeFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtPunkt",
        "parent": "#",
        "type": "class",
        "text": "BP_EinfahrtPunkt (xplan5:BP_EinfahrtPunkt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EinfahrtsbereichLinie",
        "parent": "#",
        "type": "class",
        "text": "BP_EinfahrtsbereichLinie (xplan5:BP_EinfahrtsbereichLinie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_EingriffsBereich",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "BP_EingriffsBereich (xplan5:BP_EingriffsBereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "type": "class",
        "text": "BP_Ueberlagerungsobjekt (xplan5:BP_Ueberlagerungsobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_ErhaltungsBereichFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_ErhaltungsBereichFlaeche (xplan5:BP_ErhaltungsBereichFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_FestsetzungNachLandesrecht",
        "parent": "#",
        "type": "class",
        "text": "BP_FestsetzungNachLandesrecht (xplan5:BP_FestsetzungNachLandesrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_FirstRichtungsLinie",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Linienobjekt",
        "type": "class",
        "text": "BP_FirstRichtungsLinie (xplan5:BP_FirstRichtungsLinie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Linienobjekt",
        "parent": "#",
        "type": "class",
        "text": "BP_Linienobjekt (xplan5:BP_Linienobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenschlussobjekt",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "type": "class",
        "text": "BP_Flaechenschlussobjekt (xplan5:BP_Flaechenschlussobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_FoerderungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "BP_FoerderungsFlaeche (xplan5:BP_FoerderungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_FreiFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_FreiFlaeche (xplan5:BP_FreiFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GebaeudeFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "BP_GebaeudeFlaeche (xplan5:BP_GebaeudeFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GemeinbedarfsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_GemeinbedarfsFlaeche (xplan5:BP_GemeinbedarfsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GemeinschaftsanlagenFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_GemeinschaftsanlagenFlaeche (xplan5:BP_GemeinschaftsanlagenFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GemeinschaftsanlagenZuordnung",
        "parent": "#",
        "type": "class",
        "text": "BP_GemeinschaftsanlagenZuordnung (xplan5:BP_GemeinschaftsanlagenZuordnung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GenerischesObjekt",
        "parent": "#",
        "type": "class",
        "text": "BP_GenerischesObjekt (xplan5:BP_GenerischesObjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Geometrieobjekt",
        "parent": "#",
        "type": "class",
        "text": "BP_Geometrieobjekt (xplan5:BP_Geometrieobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GewaesserFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_GewaesserFlaeche (xplan5:BP_GewaesserFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_GruenFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_GruenFlaeche (xplan5:BP_GruenFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_HoehenMass",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Geometrieobjekt",
        "type": "class",
        "text": "BP_HoehenMass (xplan5:BP_HoehenMass)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Immissionsschutz",
        "parent": "#",
        "type": "class",
        "text": "BP_Immissionsschutz (xplan5:BP_Immissionsschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_KennzeichnungsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_KennzeichnungsFlaeche (xplan5:BP_KennzeichnungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_KleintierhaltungFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenschlussobjekt",
        "type": "class",
        "text": "BP_KleintierhaltungFlaeche (xplan5:BP_KleintierhaltungFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Landwirtschaft",
        "parent": "#",
        "type": "class",
        "text": "BP_Landwirtschaft (xplan5:BP_Landwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenAusschlussFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_NebenanlagenAusschlussFlaeche (xplan5:BP_NebenanlagenAusschlussFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NebenanlagenFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_NebenanlagenFlaeche (xplan5:BP_NebenanlagenFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_NutzungsartenGrenze",
        "parent": "#",
        "type": "class",
        "text": "BP_NutzungsartenGrenze (xplan5:BP_NutzungsartenGrenze)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Objekt",
        "parent": "#",
        "type": "class",
        "text": "BP_Objekt (xplan5:BP_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_PersGruppenBestimmteFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "BP_PersGruppenBestimmteFlaeche (xplan5:BP_PersGruppenBestimmteFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Plan",
        "parent": "#",
        "type": "class",
        "text": "BP_Plan (xplan5:BP_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Punktobjekt",
        "parent": "#",
        "type": "class",
        "text": "BP_Punktobjekt (xplan5:BP_Punktobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_RegelungVergnuegungsstaetten",
        "parent": "#",
        "type": "class",
        "text": "BP_RegelungVergnuegungsstaetten (xplan5:BP_RegelungVergnuegungsstaetten)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_RekultivierungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Flaechenobjekt",
        "type": "class",
        "text": "BP_RekultivierungsFlaeche (xplan5:BP_RekultivierungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SchutzPflegeEntwicklungsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_SchutzPflegeEntwicklungsFlaeche (xplan5:BP_SchutzPflegeEntwicklungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SchutzPflegeEntwicklungsMassnahme",
        "parent": "#",
        "type": "class",
        "text": "BP_SchutzPflegeEntwicklungsMassnahme (xplan5:BP_SchutzPflegeEntwicklungsMassnahme)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpezielleBauweise",
        "parent": "#",
        "type": "class",
        "text": "BP_SpezielleBauweise (xplan5:BP_SpezielleBauweise)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_SpielSportanlagenFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_SpielSportanlagenFlaeche (xplan5:BP_SpielSportanlagenFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenVerkehrsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_StrassenVerkehrsFlaeche (xplan5:BP_StrassenVerkehrsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_StrassenbegrenzungsLinie",
        "parent": "#",
        "type": "class",
        "text": "BP_StrassenbegrenzungsLinie (xplan5:BP_StrassenbegrenzungsLinie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Strassenkoerper",
        "parent": "#",
        "type": "class",
        "text": "BP_Strassenkoerper (xplan5:BP_Strassenkoerper)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_TechnischeMassnahmenFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_TechnischeMassnahmenFlaeche (xplan5:BP_TechnischeMassnahmenFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "BP_TextAbschnitt (xplan5:BP_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_TextlicheFestsetzungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#BP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "BP_TextlicheFestsetzungsFlaeche (xplan5:BP_TextlicheFestsetzungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_UeberbaubareGrundstuecksFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_UeberbaubareGrundstuecksFlaeche (xplan5:BP_UeberbaubareGrundstuecksFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_UnverbindlicheVormerkung",
        "parent": "#",
        "type": "class",
        "text": "BP_UnverbindlicheVormerkung (xplan5:BP_UnverbindlicheVormerkung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_VerEntsorgung",
        "parent": "#",
        "type": "class",
        "text": "BP_VerEntsorgung (xplan5:BP_VerEntsorgung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Veraenderungssperre",
        "parent": "#",
        "type": "class",
        "text": "BP_Veraenderungssperre (xplan5:BP_Veraenderungssperre)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_VerkehrsflaecheBesondererZweckbestimmung",
        "parent": "#",
        "type": "class",
        "text": "BP_VerkehrsflaecheBesondererZweckbestimmung (xplan5:BP_VerkehrsflaecheBesondererZweckbestimmung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WaldFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_WaldFlaeche (xplan5:BP_WaldFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_WasserwirtschaftsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "BP_WasserwirtschaftsFlaeche (xplan5:BP_WasserwirtschaftsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#BP_Wegerecht",
        "parent": "#",
        "type": "class",
        "text": "BP_Wegerecht (xplan5:BP_Wegerecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "class",
        "text": "XPlanung5 (xplan5:XPlanung5)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#propOrder": {
              "instancecount": 1
            },
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            },
            "http://www.w3.org/2002/07/owl#allValuesFrom": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 9
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Abgrabung",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Geometrieobjekt",
        "type": "class",
        "text": "FP_Abgrabung (xplan5:FP_Abgrabung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Geometrieobjekt",
        "parent": "#",
        "type": "class",
        "text": "FP_Geometrieobjekt (xplan5:FP_Geometrieobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_AnpassungKlimawandel",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Geometrieobjekt",
        "type": "class",
        "text": "FP_AnpassungKlimawandel (xplan5:FP_AnpassungKlimawandel)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Aufschuettung",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Geometrieobjekt",
        "type": "class",
        "text": "FP_Aufschuettung (xplan5:FP_Aufschuettung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_AusgleichsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "FP_AusgleichsFlaeche (xplan5:FP_AusgleichsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_BebauungsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "FP_BebauungsFlaeche (xplan5:FP_BebauungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Bereich",
        "parent": "#",
        "type": "class",
        "text": "FP_Bereich (xplan5:FP_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Bodenschaetze",
        "parent": "#",
        "type": "class",
        "text": "FP_Bodenschaetze (xplan5:FP_Bodenschaetze)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Flaechenobjekt",
        "parent": "#",
        "type": "class",
        "text": "FP_Flaechenobjekt (xplan5:FP_Flaechenobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 3
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Flaechenschlussobjekt",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Flaechenobjekt",
        "type": "class",
        "text": "FP_Flaechenschlussobjekt (xplan5:FP_Flaechenschlussobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Gemeinbedarf",
        "parent": "#",
        "type": "class",
        "text": "FP_Gemeinbedarf (xplan5:FP_Gemeinbedarf)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_GenerischesObjekt",
        "parent": "#",
        "type": "class",
        "text": "FP_GenerischesObjekt (xplan5:FP_GenerischesObjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Gewaesser",
        "parent": "#",
        "type": "class",
        "text": "FP_Gewaesser (xplan5:FP_Gewaesser)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Gruen",
        "parent": "#",
        "type": "class",
        "text": "FP_Gruen (xplan5:FP_Gruen)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_KeineZentrAbwasserBeseitigungFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Flaechenobjekt",
        "type": "class",
        "text": "FP_KeineZentrAbwasserBeseitigungFlaeche (xplan5:FP_KeineZentrAbwasserBeseitigungFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Kennzeichnung",
        "parent": "#",
        "type": "class",
        "text": "FP_Kennzeichnung (xplan5:FP_Kennzeichnung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_LandwirtschaftsFlaeche",
        "parent": "#",
        "type": "class",
        "text": "FP_LandwirtschaftsFlaeche (xplan5:FP_LandwirtschaftsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Linienobjekt",
        "parent": "#",
        "type": "class",
        "text": "FP_Linienobjekt (xplan5:FP_Linienobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_NutzungsbeschraenkungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "FP_NutzungsbeschraenkungsFlaeche (xplan5:FP_NutzungsbeschraenkungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Ueberlagerungsobjekt",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Flaechenobjekt",
        "type": "class",
        "text": "FP_Ueberlagerungsobjekt (xplan5:FP_Ueberlagerungsobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Objekt",
        "parent": "#",
        "type": "class",
        "text": "FP_Objekt (xplan5:FP_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Plan",
        "parent": "#",
        "type": "class",
        "text": "FP_Plan (xplan5:FP_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_PrivilegiertesVorhaben",
        "parent": "#",
        "type": "class",
        "text": "FP_PrivilegiertesVorhaben (xplan5:FP_PrivilegiertesVorhaben)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Punktobjekt",
        "parent": "#",
        "type": "class",
        "text": "FP_Punktobjekt (xplan5:FP_Punktobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_SchutzPflegeEntwicklung",
        "parent": "#",
        "type": "class",
        "text": "FP_SchutzPflegeEntwicklung (xplan5:FP_SchutzPflegeEntwicklung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_SpielSportanlage",
        "parent": "#",
        "type": "class",
        "text": "FP_SpielSportanlage (xplan5:FP_SpielSportanlage)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Strassenverkehr",
        "parent": "#",
        "type": "class",
        "text": "FP_Strassenverkehr (xplan5:FP_Strassenverkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "FP_TextAbschnitt (xplan5:FP_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_TextlicheDarstellungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#FP_Ueberlagerungsobjekt",
        "type": "class",
        "text": "FP_TextlicheDarstellungsFlaeche (xplan5:FP_TextlicheDarstellungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_UnverbindlicheVormerkung",
        "parent": "#",
        "type": "class",
        "text": "FP_UnverbindlicheVormerkung (xplan5:FP_UnverbindlicheVormerkung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_VerEntsorgung",
        "parent": "#",
        "type": "class",
        "text": "FP_VerEntsorgung (xplan5:FP_VerEntsorgung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_VorbehalteFlaeche",
        "parent": "#",
        "type": "class",
        "text": "FP_VorbehalteFlaeche (xplan5:FP_VorbehalteFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_WaldFlaeche",
        "parent": "#",
        "type": "class",
        "text": "FP_WaldFlaeche (xplan5:FP_WaldFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_Wasserwirtschaft",
        "parent": "#",
        "type": "class",
        "text": "FP_Wasserwirtschaft (xplan5:FP_Wasserwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#FP_ZentralerVersorgungsbereich",
        "parent": "#",
        "type": "class",
        "text": "FP_ZentralerVersorgungsbereich (xplan5:FP_ZentralerVersorgungsbereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Abgrenzung",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Linienobjekt",
        "type": "class",
        "text": "LP_Abgrenzung (xplan5:LP_Abgrenzung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Linienobjekt",
        "parent": "#",
        "type": "class",
        "text": "LP_Linienobjekt (xplan5:LP_Linienobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_AllgGruenflaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Flaechenobjekt",
        "type": "class",
        "text": "LP_AllgGruenflaeche (xplan5:LP_AllgGruenflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Flaechenobjekt",
        "parent": "#",
        "type": "class",
        "text": "LP_Flaechenobjekt (xplan5:LP_Flaechenobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_AnpflanzungBindungErhaltung",
        "parent": "#",
        "type": "class",
        "text": "LP_AnpflanzungBindungErhaltung (xplan5:LP_AnpflanzungBindungErhaltung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Ausgleich",
        "parent": "#",
        "type": "class",
        "text": "LP_Ausgleich (xplan5:LP_Ausgleich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Bereich",
        "parent": "#",
        "type": "class",
        "text": "LP_Bereich (xplan5:LP_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Biotopverbundflaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Geometrieobjekt",
        "type": "class",
        "text": "LP_Biotopverbundflaeche (xplan5:LP_Biotopverbundflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Geometrieobjekt",
        "parent": "#",
        "type": "class",
        "text": "LP_Geometrieobjekt (xplan5:LP_Geometrieobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Bodenschutzrecht",
        "parent": "#",
        "type": "class",
        "text": "LP_Bodenschutzrecht (xplan5:LP_Bodenschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ErholungFreizeit",
        "parent": "#",
        "type": "class",
        "text": "LP_ErholungFreizeit (xplan5:LP_ErholungFreizeit)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Forstrecht",
        "parent": "#",
        "type": "class",
        "text": "LP_Forstrecht (xplan5:LP_Forstrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_GenerischesObjekt",
        "parent": "#",
        "type": "class",
        "text": "LP_GenerischesObjekt (xplan5:LP_GenerischesObjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Landschaftsbild",
        "parent": "#",
        "type": "class",
        "text": "LP_Landschaftsbild (xplan5:LP_Landschaftsbild)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_NutzungsAusschluss",
        "parent": "#",
        "type": "class",
        "text": "LP_NutzungsAusschluss (xplan5:LP_NutzungsAusschluss)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_NutzungserfordernisRegelung",
        "parent": "#",
        "type": "class",
        "text": "LP_NutzungserfordernisRegelung (xplan5:LP_NutzungserfordernisRegelung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Objekt",
        "parent": "#",
        "type": "class",
        "text": "LP_Objekt (xplan5:LP_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Plan",
        "parent": "#",
        "type": "class",
        "text": "LP_Plan (xplan5:LP_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_PlanerischeVertiefung",
        "parent": "#",
        "type": "class",
        "text": "LP_PlanerischeVertiefung (xplan5:LP_PlanerischeVertiefung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Punktobjekt",
        "parent": "#",
        "type": "class",
        "text": "LP_Punktobjekt (xplan5:LP_Punktobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SchutzPflegeEntwicklung",
        "parent": "#",
        "type": "class",
        "text": "LP_SchutzPflegeEntwicklung (xplan5:LP_SchutzPflegeEntwicklung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SchutzobjektInternatRecht",
        "parent": "#",
        "type": "class",
        "text": "LP_SchutzobjektInternatRecht (xplan5:LP_SchutzobjektInternatRecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SchutzobjektLandesrecht",
        "parent": "#",
        "type": "class",
        "text": "LP_SchutzobjektLandesrecht (xplan5:LP_SchutzobjektLandesrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_SonstigesRecht",
        "parent": "#",
        "type": "class",
        "text": "LP_SonstigesRecht (xplan5:LP_SonstigesRecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "LP_TextAbschnitt (xplan5:LP_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_TextlicheFestsetzungsFlaeche",
        "parent": "http://www.xplanung.de/xplangml/5/0#LP_Flaechenobjekt",
        "type": "class",
        "text": "LP_TextlicheFestsetzungsFlaeche (xplan5:LP_TextlicheFestsetzungsFlaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtGemeingebrEinschraenkungNaturschutz",
        "parent": "#",
        "type": "class",
        "text": "LP_WasserrechtGemeingebrEinschraenkungNaturschutz (xplan5:LP_WasserrechtGemeingebrEinschraenkungNaturschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSchutzgebiet",
        "parent": "#",
        "type": "class",
        "text": "LP_WasserrechtSchutzgebiet (xplan5:LP_WasserrechtSchutzgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtSonstige",
        "parent": "#",
        "type": "class",
        "text": "LP_WasserrechtSonstige (xplan5:LP_WasserrechtSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_WasserrechtWirtschaftAbflussHochwSchutz",
        "parent": "#",
        "type": "class",
        "text": "LP_WasserrechtWirtschaftAbflussHochwSchutz (xplan5:LP_WasserrechtWirtschaftAbflussHochwSchutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_ZuBegruenendeGrundstueckflaeche",
        "parent": "#",
        "type": "class",
        "text": "LP_ZuBegruenendeGrundstueckflaeche (xplan5:LP_ZuBegruenendeGrundstueckflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#LP_Zwischennutzung",
        "parent": "#",
        "type": "class",
        "text": "LP_Zwischennutzung (xplan5:LP_Zwischennutzung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Achse",
        "parent": "#",
        "type": "class",
        "text": "RP_Achse (xplan5:RP_Achse)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bereich",
        "parent": "#",
        "type": "class",
        "text": "RP_Bereich (xplan5:RP_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Bodenschutz",
        "parent": "#",
        "type": "class",
        "text": "RP_Bodenschutz (xplan5:RP_Bodenschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Einzelhandel",
        "parent": "#",
        "type": "class",
        "text": "RP_Einzelhandel (xplan5:RP_Einzelhandel)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Energieversorgung",
        "parent": "#",
        "type": "class",
        "text": "RP_Energieversorgung (xplan5:RP_Energieversorgung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Entsorgung",
        "parent": "#",
        "type": "class",
        "text": "RP_Entsorgung (xplan5:RP_Entsorgung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Erholung",
        "parent": "#",
        "type": "class",
        "text": "RP_Erholung (xplan5:RP_Erholung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ErneuerbareEnergie",
        "parent": "#",
        "type": "class",
        "text": "RP_ErneuerbareEnergie (xplan5:RP_ErneuerbareEnergie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Forstwirtschaft",
        "parent": "#",
        "type": "class",
        "text": "RP_Forstwirtschaft (xplan5:RP_Forstwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Freiraum",
        "parent": "#",
        "type": "class",
        "text": "RP_Freiraum (xplan5:RP_Freiraum)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Funktionszuweisung",
        "parent": "#",
        "type": "class",
        "text": "RP_Funktionszuweisung (xplan5:RP_Funktionszuweisung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GenerischesObjekt",
        "parent": "#",
        "type": "class",
        "text": "RP_GenerischesObjekt (xplan5:RP_GenerischesObjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Geometrieobjekt",
        "parent": "#",
        "type": "class",
        "text": "RP_Geometrieobjekt (xplan5:RP_Geometrieobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Gewaesser",
        "parent": "#",
        "type": "class",
        "text": "RP_Gewaesser (xplan5:RP_Gewaesser)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Grenze",
        "parent": "#",
        "type": "class",
        "text": "RP_Grenze (xplan5:RP_Grenze)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_GruenzugGruenzaesur",
        "parent": "#",
        "type": "class",
        "text": "RP_GruenzugGruenzaesur (xplan5:RP_GruenzugGruenzaesur)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Hochwasserschutz",
        "parent": "#",
        "type": "class",
        "text": "RP_Hochwasserschutz (xplan5:RP_Hochwasserschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_IndustrieGewerbe",
        "parent": "#",
        "type": "class",
        "text": "RP_IndustrieGewerbe (xplan5:RP_IndustrieGewerbe)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Klimaschutz",
        "parent": "#",
        "type": "class",
        "text": "RP_Klimaschutz (xplan5:RP_Klimaschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Kommunikation",
        "parent": "#",
        "type": "class",
        "text": "RP_Kommunikation (xplan5:RP_Kommunikation)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Kulturlandschaft",
        "parent": "#",
        "type": "class",
        "text": "RP_Kulturlandschaft (xplan5:RP_Kulturlandschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_LaermschutzBauschutz",
        "parent": "#",
        "type": "class",
        "text": "RP_LaermschutzBauschutz (xplan5:RP_LaermschutzBauschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Landwirtschaft",
        "parent": "#",
        "type": "class",
        "text": "RP_Landwirtschaft (xplan5:RP_Landwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Legendenobjekt",
        "parent": "#",
        "type": "class",
        "text": "RP_Legendenobjekt (xplan5:RP_Legendenobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Luftverkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_Luftverkehr (xplan5:RP_Luftverkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturLandschaft",
        "parent": "#",
        "type": "class",
        "text": "RP_NaturLandschaft (xplan5:RP_NaturLandschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_NaturschutzrechtlichesSchutzgebiet",
        "parent": "#",
        "type": "class",
        "text": "RP_NaturschutzrechtlichesSchutzgebiet (xplan5:RP_NaturschutzrechtlichesSchutzgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Objekt",
        "parent": "#",
        "type": "class",
        "text": "RP_Objekt (xplan5:RP_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Plan",
        "parent": "#",
        "type": "class",
        "text": "RP_Plan (xplan5:RP_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Planungsraum",
        "parent": "#",
        "type": "class",
        "text": "RP_Planungsraum (xplan5:RP_Planungsraum)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_RadwegWanderweg",
        "parent": "#",
        "type": "class",
        "text": "RP_RadwegWanderweg (xplan5:RP_RadwegWanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Raumkategorie",
        "parent": "#",
        "type": "class",
        "text": "RP_Raumkategorie (xplan5:RP_Raumkategorie)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Rohstoff",
        "parent": "#",
        "type": "class",
        "text": "RP_Rohstoff (xplan5:RP_Rohstoff)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Schienenverkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_Schienenverkehr (xplan5:RP_Schienenverkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Siedlung",
        "parent": "#",
        "type": "class",
        "text": "RP_Siedlung (xplan5:RP_Siedlung)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstVerkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_SonstVerkehr (xplan5:RP_SonstVerkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstigeInfrastruktur",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Geometrieobjekt",
        "type": "class",
        "text": "RP_SonstigeInfrastruktur (xplan5:RP_SonstigeInfrastruktur)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstigerFreiraumschutz",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Freiraum",
        "type": "class",
        "text": "RP_SonstigerFreiraumschutz (xplan5:RP_SonstigerFreiraumschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SonstigerSiedlungsbereich",
        "parent": "http://www.xplanung.de/xplangml/5/0#RP_Siedlung",
        "type": "class",
        "text": "RP_SonstigerSiedlungsbereich (xplan5:RP_SonstigerSiedlungsbereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_SozialeInfrastruktur",
        "parent": "#",
        "type": "class",
        "text": "RP_SozialeInfrastruktur (xplan5:RP_SozialeInfrastruktur)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Sperrgebiet",
        "parent": "#",
        "type": "class",
        "text": "RP_Sperrgebiet (xplan5:RP_Sperrgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Sportanlage",
        "parent": "#",
        "type": "class",
        "text": "RP_Sportanlage (xplan5:RP_Sportanlage)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Strassenverkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_Strassenverkehr (xplan5:RP_Strassenverkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "RP_TextAbschnitt (xplan5:RP_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Verkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_Verkehr (xplan5:RP_Verkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Wasserschutz",
        "parent": "#",
        "type": "class",
        "text": "RP_Wasserschutz (xplan5:RP_Wasserschutz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Wasserverkehr",
        "parent": "#",
        "type": "class",
        "text": "RP_Wasserverkehr (xplan5:RP_Wasserverkehr)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_Wasserwirtschaft",
        "parent": "#",
        "type": "class",
        "text": "RP_Wasserwirtschaft (xplan5:RP_Wasserwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_WohnenSiedlung",
        "parent": "#",
        "type": "class",
        "text": "RP_WohnenSiedlung (xplan5:RP_WohnenSiedlung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#RP_ZentralerOrt",
        "parent": "#",
        "type": "class",
        "text": "RP_ZentralerOrt (xplan5:RP_ZentralerOrt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Bereich",
        "parent": "#",
        "type": "class",
        "text": "SO_Bereich (xplan5:SO_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Bodenschutzrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Bodenschutzrecht (xplan5:SO_Bodenschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Denkmalschutzrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Denkmalschutzrecht (xplan5:SO_Denkmalschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Flaechenobjekt",
        "parent": "#",
        "type": "class",
        "text": "SO_Flaechenobjekt (xplan5:SO_Flaechenobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Forstrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Forstrecht (xplan5:SO_Forstrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Gebiet",
        "parent": "#",
        "type": "class",
        "text": "SO_Gebiet (xplan5:SO_Gebiet)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Geometrieobjekt",
        "parent": "#",
        "type": "class",
        "text": "SO_Geometrieobjekt (xplan5:SO_Geometrieobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Grenze",
        "parent": "#",
        "type": "class",
        "text": "SO_Grenze (xplan5:SO_Grenze)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Linienobjekt",
        "parent": "#",
        "type": "class",
        "text": "SO_Linienobjekt (xplan5:SO_Linienobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Luftverkehrsrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Luftverkehrsrecht (xplan5:SO_Luftverkehrsrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Objekt",
        "parent": "#",
        "type": "class",
        "text": "SO_Objekt (xplan5:SO_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Plan",
        "parent": "#",
        "type": "class",
        "text": "SO_Plan (xplan5:SO_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Punktobjekt",
        "parent": "#",
        "type": "class",
        "text": "SO_Punktobjekt (xplan5:SO_Punktobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Schienenverkehrsrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Schienenverkehrsrecht (xplan5:SO_Schienenverkehrsrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzgebietNaturschutzrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_SchutzgebietNaturschutzrecht (xplan5:SO_SchutzgebietNaturschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzgebietSonstigesRecht",
        "parent": "#",
        "type": "class",
        "text": "SO_SchutzgebietSonstigesRecht (xplan5:SO_SchutzgebietSonstigesRecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SchutzgebietWasserrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_SchutzgebietWasserrecht (xplan5:SO_SchutzgebietWasserrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_SonstigesRecht",
        "parent": "#",
        "type": "class",
        "text": "SO_SonstigesRecht (xplan5:SO_SonstigesRecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Strassenverkehrsrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Strassenverkehrsrecht (xplan5:SO_Strassenverkehrsrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "SO_TextAbschnitt (xplan5:SO_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#SO_Wasserrecht",
        "parent": "#",
        "type": "class",
        "text": "SO_Wasserrecht (xplan5:SO_Wasserrecht)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#Union",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "Union (xplan5:Union)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_AbstraktesPraesentationsobjekt",
        "parent": "#",
        "type": "class",
        "text": "XP_AbstraktesPraesentationsobjekt (xplan5:XP_AbstraktesPraesentationsobjekt)",
        "data": {
          "to": {
            "http://www.semgis.de/geodata#standard": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_BegruendungAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "XP_BegruendungAbschnitt (xplan5:XP_BegruendungAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Bereich",
        "parent": "#",
        "type": "class",
        "text": "XP_Bereich (xplan5:XP_Bereich)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_DatumAttribut",
        "parent": "#",
        "type": "class",
        "text": "XP_DatumAttribut (xplan5:XP_DatumAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_DoubleAttribut",
        "parent": "#",
        "type": "class",
        "text": "XP_DoubleAttribut (xplan5:XP_DoubleAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_ExterneReferenz",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_ExterneReferenz (xplan5:XP_ExterneReferenz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_FPO",
        "parent": "#",
        "type": "class",
        "text": "XP_FPO (xplan5:XP_FPO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Gemeinde",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_Gemeinde (xplan5:XP_Gemeinde)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_GenerAttribut",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_GenerAttribut (xplan5:XP_GenerAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Hoehenangabe",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_Hoehenangabe (xplan5:XP_Hoehenangabe)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_IntegerAttribut",
        "parent": "#",
        "type": "class",
        "text": "XP_IntegerAttribut (xplan5:XP_IntegerAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_LPO",
        "parent": "#",
        "type": "class",
        "text": "XP_LPO (xplan5:XP_LPO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_LTO",
        "parent": "#",
        "type": "class",
        "text": "XP_LTO (xplan5:XP_LTO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Nutzungsschablone",
        "parent": "#",
        "type": "class",
        "text": "XP_Nutzungsschablone (xplan5:XP_Nutzungsschablone)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Objekt",
        "parent": "#",
        "type": "class",
        "text": "XP_Objekt (xplan5:XP_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_PPO",
        "parent": "#",
        "type": "class",
        "text": "XP_PPO (xplan5:XP_PPO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_PTO",
        "parent": "#",
        "type": "class",
        "text": "XP_PTO (xplan5:XP_PTO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Plan",
        "parent": "#",
        "type": "class",
        "text": "XP_Plan (xplan5:XP_Plan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Plangeber",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_Plangeber (xplan5:XP_Plangeber)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Praesentationsobjekt",
        "parent": "http://www.xplanung.de/xplangml/5/0#XP_AbstraktesPraesentationsobjekt",
        "type": "class",
        "text": "XP_Praesentationsobjekt (xplan5:XP_Praesentationsobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_Rasterdarstellung",
        "parent": "#",
        "type": "class",
        "text": "XP_Rasterdarstellung (xplan5:XP_Rasterdarstellung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RasterplanAenderung",
        "parent": "#",
        "type": "class",
        "text": "XP_RasterplanAenderung (xplan5:XP_RasterplanAenderung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_RasterplanBasis",
        "parent": "#",
        "type": "class",
        "text": "XP_RasterplanBasis (xplan5:XP_RasterplanBasis)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SPEMassnahmenDaten",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_SPEMassnahmenDaten (xplan5:XP_SPEMassnahmenDaten)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_SpezExterneReferenz",
        "parent": "#",
        "type": "class",
        "text": "XP_SpezExterneReferenz (xplan5:XP_SpezExterneReferenz)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_StringAttribut",
        "parent": "#",
        "type": "class",
        "text": "XP_StringAttribut (xplan5:XP_StringAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_TPO",
        "parent": "#",
        "type": "class",
        "text": "XP_TPO (xplan5:XP_TPO)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_TextAbschnitt",
        "parent": "#",
        "type": "class",
        "text": "XP_TextAbschnitt (xplan5:XP_TextAbschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_URLAttribut",
        "parent": "#",
        "type": "class",
        "text": "XP_URLAttribut (xplan5:XP_URLAttribut)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerbundenerPlan",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_VerbundenerPlan (xplan5:XP_VerbundenerPlan)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_VerfahrensMerkmal",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_VerfahrensMerkmal (xplan5:XP_VerfahrensMerkmal)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XP_WirksamkeitBedingung",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XP_WirksamkeitBedingung (xplan5:XP_WirksamkeitBedingung)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#XPlanAuszug",
        "parent": "http://www.xplanung.de/xplangml/5/0#XPlanung5",
        "type": "class",
        "text": "XPlanAuszug (xplan5:XPlanAuszug)",
        "data": {}
      },
      {
        "id": "http://www.xplanung.de/xplangml/5/0#any",
        "parent": "#",
        "type": "class",
        "text": "any (xplan5:any)",
        "data": {}
      }
    ]
  }
}