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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Bundesland",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Bundesland (xerl:XE_ADMINEBENE_Bundesland)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_EU",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "EU (xerl:XE_ADMINEBENE_EU)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Gemeinde",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Gemeinde (xerl:XE_ADMINEBENE_Gemeinde)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Kreis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Kreis (xerl:XE_ADMINEBENE_Kreis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Regierungsbezirk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Regierungsbezirk (xerl:XE_ADMINEBENE_Regierungsbezirk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Staat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Staat (xerl:XE_ADMINEBENE_Staat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Verwaltungsgemeinschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Verwaltungsgemeinschaft (xerl:XE_ADMINEBENE_Verwaltungsgemeinschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE_Welt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "type": "instance",
        "text": "Welt (xerl:XE_ADMINEBENE_Welt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINEBENE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ADMINEBENE (xerl:XE_ADMINEBENE) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "Enumeration (xerl:Enumeration)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
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
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 12,
              "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS": 12
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_1stOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "1stOrder (xerl:XE_ADMINHIERARCHYLEVEL_1stOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_2ndOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "2ndOrder (xerl:XE_ADMINHIERARCHYLEVEL_2ndOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_3rdOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "3rdOrder (xerl:XE_ADMINHIERARCHYLEVEL_3rdOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_4thOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "4thOrder (xerl:XE_ADMINHIERARCHYLEVEL_4thOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_5thOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "5thOrder (xerl:XE_ADMINHIERARCHYLEVEL_5thOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL_6thOrder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "type": "instance",
        "text": "6thOrder (xerl:XE_ADMINHIERARCHYLEVEL_6thOrder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ADMINHIERARCHYLEVEL",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ADMINHIERARCHYLEVEL (xerl:XE_ADMINHIERARCHYLEVEL) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER_Ambulant",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER",
        "type": "instance",
        "text": "Ambulant (xerl:XE_AMBULANTSTATIONAER_Ambulant)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER_AmbulantStationaer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER",
        "type": "instance",
        "text": "AmbulantStationaer (xerl:XE_AMBULANTSTATIONAER_AmbulantStationaer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER_Stationaer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER",
        "type": "instance",
        "text": "Stationaer (xerl:XE_AMBULANTSTATIONAER_Stationaer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_AMBULANTSTATIONAER",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_AMBULANTSTATIONAER (xerl:XE_AMBULANTSTATIONAER) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_BeschilderungSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "BeschilderungSonstiges (xerl:XE_ART_BESCHILDERUNG_BeschilderungSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_Informationstafel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "Informationstafel (xerl:XE_ART_BESCHILDERUNG_Informationstafel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_Knotenpunktwegweiser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "Knotenpunktwegweiser (xerl:XE_ART_BESCHILDERUNG_Knotenpunktwegweiser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_Markierung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "Markierung (xerl:XE_ART_BESCHILDERUNG_Markierung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_Wegweiser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "Wegweiser (xerl:XE_ART_BESCHILDERUNG_Wegweiser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG_WegweiserSTVO",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "type": "instance",
        "text": "WegweiserSTVO (xerl:XE_ART_BESCHILDERUNG_WegweiserSTVO)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ART_BESCHILDERUNG",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ART_BESCHILDERUNG (xerl:XE_ART_BESCHILDERUNG) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE_Hausmeister",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE",
        "type": "instance",
        "text": "Hausmeister (xerl:XE_ASP_ROLLE_Hausmeister)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE_Leitung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE",
        "type": "instance",
        "text": "Leitung (xerl:XE_ASP_ROLLE_Leitung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE_Sekretariat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE",
        "type": "instance",
        "text": "Sekretariat (xerl:XE_ASP_ROLLE_Sekretariat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE_Sonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE",
        "type": "instance",
        "text": "Sonstiges (xerl:XE_ASP_ROLLE_Sonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ASP_ROLLE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ASP_ROLLE (xerl:XE_ASP_ROLLE) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_BlindeMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "BlindeMenschen (xerl:XE_BARRIEREGRUPPE_BlindeMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_Familien",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "Familien (xerl:XE_BARRIEREGRUPPE_Familien)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_GehbehinderteMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "GehbehinderteMenschen (xerl:XE_BARRIEREGRUPPE_GehbehinderteMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_GehoerloseMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "GehoerloseMenschen (xerl:XE_BARRIEREGRUPPE_GehoerloseMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_Kinderwagen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "Kinderwagen (xerl:XE_BARRIEREGRUPPE_Kinderwagen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_MenschenMitHoerbehinderung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "MenschenMitHoerbehinderung (xerl:XE_BARRIEREGRUPPE_MenschenMitHoerbehinderung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_MenschenMitLernschwierigkeiten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "MenschenMitLernschwierigkeiten (xerl:XE_BARRIEREGRUPPE_MenschenMitLernschwierigkeiten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_Rollator",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "Rollator (xerl:XE_BARRIEREGRUPPE_Rollator)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_Rollstuhlfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "Rollstuhlfahrer (xerl:XE_BARRIEREGRUPPE_Rollstuhlfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_SehbehinderteMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "SehbehinderteMenschen (xerl:XE_BARRIEREGRUPPE_SehbehinderteMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE_Senioren",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "type": "instance",
        "text": "Senioren (xerl:XE_BARRIEREGRUPPE_Senioren)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BARRIEREGRUPPE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BARRIEREGRUPPE (xerl:XE_BARRIEREGRUPPE) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS_Geplant",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS",
        "type": "instance",
        "text": "Geplant (xerl:XE_BETRIEBSSTATUS_Geplant)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS_ImBau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS",
        "type": "instance",
        "text": "ImBau (xerl:XE_BETRIEBSSTATUS_ImBau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS_InBetrieb",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS",
        "type": "instance",
        "text": "InBetrieb (xerl:XE_BETRIEBSSTATUS_InBetrieb)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS_Stillgelegt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS",
        "type": "instance",
        "text": "Stillgelegt (xerl:XE_BETRIEBSSTATUS_Stillgelegt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTATUS",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BETRIEBSSTATUS (xerl:XE_BETRIEBSSTATUS) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF_Autogas",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF",
        "type": "instance",
        "text": "Autogas (xerl:XE_BETRIEBSSTOFF_Autogas)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF_BenzinDiesel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF",
        "type": "instance",
        "text": "BenzinDiesel (xerl:XE_BETRIEBSSTOFF_BenzinDiesel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF_ErdGas",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF",
        "type": "instance",
        "text": "ErdGas (xerl:XE_BETRIEBSSTOFF_ErdGas)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF_Strom",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF",
        "type": "instance",
        "text": "Strom (xerl:XE_BETRIEBSSTOFF_Strom)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BETRIEBSSTOFF",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BETRIEBSSTOFF (xerl:XE_BETRIEBSSTOFF) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Nord",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Nord (xerl:XE_BLICKRICHTUNG_Nord)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Nordost",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Nordost (xerl:XE_BLICKRICHTUNG_Nordost)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Nordwest",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Nordwest (xerl:XE_BLICKRICHTUNG_Nordwest)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Ost",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Ost (xerl:XE_BLICKRICHTUNG_Ost)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Sued",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Sued (xerl:XE_BLICKRICHTUNG_Sued)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Suedost",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Suedost (xerl:XE_BLICKRICHTUNG_Suedost)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_Suedwest",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "Suedwest (xerl:XE_BLICKRICHTUNG_Suedwest)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG_West",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "type": "instance",
        "text": "West (xerl:XE_BLICKRICHTUNG_West)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKRICHTUNG",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BLICKRICHTUNG (xerl:XE_BLICKRICHTUNG) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL_Dreiviertelkreis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL",
        "type": "instance",
        "text": "Dreiviertelkreis (xerl:XE_BLICKWINKEL_Dreiviertelkreis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL_Halbkreis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL",
        "type": "instance",
        "text": "Halbkreis (xerl:XE_BLICKWINKEL_Halbkreis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL_Viertelkreis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL",
        "type": "instance",
        "text": "Viertelkreis (xerl:XE_BLICKWINKEL_Viertelkreis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL_Vollkreis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL",
        "type": "instance",
        "text": "Vollkreis (xerl:XE_BLICKWINKEL_Vollkreis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BLICKWINKEL",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BLICKWINKEL (xerl:XE_BLICKWINKEL) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_LandschaftlichReizvoll",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "LandschaftlichReizvoll (xerl:XE_BSM_WEGABSCHNITT_LandschaftlichReizvoll)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_Rollstuhlgerecht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "Rollstuhlgerecht (xerl:XE_BSM_WEGABSCHNITT_Rollstuhlgerecht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_SteigungBedeutend",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "SteigungBedeutend (xerl:XE_BSM_WEGABSCHNITT_SteigungBedeutend)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_VerkehrsbelastungStark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "VerkehrsbelastungStark (xerl:XE_BSM_WEGABSCHNITT_VerkehrsbelastungStark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_WegstreckeGefaehrlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "WegstreckeGefaehrlich (xerl:XE_BSM_WEGABSCHNITT_WegstreckeGefaehrlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT_WegstreckeSchwierig",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "type": "instance",
        "text": "WegstreckeSchwierig (xerl:XE_BSM_WEGABSCHNITT_WegstreckeSchwierig)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_BSM_WEGABSCHNITT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_BSM_WEGABSCHNITT (xerl:XE_BSM_WEGABSCHNITT) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Altkleider",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Altkleider (xerl:XE_ENTSORG_SAMMELGUT_Altkleider)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Elektrogeraete",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Elektrogeraete (xerl:XE_ENTSORG_SAMMELGUT_Elektrogeraete)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Elektronik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Elektronik (xerl:XE_ENTSORG_SAMMELGUT_Elektronik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Glas",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Glas (xerl:XE_ENTSORG_SAMMELGUT_Glas)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Gruenabfall",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Gruenabfall (xerl:XE_ENTSORG_SAMMELGUT_Gruenabfall)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_MetallSchrott",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "MetallSchrott (xerl:XE_ENTSORG_SAMMELGUT_MetallSchrott)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Papier",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Papier (xerl:XE_ENTSORG_SAMMELGUT_Papier)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Restmuell",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Restmuell (xerl:XE_ENTSORG_SAMMELGUT_Restmuell)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Sondermuell",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Sondermuell (xerl:XE_ENTSORG_SAMMELGUT_Sondermuell)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT_Sperrmuell",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "type": "instance",
        "text": "Sperrmuell (xerl:XE_ENTSORG_SAMMELGUT_Sperrmuell)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ENTSORG_SAMMELGUT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ENTSORG_SAMMELGUT (xerl:XE_ENTSORG_SAMMELGUT) [10]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoederschwerpunktGehoerlose",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoederschwerpunktGehoerlose (xerl:XE_FOERDERSCHWERPUNKT_FoederschwerpunktGehoerlose)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoederschwerpunktSprache",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoederschwerpunktSprache (xerl:XE_FOERDERSCHWERPUNKT_FoederschwerpunktSprache)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktBlinde",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktBlinde (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktBlinde)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktEmotionaleSozialeEntwicklung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktEmotionaleSozialeEntwicklung (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktEmotionaleSozialeEntwicklung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktGeistigeEntwicklung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktGeistigeEntwicklung (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktGeistigeEntwicklung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktLernen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktLernen (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktLernen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktMotorik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktMotorik (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktMotorik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT_FoerderschwerpunktSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "type": "instance",
        "text": "FoerderschwerpunktSonstiges (xerl:XE_FOERDERSCHWERPUNKT_FoerderschwerpunktSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FOERDERSCHWERPUNKT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_FOERDERSCHWERPUNKT (xerl:XE_FOERDERSCHWERPUNKT) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Afghanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Afghanisch (xerl:XE_GASTRONOMIE_KUECHE_Afghanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Afrikanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Afrikanisch (xerl:XE_GASTRONOMIE_KUECHE_Afrikanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Amerikanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Amerikanisch (xerl:XE_GASTRONOMIE_KUECHE_Amerikanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Asiatisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Asiatisch (xerl:XE_GASTRONOMIE_KUECHE_Asiatisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Australisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Australisch (xerl:XE_GASTRONOMIE_KUECHE_Australisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Balkanspezialit\u00e4ten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Balkanspezialit\u00e4ten (xerl:XE_GASTRONOMIE_KUECHE_Balkanspezialit\u00e4ten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Biergastst\u00e4tte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Biergastst\u00e4tte (xerl:XE_GASTRONOMIE_KUECHE_Biergastst\u00e4tte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Biokost",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Biokost (xerl:XE_GASTRONOMIE_KUECHE_Biokost)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Brasilianisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Brasilianisch (xerl:XE_GASTRONOMIE_KUECHE_Brasilianisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Chinesisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Chinesisch (xerl:XE_GASTRONOMIE_KUECHE_Chinesisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Deutsch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Deutsch (xerl:XE_GASTRONOMIE_KUECHE_Deutsch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Fischspezialit\u00e4ten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Fischspezialit\u00e4ten (xerl:XE_GASTRONOMIE_KUECHE_Fischspezialit\u00e4ten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Franz\u00f6sisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Franz\u00f6sisch (xerl:XE_GASTRONOMIE_KUECHE_Franz\u00f6sisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Gourmetrestaurant",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Gourmetrestaurant (xerl:XE_GASTRONOMIE_KUECHE_Gourmetrestaurant)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Griechisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Griechisch (xerl:XE_GASTRONOMIE_KUECHE_Griechisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_H\u00e4hnchenbraterei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "H\u00e4hnchenbraterei (xerl:XE_GASTRONOMIE_KUECHE_H\u00e4hnchenbraterei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Indisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Indisch (xerl:XE_GASTRONOMIE_KUECHE_Indisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Indonesisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Indonesisch (xerl:XE_GASTRONOMIE_KUECHE_Indonesisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_International",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "International (xerl:XE_GASTRONOMIE_KUECHE_International)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Iranisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Iranisch (xerl:XE_GASTRONOMIE_KUECHE_Iranisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Italienisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Italienisch (xerl:XE_GASTRONOMIE_KUECHE_Italienisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Japanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Japanisch (xerl:XE_GASTRONOMIE_KUECHE_Japanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Jugoslawisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Jugoslawisch (xerl:XE_GASTRONOMIE_KUECHE_Jugoslawisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Koreanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Koreanisch (xerl:XE_GASTRONOMIE_KUECHE_Koreanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Kreolisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Kreolisch (xerl:XE_GASTRONOMIE_KUECHE_Kreolisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Kroatisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Kroatisch (xerl:XE_GASTRONOMIE_KUECHE_Kroatisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Libanesisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Libanesisch (xerl:XE_GASTRONOMIE_KUECHE_Libanesisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Mediterran",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Mediterran (xerl:XE_GASTRONOMIE_KUECHE_Mediterran)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Meeresfr\u00fcchte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Meeresfr\u00fcchte (xerl:XE_GASTRONOMIE_KUECHE_Meeresfr\u00fcchte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Mexikanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Mexikanisch (xerl:XE_GASTRONOMIE_KUECHE_Mexikanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Mittelalterlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Mittelalterlich (xerl:XE_GASTRONOMIE_KUECHE_Mittelalterlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Mongolisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Mongolisch (xerl:XE_GASTRONOMIE_KUECHE_Mongolisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Norwegisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Norwegisch (xerl:XE_GASTRONOMIE_KUECHE_Norwegisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Persisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Persisch (xerl:XE_GASTRONOMIE_KUECHE_Persisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_RegionaleSpezialit\u00e4ten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "RegionaleSpezialit\u00e4ten (xerl:XE_GASTRONOMIE_KUECHE_RegionaleSpezialit\u00e4ten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Rum\u00e4nisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Rum\u00e4nisch (xerl:XE_GASTRONOMIE_KUECHE_Rum\u00e4nisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Schweizerisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Schweizerisch (xerl:XE_GASTRONOMIE_KUECHE_Schweizerisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Spanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Spanisch (xerl:XE_GASTRONOMIE_KUECHE_Spanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Steakhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Steakhaus (xerl:XE_GASTRONOMIE_KUECHE_Steakhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Sushi",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Sushi (xerl:XE_GASTRONOMIE_KUECHE_Sushi)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_S\u00fcdamerikanisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "S\u00fcdamerikanisch (xerl:XE_GASTRONOMIE_KUECHE_S\u00fcdamerikanisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Thail\u00e4ndisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Thail\u00e4ndisch (xerl:XE_GASTRONOMIE_KUECHE_Thail\u00e4ndisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_T\u00fcrkisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "T\u00fcrkisch (xerl:XE_GASTRONOMIE_KUECHE_T\u00fcrkisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Ungarisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Ungarisch (xerl:XE_GASTRONOMIE_KUECHE_Ungarisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Vegetarisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Vegetarisch (xerl:XE_GASTRONOMIE_KUECHE_Vegetarisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_Vietnamesisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "Vietnamesisch (xerl:XE_GASTRONOMIE_KUECHE_Vietnamesisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_\u00c4gyptisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "\u00c4gyptisch (xerl:XE_GASTRONOMIE_KUECHE_\u00c4gyptisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE_\u00d6sterreichisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "type": "instance",
        "text": "\u00d6sterreichisch (xerl:XE_GASTRONOMIE_KUECHE_\u00d6sterreichisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GASTRONOMIE_KUECHE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_GASTRONOMIE_KUECHE (xerl:XE_GASTRONOMIE_KUECHE) [48]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Autofahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Autofahrer (xerl:XE_GEFAHRENGRUPPE_Autofahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_BlindeMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "BlindeMenschen (xerl:XE_GEFAHRENGRUPPE_BlindeMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Fu\u00dfg\u00e4nger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Fu\u00dfg\u00e4nger (xerl:XE_GEFAHRENGRUPPE_Fu\u00dfg\u00e4nger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_GehbehinderteMenschen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "GehbehinderteMenschen (xerl:XE_GEFAHRENGRUPPE_GehbehinderteMenschen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Inlinerfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Inlinerfahrer (xerl:XE_GEFAHRENGRUPPE_Inlinerfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Kanuten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Kanuten (xerl:XE_GEFAHRENGRUPPE_Kanuten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Kinder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Kinder (xerl:XE_GEFAHRENGRUPPE_Kinder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Motorradfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Motorradfahrer (xerl:XE_GEFAHRENGRUPPE_Motorradfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Mountainbiker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Mountainbiker (xerl:XE_GEFAHRENGRUPPE_Mountainbiker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Radfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Radfahrer (xerl:XE_GEFAHRENGRUPPE_Radfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Reiter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Reiter (xerl:XE_GEFAHRENGRUPPE_Reiter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Rollstuhlfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Rollstuhlfahrer (xerl:XE_GEFAHRENGRUPPE_Rollstuhlfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Senioren",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Senioren (xerl:XE_GEFAHRENGRUPPE_Senioren)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE_Wassersportler",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "type": "instance",
        "text": "Wassersportler (xerl:XE_GEFAHRENGRUPPE_Wassersportler)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GEFAHRENGRUPPE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_GEFAHRENGRUPPE (xerl:XE_GEFAHRENGRUPPE) [14]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Allgemeinmedizin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Allgemeinmedizin (xerl:XE_GESUND_FACH_Allgemeinmedizin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Anaestesie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Anaestesie (xerl:XE_GESUND_FACH_Anaestesie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Augen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Augen (xerl:XE_GESUND_FACH_Augen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Chirurgie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Chirurgie (xerl:XE_GESUND_FACH_Chirurgie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Dermatologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Dermatologie (xerl:XE_GESUND_FACH_Dermatologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Geriatrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Geriatrie (xerl:XE_GESUND_FACH_Geriatrie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Gynaekologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Gynaekologie (xerl:XE_GESUND_FACH_Gynaekologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_HalsNasenOhren",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "HalsNasenOhren (xerl:XE_GESUND_FACH_HalsNasenOhren)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_InnereMedizin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "InnereMedizin (xerl:XE_GESUND_FACH_InnereMedizin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Kardiologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Kardiologie (xerl:XE_GESUND_FACH_Kardiologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Kinder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Kinder (xerl:XE_GESUND_FACH_Kinder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Neurologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Neurologie (xerl:XE_GESUND_FACH_Neurologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Orthopaedie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Orthopaedie (xerl:XE_GESUND_FACH_Orthopaedie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Palliativmedizin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Palliativmedizin (xerl:XE_GESUND_FACH_Palliativmedizin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_PsychiatrieSucht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "PsychiatrieSucht (xerl:XE_GESUND_FACH_PsychiatrieSucht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Radiologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Radiologie (xerl:XE_GESUND_FACH_Radiologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_SonstigesFachgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "SonstigesFachgebiet (xerl:XE_GESUND_FACH_SonstigesFachgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Sportmedizin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Sportmedizin (xerl:XE_GESUND_FACH_Sportmedizin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Urologie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Urologie (xerl:XE_GESUND_FACH_Urologie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH_Zahnheilkunde",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "type": "instance",
        "text": "Zahnheilkunde (xerl:XE_GESUND_FACH_Zahnheilkunde)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GESUND_FACH",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_GESUND_FACH (xerl:XE_GESUND_FACH) [20]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR_InOutdoor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR",
        "type": "instance",
        "text": "InOutdoor (xerl:XE_INDOOR_OUTDOOR_InOutdoor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR_Indoor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR",
        "type": "instance",
        "text": "Indoor (xerl:XE_INDOOR_OUTDOOR_Indoor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR_Outdoor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR",
        "type": "instance",
        "text": "Outdoor (xerl:XE_INDOOR_OUTDOOR_Outdoor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INDOOR_OUTDOOR",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_INDOOR_OUTDOOR (xerl:XE_INDOOR_OUTDOOR) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Audio",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Audio (xerl:XE_INFOART_Audio)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Bild",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Bild (xerl:XE_INFOART_Bild)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Buchung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Buchung (xerl:XE_INFOART_Buchung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Datenbankobjekt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Datenbankobjekt (xerl:XE_INFOART_Datenbankobjekt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Dokument",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Dokument (xerl:XE_INFOART_Dokument)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Geometrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Geometrie (xerl:XE_INFOART_Geometrie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Sonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Sonstiges (xerl:XE_INFOART_Sonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Video",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Video (xerl:XE_INFOART_Video)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART_Website",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "type": "instance",
        "text": "Website (xerl:XE_INFOART_Website)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_INFOART",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_INFOART (xerl:XE_INFOART) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG_Lokal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG",
        "type": "instance",
        "text": "Lokal (xerl:XE_KLASS_BEDEUTUNG_Lokal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG_Regional",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG",
        "type": "instance",
        "text": "Regional (xerl:XE_KLASS_BEDEUTUNG_Regional)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG_Ueberregional",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG",
        "type": "instance",
        "text": "Ueberregional (xerl:XE_KLASS_BEDEUTUNG_Ueberregional)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_BEDEUTUNG",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_KLASS_BEDEUTUNG (xerl:XE_KLASS_BEDEUTUNG) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS_Lokalsehenswert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS",
        "type": "instance",
        "text": "Lokalsehenswert (xerl:XE_KLASS_TOURISMUS_Lokalsehenswert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS_Regionalsehenswert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS",
        "type": "instance",
        "text": "Regionalsehenswert (xerl:XE_KLASS_TOURISMUS_Regionalsehenswert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS_Ueberregionalsehenswert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS",
        "type": "instance",
        "text": "Ueberregionalsehenswert (xerl:XE_KLASS_TOURISMUS_Ueberregionalsehenswert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KLASS_TOURISMUS",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_KLASS_TOURISMUS (xerl:XE_KLASS_TOURISMUS) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP_Endpunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP",
        "type": "instance",
        "text": "Endpunkt (xerl:XE_KNOTENTYP_Endpunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP_Haltepunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP",
        "type": "instance",
        "text": "Haltepunkt (xerl:XE_KNOTENTYP_Haltepunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP_Kreuzung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP",
        "type": "instance",
        "text": "Kreuzung (xerl:XE_KNOTENTYP_Kreuzung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_KNOTENTYP",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_KNOTENTYP (xerl:XE_KNOTENTYP) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_AufEigenstaendigemPfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "AufEigenstaendigemPfad (xerl:XE_LWG_WEGABSCHNITT_AufEigenstaendigemPfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_AufForstLandwirtschaftsweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "AufForstLandwirtschaftsweg (xerl:XE_LWG_WEGABSCHNITT_AufForstLandwirtschaftsweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_AufFusswegFussgaengerzone",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "AufFusswegFussgaengerzone (xerl:XE_LWG_WEGABSCHNITT_AufFusswegFussgaengerzone)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_AufOeffStrasseMarkiert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "AufOeffStrasseMarkiert (xerl:XE_LWG_WEGABSCHNITT_AufOeffStrasseMarkiert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_AufOeffStrasseOhneBegleitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "AufOeffStrasseOhneBegleitweg (xerl:XE_LWG_WEGABSCHNITT_AufOeffStrasseOhneBegleitweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_NebenOeffStrasseAufBegleitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "NebenOeffStrasseAufBegleitweg (xerl:XE_LWG_WEGABSCHNITT_NebenOeffStrasseAufBegleitweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_Unbekannt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "Unbekannt (xerl:XE_LWG_WEGABSCHNITT_Unbekannt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT_VerkehrsberuhigterBereich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "type": "instance",
        "text": "VerkehrsberuhigterBereich (xerl:XE_LWG_WEGABSCHNITT_VerkehrsberuhigterBereich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_LWG_WEGABSCHNITT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_LWG_WEGABSCHNITT (xerl:XE_LWG_WEGABSCHNITT) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Biosphaerenreservat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Biosphaerenreservat (xerl:XE_NATURSCHUTZSTATUS_Biosphaerenreservat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_FFHGebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "FFHGebiet (xerl:XE_NATURSCHUTZSTATUS_FFHGebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_GeschuetzterLandschaftsbestandteil",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "GeschuetzterLandschaftsbestandteil (xerl:XE_NATURSCHUTZSTATUS_GeschuetzterLandschaftsbestandteil)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_GeschuetztesBiotop",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "GeschuetztesBiotop (xerl:XE_NATURSCHUTZSTATUS_GeschuetztesBiotop)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Landschaftsschutzgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Landschaftsschutzgebiet (xerl:XE_NATURSCHUTZSTATUS_Landschaftsschutzgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Nationalpark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Nationalpark (xerl:XE_NATURSCHUTZSTATUS_Nationalpark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Naturdenkmal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Naturdenkmal (xerl:XE_NATURSCHUTZSTATUS_Naturdenkmal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Naturpark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Naturpark (xerl:XE_NATURSCHUTZSTATUS_Naturpark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Naturschutzgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Naturschutzgebiet (xerl:XE_NATURSCHUTZSTATUS_Naturschutzgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Naturwaldzelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Naturwaldzelle (xerl:XE_NATURSCHUTZSTATUS_Naturwaldzelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS_Vogelschutzgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Vogelschutzgebiet (xerl:XE_NATURSCHUTZSTATUS_Vogelschutzgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/Naturmonument",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "type": "instance",
        "text": "Nationales Naturmonument (xerl:Naturmonument)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NATURSCHUTZSTATUS",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_NATURSCHUTZSTATUS (xerl:XE_NATURSCHUTZSTATUS) [12]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_EUR",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "EUR (xerl:XE_NUTSEBENE_EUR)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_GLB",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "GLB (xerl:XE_NUTSEBENE_GLB)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_LAU1",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "LAU1 (xerl:XE_NUTSEBENE_LAU1)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_LAU2",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "LAU2 (xerl:XE_NUTSEBENE_LAU2)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_NUTS0",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "NUTS0 (xerl:XE_NUTSEBENE_NUTS0)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_NUTS1",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "NUTS1 (xerl:XE_NUTSEBENE_NUTS1)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_NUTS2",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "NUTS2 (xerl:XE_NUTSEBENE_NUTS2)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE_NUTS3",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "type": "instance",
        "text": "NUTS3 (xerl:XE_NUTSEBENE_NUTS3)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTSEBENE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_NUTSEBENE (xerl:XE_NUTSEBENE) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS_AndersGenutzt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS",
        "type": "instance",
        "text": "AndersGenutzt (xerl:XE_NUTZUNGSSTATUS_AndersGenutzt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS_NichtGenutzt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS",
        "type": "instance",
        "text": "NichtGenutzt (xerl:XE_NUTZUNGSSTATUS_NichtGenutzt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS_UrspruenglichGenutzt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS",
        "type": "instance",
        "text": "UrspruenglichGenutzt (xerl:XE_NUTZUNGSSTATUS_UrspruenglichGenutzt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NUTZUNGSSTATUS",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_NUTZUNGSSTATUS (xerl:XE_NUTZUNGSSTATUS) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_IstAehnlichWie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "IstAehnlichWie (xerl:XE_OVIBEZIEHUNG_IstAehnlichWie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_IstBestandteilVon",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "IstBestandteilVon (xerl:XE_OVIBEZIEHUNG_IstBestandteilVon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_IstFilialeVon",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "IstFilialeVon (xerl:XE_OVIBEZIEHUNG_IstFilialeVon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_IstInDerNaeheVon",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "IstInDerNaeheVon (xerl:XE_OVIBEZIEHUNG_IstInDerNaeheVon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_IstNachbarVon",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "IstNachbarVon (xerl:XE_OVIBEZIEHUNG_IstNachbarVon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG_hatVeranstaltungsort",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "type": "instance",
        "text": "hatVeranstaltungsort (xerl:XE_OVIBEZIEHUNG_hatVeranstaltungsort)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OVIBEZIEHUNG",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_OVIBEZIEHUNG (xerl:XE_OVIBEZIEHUNG) [6]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_PAEDAGOGIK_Montessori",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_PAEDAGOGIK",
        "type": "instance",
        "text": "Montessori (xerl:XE_PAEDAGOGIK_Montessori)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_PAEDAGOGIK_Waldorf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_PAEDAGOGIK",
        "type": "instance",
        "text": "Waldorf (xerl:XE_PAEDAGOGIK_Waldorf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_PAEDAGOGIK",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_PAEDAGOGIK (xerl:XE_PAEDAGOGIK) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Arbeit",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Arbeit (xerl:XE_SOZIALANGEBOT_Arbeit)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Beratung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Beratung (xerl:XE_SOZIALANGEBOT_Beratung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Betreuung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Betreuung (xerl:XE_SOZIALANGEBOT_Betreuung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Bildung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Bildung (xerl:XE_SOZIALANGEBOT_Bildung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Essen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Essen (xerl:XE_SOZIALANGEBOT_Essen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Notruf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Notruf (xerl:XE_SOZIALANGEBOT_Notruf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Pflege",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Pflege (xerl:XE_SOZIALANGEBOT_Pflege)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Selbsthilfe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Selbsthilfe (xerl:XE_SOZIALANGEBOT_Selbsthilfe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Therapie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Therapie (xerl:XE_SOZIALANGEBOT_Therapie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Transport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Transport (xerl:XE_SOZIALANGEBOT_Transport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Treffpunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Treffpunkt (xerl:XE_SOZIALANGEBOT_Treffpunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Unterstuetzung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Unterstuetzung (xerl:XE_SOZIALANGEBOT_Unterstuetzung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT_Wohnen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "type": "instance",
        "text": "Wohnen (xerl:XE_SOZIALANGEBOT_Wohnen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SOZIALANGEBOT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_SOZIALANGEBOT (xerl:XE_SOZIALANGEBOT) [13]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE_Alternativstrecke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE",
        "type": "instance",
        "text": "Alternativstrecke (xerl:XE_STRECKENVARIANTE_Alternativstrecke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE_Hauptstrecke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE",
        "type": "instance",
        "text": "Hauptstrecke (xerl:XE_STRECKENVARIANTE_Hauptstrecke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE_Stichweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE",
        "type": "instance",
        "text": "Stichweg (xerl:XE_STRECKENVARIANTE_Stichweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_STRECKENVARIANTE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_STRECKENVARIANTE (xerl:XE_STRECKENVARIANTE) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT_Abends",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT",
        "type": "instance",
        "text": "Abends (xerl:XE_TAGESZEIT_Abends)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT_Ganztags",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT",
        "type": "instance",
        "text": "Ganztags (xerl:XE_TAGESZEIT_Ganztags)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT_Halbtags",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT",
        "type": "instance",
        "text": "Halbtags (xerl:XE_TAGESZEIT_Halbtags)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT_Mehrtaegig",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT",
        "type": "instance",
        "text": "Mehrtaegig (xerl:XE_TAGESZEIT_Mehrtaegig)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TAGESZEIT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_TAGESZEIT (xerl:XE_TAGESZEIT) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Bund",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Bund (xerl:XE_TRAEGERART_Bund)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Gewerblich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Gewerblich (xerl:XE_TRAEGERART_Gewerblich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Kirchlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Kirchlich (xerl:XE_TRAEGERART_Kirchlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Kommunal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Kommunal (xerl:XE_TRAEGERART_Kommunal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Land",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Land (xerl:XE_TRAEGERART_Land)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Privat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Privat (xerl:XE_TRAEGERART_Privat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_Stiftung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "Stiftung (xerl:XE_TRAEGERART_Stiftung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART_VereinVerband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "type": "instance",
        "text": "VereinVerband (xerl:XE_TRAEGERART_VereinVerband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TRAEGERART",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_TRAEGERART (xerl:XE_TRAEGERART) [8]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Dienstag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Dienstag (xerl:XE_TURNUSTAG_Dienstag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Donnerstag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Donnerstag (xerl:XE_TURNUSTAG_Donnerstag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Freitag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Freitag (xerl:XE_TURNUSTAG_Freitag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Mittwoch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Mittwoch (xerl:XE_TURNUSTAG_Mittwoch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Montag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Montag (xerl:XE_TURNUSTAG_Montag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Samstag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Samstag (xerl:XE_TURNUSTAG_Samstag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG_Sonntag",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "type": "instance",
        "text": "Sonntag (xerl:XE_TURNUSTAG_Sonntag)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUSTAG",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_TURNUSTAG (xerl:XE_TURNUSTAG) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS_Jaehrlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS",
        "type": "instance",
        "text": "Jaehrlich (xerl:XE_TURNUS_Jaehrlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS_Monatlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS",
        "type": "instance",
        "text": "Monatlich (xerl:XE_TURNUS_Monatlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS_Taeglich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS",
        "type": "instance",
        "text": "Taeglich (xerl:XE_TURNUS_Taeglich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS_Woechentlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS",
        "type": "instance",
        "text": "Woechentlich (xerl:XE_TURNUS_Woechentlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TURNUS",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_TURNUS (xerl:XE_TURNUS) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Abfall",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Abfall (xerl:XE_VERENTSORG_FACH_Abfall)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Abwasser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Abwasser (xerl:XE_VERENTSORG_FACH_Abwasser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Gas",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Gas (xerl:XE_VERENTSORG_FACH_Gas)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Strom",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Strom (xerl:XE_VERENTSORG_FACH_Strom)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Telekommunikation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Telekommunikation (xerl:XE_VERENTSORG_FACH_Telekommunikation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Waerme",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Waerme (xerl:XE_VERENTSORG_FACH_Waerme)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH_Wasser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "type": "instance",
        "text": "Wasser (xerl:XE_VERENTSORG_FACH_Wasser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERENTSORG_FACH",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_VERENTSORG_FACH (xerl:XE_VERENTSORG_FACH) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT_NichtSofortVerfuegbar",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT",
        "type": "instance",
        "text": "NichtSofortVerfuegbar (xerl:XE_VERFUEGBARKEIT_NichtSofortVerfuegbar)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT_NichtVerfuegbar",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT",
        "type": "instance",
        "text": "NichtVerfuegbar (xerl:XE_VERFUEGBARKEIT_NichtVerfuegbar)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT_SofortVerfuegbar",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT",
        "type": "instance",
        "text": "SofortVerfuegbar (xerl:XE_VERFUEGBARKEIT_SofortVerfuegbar)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VERFUEGBARKEIT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_VERFUEGBARKEIT (xerl:XE_VERFUEGBARKEIT) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Anliegerstrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Anliegerstrasse (xerl:XE_WGF_WEGABSCHNITT_Anliegerstrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_BusspurRadfahrerFrei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "BusspurRadfahrerFrei (xerl:XE_WGF_WEGABSCHNITT_BusspurRadfahrerFrei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_EigenerWeg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "EigenerWeg (xerl:XE_WGF_WEGABSCHNITT_EigenerWeg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Fahrradstrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Fahrradstrasse (xerl:XE_WGF_WEGABSCHNITT_Fahrradstrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_FussRadwegGemeinsam",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "FussRadwegGemeinsam (xerl:XE_WGF_WEGABSCHNITT_FussRadwegGemeinsam)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_FussRadwegGetrennt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "FussRadwegGetrennt (xerl:XE_WGF_WEGABSCHNITT_FussRadwegGetrennt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Fussgaengerbereich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Fussgaengerbereich (xerl:XE_WGF_WEGABSCHNITT_Fussgaengerbereich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_FussgaengerzoneRadfahrerFrei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "FussgaengerzoneRadfahrerFrei (xerl:XE_WGF_WEGABSCHNITT_FussgaengerzoneRadfahrerFrei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_FussgaengerzoneZeitlichBegrenzteOeffnung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "FussgaengerzoneZeitlichBegrenzteOeffnung (xerl:XE_WGF_WEGABSCHNITT_FussgaengerzoneZeitlichBegrenzteOeffnung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_GehwegRadfahrerFrei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "GehwegRadfahrerFrei (xerl:XE_WGF_WEGABSCHNITT_GehwegRadfahrerFrei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Mehrzweckstreifen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Mehrzweckstreifen (xerl:XE_WGF_WEGABSCHNITT_Mehrzweckstreifen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Radfahrstreifen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Radfahrstreifen (xerl:XE_WGF_WEGABSCHNITT_Radfahrstreifen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Radweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Radweg (xerl:XE_WGF_WEGABSCHNITT_Radweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Sonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Sonstige (xerl:XE_WGF_WEGABSCHNITT_Sonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Strasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Strasse (xerl:XE_WGF_WEGABSCHNITT_Strasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_VerkehrsberuhigterBereich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "VerkehrsberuhigterBereich (xerl:XE_WGF_WEGABSCHNITT_VerkehrsberuhigterBereich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT_Zone30",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Zone30 (xerl:XE_WGF_WEGABSCHNITT_Zone30)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "type": "instance",
        "text": "Schutzstreifen  (xerl:)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_WGF_WEGABSCHNITT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_WGF_WEGABSCHNITT (xerl:XE_WGF_WEGABSCHNITT) [18]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_AktiveBestager",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "AktiveBestager (xerl:XE_ZIELGRUPPE_AktiveBestager)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Arbeitslose",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Arbeitslose (xerl:XE_ZIELGRUPPE_Arbeitslose)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_AuslaendischeMitbuerger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "AuslaendischeMitbuerger (xerl:XE_ZIELGRUPPE_AuslaendischeMitbuerger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Autofahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Autofahrer (xerl:XE_ZIELGRUPPE_Autofahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Behinderte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Behinderte (xerl:XE_ZIELGRUPPE_Behinderte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_ErwachseneSingles",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "ErwachseneSingles (xerl:XE_ZIELGRUPPE_ErwachseneSingles)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Familien",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Familien (xerl:XE_ZIELGRUPPE_Familien)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Frauen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Frauen (xerl:XE_ZIELGRUPPE_Frauen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Geschaeftsreisende",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Geschaeftsreisende (xerl:XE_ZIELGRUPPE_Geschaeftsreisende)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Inlinefahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Inlinefahrer (xerl:XE_ZIELGRUPPE_Inlinefahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Jeder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Jeder (xerl:XE_ZIELGRUPPE_Jeder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_JederTourist",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "JederTourist (xerl:XE_ZIELGRUPPE_JederTourist)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Jugendliche",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Jugendliche (xerl:XE_ZIELGRUPPE_Jugendliche)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_JungeSinglesPaare",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "JungeSinglesPaare (xerl:XE_ZIELGRUPPE_JungeSinglesPaare)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Kinder",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Kinder (xerl:XE_ZIELGRUPPE_Kinder)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Landwirte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Landwirte (xerl:XE_ZIELGRUPPE_Landwirte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Maenner",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Maenner (xerl:XE_ZIELGRUPPE_Maenner)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Motorradfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Motorradfahrer (xerl:XE_ZIELGRUPPE_Motorradfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Mountainbiker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Mountainbiker (xerl:XE_ZIELGRUPPE_Mountainbiker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Obdachlose",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Obdachlose (xerl:XE_ZIELGRUPPE_Obdachlose)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Pflegebeduerftige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Pflegebeduerftige (xerl:XE_ZIELGRUPPE_Pflegebeduerftige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Radfahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Radfahrer (xerl:XE_ZIELGRUPPE_Radfahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Reiter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Reiter (xerl:XE_ZIELGRUPPE_Reiter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Senioren",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Senioren (xerl:XE_ZIELGRUPPE_Senioren)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Skifahrer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Skifahrer (xerl:XE_ZIELGRUPPE_Skifahrer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Sonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Sonstige (xerl:XE_ZIELGRUPPE_Sonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_SozialSchwache",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "SozialSchwache (xerl:XE_ZIELGRUPPE_SozialSchwache)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Suechtige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Suechtige (xerl:XE_ZIELGRUPPE_Suechtige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Touristen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Touristen (xerl:XE_ZIELGRUPPE_Touristen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_TraditionelleBestager",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "TraditionelleBestager (xerl:XE_ZIELGRUPPE_TraditionelleBestager)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Verbraucher",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Verbraucher (xerl:XE_ZIELGRUPPE_Verbraucher)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE_Wanderer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "type": "instance",
        "text": "Wanderer (xerl:XE_ZIELGRUPPE_Wanderer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZIELGRUPPE",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ZIELGRUPPE (xerl:XE_ZIELGRUPPE) [32]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "instancecount": 3
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT_GlattBefestigt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT",
        "type": "instance",
        "text": "GlattBefestigt (xerl:XE_ZST_WEGABSCHNITT_GlattBefestigt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT_GrobBefestigt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT",
        "type": "instance",
        "text": "GrobBefestigt (xerl:XE_ZST_WEGABSCHNITT_GrobBefestigt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT_Unbefestigt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT",
        "type": "instance",
        "text": "Unbefestigt (xerl:XE_ZST_WEGABSCHNITT_Unbefestigt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT_Unbekannt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT",
        "type": "instance",
        "text": "Unbekannt (xerl:XE_ZST_WEGABSCHNITT_Unbekannt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_ZST_WEGABSCHNITT",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "XE_ZST_WEGABSCHNITT (xerl:XE_ZST_WEGABSCHNITT) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
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
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_AbstractFeature.html",
        "parent": "#",
        "type": "class",
        "text": "AbstractFeature (AbstractFeature)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_AbstractObject.html",
        "parent": "#",
        "type": "class",
        "text": "AbstractObject (AbstractObject)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_Curve.html",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "class",
        "text": "Curve (Curve)",
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
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_MultiPoint.html",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "class",
        "text": "MultiPoint (MultiPoint)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_Surface.html",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "class",
        "text": "Surface (Surface)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_Feature.html",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 4,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
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
              "http://www.w3.org/2002/07/owl#ObjectProperty": 16,
              "http://www.w3.org/2002/07/owl#Class": 19
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 326,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 160,
              "http://www.w3.org/2002/07/owl#Class": 109
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "parent": "#",
        "type": "class",
        "text": "SpatialObject (gsp:SpatialObject)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Aussichtspunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Aussichtspunkt (xerl:XE_Aussichtspunkt)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "parent": "#",
        "type": "class",
        "text": "XE_OrtVonInteresse (xerl:XE_OrtVonInteresse)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 2,
              "http://www.w3.org/2002/07/owl#Class": 2,
              "http://www.w3.org/2002/07/owl#Ontology": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 15
            }
          }
        },
        "instancecount": 10
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Autoverkehr (xerl:XE_Autoverkehr)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Baden (xerl:XE_Baden)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Bauwerk (xerl:XE_Bauwerk)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Behoerde (xerl:XE_Behoerde)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Bildung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Bildung (xerl:XE_Bildung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Denkmal (xerl:XE_Denkmal)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Dienstleistung (xerl:XE_Dienstleistung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Einzelhandel (xerl:XE_Einzelhandel)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Erholung (xerl:XE_Erholung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Flughafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Flughafen (xerl:XE_Flughafen)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_FreizeitErholung",
        "parent": "#",
        "type": "class",
        "text": "XE_FreizeitErholung (xerl:XE_FreizeitErholung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "parent": "#",
        "type": "class",
        "text": "XE_Freizeitweg (xerl:XE_Freizeitweg)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 2,
              "http://www.w3.org/2002/07/owl#Class": 2,
              "http://www.w3.org/2002/07/owl#Ontology": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 2
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first": {
              "instancecount": 0
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 12
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gastronomie (xerl:XE_Gastronomie)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gefahrenstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gefahrenstelle (xerl:XE_Gefahrenstelle)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gesundheit (xerl:XE_Gesundheit)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_GewerbeIndustrie (xerl:XE_GewerbeIndustrie)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gewerbegebiet (xerl:XE_Gewerbegebiet)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gewerbeimmobilie (xerl:XE_Gewerbeimmobilie)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Gotteshaus (xerl:XE_Gotteshaus)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Infrastruktur",
        "parent": "#",
        "type": "class",
        "text": "XE_Infrastruktur (xerl:XE_Infrastruktur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Kino (xerl:XE_Kino)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Kultureinrichtung (xerl:XE_Kultureinrichtung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Landmarke (xerl:XE_Landmarke)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "type": "class",
        "text": "XE_Lehrpfad (xerl:XE_Lehrpfad)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Logistik (xerl:XE_Logistik)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Mediathek (xerl:XE_Mediathek)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Messe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Messe (xerl:XE_Messe)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Militaer (xerl:XE_Militaer)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Moeblierung (xerl:XE_Moeblierung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Museum (xerl:XE_Museum)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Nachtleben (xerl:XE_Nachtleben)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_NaturLandschaft (xerl:XE_NaturLandschaft)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_OEVHaltestelle (xerl:XE_OEVHaltestelle)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "parent": "#",
        "type": "class",
        "text": "XE_OEVLinie (xerl:XE_OEVLinie)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_OEVTrasse (xerl:XE_OEVTrasse)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Radverkehr (xerl:XE_Radverkehr)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "type": "class",
        "text": "XE_Radwanderweg (xerl:XE_Radwanderweg)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Rast (xerl:XE_Rast)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Reitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "type": "class",
        "text": "XE_Reitweg (xerl:XE_Reitweg)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Religioeses (xerl:XE_Religioeses)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Rettung (xerl:XE_Rettung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Sammelstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Sammelstelle (xerl:XE_Sammelstelle)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Sammlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Sammlung (xerl:XE_Sammlung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "class",
        "text": "XErleben2 (xerl:XErleben2)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 2,
              "http://www.w3.org/2002/07/owl#Ontology": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Ontology": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#domain": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 31,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 31
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#allValuesFrom": {
              "instancecount": 0
            },
            "http://www.w3.org/2002/07/owl#onProperty": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_SchuleAllgemein (xerl:XE_SchuleAllgemein)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_SchuleSpezial (xerl:XE_SchuleSpezial)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Servicestelle (xerl:XE_Servicestelle)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Shopping (xerl:XE_Shopping)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Siedlung (xerl:XE_Siedlung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "type": "class",
        "text": "XE_SonstigerFreizeitweg (xerl:XE_SonstigerFreizeitweg)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_SozialEinrichtung (xerl:XE_SozialEinrichtung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Sport (xerl:XE_Sport)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Tankstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Tankstelle (xerl:XE_Tankstelle)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_TechnischesBauwerk (xerl:XE_TechnischesBauwerk)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_TheaterMusik (xerl:XE_TheaterMusik)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Tiermedizin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Tiermedizin (xerl:XE_Tiermedizin)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Tierwelt (xerl:XE_Tierwelt)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_TouristischeInfrastruktur",
        "parent": "#",
        "type": "class",
        "text": "XE_TouristischeInfrastruktur (xerl:XE_TouristischeInfrastruktur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Traegerabschnitt",
        "parent": "#",
        "type": "class",
        "text": "XE_Traegerabschnitt (xerl:XE_Traegerabschnitt)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_UGR_WEGABSCHNITT",
        "parent": "#",
        "type": "class",
        "text": "XE_UGR_WEGABSCHNITT (xerl:XE_UGR_WEGABSCHNITT)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Unterkunft (xerl:XE_Unterkunft)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Unternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Unternehmen (xerl:XE_Unternehmen)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_VerEntsorgungsbetrieb (xerl:XE_VerEntsorgungsbetrieb)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Veranstaltung (xerl:XE_Veranstaltung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung_Kategorie",
        "parent": "#",
        "type": "class",
        "text": "XE_Veranstaltung_Kategorie (xerl:XE_Veranstaltung_Kategorie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Veranstaltungsort (xerl:XE_Veranstaltungsort)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Verband (xerl:XE_Verband)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Freizeitweg",
        "type": "class",
        "text": "XE_Wanderweg (xerl:XE_Wanderweg)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Wasserverkehr (xerl:XE_Wasserverkehr)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Wegweisung (xerl:XE_Wegweisung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Weiterbildung (xerl:XE_Weiterbildung)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wissenschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "XE_Wissenschaft (xerl:XE_Wissenschaft)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            },
            "http://www.wikidata.org/entity/Property:P18": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/code": {
              "instancecount": 1
            },
            "http://www.xerleben.de/schema/2.0_1/sinceVersion": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "Info (xerl:Info)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#AnnotationProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Ontology": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#DatatypeProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#domain": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 8
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/URI",
        "parent": "#",
        "type": "class",
        "text": "URI (xerl:URI)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/Union",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "Union (xerl:Union)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Adresse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Adresse (xerl:XE_Adresse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Ansprechpartner",
        "parent": "#",
        "type": "class",
        "text": "XE_Ansprechpartner (xerl:XE_Ansprechpartner)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Aussichtspunkt_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Aussichtspunkt_Info (xerl:XE_Aussichtspunkt_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Autoverkehr_Info (xerl:XE_Autoverkehr_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Barrierefreiheit_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Barrierefreiheit_Info (xerl:XE_Barrierefreiheit_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Bauwerk_Info (xerl:XE_Bauwerk_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Behoerde_Info (xerl:XE_Behoerde_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Externe_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Externe_Info (xerl:XE_Externe_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Gastronomie_Info (xerl:XE_Gastronomie_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gefahrenstelle_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Gefahrenstelle_Info (xerl:XE_Gefahrenstelle_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Gesundheit_Info (xerl:XE_Gesundheit_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Gewerbeimmobilie_Info (xerl:XE_Gewerbeimmobilie_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Museum_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Museum_Info (xerl:XE_Museum_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_NaturLandschaft_Info (xerl:XE_NaturLandschaft_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_OEVHaltestelle_Info (xerl:XE_OEVHaltestelle_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_OEVLinie_Info (xerl:XE_OEVLinie_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_OEVTrasse_Info (xerl:XE_OEVTrasse_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Oeffnungszeiten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Oeffnungszeiten (xerl:XE_Oeffnungszeiten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_OviBeziehung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_OviBeziehung (xerl:XE_OviBeziehung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Person",
        "parent": "#",
        "type": "class",
        "text": "XE_Person (xerl:XE_Person)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Postfachadresse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Postfachadresse (xerl:XE_Postfachadresse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Praedikat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Praedikat (xerl:XE_Praedikat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Radverkehr_Info (xerl:XE_Radverkehr_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Religioeses_Info (xerl:XE_Religioeses_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Ressource",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Ressource (xerl:XE_Ressource)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Sammelstelle_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Sammelstelle_Info (xerl:XE_Sammelstelle_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_SchuleAllgemein_Info (xerl:XE_SchuleAllgemein_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_SozialEinrichtung_Info (xerl:XE_SozialEinrichtung_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Sport_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Sport_Info (xerl:XE_Sport_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Streckenvariante",
        "parent": "#",
        "type": "class",
        "text": "XE_Streckenvariante (xerl:XE_Streckenvariante)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Tankstelle_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Tankstelle_Info (xerl:XE_Tankstelle_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Telefon",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Telefon (xerl:XE_Telefon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Unternehmen_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Unternehmen_Info (xerl:XE_Unternehmen_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_VerEntsorgungsbetrieb_Info (xerl:XE_VerEntsorgungsbetrieb_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Veranstaltung_Info (xerl:XE_Veranstaltung_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Veranstaltungsort_Info (xerl:XE_Veranstaltungsort_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Verband_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Verband_Info (xerl:XE_Verband_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wegabschnitt",
        "parent": "#",
        "type": "class",
        "text": "XE_Wegabschnitt (xerl:XE_Wegabschnitt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wegknoten",
        "parent": "#",
        "type": "class",
        "text": "XE_Wegknoten (xerl:XE_Wegknoten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung_Info",
        "parent": "http://www.xerleben.de/schema/2.0_1/Info",
        "type": "class",
        "text": "XE_Wegweisung_Info (xerl:XE_Wegweisung_Info)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Zielgruppe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "XE_Zielgruppe (xerl:XE_Zielgruppe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/replaceref_XE_Adresse",
        "parent": "#",
        "type": "class",
        "text": "replaceref_XE_Adresse (xerl:replaceref_XE_Adresse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/replaceref_XE_Oeffnungszeiten",
        "parent": "#",
        "type": "class",
        "text": "replaceref_XE_Oeffnungszeiten (xerl:replaceref_XE_Oeffnungszeiten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/replaceref_XE_Postfachadresse",
        "parent": "#",
        "type": "class",
        "text": "replaceref_XE_Postfachadresse (xerl:replaceref_XE_Postfachadresse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/replaceref_XE_Ressource",
        "parent": "#",
        "type": "class",
        "text": "replaceref_XE_Ressource (xerl:replaceref_XE_Ressource)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/replaceref_XE_Telefon",
        "parent": "#",
        "type": "class",
        "text": "replaceref_XE_Telefon (xerl:replaceref_XE_Telefon)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/20000000_XE_KulturBauwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "20000000_XE_KulturBauwerk (xerl:20000000_XE_KulturBauwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21000000_XE_Kultur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "21000000_XE_Kultur (xerl:21000000_XE_Kultur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62000000_XE_Verwaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "62000000_XE_Verwaltung (xerl:62000000_XE_Verwaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63000000_XE_GesundheitSoziales",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "63000000_XE_GesundheitSoziales (xerl:63000000_XE_GesundheitSoziales)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64000000_XE_VerEntsorgung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "64000000_XE_VerEntsorgung (xerl:64000000_XE_VerEntsorgung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66000000_XE_Verkehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "66000000_XE_Verkehr (xerl:66000000_XE_Verkehr)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68000000_XE_Sicherheit",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OrtVonInteresse",
        "type": "class",
        "text": "68000000_XE_Sicherheit (xerl:68000000_XE_Sicherheit)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/70000000_XE_Wirtschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/Enumeration",
        "type": "class",
        "text": "70000000_XE_Wirtschaft (xerl:70000000_XE_Wirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/AddressDetails",
        "parent": "http://www.xerleben.de/schema/2.0_1/XErleben2",
        "type": "class",
        "text": "AddressDetails (xerl:AddressDetails)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/nonns_String.Latin.html",
        "parent": "#",
        "type": "class",
        "text": "String.Latin (String.Latin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101000_XE_Servicestelle_Touristinformation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101000_XE_Servicestelle_Touristinformation (xerl:11101000_XE_Servicestelle_Touristinformation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101050_XE_Servicestelle_Ticketshop",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101050_XE_Servicestelle_Ticketshop (xerl:11101050_XE_Servicestelle_Ticketshop)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101100_XE_Servicestelle_Infopoint",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101100_XE_Servicestelle_Infopoint (xerl:11101100_XE_Servicestelle_Infopoint)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101150_XE_Servicestelle_ServicestelleOEV",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101150_XE_Servicestelle_ServicestelleOEV (xerl:11101150_XE_Servicestelle_ServicestelleOEV)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101300_XE_Servicestelle_Geldautomat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101300_XE_Servicestelle_Geldautomat (xerl:11101300_XE_Servicestelle_Geldautomat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11101990_XE_Servicestelle_ServicestelleSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11101990_XE_Servicestelle_ServicestelleSonstiges (xerl:11101990_XE_Servicestelle_ServicestelleSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102000_XE_Servicestelle_Post",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102000_XE_Servicestelle_Post (xerl:11102000_XE_Servicestelle_Post)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102100_XE_Servicestelle_ToiletteOeffentlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102100_XE_Servicestelle_ToiletteOeffentlich (xerl:11102100_XE_Servicestelle_ToiletteOeffentlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102110_XE_Servicestelle_ToiletteOeffentlichBehindertengerecht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102110_XE_Servicestelle_ToiletteOeffentlichBehindertengerecht (xerl:11102110_XE_Servicestelle_ToiletteOeffentlichBehindertengerecht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102200_XE_Servicestelle_TelefonOeffentlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102200_XE_Servicestelle_TelefonOeffentlich (xerl:11102200_XE_Servicestelle_TelefonOeffentlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102210_XE_Servicestelle_TelefonOeffentlichBehindertengerecht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102210_XE_Servicestelle_TelefonOeffentlichBehindertengerecht (xerl:11102210_XE_Servicestelle_TelefonOeffentlichBehindertengerecht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102220_XE_Servicestelle_Trinkwasserstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102220_XE_Servicestelle_Trinkwasserstelle (xerl:11102220_XE_Servicestelle_Trinkwasserstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11102250_XE_Servicestelle_WLANOeffentlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Servicestelle",
        "type": "class",
        "text": "11102250_XE_Servicestelle_WLANOeffentlich (xerl:11102250_XE_Servicestelle_WLANOeffentlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201000_XE_Gastronomie_Bauernhofcafe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201000_XE_Gastronomie_Bauernhofcafe (xerl:11201000_XE_Gastronomie_Bauernhofcafe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201010_XE_Gastronomie_Cafe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201010_XE_Gastronomie_Cafe (xerl:11201010_XE_Gastronomie_Cafe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201050_XE_Gastronomie_Eisdiele",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201050_XE_Gastronomie_Eisdiele (xerl:11201050_XE_Gastronomie_Eisdiele)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201100_XE_Gastronomie_BewirtschafteteHuette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201100_XE_Gastronomie_BewirtschafteteHuette (xerl:11201100_XE_Gastronomie_BewirtschafteteHuette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201150_XE_Gastronomie_Restaurant",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201150_XE_Gastronomie_Restaurant (xerl:11201150_XE_Gastronomie_Restaurant)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201160_XE_Gastronomie_MensaKantine",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201160_XE_Gastronomie_MensaKantine (xerl:11201160_XE_Gastronomie_MensaKantine)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201200_XE_Gastronomie_ImbissFastfood",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201200_XE_Gastronomie_ImbissFastfood (xerl:11201200_XE_Gastronomie_ImbissFastfood)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201300_XE_Gastronomie_Kneipe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201300_XE_Gastronomie_Kneipe (xerl:11201300_XE_Gastronomie_Kneipe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201310_XE_Gastronomie_Biergarten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201310_XE_Gastronomie_Biergarten (xerl:11201310_XE_Gastronomie_Biergarten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201320_XE_Gastronomie_Strausswirtschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201320_XE_Gastronomie_Strausswirtschaft (xerl:11201320_XE_Gastronomie_Strausswirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201350_XE_Gastronomie_Brauerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201350_XE_Gastronomie_Brauerei (xerl:11201350_XE_Gastronomie_Brauerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201360_XE_Gastronomie_Brennerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201360_XE_Gastronomie_Brennerei (xerl:11201360_XE_Gastronomie_Brennerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11201990_XE_Gastronomie_GastronomieSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gastronomie",
        "type": "class",
        "text": "11201990_XE_Gastronomie_GastronomieSonstiges (xerl:11201990_XE_Gastronomie_GastronomieSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301000_XE_Rast_Wanderrastplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301000_XE_Rast_Wanderrastplatz (xerl:11301000_XE_Rast_Wanderrastplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301010_XE_Rast_Wasserrastplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301010_XE_Rast_Wasserrastplatz (xerl:11301010_XE_Rast_Wasserrastplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301020_XE_Rast_Pferderastplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301020_XE_Rast_Pferderastplatz (xerl:11301020_XE_Rast_Pferderastplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301100_XE_Rast_Grillhuette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301100_XE_Rast_Grillhuette (xerl:11301100_XE_Rast_Grillhuette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301110_XE_Rast_Grillplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301110_XE_Rast_Grillplatz (xerl:11301110_XE_Rast_Grillplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301200_XE_Rast_Schutzhuette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301200_XE_Rast_Schutzhuette (xerl:11301200_XE_Rast_Schutzhuette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11301990_XE_Rast_RastSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rast",
        "type": "class",
        "text": "11301990_XE_Rast_RastSonstiges (xerl:11301990_XE_Rast_RastSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401000_XE_Unterkunft_Feriendorf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401000_XE_Unterkunft_Feriendorf (xerl:11401000_XE_Unterkunft_Feriendorf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401100_XE_Unterkunft_WanderheimBewirtschaftet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401100_XE_Unterkunft_WanderheimBewirtschaftet (xerl:11401100_XE_Unterkunft_WanderheimBewirtschaftet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401110_XE_Unterkunft_WanderheimUnbewirtschaftet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401110_XE_Unterkunft_WanderheimUnbewirtschaftet (xerl:11401110_XE_Unterkunft_WanderheimUnbewirtschaftet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401200_XE_Unterkunft_JugendherbergeGaestehausHotel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401200_XE_Unterkunft_JugendherbergeGaestehausHotel (xerl:11401200_XE_Unterkunft_JugendherbergeGaestehausHotel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401210_XE_Unterkunft_GruppenunterkunftGaestehaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401210_XE_Unterkunft_GruppenunterkunftGaestehaus (xerl:11401210_XE_Unterkunft_GruppenunterkunftGaestehaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401300_XE_Unterkunft_Privatzimmer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401300_XE_Unterkunft_Privatzimmer (xerl:11401300_XE_Unterkunft_Privatzimmer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401350_XE_Unterkunft_Pension",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401350_XE_Unterkunft_Pension (xerl:11401350_XE_Unterkunft_Pension)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401400_XE_Unterkunft_Bauernhofunterkunft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401400_XE_Unterkunft_Bauernhofunterkunft (xerl:11401400_XE_Unterkunft_Bauernhofunterkunft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401450_XE_Unterkunft_FerienwohnungFerienhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401450_XE_Unterkunft_FerienwohnungFerienhaus (xerl:11401450_XE_Unterkunft_FerienwohnungFerienhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401500_XE_Unterkunft_HotelGarni",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401500_XE_Unterkunft_HotelGarni (xerl:11401500_XE_Unterkunft_HotelGarni)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401510_XE_Unterkunft_HotelGasthof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401510_XE_Unterkunft_HotelGasthof (xerl:11401510_XE_Unterkunft_HotelGasthof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401520_XE_Unterkunft_Motel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401520_XE_Unterkunft_Motel (xerl:11401520_XE_Unterkunft_Motel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401600_XE_Unterkunft_Campingplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401600_XE_Unterkunft_Campingplatz (xerl:11401600_XE_Unterkunft_Campingplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401610_XE_Unterkunft_Jugendzeltplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401610_XE_Unterkunft_Jugendzeltplatz (xerl:11401610_XE_Unterkunft_Jugendzeltplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401620_XE_Unterkunft_Dauercampingplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401620_XE_Unterkunft_Dauercampingplatz (xerl:11401620_XE_Unterkunft_Dauercampingplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401700_XE_Unterkunft_Heuherberge",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401700_XE_Unterkunft_Heuherberge (xerl:11401700_XE_Unterkunft_Heuherberge)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11401990_XE_Unterkunft_UnterkunftSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unterkunft",
        "type": "class",
        "text": "11401990_XE_Unterkunft_UnterkunftSonstiges (xerl:11401990_XE_Unterkunft_UnterkunftSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501000_XE_Shopping_Einkaufsstrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501000_XE_Shopping_Einkaufsstrasse (xerl:11501000_XE_Shopping_Einkaufsstrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501010_XE_Shopping_Einkaufsviertel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501010_XE_Shopping_Einkaufsviertel (xerl:11501010_XE_Shopping_Einkaufsviertel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501020_XE_Shopping_Einkaufszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501020_XE_Shopping_Einkaufszentrum (xerl:11501020_XE_Shopping_Einkaufszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501100_XE_Shopping_OutletCenter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501100_XE_Shopping_OutletCenter (xerl:11501100_XE_Shopping_OutletCenter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501110_XE_Shopping_Fabrikverkauf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501110_XE_Shopping_Fabrikverkauf (xerl:11501110_XE_Shopping_Fabrikverkauf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501150_XE_Shopping_Hofverkauf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501150_XE_Shopping_Hofverkauf (xerl:11501150_XE_Shopping_Hofverkauf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501200_XE_Shopping_Direktvermarkter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501200_XE_Shopping_Direktvermarkter (xerl:11501200_XE_Shopping_Direktvermarkter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/11501990_XE_Shopping_ShoppingSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Shopping",
        "type": "class",
        "text": "11501990_XE_Shopping_ShoppingSonstiges (xerl:11501990_XE_Shopping_ShoppingSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101000_XE_Museum_Heimatkundemuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101000_XE_Museum_Heimatkundemuseum (xerl:21101000_XE_Museum_Heimatkundemuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101050_XE_Museum_Landeskundemuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101050_XE_Museum_Landeskundemuseum (xerl:21101050_XE_Museum_Landeskundemuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101100_XE_Museum_Voelkerkundemuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101100_XE_Museum_Voelkerkundemuseum (xerl:21101100_XE_Museum_Voelkerkundemuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101150_XE_Museum_MuseumUrFruehgeschichte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101150_XE_Museum_MuseumUrFruehgeschichte (xerl:21101150_XE_Museum_MuseumUrFruehgeschichte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101200_XE_Museum_MuseumGeschichte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101200_XE_Museum_MuseumGeschichte (xerl:21101200_XE_Museum_MuseumGeschichte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101250_XE_Museum_Naturkundemuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101250_XE_Museum_Naturkundemuseum (xerl:21101250_XE_Museum_Naturkundemuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101300_XE_Museum_Technikmuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101300_XE_Museum_Technikmuseum (xerl:21101300_XE_Museum_Technikmuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101350_XE_Museum_MuseumLandwirtschaftWeinbauForsten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101350_XE_Museum_MuseumLandwirtschaftWeinbauForsten (xerl:21101350_XE_Museum_MuseumLandwirtschaftWeinbauForsten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101400_XE_Museum_Kunstmuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101400_XE_Museum_Kunstmuseum (xerl:21101400_XE_Museum_Kunstmuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101450_XE_Museum_Architekturmuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101450_XE_Museum_Architekturmuseum (xerl:21101450_XE_Museum_Architekturmuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101500_XE_Museum_ArchaeologischesMuseum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101500_XE_Museum_ArchaeologischesMuseum (xerl:21101500_XE_Museum_ArchaeologischesMuseum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101550_XE_Museum_MuseumHeimatvertriebene",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101550_XE_Museum_MuseumHeimatvertriebene (xerl:21101550_XE_Museum_MuseumHeimatvertriebene)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101600_XE_Museum_GedenkstaetteNichtReligioes",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101600_XE_Museum_GedenkstaetteNichtReligioes (xerl:21101600_XE_Museum_GedenkstaetteNichtReligioes)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101650_XE_Museum_Planetarium",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101650_XE_Museum_Planetarium (xerl:21101650_XE_Museum_Planetarium)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101700_XE_Museum_Besucherbergwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101700_XE_Museum_Besucherbergwerk (xerl:21101700_XE_Museum_Besucherbergwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101800_XE_Museum_Sternwarte",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101800_XE_Museum_Sternwarte (xerl:21101800_XE_Museum_Sternwarte)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21101990_XE_Museum_MuseumSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Museum",
        "type": "class",
        "text": "21101990_XE_Museum_MuseumSonstiges (xerl:21101990_XE_Museum_MuseumSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201000_XE_TheaterMusik_Theater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201000_XE_TheaterMusik_Theater (xerl:21201000_XE_TheaterMusik_Theater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201010_XE_TheaterMusik_Kindertheater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201010_XE_TheaterMusik_Kindertheater (xerl:21201010_XE_TheaterMusik_Kindertheater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201020_XE_TheaterMusik_Puppentheater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201020_XE_TheaterMusik_Puppentheater (xerl:21201020_XE_TheaterMusik_Puppentheater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201050_XE_TheaterMusik_Variete",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201050_XE_TheaterMusik_Variete (xerl:21201050_XE_TheaterMusik_Variete)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201060_XE_TheaterMusik_Kleinkunstbuehne",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201060_XE_TheaterMusik_Kleinkunstbuehne (xerl:21201060_XE_TheaterMusik_Kleinkunstbuehne)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201100_XE_TheaterMusik_Freilichtbuehne",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201100_XE_TheaterMusik_Freilichtbuehne (xerl:21201100_XE_TheaterMusik_Freilichtbuehne)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201110_XE_TheaterMusik_Naturtheater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201110_XE_TheaterMusik_Naturtheater (xerl:21201110_XE_TheaterMusik_Naturtheater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201120_XE_TheaterMusik_Amphitheater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201120_XE_TheaterMusik_Amphitheater (xerl:21201120_XE_TheaterMusik_Amphitheater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201150_XE_TheaterMusik_Musicaltheater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201150_XE_TheaterMusik_Musicaltheater (xerl:21201150_XE_TheaterMusik_Musicaltheater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201200_XE_TheaterMusik_Opernhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201200_XE_TheaterMusik_Opernhaus (xerl:21201200_XE_TheaterMusik_Opernhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201250_XE_TheaterMusik_KonzertsaalHalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201250_XE_TheaterMusik_KonzertsaalHalle (xerl:21201250_XE_TheaterMusik_KonzertsaalHalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21201990_XE_TheaterMusik_TheaterMusikSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TheaterMusik",
        "type": "class",
        "text": "21201990_XE_TheaterMusik_TheaterMusikSonstiges (xerl:21201990_XE_TheaterMusik_TheaterMusikSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301000_XE_Kultureinrichtung_Ausstellungshaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301000_XE_Kultureinrichtung_Ausstellungshaus (xerl:21301000_XE_Kultureinrichtung_Ausstellungshaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301010_XE_Kultureinrichtung_Galerie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301010_XE_Kultureinrichtung_Galerie (xerl:21301010_XE_Kultureinrichtung_Galerie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301020_XE_Kultureinrichtung_AtelierKuenstlerhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301020_XE_Kultureinrichtung_AtelierKuenstlerhaus (xerl:21301020_XE_Kultureinrichtung_AtelierKuenstlerhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301050_XE_Kultureinrichtung_Kulturzentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301050_XE_Kultureinrichtung_Kulturzentrum (xerl:21301050_XE_Kultureinrichtung_Kulturzentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301100_XE_Kultureinrichtung_Spielbank",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301100_XE_Kultureinrichtung_Spielbank (xerl:21301100_XE_Kultureinrichtung_Spielbank)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21301990_XE_Kultureinrichtung_KultureinrichtungSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kultureinrichtung",
        "type": "class",
        "text": "21301990_XE_Kultureinrichtung_KultureinrichtungSonstiges (xerl:21301990_XE_Kultureinrichtung_KultureinrichtungSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401000_XE_Kino_Programmkino",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401000_XE_Kino_Programmkino (xerl:21401000_XE_Kino_Programmkino)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401050_XE_Kino_Multiplexkino",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401050_XE_Kino_Multiplexkino (xerl:21401050_XE_Kino_Multiplexkino)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401100_XE_Kino_Freilichtkino",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401100_XE_Kino_Freilichtkino (xerl:21401100_XE_Kino_Freilichtkino)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401150_XE_Kino_Autokino",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401150_XE_Kino_Autokino (xerl:21401150_XE_Kino_Autokino)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401200_XE_Kino_KinosaalHistorisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401200_XE_Kino_KinosaalHistorisch (xerl:21401200_XE_Kino_KinosaalHistorisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21401990_XE_Kino_KinoSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Kino",
        "type": "class",
        "text": "21401990_XE_Kino_KinoSonstiges (xerl:21401990_XE_Kino_KinoSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501000_XE_Nachtleben_BarNachtlokal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501000_XE_Nachtleben_BarNachtlokal (xerl:21501000_XE_Nachtleben_BarNachtlokal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501010_XE_Nachtleben_Tanzlokal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501010_XE_Nachtleben_Tanzlokal (xerl:21501010_XE_Nachtleben_Tanzlokal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501050_XE_Nachtleben_Diskothek",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501050_XE_Nachtleben_Diskothek (xerl:21501050_XE_Nachtleben_Diskothek)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501100_XE_Nachtleben_Szeneviertel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501100_XE_Nachtleben_Szeneviertel (xerl:21501100_XE_Nachtleben_Szeneviertel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501150_XE_Nachtleben_Vergnuegungsmeile",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501150_XE_Nachtleben_Vergnuegungsmeile (xerl:21501150_XE_Nachtleben_Vergnuegungsmeile)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/21501990_XE_Nachtleben_NachtlokalSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Nachtleben",
        "type": "class",
        "text": "21501990_XE_Nachtleben_NachtlokalSonstiges (xerl:21501990_XE_Nachtleben_NachtlokalSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101000_XE_Siedlung_Altstadt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101000_XE_Siedlung_Altstadt (xerl:22101000_XE_Siedlung_Altstadt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101050_XE_Siedlung_InnenstadtOrtskern",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101050_XE_Siedlung_InnenstadtOrtskern (xerl:22101050_XE_Siedlung_InnenstadtOrtskern)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101100_XE_Siedlung_Marktplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101100_XE_Siedlung_Marktplatz (xerl:22101100_XE_Siedlung_Marktplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101110_XE_Siedlung_Platz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101110_XE_Siedlung_Platz (xerl:22101110_XE_Siedlung_Platz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101200_XE_Siedlung_Promenade",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101200_XE_Siedlung_Promenade (xerl:22101200_XE_Siedlung_Promenade)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101300_XE_Siedlung_Werkssiedlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101300_XE_Siedlung_Werkssiedlung (xerl:22101300_XE_Siedlung_Werkssiedlung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22101990_XE_Siedlung_EnsembleSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Siedlung",
        "type": "class",
        "text": "22101990_XE_Siedlung_EnsembleSonstiges (xerl:22101990_XE_Siedlung_EnsembleSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201000_XE_Bauwerk_Stadttor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201000_XE_Bauwerk_Stadttor (xerl:22201000_XE_Bauwerk_Stadttor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201010_XE_Bauwerk_Stadtbefestigung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201010_XE_Bauwerk_Stadtbefestigung (xerl:22201010_XE_Bauwerk_Stadtbefestigung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201020_XE_Bauwerk_Befestigungsanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201020_XE_Bauwerk_Befestigungsanlage (xerl:22201020_XE_Bauwerk_Befestigungsanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201050_XE_Bauwerk_Wachturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201050_XE_Bauwerk_Wachturm (xerl:22201050_XE_Bauwerk_Wachturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201100_XE_Bauwerk_Burg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201100_XE_Bauwerk_Burg (xerl:22201100_XE_Bauwerk_Burg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201110_XE_Bauwerk_Schloss",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201110_XE_Bauwerk_Schloss (xerl:22201110_XE_Bauwerk_Schloss)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201120_XE_Bauwerk_Herrenhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201120_XE_Bauwerk_Herrenhaus (xerl:22201120_XE_Bauwerk_Herrenhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201150_XE_Bauwerk_RathausBauwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201150_XE_Bauwerk_RathausBauwerk (xerl:22201150_XE_Bauwerk_RathausBauwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201200_XE_Bauwerk_Markthalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201200_XE_Bauwerk_Markthalle (xerl:22201200_XE_Bauwerk_Markthalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201250_XE_Bauwerk_Foersterei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201250_XE_Bauwerk_Foersterei (xerl:22201250_XE_Bauwerk_Foersterei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22201990_XE_Bauwerk_BauwerkSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Bauwerk",
        "type": "class",
        "text": "22201990_XE_Bauwerk_BauwerkSonstiges (xerl:22201990_XE_Bauwerk_BauwerkSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301000_XE_TechnischesBauwerk_Wassermuehle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301000_XE_TechnischesBauwerk_Wassermuehle (xerl:22301000_XE_TechnischesBauwerk_Wassermuehle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301010_XE_TechnischesBauwerk_Windmuehle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301010_XE_TechnischesBauwerk_Windmuehle (xerl:22301010_XE_TechnischesBauwerk_Windmuehle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301100_XE_TechnischesBauwerk_Turm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301100_XE_TechnischesBauwerk_Turm (xerl:22301100_XE_TechnischesBauwerk_Turm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301110_XE_TechnischesBauwerk_Leuchtturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301110_XE_TechnischesBauwerk_Leuchtturm (xerl:22301110_XE_TechnischesBauwerk_Leuchtturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301120_XE_TechnischesBauwerk_Fernsehturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301120_XE_TechnischesBauwerk_Fernsehturm (xerl:22301120_XE_TechnischesBauwerk_Fernsehturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301130_XE_TechnischesBauwerk_Wasserturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301130_XE_TechnischesBauwerk_Wasserturm (xerl:22301130_XE_TechnischesBauwerk_Wasserturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301140_XE_TechnischesBauwerk_Malakowturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301140_XE_TechnischesBauwerk_Malakowturm (xerl:22301140_XE_TechnischesBauwerk_Malakowturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301150_XE_TechnischesBauwerk_Foerderturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301150_XE_TechnischesBauwerk_Foerderturm (xerl:22301150_XE_TechnischesBauwerk_Foerderturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301200_XE_TechnischesBauwerk_Schiffshebewerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301200_XE_TechnischesBauwerk_Schiffshebewerk (xerl:22301200_XE_TechnischesBauwerk_Schiffshebewerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301210_XE_TechnischesBauwerk_Schleuse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301210_XE_TechnischesBauwerk_Schleuse (xerl:22301210_XE_TechnischesBauwerk_Schleuse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301220_XE_TechnischesBauwerk_TalsperreStaumauer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301220_XE_TechnischesBauwerk_TalsperreStaumauer (xerl:22301220_XE_TechnischesBauwerk_TalsperreStaumauer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301230_XE_TechnischesBauwerk_Wehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301230_XE_TechnischesBauwerk_Wehr (xerl:22301230_XE_TechnischesBauwerk_Wehr)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301250_XE_TechnischesBauwerk_Brunnen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301250_XE_TechnischesBauwerk_Brunnen (xerl:22301250_XE_TechnischesBauwerk_Brunnen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301260_XE_TechnischesBauwerk_Fontaene",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301260_XE_TechnischesBauwerk_Fontaene (xerl:22301260_XE_TechnischesBauwerk_Fontaene)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301300_XE_TechnischesBauwerk_Bruecke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301300_XE_TechnischesBauwerk_Bruecke (xerl:22301300_XE_TechnischesBauwerk_Bruecke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301310_XE_TechnischesBauwerk_Aquaedukt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301310_XE_TechnischesBauwerk_Aquaedukt (xerl:22301310_XE_TechnischesBauwerk_Aquaedukt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301320_XE_TechnischesBauwerk_Viadukt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301320_XE_TechnischesBauwerk_Viadukt (xerl:22301320_XE_TechnischesBauwerk_Viadukt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301400_XE_TechnischesBauwerk_Tunnel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301400_XE_TechnischesBauwerk_Tunnel (xerl:22301400_XE_TechnischesBauwerk_Tunnel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22301990_XE_TechnischesBauwerk_TechnischesBauwerkSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_TechnischesBauwerk",
        "type": "class",
        "text": "22301990_XE_TechnischesBauwerk_TechnischesBauwerkSonstiges (xerl:22301990_XE_TechnischesBauwerk_TechnischesBauwerkSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401000_XE_Landmarke_Aussichtsplattform",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401000_XE_Landmarke_Aussichtsplattform (xerl:22401000_XE_Landmarke_Aussichtsplattform)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401010_XE_Landmarke_Aussichtsturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401010_XE_Landmarke_Aussichtsturm (xerl:22401010_XE_Landmarke_Aussichtsturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401050_XE_Landmarke_Feuerwachturm",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401050_XE_Landmarke_Feuerwachturm (xerl:22401050_XE_Landmarke_Feuerwachturm)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401100_XE_Landmarke_Burghuegel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401100_XE_Landmarke_Burghuegel (xerl:22401100_XE_Landmarke_Burghuegel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401110_XE_Landmarke_BurgRingwall",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401110_XE_Landmarke_BurgRingwall (xerl:22401110_XE_Landmarke_BurgRingwall)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401150_XE_Landmarke_Landwehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401150_XE_Landmarke_Landwehr (xerl:22401150_XE_Landmarke_Landwehr)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401200_XE_Landmarke_Grabmal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401200_XE_Landmarke_Grabmal (xerl:22401200_XE_Landmarke_Grabmal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401210_XE_Landmarke_Grabungsstaette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401210_XE_Landmarke_Grabungsstaette (xerl:22401210_XE_Landmarke_Grabungsstaette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401220_XE_Landmarke_Huegelgrab",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401220_XE_Landmarke_Huegelgrab (xerl:22401220_XE_Landmarke_Huegelgrab)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401230_XE_Landmarke_Steingrab",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401230_XE_Landmarke_Steingrab (xerl:22401230_XE_Landmarke_Steingrab)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401300_XE_Landmarke_Skulptur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401300_XE_Landmarke_Skulptur (xerl:22401300_XE_Landmarke_Skulptur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401350_XE_Landmarke_ArchaeologischeStaetteGebaeudeSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401350_XE_Landmarke_ArchaeologischeStaetteGebaeudeSonstige (xerl:22401350_XE_Landmarke_ArchaeologischeStaetteGebaeudeSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401400_XE_Landmarke_Halde",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401400_XE_Landmarke_Halde (xerl:22401400_XE_Landmarke_Halde)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401500_XE_Landmarke_GrenzMeilenstein",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401500_XE_Landmarke_GrenzMeilenstein (xerl:22401500_XE_Landmarke_GrenzMeilenstein)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22401990_XE_Landmarke_LandmarkeSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Landmarke",
        "type": "class",
        "text": "22401990_XE_Landmarke_LandmarkeSonstige (xerl:22401990_XE_Landmarke_LandmarkeSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22501000_XE_Aussichtspunkt_Aussichtspunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Aussichtspunkt",
        "type": "class",
        "text": "22501000_XE_Aussichtspunkt_Aussichtspunkt (xerl:22501000_XE_Aussichtspunkt_Aussichtspunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601000_XE_Gotteshaus_Kirche",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601000_XE_Gotteshaus_Kirche (xerl:22601000_XE_Gotteshaus_Kirche)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601010_XE_Gotteshaus_Gemeindehaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601010_XE_Gotteshaus_Gemeindehaus (xerl:22601010_XE_Gotteshaus_Gemeindehaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601050_XE_Gotteshaus_Gebetsraum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601050_XE_Gotteshaus_Gebetsraum (xerl:22601050_XE_Gotteshaus_Gebetsraum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601100_XE_Gotteshaus_Kapelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601100_XE_Gotteshaus_Kapelle (xerl:22601100_XE_Gotteshaus_Kapelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601150_XE_Gotteshaus_Kloster",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601150_XE_Gotteshaus_Kloster (xerl:22601150_XE_Gotteshaus_Kloster)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601200_XE_Gotteshaus_Moschee",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601200_XE_Gotteshaus_Moschee (xerl:22601200_XE_Gotteshaus_Moschee)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601210_XE_Gotteshaus_Synagoge",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601210_XE_Gotteshaus_Synagoge (xerl:22601210_XE_Gotteshaus_Synagoge)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601220_XE_Gotteshaus_TempelHinduistisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601220_XE_Gotteshaus_TempelHinduistisch (xerl:22601220_XE_Gotteshaus_TempelHinduistisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601230_XE_Gotteshaus_TempelShintoistisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601230_XE_Gotteshaus_TempelShintoistisch (xerl:22601230_XE_Gotteshaus_TempelShintoistisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601240_XE_Gotteshaus_TempelBuddhistisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601240_XE_Gotteshaus_TempelBuddhistisch (xerl:22601240_XE_Gotteshaus_TempelBuddhistisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22601990_XE_Gotteshaus_GotteshausSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gotteshaus",
        "type": "class",
        "text": "22601990_XE_Gotteshaus_GotteshausSonstiges (xerl:22601990_XE_Gotteshaus_GotteshausSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701000_XE_Religioeses_Friedhof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701000_XE_Religioeses_Friedhof (xerl:22701000_XE_Religioeses_Friedhof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701030_XE_Religioeses_Krematorium",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701030_XE_Religioeses_Krematorium (xerl:22701030_XE_Religioeses_Krematorium)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701050_XE_Religioeses_Kreuzweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701050_XE_Religioeses_Kreuzweg (xerl:22701050_XE_Religioeses_Kreuzweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701060_XE_Religioeses_Wegekreuz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701060_XE_Religioeses_Wegekreuz (xerl:22701060_XE_Religioeses_Wegekreuz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701070_XE_Religioeses_ProzessionsWallfahrtsweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701070_XE_Religioeses_ProzessionsWallfahrtsweg (xerl:22701070_XE_Religioeses_ProzessionsWallfahrtsweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701080_XE_Religioeses_Wallfahrtsstaette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701080_XE_Religioeses_Wallfahrtsstaette (xerl:22701080_XE_Religioeses_Wallfahrtsstaette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701100_XE_Religioeses_GedenkstaetteReligioes",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701100_XE_Religioeses_GedenkstaetteReligioes (xerl:22701100_XE_Religioeses_GedenkstaetteReligioes)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22701990_XE_Religioeses_ReligioesesSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Religioeses",
        "type": "class",
        "text": "22701990_XE_Religioeses_ReligioesesSonstiges (xerl:22701990_XE_Religioeses_ReligioesesSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801010_XE_Denkmal_Denkmal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801010_XE_Denkmal_Denkmal (xerl:22801010_XE_Denkmal_Denkmal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801020_XE_Denkmal_Gedenkstein",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801020_XE_Denkmal_Gedenkstein (xerl:22801020_XE_Denkmal_Gedenkstein)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801030_XE_Denkmal_Gedenktafel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801030_XE_Denkmal_Gedenktafel (xerl:22801030_XE_Denkmal_Gedenktafel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801040_XE_Denkmal_Kriegerehrenmal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801040_XE_Denkmal_Kriegerehrenmal (xerl:22801040_XE_Denkmal_Kriegerehrenmal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801050_XE_Denkmal_Kriegsgraeberstaette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801050_XE_Denkmal_Kriegsgraeberstaette (xerl:22801050_XE_Denkmal_Kriegsgraeberstaette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/22801100_XE_Denkmal_OrtDerErinnerung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Denkmal",
        "type": "class",
        "text": "22801100_XE_Denkmal_OrtDerErinnerung (xerl:22801100_XE_Denkmal_OrtDerErinnerung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101000_XE_NaturLandschaft_Gartenanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101000_XE_NaturLandschaft_Gartenanlage (xerl:31101000_XE_NaturLandschaft_Gartenanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101010_XE_NaturLandschaft_Gartenschaugelaende",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101010_XE_NaturLandschaft_Gartenschaugelaende (xerl:31101010_XE_NaturLandschaft_Gartenschaugelaende)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101020_XE_NaturLandschaft_BotanischerGarten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101020_XE_NaturLandschaft_BotanischerGarten (xerl:31101020_XE_NaturLandschaft_BotanischerGarten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101030_XE_NaturLandschaft_Kleingartenanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101030_XE_NaturLandschaft_Kleingartenanlage (xerl:31101030_XE_NaturLandschaft_Kleingartenanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101040_XE_NaturLandschaft_Arboretum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101040_XE_NaturLandschaft_Arboretum (xerl:31101040_XE_NaturLandschaft_Arboretum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101100_XE_NaturLandschaft_Park",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101100_XE_NaturLandschaft_Park (xerl:31101100_XE_NaturLandschaft_Park)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101110_XE_NaturLandschaft_Nationalpark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101110_XE_NaturLandschaft_Nationalpark (xerl:31101110_XE_NaturLandschaft_Nationalpark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101120_XE_NaturLandschaft_Naturpark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101120_XE_NaturLandschaft_Naturpark (xerl:31101120_XE_NaturLandschaft_Naturpark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101130_XE_NaturLandschaft_Landschaftspark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101130_XE_NaturLandschaft_Landschaftspark (xerl:31101130_XE_NaturLandschaft_Landschaftspark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101140_XE_NaturLandschaft_Schlosspark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101140_XE_NaturLandschaft_Schlosspark (xerl:31101140_XE_NaturLandschaft_Schlosspark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101500_XE_NaturLandschaft_Quelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101500_XE_NaturLandschaft_Quelle (xerl:31101500_XE_NaturLandschaft_Quelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101510_XE_NaturLandschaft_See",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101510_XE_NaturLandschaft_See (xerl:31101510_XE_NaturLandschaft_See)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101520_XE_NaturLandschaft_Wasserfall",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101520_XE_NaturLandschaft_Wasserfall (xerl:31101520_XE_NaturLandschaft_Wasserfall)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101550_XE_NaturLandschaft_Versickerung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101550_XE_NaturLandschaft_Versickerung (xerl:31101550_XE_NaturLandschaft_Versickerung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31101560_XE_NaturLandschaft_ArtesischerBrunnen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31101560_XE_NaturLandschaft_ArtesischerBrunnen (xerl:31101560_XE_NaturLandschaft_ArtesischerBrunnen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102000_XE_NaturLandschaft_Doline",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102000_XE_NaturLandschaft_Doline (xerl:31102000_XE_NaturLandschaft_Doline)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102100_XE_NaturLandschaft_GeologischerAufschluss",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102100_XE_NaturLandschaft_GeologischerAufschluss (xerl:31102100_XE_NaturLandschaft_GeologischerAufschluss)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102190_XE_NaturLandschaft_GeologischesObjektSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102190_XE_NaturLandschaft_GeologischesObjektSonstiges (xerl:31102190_XE_NaturLandschaft_GeologischesObjektSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102200_XE_NaturLandschaft_Hoehle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102200_XE_NaturLandschaft_Hoehle (xerl:31102200_XE_NaturLandschaft_Hoehle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102300_XE_NaturLandschaft_Schlucht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102300_XE_NaturLandschaft_Schlucht (xerl:31102300_XE_NaturLandschaft_Schlucht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102400_XE_NaturLandschaft_Findling",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102400_XE_NaturLandschaft_Findling (xerl:31102400_XE_NaturLandschaft_Findling)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102500_XE_NaturLandschaft_Berg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102500_XE_NaturLandschaft_Berg (xerl:31102500_XE_NaturLandschaft_Berg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102600_XE_NaturLandschaft_Insel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102600_XE_NaturLandschaft_Insel (xerl:31102600_XE_NaturLandschaft_Insel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102700_XE_NaturLandschaft_Wald",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102700_XE_NaturLandschaft_Wald (xerl:31102700_XE_NaturLandschaft_Wald)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102710_XE_NaturLandschaft_Erholungswald",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102710_XE_NaturLandschaft_Erholungswald (xerl:31102710_XE_NaturLandschaft_Erholungswald)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102750_XE_NaturLandschaft_Allee",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102750_XE_NaturLandschaft_Allee (xerl:31102750_XE_NaturLandschaft_Allee)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102760_XE_NaturLandschaft_HervorragenderBaum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102760_XE_NaturLandschaft_HervorragenderBaum (xerl:31102760_XE_NaturLandschaft_HervorragenderBaum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102800_XE_NaturLandschaft_Heide",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102800_XE_NaturLandschaft_Heide (xerl:31102800_XE_NaturLandschaft_Heide)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102810_XE_NaturLandschaft_Streuobstwiese",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102810_XE_NaturLandschaft_Streuobstwiese (xerl:31102810_XE_NaturLandschaft_Streuobstwiese)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31102820_XE_NaturLandschaft_SumpfMoor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31102820_XE_NaturLandschaft_SumpfMoor (xerl:31102820_XE_NaturLandschaft_SumpfMoor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31103000_XE_NaturLandschaft_Naturerlebnis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31103000_XE_NaturLandschaft_Naturerlebnis (xerl:31103000_XE_NaturLandschaft_Naturerlebnis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31103500_XE_NaturLandschaft_Umweltbildungszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31103500_XE_NaturLandschaft_Umweltbildungszentrum (xerl:31103500_XE_NaturLandschaft_Umweltbildungszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31104000_XE_NaturLandschaft_Naturschutzstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31104000_XE_NaturLandschaft_Naturschutzstation (xerl:31104000_XE_NaturLandschaft_Naturschutzstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31104100_XE_NaturLandschaft_Wetterstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31104100_XE_NaturLandschaft_Wetterstation (xerl:31104100_XE_NaturLandschaft_Wetterstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31109900_XE_NaturLandschaft_NaturLandschaftSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_NaturLandschaft",
        "type": "class",
        "text": "31109900_XE_NaturLandschaft_NaturLandschaftSonstiges (xerl:31109900_XE_NaturLandschaft_NaturLandschaftSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201000_XE_Tierwelt_Zoo",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201000_XE_Tierwelt_Zoo (xerl:31201000_XE_Tierwelt_Zoo)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201010_XE_Tierwelt_Streichelzoo",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201010_XE_Tierwelt_Streichelzoo (xerl:31201010_XE_Tierwelt_Streichelzoo)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201050_XE_Tierwelt_TierparkWildgehege",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201050_XE_Tierwelt_TierparkWildgehege (xerl:31201050_XE_Tierwelt_TierparkWildgehege)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201100_XE_Tierwelt_Vogelfreigehege",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201100_XE_Tierwelt_Vogelfreigehege (xerl:31201100_XE_Tierwelt_Vogelfreigehege)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201110_XE_Tierwelt_VogelparkFalknerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201110_XE_Tierwelt_VogelparkFalknerei (xerl:31201110_XE_Tierwelt_VogelparkFalknerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201150_XE_Tierwelt_Wildgatter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201150_XE_Tierwelt_Wildgatter (xerl:31201150_XE_Tierwelt_Wildgatter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201160_XE_Tierwelt_Wildruhezone",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201160_XE_Tierwelt_Wildruhezone (xerl:31201160_XE_Tierwelt_Wildruhezone)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201200_XE_Tierwelt_Aquarium",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201200_XE_Tierwelt_Aquarium (xerl:31201200_XE_Tierwelt_Aquarium)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201250_XE_Tierwelt_Seehundstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201250_XE_Tierwelt_Seehundstation (xerl:31201250_XE_Tierwelt_Seehundstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31201990_XE_Tierwelt_TierweltSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tierwelt",
        "type": "class",
        "text": "31201990_XE_Tierwelt_TierweltSonstiges (xerl:31201990_XE_Tierwelt_TierweltSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301000_XE_Sport_Sportanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301000_XE_Sport_Sportanlage (xerl:31301000_XE_Sport_Sportanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301000_XE_Sport_Sporthalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301000_XE_Sport_Sporthalle (xerl:31301000_XE_Sport_Sporthalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301010_XE_Sport_Sportpark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301010_XE_Sport_Sportpark (xerl:31301010_XE_Sport_Sportpark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301020_XE_Sport_StadionArena",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301020_XE_Sport_StadionArena (xerl:31301020_XE_Sport_StadionArena)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301500_XE_Sport_Fussball",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301500_XE_Sport_Fussball (xerl:31301500_XE_Sport_Fussball)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301510_XE_Sport_Soccerhalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301510_XE_Sport_Soccerhalle (xerl:31301510_XE_Sport_Soccerhalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301550_XE_Sport_AmericanFootball",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301550_XE_Sport_AmericanFootball (xerl:31301550_XE_Sport_AmericanFootball)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301560_XE_Sport_Rugby",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301560_XE_Sport_Rugby (xerl:31301560_XE_Sport_Rugby)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301570_XE_Sport_Baseball",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301570_XE_Sport_Baseball (xerl:31301570_XE_Sport_Baseball)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301600_XE_Sport_Beachvolleyball",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301600_XE_Sport_Beachvolleyball (xerl:31301600_XE_Sport_Beachvolleyball)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301610_XE_Sport_Basketball",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301610_XE_Sport_Basketball (xerl:31301610_XE_Sport_Basketball)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301650_XE_Sport_Tennis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301650_XE_Sport_Tennis (xerl:31301650_XE_Sport_Tennis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301660_XE_Sport_Squash",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301660_XE_Sport_Squash (xerl:31301660_XE_Sport_Squash)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301670_XE_Sport_Badminton",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301670_XE_Sport_Badminton (xerl:31301670_XE_Sport_Badminton)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301700_XE_Sport_Golf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301700_XE_Sport_Golf (xerl:31301700_XE_Sport_Golf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301710_XE_Sport_Minigolf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301710_XE_Sport_Minigolf (xerl:31301710_XE_Sport_Minigolf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301750_XE_Sport_Bowling",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301750_XE_Sport_Bowling (xerl:31301750_XE_Sport_Bowling)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301760_XE_Sport_Kegeln",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301760_XE_Sport_Kegeln (xerl:31301760_XE_Sport_Kegeln)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31301770_XE_Sport_Bouleplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31301770_XE_Sport_Bouleplatz (xerl:31301770_XE_Sport_Bouleplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302000_XE_Sport_Angelausruestungsverleih",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302000_XE_Sport_Angelausruestungsverleih (xerl:31302000_XE_Sport_Angelausruestungsverleih)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302010_XE_Sport_Angeln",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302010_XE_Sport_Angeln (xerl:31302010_XE_Sport_Angeln)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302050_XE_Sport_Bootsvermietung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302050_XE_Sport_Bootsvermietung (xerl:31302050_XE_Sport_Bootsvermietung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302060_XE_Sport_Motorbootbetrieb",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302060_XE_Sport_Motorbootbetrieb (xerl:31302060_XE_Sport_Motorbootbetrieb)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302070_XE_Sport_Segeln",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302070_XE_Sport_Segeln (xerl:31302070_XE_Sport_Segeln)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302080_XE_Sport_KanuKajak",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302080_XE_Sport_KanuKajak (xerl:31302080_XE_Sport_KanuKajak)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302090_XE_Sport_Rudern",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302090_XE_Sport_Rudern (xerl:31302090_XE_Sport_Rudern)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302100_XE_Sport_RaftingCanyoning",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302100_XE_Sport_RaftingCanyoning (xerl:31302100_XE_Sport_RaftingCanyoning)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302150_XE_Sport_Tauchausruestungsverleih",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302150_XE_Sport_Tauchausruestungsverleih (xerl:31302150_XE_Sport_Tauchausruestungsverleih)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302160_XE_Sport_Tauchen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302160_XE_Sport_Tauchen (xerl:31302160_XE_Sport_Tauchen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302200_XE_Sport_Wasserski",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302200_XE_Sport_Wasserski (xerl:31302200_XE_Sport_Wasserski)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302210_XE_Sport_Windsurfing",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302210_XE_Sport_Windsurfing (xerl:31302210_XE_Sport_Windsurfing)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302500_XE_Sport_Bobbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302500_XE_Sport_Bobbahn (xerl:31302500_XE_Sport_Bobbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302510_XE_Sport_Eisbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302510_XE_Sport_Eisbahn (xerl:31302510_XE_Sport_Eisbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302520_XE_Sport_Eissporthalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302520_XE_Sport_Eissporthalle (xerl:31302520_XE_Sport_Eissporthalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302530_XE_Sport_Rodelbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302530_XE_Sport_Rodelbahn (xerl:31302530_XE_Sport_Rodelbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302540_XE_Sport_Skisport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302540_XE_Sport_Skisport (xerl:31302540_XE_Sport_Skisport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302550_XE_Sport_Skiverleih",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302550_XE_Sport_Skiverleih (xerl:31302550_XE_Sport_Skiverleih)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302560_XE_Sport_Snowboarding",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302560_XE_Sport_Snowboarding (xerl:31302560_XE_Sport_Snowboarding)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302570_XE_Sport_Sommerskisport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302570_XE_Sport_Sommerskisport (xerl:31302570_XE_Sport_Sommerskisport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31302580_XE_Sport_Sprungschanze",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31302580_XE_Sport_Sprungschanze (xerl:31302580_XE_Sport_Sprungschanze)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303000_XE_Sport_Hunderennbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303000_XE_Sport_Hunderennbahn (xerl:31303000_XE_Sport_Hunderennbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303050_XE_Sport_Pferderennbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303050_XE_Sport_Pferderennbahn (xerl:31303050_XE_Sport_Pferderennbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303060_XE_Sport_Trabrennbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303060_XE_Sport_Trabrennbahn (xerl:31303060_XE_Sport_Trabrennbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303070_XE_Sport_Reitanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303070_XE_Sport_Reitanlage (xerl:31303070_XE_Sport_Reitanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303080_XE_Sport_Reiterhof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303080_XE_Sport_Reiterhof (xerl:31303080_XE_Sport_Reiterhof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303090_XE_Sport_Reitstadion",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303090_XE_Sport_Reitstadion (xerl:31303090_XE_Sport_Reitstadion)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303100_XE_Sport_Pferdeverleih",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303100_XE_Sport_Pferdeverleih (xerl:31303100_XE_Sport_Pferdeverleih)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303110_XE_Sport_KutschPferdeschlittenfahrt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303110_XE_Sport_KutschPferdeschlittenfahrt (xerl:31303110_XE_Sport_KutschPferdeschlittenfahrt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303500_XE_Sport_Downhill",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303500_XE_Sport_Downhill (xerl:31303500_XE_Sport_Downhill)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303510_XE_Sport_MountainbikeArena",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303510_XE_Sport_MountainbikeArena (xerl:31303510_XE_Sport_MountainbikeArena)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31303520_XE_Sport_Radrennbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31303520_XE_Sport_Radrennbahn (xerl:31303520_XE_Sport_Radrennbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304000_XE_Sport_Kartbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304000_XE_Sport_Kartbahn (xerl:31304000_XE_Sport_Kartbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304010_XE_Sport_Motocross",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304010_XE_Sport_Motocross (xerl:31304010_XE_Sport_Motocross)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304020_XE_Sport_Rennstrecke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304020_XE_Sport_Rennstrecke (xerl:31304020_XE_Sport_Rennstrecke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304500_XE_Sport_Flugsport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304500_XE_Sport_Flugsport (xerl:31304500_XE_Sport_Flugsport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304510_XE_Sport_Modellflug",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304510_XE_Sport_Modellflug (xerl:31304510_XE_Sport_Modellflug)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304550_XE_Sport_DrachenflugParagliding",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304550_XE_Sport_DrachenflugParagliding (xerl:31304550_XE_Sport_DrachenflugParagliding)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31304560_XE_Sport_BallonfahrtZeppelin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31304560_XE_Sport_BallonfahrtZeppelin (xerl:31304560_XE_Sport_BallonfahrtZeppelin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305000_XE_Sport_Kletteranlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305000_XE_Sport_Kletteranlage (xerl:31305000_XE_Sport_Kletteranlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305010_XE_Sport_Kletterfelsen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305010_XE_Sport_Kletterfelsen (xerl:31305010_XE_Sport_Kletterfelsen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305020_XE_Sport_SeilgartenKlettergarten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305020_XE_Sport_SeilgartenKlettergarten (xerl:31305020_XE_Sport_SeilgartenKlettergarten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305100_XE_Sport_NordicWalkingStartpunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305100_XE_Sport_NordicWalkingStartpunkt (xerl:31305100_XE_Sport_NordicWalkingStartpunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305200_XE_Sport_Tanzschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305200_XE_Sport_Tanzschule (xerl:31305200_XE_Sport_Tanzschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305400_XE_Sport_Kampfsportschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305400_XE_Sport_Kampfsportschule (xerl:31305400_XE_Sport_Kampfsportschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305500_XE_Sport_Schiessen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305500_XE_Sport_Schiessen (xerl:31305500_XE_Sport_Schiessen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31305500_XE_Sport_Trampolin",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31305500_XE_Sport_Trampolin (xerl:31305500_XE_Sport_Trampolin)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31306000_XE_Sport_Rollschuhbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31306000_XE_Sport_Rollschuhbahn (xerl:31306000_XE_Sport_Rollschuhbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31306010_XE_Sport_Skateanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31306010_XE_Sport_Skateanlage (xerl:31306010_XE_Sport_Skateanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31306020_XE_Sport_Sommerrodelbahn",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31306020_XE_Sport_Sommerrodelbahn (xerl:31306020_XE_Sport_Sommerrodelbahn)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31309900_XE_Sport_SportSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sport",
        "type": "class",
        "text": "31309900_XE_Sport_SportSonstiges (xerl:31309900_XE_Sport_SportSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401000_XE_Baden_Strand",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401000_XE_Baden_Strand (xerl:31401000_XE_Baden_Strand)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401010_XE_Baden_KurstrandMitStrandkorbverleih",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401010_XE_Baden_KurstrandMitStrandkorbverleih (xerl:31401010_XE_Baden_KurstrandMitStrandkorbverleih)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401020_XE_Baden_Hundestrand",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401020_XE_Baden_Hundestrand (xerl:31401020_XE_Baden_Hundestrand)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401050_XE_Baden_BadestelleMeerSee",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401050_XE_Baden_BadestelleMeerSee (xerl:31401050_XE_Baden_BadestelleMeerSee)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401060_XE_Baden_Badesee",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401060_XE_Baden_Badesee (xerl:31401060_XE_Baden_Badesee)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401070_XE_Baden_StrandbadBadeplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401070_XE_Baden_StrandbadBadeplatz (xerl:31401070_XE_Baden_StrandbadBadeplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401100_XE_Baden_Hallenbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401100_XE_Baden_Hallenbad (xerl:31401100_XE_Baden_Hallenbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401110_XE_Baden_Freibad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401110_XE_Baden_Freibad (xerl:31401110_XE_Baden_Freibad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401120_XE_Baden_HallenUndFreibad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401120_XE_Baden_HallenUndFreibad (xerl:31401120_XE_Baden_HallenUndFreibad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401130_XE_Baden_Lehrschwimmbecken",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401130_XE_Baden_Lehrschwimmbecken (xerl:31401130_XE_Baden_Lehrschwimmbecken)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401150_XE_Baden_Erlebnisbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401150_XE_Baden_Erlebnisbad (xerl:31401150_XE_Baden_Erlebnisbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401200_XE_Baden_Thermalbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401200_XE_Baden_Thermalbad (xerl:31401200_XE_Baden_Thermalbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401210_XE_Baden_Heilbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401210_XE_Baden_Heilbad (xerl:31401210_XE_Baden_Heilbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401220_XE_Baden_Mineralbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401220_XE_Baden_Mineralbad (xerl:31401220_XE_Baden_Mineralbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401250_XE_Baden_SaunaDampfbad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401250_XE_Baden_SaunaDampfbad (xerl:31401250_XE_Baden_SaunaDampfbad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401300_XE_Baden_FKKGelaende",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401300_XE_Baden_FKKGelaende (xerl:31401300_XE_Baden_FKKGelaende)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401310_XE_Baden_FKKBaden",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401310_XE_Baden_FKKBaden (xerl:31401310_XE_Baden_FKKBaden)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31401400_XE_Baden_Wassertreten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Baden",
        "type": "class",
        "text": "31401400_XE_Baden_Wassertreten (xerl:31401400_XE_Baden_Wassertreten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501000_XE_Erholung_ErlebnisFreizeitPark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501000_XE_Erholung_ErlebnisFreizeitPark (xerl:31501000_XE_Erholung_ErlebnisFreizeitPark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501050_XE_Erholung_Freizeitanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501050_XE_Erholung_Freizeitanlage (xerl:31501050_XE_Erholung_Freizeitanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501100_XE_Erholung_Parkanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501100_XE_Erholung_Parkanlage (xerl:31501100_XE_Erholung_Parkanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501150_XE_Erholung_Barfusspark",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501150_XE_Erholung_Barfusspark (xerl:31501150_XE_Erholung_Barfusspark)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501200_XE_Erholung_Festwiese",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501200_XE_Erholung_Festwiese (xerl:31501200_XE_Erholung_Festwiese)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501250_XE_Erholung_SpielUndLiegewiese",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501250_XE_Erholung_SpielUndLiegewiese (xerl:31501250_XE_Erholung_SpielUndLiegewiese)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501300_XE_Erholung_Spielplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501300_XE_Erholung_Spielplatz (xerl:31501300_XE_Erholung_Spielplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501310_XE_Erholung_Abenteuerspielplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501310_XE_Erholung_Abenteuerspielplatz (xerl:31501310_XE_Erholung_Abenteuerspielplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501320_XE_Erholung_Wasserspielplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501320_XE_Erholung_Wasserspielplatz (xerl:31501320_XE_Erholung_Wasserspielplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501330_XE_Erholung_Indoorspielplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501330_XE_Erholung_Indoorspielplatz (xerl:31501330_XE_Erholung_Indoorspielplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501350_XE_Erholung_Bolzplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501350_XE_Erholung_Bolzplatz (xerl:31501350_XE_Erholung_Bolzplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501400_XE_Erholung_Labyrinth",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501400_XE_Erholung_Labyrinth (xerl:31501400_XE_Erholung_Labyrinth)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31501500_XE_Erholung_Erlebnisbauernhof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Erholung",
        "type": "class",
        "text": "31501500_XE_Erholung_Erlebnisbauernhof (xerl:31501500_XE_Erholung_Erlebnisbauernhof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31601000_XE_Wegweisung_Wanderwegweiser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung",
        "type": "class",
        "text": "31601000_XE_Wegweisung_Wanderwegweiser (xerl:31601000_XE_Wegweisung_Wanderwegweiser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31601050_XE_Wegweisung_Radwegweiser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung",
        "type": "class",
        "text": "31601050_XE_Wegweisung_Radwegweiser (xerl:31601050_XE_Wegweisung_Radwegweiser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31601100_XE_Wegweisung_Reitwegweiser",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung",
        "type": "class",
        "text": "31601100_XE_Wegweisung_Reitwegweiser (xerl:31601100_XE_Wegweisung_Reitwegweiser)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31601990_XE_Wegweisung_WegweisungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wegweisung",
        "type": "class",
        "text": "31601990_XE_Wegweisung_WegweisungSonstige (xerl:31601990_XE_Wegweisung_WegweisungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701000_XE_Moeblierung_Ruhebank",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701000_XE_Moeblierung_Ruhebank (xerl:31701000_XE_Moeblierung_Ruhebank)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701010_XE_Moeblierung_BankTischKombination",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701010_XE_Moeblierung_BankTischKombination (xerl:31701010_XE_Moeblierung_BankTischKombination)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701100_XE_Moeblierung_Steighilfe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701100_XE_Moeblierung_Steighilfe (xerl:31701100_XE_Moeblierung_Steighilfe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701110_XE_Moeblierung_Stahlseil",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701110_XE_Moeblierung_Stahlseil (xerl:31701110_XE_Moeblierung_Stahlseil)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701120_XE_Moeblierung_Eisengriffe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701120_XE_Moeblierung_Eisengriffe (xerl:31701120_XE_Moeblierung_Eisengriffe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701130_XE_Moeblierung_Leiter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701130_XE_Moeblierung_Leiter (xerl:31701130_XE_Moeblierung_Leiter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701140_XE_Moeblierung_Gelaender",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701140_XE_Moeblierung_Gelaender (xerl:31701140_XE_Moeblierung_Gelaender)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701150_XE_Moeblierung_TreppeStufen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701150_XE_Moeblierung_TreppeStufen (xerl:31701150_XE_Moeblierung_TreppeStufen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701160_XE_Moeblierung_Steg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701160_XE_Moeblierung_Steg (xerl:31701160_XE_Moeblierung_Steg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701200_XE_Moeblierung_Pferdetraenke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701200_XE_Moeblierung_Pferdetraenke (xerl:31701200_XE_Moeblierung_Pferdetraenke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701210_XE_Moeblierung_Anbindebalken",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701210_XE_Moeblierung_Anbindebalken (xerl:31701210_XE_Moeblierung_Anbindebalken)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701300_XE_Moeblierung_Werbeflaeche",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701300_XE_Moeblierung_Werbeflaeche (xerl:31701300_XE_Moeblierung_Werbeflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701310_XE_Moeblierung_Litfasssaeule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701310_XE_Moeblierung_Litfasssaeule (xerl:31701310_XE_Moeblierung_Litfasssaeule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/31701990_XE_Moeblierung_MoeblierungSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Moeblierung",
        "type": "class",
        "text": "31701990_XE_Moeblierung_MoeblierungSonstiges (xerl:31701990_XE_Moeblierung_MoeblierungSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101000_XE_Wanderweg_Hauptwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101000_XE_Wanderweg_Hauptwanderweg (xerl:41101000_XE_Wanderweg_Hauptwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101050_XE_Wanderweg_Fernwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101050_XE_Wanderweg_Fernwanderweg (xerl:41101050_XE_Wanderweg_Fernwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101100_XE_Wanderweg_Rundwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101100_XE_Wanderweg_Rundwanderweg (xerl:41101100_XE_Wanderweg_Rundwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101150_XE_Wanderweg_Themenwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101150_XE_Wanderweg_Themenwanderweg (xerl:41101150_XE_Wanderweg_Themenwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101200_XE_Wanderweg_WanderstreckeVeranstaltungsbezogen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101200_XE_Wanderweg_WanderstreckeVeranstaltungsbezogen (xerl:41101200_XE_Wanderweg_WanderstreckeVeranstaltungsbezogen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101250_XE_Wanderweg_Verbindungswanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101250_XE_Wanderweg_Verbindungswanderweg (xerl:41101250_XE_Wanderweg_Verbindungswanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101300_XE_Wanderweg_WanderwegOertlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101300_XE_Wanderweg_WanderwegOertlich (xerl:41101300_XE_Wanderweg_WanderwegOertlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101310_XE_Wanderweg_WanderwegRegional",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101310_XE_Wanderweg_WanderwegRegional (xerl:41101310_XE_Wanderweg_WanderwegRegional)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101400_XE_Wanderweg_Spazierweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101400_XE_Wanderweg_Spazierweg (xerl:41101400_XE_Wanderweg_Spazierweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101500_XE_Wanderweg_SichererSchulweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101500_XE_Wanderweg_SichererSchulweg (xerl:41101500_XE_Wanderweg_SichererSchulweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101600_XE_Wanderweg_WandervorschlagUnmarkiert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101600_XE_Wanderweg_WandervorschlagUnmarkiert (xerl:41101600_XE_Wanderweg_WandervorschlagUnmarkiert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41101990_XE_Wanderweg_WanderwegSonstiger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wanderweg",
        "type": "class",
        "text": "41101990_XE_Wanderweg_WanderwegSonstiger (xerl:41101990_XE_Wanderweg_WanderwegSonstiger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201000_XE_Radwanderweg_Radverkehrsnetz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201000_XE_Radwanderweg_Radverkehrsnetz (xerl:41201000_XE_Radwanderweg_Radverkehrsnetz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201050_XE_Radwanderweg_RadverkehrsnetzKommunal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201050_XE_Radwanderweg_RadverkehrsnetzKommunal (xerl:41201050_XE_Radwanderweg_RadverkehrsnetzKommunal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201100_XE_Radwanderweg_RadverkehrsverbindungUnmarkiert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201100_XE_Radwanderweg_RadverkehrsverbindungUnmarkiert (xerl:41201100_XE_Radwanderweg_RadverkehrsverbindungUnmarkiert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201200_XE_Radwanderweg_RadwanderwegKommunal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201200_XE_Radwanderweg_RadwanderwegKommunal (xerl:41201200_XE_Radwanderweg_RadwanderwegKommunal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201250_XE_Radwanderweg_RadwanderwegRegional",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201250_XE_Radwanderweg_RadwanderwegRegional (xerl:41201250_XE_Radwanderweg_RadwanderwegRegional)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201300_XE_Radwanderweg_RadwanderwegUeberregional",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201300_XE_Radwanderweg_RadwanderwegUeberregional (xerl:41201300_XE_Radwanderweg_RadwanderwegUeberregional)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201350_XE_Radwanderweg_Verbindungsradwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201350_XE_Radwanderweg_Verbindungsradwanderweg (xerl:41201350_XE_Radwanderweg_Verbindungsradwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201400_XE_Radwanderweg_RadwandervorschlagUnmarkiert",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201400_XE_Radwanderweg_RadwandervorschlagUnmarkiert (xerl:41201400_XE_Radwanderweg_RadwandervorschlagUnmarkiert)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201500_XE_Radwanderweg_RadwegFern",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201500_XE_Radwanderweg_RadwegFern (xerl:41201500_XE_Radwanderweg_RadwegFern)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201600_XE_Radwanderweg_RadstreckeVeranstaltungsbezogen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201600_XE_Radwanderweg_RadstreckeVeranstaltungsbezogen (xerl:41201600_XE_Radwanderweg_RadstreckeVeranstaltungsbezogen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41201990_XE_Radwanderweg_RadwanderwegSonstiger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radwanderweg",
        "type": "class",
        "text": "41201990_XE_Radwanderweg_RadwanderwegSonstiger (xerl:41201990_XE_Radwanderweg_RadwanderwegSonstiger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301000_XE_Lehrpfad_Naturlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301000_XE_Lehrpfad_Naturlehrpfad (xerl:41301000_XE_Lehrpfad_Naturlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301050_XE_Lehrpfad_Wasserlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301050_XE_Lehrpfad_Wasserlehrpfad (xerl:41301050_XE_Lehrpfad_Wasserlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301100_XE_Lehrpfad_Waldlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301100_XE_Lehrpfad_Waldlehrpfad (xerl:41301100_XE_Lehrpfad_Waldlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301150_XE_Lehrpfad_Baumwipfelpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301150_XE_Lehrpfad_Baumwipfelpfad (xerl:41301150_XE_Lehrpfad_Baumwipfelpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301200_XE_Lehrpfad_Weinlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301200_XE_Lehrpfad_Weinlehrpfad (xerl:41301200_XE_Lehrpfad_Weinlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301300_XE_Lehrpfad_Obstlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301300_XE_Lehrpfad_Obstlehrpfad (xerl:41301300_XE_Lehrpfad_Obstlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301400_XE_Lehrpfad_GeologischerLehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301400_XE_Lehrpfad_GeologischerLehrpfad (xerl:41301400_XE_Lehrpfad_GeologischerLehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301500_XE_Lehrpfad_ArchaeologischerLehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301500_XE_Lehrpfad_ArchaeologischerLehrpfad (xerl:41301500_XE_Lehrpfad_ArchaeologischerLehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301600_XE_Lehrpfad_GeschichtlicherLehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301600_XE_Lehrpfad_GeschichtlicherLehrpfad (xerl:41301600_XE_Lehrpfad_GeschichtlicherLehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301700_XE_Lehrpfad_Kunstlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301700_XE_Lehrpfad_Kunstlehrpfad (xerl:41301700_XE_Lehrpfad_Kunstlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301800_XE_Lehrpfad_Vogellehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301800_XE_Lehrpfad_Vogellehrpfad (xerl:41301800_XE_Lehrpfad_Vogellehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301900_XE_Lehrpfad_Blindenlehrpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301900_XE_Lehrpfad_Blindenlehrpfad (xerl:41301900_XE_Lehrpfad_Blindenlehrpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41301990_XE_Lehrpfad_LehrpfadSonstiger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "type": "class",
        "text": "41301990_XE_Lehrpfad_LehrpfadSonstiger (xerl:41301990_XE_Lehrpfad_LehrpfadSonstiger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41401000_XE_Reitweg_Reitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Reitweg",
        "type": "class",
        "text": "41401000_XE_Reitweg_Reitweg (xerl:41401000_XE_Reitweg_Reitweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41401050_XE_Reitweg_Hofroute",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Reitweg",
        "type": "class",
        "text": "41401050_XE_Reitweg_Hofroute (xerl:41401050_XE_Reitweg_Hofroute)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41401100_XE_Reitweg_Verbindungsreitweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Reitweg",
        "type": "class",
        "text": "41401100_XE_Reitweg_Verbindungsreitweg (xerl:41401100_XE_Reitweg_Verbindungsreitweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41401200_XE_Reitweg_Wanderreitroute",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Reitweg",
        "type": "class",
        "text": "41401200_XE_Reitweg_Wanderreitroute (xerl:41401200_XE_Reitweg_Wanderreitroute)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501000_XE_SonstigerFreizeitweg_Mountainbiking",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501000_XE_SonstigerFreizeitweg_Mountainbiking (xerl:41501000_XE_SonstigerFreizeitweg_Mountainbiking)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501100_XE_SonstigerFreizeitweg_SportTrimmpfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501100_XE_SonstigerFreizeitweg_SportTrimmpfad (xerl:41501100_XE_SonstigerFreizeitweg_SportTrimmpfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501200_XE_SonstigerFreizeitweg_InlineSkating",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501200_XE_SonstigerFreizeitweg_InlineSkating (xerl:41501200_XE_SonstigerFreizeitweg_InlineSkating)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501300_XE_SonstigerFreizeitweg_NordicWalking",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501300_XE_SonstigerFreizeitweg_NordicWalking (xerl:41501300_XE_SonstigerFreizeitweg_NordicWalking)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501400_XE_SonstigerFreizeitweg_Klettersteig",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501400_XE_SonstigerFreizeitweg_Klettersteig (xerl:41501400_XE_SonstigerFreizeitweg_Klettersteig)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501500_XE_SonstigerFreizeitweg_Loipe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501500_XE_SonstigerFreizeitweg_Loipe (xerl:41501500_XE_SonstigerFreizeitweg_Loipe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501510_XE_SonstigerFreizeitweg_Skipiste",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501510_XE_SonstigerFreizeitweg_Skipiste (xerl:41501510_XE_SonstigerFreizeitweg_Skipiste)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501520_XE_SonstigerFreizeitweg_Schneeschuhwandern",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501520_XE_SonstigerFreizeitweg_Schneeschuhwandern (xerl:41501520_XE_SonstigerFreizeitweg_Schneeschuhwandern)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501530_XE_SonstigerFreizeitweg_Winterwanderweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501530_XE_SonstigerFreizeitweg_Winterwanderweg (xerl:41501530_XE_SonstigerFreizeitweg_Winterwanderweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501600_XE_SonstigerFreizeitweg_Erlebnispfad",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501600_XE_SonstigerFreizeitweg_Erlebnispfad (xerl:41501600_XE_SonstigerFreizeitweg_Erlebnispfad)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501650_XE_SonstigerFreizeitweg_Stadtrundgang",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501650_XE_SonstigerFreizeitweg_Stadtrundgang (xerl:41501650_XE_SonstigerFreizeitweg_Stadtrundgang)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/41501700_XE_SonstigerFreizeitweg_AutorouteTouristisch",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SonstigerFreizeitweg",
        "type": "class",
        "text": "41501700_XE_SonstigerFreizeitweg_AutorouteTouristisch (xerl:41501700_XE_SonstigerFreizeitweg_AutorouteTouristisch)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/42301000_XE_Traegerabschnitt_TraegerabschnittBaulicheUnterhaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Traegerabschnitt",
        "type": "class",
        "text": "42301000_XE_Traegerabschnitt_TraegerabschnittBaulicheUnterhaltung (xerl:42301000_XE_Traegerabschnitt_TraegerabschnittBaulicheUnterhaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/42301100_XE_Traegerabschnitt_TraegerabschnittBeschilderung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Traegerabschnitt",
        "type": "class",
        "text": "42301100_XE_Traegerabschnitt_TraegerabschnittBeschilderung (xerl:42301100_XE_Traegerabschnitt_TraegerabschnittBeschilderung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/42301200_XE_Traegerabschnitt_TraegerabschnittMoeblierung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Traegerabschnitt",
        "type": "class",
        "text": "42301200_XE_Traegerabschnitt_TraegerabschnittMoeblierung (xerl:42301200_XE_Traegerabschnitt_TraegerabschnittMoeblierung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101000_XE_Veranstaltung_FamilienVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101000_XE_Veranstaltung_FamilienVeranstaltung (xerl:51101000_XE_Veranstaltung_FamilienVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101050_XE_Veranstaltung_FreizeitVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101050_XE_Veranstaltung_FreizeitVeranstaltung (xerl:51101050_XE_Veranstaltung_FreizeitVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101100_XE_Veranstaltung_GesundheitVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101100_XE_Veranstaltung_GesundheitVeranstaltung (xerl:51101100_XE_Veranstaltung_GesundheitVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101150_XE_Veranstaltung_KunstKulturVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101150_XE_Veranstaltung_KunstKulturVeranstaltung (xerl:51101150_XE_Veranstaltung_KunstKulturVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101200_XE_Veranstaltung_Musikveranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101200_XE_Veranstaltung_Musikveranstaltung (xerl:51101200_XE_Veranstaltung_Musikveranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101250_XE_Veranstaltung_NaturLandschaftVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101250_XE_Veranstaltung_NaturLandschaftVeranstaltung (xerl:51101250_XE_Veranstaltung_NaturLandschaftVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101300_XE_Veranstaltung_PolitikVerwaltungVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101300_XE_Veranstaltung_PolitikVerwaltungVeranstaltung (xerl:51101300_XE_Veranstaltung_PolitikVerwaltungVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101350_XE_Veranstaltung_ReligioeseVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101350_XE_Veranstaltung_ReligioeseVeranstaltung (xerl:51101350_XE_Veranstaltung_ReligioeseVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51101400_XE_Veranstaltung_Sportveranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51101400_XE_Veranstaltung_Sportveranstaltung (xerl:51101400_XE_Veranstaltung_Sportveranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102000_XE_Veranstaltung_Wochenmarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102000_XE_Veranstaltung_Wochenmarkt (xerl:51102000_XE_Veranstaltung_Wochenmarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102010_XE_Veranstaltung_MarktMesse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102010_XE_Veranstaltung_MarktMesse (xerl:51102010_XE_Veranstaltung_MarktMesse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102250_XE_Veranstaltung_VortragFuehrung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102250_XE_Veranstaltung_VortragFuehrung (xerl:51102250_XE_Veranstaltung_VortragFuehrung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102290_XE_Veranstaltung_Stadtfuehrung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102290_XE_Veranstaltung_Stadtfuehrung (xerl:51102290_XE_Veranstaltung_Stadtfuehrung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102400_XE_Veranstaltung_ProbeUebung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102400_XE_Veranstaltung_ProbeUebung (xerl:51102400_XE_Veranstaltung_ProbeUebung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102500_XE_Veranstaltung_FestBrauchtum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102500_XE_Veranstaltung_FestBrauchtum (xerl:51102500_XE_Veranstaltung_FestBrauchtum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102600_XE_Veranstaltung_GastronomischeVeranstaltung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102600_XE_Veranstaltung_GastronomischeVeranstaltung (xerl:51102600_XE_Veranstaltung_GastronomischeVeranstaltung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51102700_XE_Veranstaltung_DiscoParty",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51102700_XE_Veranstaltung_DiscoParty (xerl:51102700_XE_Veranstaltung_DiscoParty)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51109900_XE_Veranstaltung_VeranstaltungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "type": "class",
        "text": "51109900_XE_Veranstaltung_VeranstaltungSonstige (xerl:51109900_XE_Veranstaltung_VeranstaltungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201000_XE_Veranstaltungsort_Veranstaltungshalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201000_XE_Veranstaltungsort_Veranstaltungshalle (xerl:51201000_XE_Veranstaltungsort_Veranstaltungshalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201100_XE_Veranstaltungsort_Kongresszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201100_XE_Veranstaltungsort_Kongresszentrum (xerl:51201100_XE_Veranstaltungsort_Kongresszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201200_XE_Veranstaltungsort_Tagungshaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201200_XE_Veranstaltungsort_Tagungshaus (xerl:51201200_XE_Veranstaltungsort_Tagungshaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201300_XE_Veranstaltungsort_Festsaal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201300_XE_Veranstaltungsort_Festsaal (xerl:51201300_XE_Veranstaltungsort_Festsaal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201350_XE_Veranstaltungsort_Festplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201350_XE_Veranstaltungsort_Festplatz (xerl:51201350_XE_Veranstaltungsort_Festplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201400_XE_Veranstaltungsort_Wahllokal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201400_XE_Veranstaltungsort_Wahllokal (xerl:51201400_XE_Veranstaltungsort_Wahllokal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/51201450_XE_Veranstaltungsort_Trauzimmer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltungsort",
        "type": "class",
        "text": "51201450_XE_Veranstaltungsort_Trauzimmer (xerl:51201450_XE_Veranstaltungsort_Trauzimmer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101000_XE_SchuleAllgemein_Grundschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101000_XE_SchuleAllgemein_Grundschule (xerl:61101000_XE_SchuleAllgemein_Grundschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101050_XE_SchuleAllgemein_Hauptschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101050_XE_SchuleAllgemein_Hauptschule (xerl:61101050_XE_SchuleAllgemein_Hauptschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101100_XE_SchuleAllgemein_HauptRealschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101100_XE_SchuleAllgemein_HauptRealschule (xerl:61101100_XE_SchuleAllgemein_HauptRealschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101150_XE_SchuleAllgemein_Realschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101150_XE_SchuleAllgemein_Realschule (xerl:61101150_XE_SchuleAllgemein_Realschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101160_XE_SchuleAllgemein_Sekundarschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101160_XE_SchuleAllgemein_Sekundarschule (xerl:61101160_XE_SchuleAllgemein_Sekundarschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101200_XE_SchuleAllgemein_Gymnasium",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101200_XE_SchuleAllgemein_Gymnasium (xerl:61101200_XE_SchuleAllgemein_Gymnasium)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101250_XE_SchuleAllgemein_Gesamtschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101250_XE_SchuleAllgemein_Gesamtschule (xerl:61101250_XE_SchuleAllgemein_Gesamtschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101300_XE_SchuleAllgemein_Foerderschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101300_XE_SchuleAllgemein_Foerderschule (xerl:61101300_XE_SchuleAllgemein_Foerderschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61101990_XE_SchuleAllgemein_SchuleAllgemeinSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleAllgemein",
        "type": "class",
        "text": "61101990_XE_SchuleAllgemein_SchuleAllgemeinSonstige (xerl:61101990_XE_SchuleAllgemein_SchuleAllgemeinSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61201000_XE_Weiterbildung_Berufsschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "type": "class",
        "text": "61201000_XE_Weiterbildung_Berufsschule (xerl:61201000_XE_Weiterbildung_Berufsschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61201100_XE_Weiterbildung_Bildungszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "type": "class",
        "text": "61201100_XE_Weiterbildung_Bildungszentrum (xerl:61201100_XE_Weiterbildung_Bildungszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61201200_XE_Weiterbildung_Fachschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "type": "class",
        "text": "61201200_XE_Weiterbildung_Fachschule (xerl:61201200_XE_Weiterbildung_Fachschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61201300_XE_Weiterbildung_Volkshochschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "type": "class",
        "text": "61201300_XE_Weiterbildung_Volkshochschule (xerl:61201300_XE_Weiterbildung_Volkshochschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61201400_XE_Weiterbildung_Weiterbildungseinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Weiterbildung",
        "type": "class",
        "text": "61201400_XE_Weiterbildung_Weiterbildungseinrichtung (xerl:61201400_XE_Weiterbildung_Weiterbildungseinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61301000_XE_Wissenschaft_Hochschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wissenschaft",
        "type": "class",
        "text": "61301000_XE_Wissenschaft_Hochschule (xerl:61301000_XE_Wissenschaft_Hochschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61301100_XE_Wissenschaft_Wissenschaftseinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wissenschaft",
        "type": "class",
        "text": "61301100_XE_Wissenschaft_Wissenschaftseinrichtung (xerl:61301100_XE_Wissenschaft_Wissenschaftseinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401000_XE_SchuleSpezial_Kunstschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401000_XE_SchuleSpezial_Kunstschule (xerl:61401000_XE_SchuleSpezial_Kunstschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401050_XE_SchuleSpezial_Musikschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401050_XE_SchuleSpezial_Musikschule (xerl:61401050_XE_SchuleSpezial_Musikschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401100_XE_SchuleSpezial_Naturschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401100_XE_SchuleSpezial_Naturschule (xerl:61401100_XE_SchuleSpezial_Naturschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401200_XE_SchuleSpezial_Religionsschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401200_XE_SchuleSpezial_Religionsschule (xerl:61401200_XE_SchuleSpezial_Religionsschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401300_XE_SchuleSpezial_Sprachschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401300_XE_SchuleSpezial_Sprachschule (xerl:61401300_XE_SchuleSpezial_Sprachschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401400_XE_SchuleSpezial_Verkehrsschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401400_XE_SchuleSpezial_Verkehrsschule (xerl:61401400_XE_SchuleSpezial_Verkehrsschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61401990_XE_SchuleSpezial_SchuleSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SchuleSpezial",
        "type": "class",
        "text": "61401990_XE_SchuleSpezial_SchuleSonstiges (xerl:61401990_XE_SchuleSpezial_SchuleSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61501000_XE_Mediathek_Bibliothek",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "type": "class",
        "text": "61501000_XE_Mediathek_Bibliothek (xerl:61501000_XE_Mediathek_Bibliothek)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61501100_XE_Mediathek_BibliothekWissenschaftlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "type": "class",
        "text": "61501100_XE_Mediathek_BibliothekWissenschaftlich (xerl:61501100_XE_Mediathek_BibliothekWissenschaftlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61501200_XE_Mediathek_Archiv",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "type": "class",
        "text": "61501200_XE_Mediathek_Archiv (xerl:61501200_XE_Mediathek_Archiv)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61501300_XE_Mediathek_BuecherschrankOeffentlich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "type": "class",
        "text": "61501300_XE_Mediathek_BuecherschrankOeffentlich (xerl:61501300_XE_Mediathek_BuecherschrankOeffentlich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/61501990_XE_Mediathek_MediathekSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Mediathek",
        "type": "class",
        "text": "61501990_XE_Mediathek_MediathekSonstige (xerl:61501990_XE_Mediathek_MediathekSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101000_XE_Behoerde_Polizei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101000_XE_Behoerde_Polizei (xerl:62101000_XE_Behoerde_Polizei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101010_XE_Behoerde_Bundespolizei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101010_XE_Behoerde_Bundespolizei (xerl:62101010_XE_Behoerde_Bundespolizei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101020_XE_Behoerde_Wasserschutzpolizei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101020_XE_Behoerde_Wasserschutzpolizei (xerl:62101020_XE_Behoerde_Wasserschutzpolizei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101050_XE_Behoerde_Feuerwehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101050_XE_Behoerde_Feuerwehr (xerl:62101050_XE_Behoerde_Feuerwehr)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101060_XE_Behoerde_FeuerwehrFreiwillige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101060_XE_Behoerde_FeuerwehrFreiwillige (xerl:62101060_XE_Behoerde_FeuerwehrFreiwillige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101100_XE_Behoerde_Rettungsdienst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101100_XE_Behoerde_Rettungsdienst (xerl:62101100_XE_Behoerde_Rettungsdienst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101110_XE_Behoerde_Seerettungsstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101110_XE_Behoerde_Seerettungsstation (xerl:62101110_XE_Behoerde_Seerettungsstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101150_XE_Behoerde_Katastrophenschutz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101150_XE_Behoerde_Katastrophenschutz (xerl:62101150_XE_Behoerde_Katastrophenschutz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101200_XE_Behoerde_Militaer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101200_XE_Behoerde_Militaer (xerl:62101200_XE_Behoerde_Militaer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101300_XE_Behoerde_OeffentlicheOrdnung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101300_XE_Behoerde_OeffentlicheOrdnung (xerl:62101300_XE_Behoerde_OeffentlicheOrdnung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101351_XE_Behoerde_Gericht",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101351_XE_Behoerde_Gericht (xerl:62101351_XE_Behoerde_Gericht)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101352_XE_Behoerde_Gefaengnis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101352_XE_Behoerde_Gefaengnis (xerl:62101352_XE_Behoerde_Gefaengnis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101500_XE_Behoerde_Finanzamt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101500_XE_Behoerde_Finanzamt (xerl:62101500_XE_Behoerde_Finanzamt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101550_XE_Behoerde_Zollamt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101550_XE_Behoerde_Zollamt (xerl:62101550_XE_Behoerde_Zollamt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101600_XE_Behoerde_Ministerium",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101600_XE_Behoerde_Ministerium (xerl:62101600_XE_Behoerde_Ministerium)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101650_XE_Behoerde_Botschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101650_XE_Behoerde_Botschaft (xerl:62101650_XE_Behoerde_Botschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101660_XE_Behoerde_Konsulat",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101660_XE_Behoerde_Konsulat (xerl:62101660_XE_Behoerde_Konsulat)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101700_XE_Behoerde_Rathaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101700_XE_Behoerde_Rathaus (xerl:62101700_XE_Behoerde_Rathaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101710_XE_Behoerde_Behoerdenhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101710_XE_Behoerde_Behoerdenhaus (xerl:62101710_XE_Behoerde_Behoerdenhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101750_XE_Behoerde_Buergerservice",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101750_XE_Behoerde_Buergerservice (xerl:62101750_XE_Behoerde_Buergerservice)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101760_XE_Behoerde_Standesamt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101760_XE_Behoerde_Standesamt (xerl:62101760_XE_Behoerde_Standesamt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101800_XE_Behoerde_FachbehoerdeVerkehr",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101800_XE_Behoerde_FachbehoerdeVerkehr (xerl:62101800_XE_Behoerde_FachbehoerdeVerkehr)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101801_XE_Behoerde_Strassenmeisterei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101801_XE_Behoerde_Strassenmeisterei (xerl:62101801_XE_Behoerde_Strassenmeisterei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101810_XE_Behoerde_FachbehoerdeGesundheit",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101810_XE_Behoerde_FachbehoerdeGesundheit (xerl:62101810_XE_Behoerde_FachbehoerdeGesundheit)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101821_XE_Behoerde_FachbehoerdeArbeitJobs",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101821_XE_Behoerde_FachbehoerdeArbeitJobs (xerl:62101821_XE_Behoerde_FachbehoerdeArbeitJobs)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101825_XE_Behoerde_FachbehoerdeWirtschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101825_XE_Behoerde_FachbehoerdeWirtschaft (xerl:62101825_XE_Behoerde_FachbehoerdeWirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101830_XE_Behoerde_FachbehoerdeForst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101830_XE_Behoerde_FachbehoerdeForst (xerl:62101830_XE_Behoerde_FachbehoerdeForst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101840_XE_Behoerde_FachbehoerdeLandwirtschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101840_XE_Behoerde_FachbehoerdeLandwirtschaft (xerl:62101840_XE_Behoerde_FachbehoerdeLandwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101850_XE_Behoerde_FachbehoerdeJugendFamilieSoziales",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101850_XE_Behoerde_FachbehoerdeJugendFamilieSoziales (xerl:62101850_XE_Behoerde_FachbehoerdeJugendFamilieSoziales)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101860_XE_Behoerde_FachbehoerdeSport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101860_XE_Behoerde_FachbehoerdeSport (xerl:62101860_XE_Behoerde_FachbehoerdeSport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101870_XE_Behoerde_FachbehoerdeBildung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101870_XE_Behoerde_FachbehoerdeBildung (xerl:62101870_XE_Behoerde_FachbehoerdeBildung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101880_XE_Behoerde_FachbehoerdeKultur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101880_XE_Behoerde_FachbehoerdeKultur (xerl:62101880_XE_Behoerde_FachbehoerdeKultur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101890_XE_Behoerde_FachbehoerdeUmwelt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101890_XE_Behoerde_FachbehoerdeUmwelt (xerl:62101890_XE_Behoerde_FachbehoerdeUmwelt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101900_XE_Behoerde_FachbehoerdePlanenBauen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101900_XE_Behoerde_FachbehoerdePlanenBauen (xerl:62101900_XE_Behoerde_FachbehoerdePlanenBauen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62101990_XE_Behoerde_FachbehoerdeSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62101990_XE_Behoerde_FachbehoerdeSonstiges (xerl:62101990_XE_Behoerde_FachbehoerdeSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62102000_XE_Behoerde_Verbraucherschutz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62102000_XE_Behoerde_Verbraucherschutz (xerl:62102000_XE_Behoerde_Verbraucherschutz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62102100_XE_Behoerde_VersorgungsamtRentenversicherung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62102100_XE_Behoerde_VersorgungsamtRentenversicherung (xerl:62102100_XE_Behoerde_VersorgungsamtRentenversicherung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62109900_XE_Behoerde_OeffentlicheEinrichtungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Behoerde",
        "type": "class",
        "text": "62109900_XE_Behoerde_OeffentlicheEinrichtungSonstige (xerl:62109900_XE_Behoerde_OeffentlicheEinrichtungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201000_XE_Verband_Berufsorganisation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201000_XE_Verband_Berufsorganisation (xerl:62201000_XE_Verband_Berufsorganisation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201100_XE_Verband_Arbeitnehmervereinigung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201100_XE_Verband_Arbeitnehmervereinigung (xerl:62201100_XE_Verband_Arbeitnehmervereinigung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201200_XE_Verband_WirtschaftsArbeitgeberverband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201200_XE_Verband_WirtschaftsArbeitgeberverband (xerl:62201200_XE_Verband_WirtschaftsArbeitgeberverband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201250_XE_Verband_Kommunalverband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201250_XE_Verband_Kommunalverband (xerl:62201250_XE_Verband_Kommunalverband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201300_XE_Verband_Tourismusverband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201300_XE_Verband_Tourismusverband (xerl:62201300_XE_Verband_Tourismusverband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201350_XE_Verband_Wasserverband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201350_XE_Verband_Wasserverband (xerl:62201350_XE_Verband_Wasserverband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201400_XE_Verband_Fachverband",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201400_XE_Verband_Fachverband (xerl:62201400_XE_Verband_Fachverband)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201500_XE_Verband_Kammer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201500_XE_Verband_Kammer (xerl:62201500_XE_Verband_Kammer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201600_XE_Verband_PolitischePartei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201600_XE_Verband_PolitischePartei (xerl:62201600_XE_Verband_PolitischePartei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201700_XE_Verband_ReligioeseVereinigung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201700_XE_Verband_ReligioeseVereinigung (xerl:62201700_XE_Verband_ReligioeseVereinigung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201800_XE_Verband_Stiftung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201800_XE_Verband_Stiftung (xerl:62201800_XE_Verband_Stiftung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62201990_XE_Verband_VerbandSonstiger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62201990_XE_Verband_VerbandSonstiger (xerl:62201990_XE_Verband_VerbandSonstiger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/62202000_XE_Verband_Verein",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Verband",
        "type": "class",
        "text": "62202000_XE_Verband_Verein (xerl:62202000_XE_Verband_Verein)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101000_XE_Gesundheit_ArztpraxisPraxiszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101000_XE_Gesundheit_ArztpraxisPraxiszentrum (xerl:63101000_XE_Gesundheit_ArztpraxisPraxiszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101010_XE_Gesundheit_Geburtshilfepraxis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101010_XE_Gesundheit_Geburtshilfepraxis (xerl:63101010_XE_Gesundheit_Geburtshilfepraxis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101020_XE_Gesundheit_PhysiotherapieEtcPraxis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101020_XE_Gesundheit_PhysiotherapieEtcPraxis (xerl:63101020_XE_Gesundheit_PhysiotherapieEtcPraxis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101030_XE_Gesundheit_Dialysezentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101030_XE_Gesundheit_Dialysezentrum (xerl:63101030_XE_Gesundheit_Dialysezentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101100_XE_Gesundheit_KrankenhausKlinik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101100_XE_Gesundheit_KrankenhausKlinik (xerl:63101100_XE_Gesundheit_KrankenhausKlinik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101110_XE_Gesundheit_NotfallAmbulanz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101110_XE_Gesundheit_NotfallAmbulanz (xerl:63101110_XE_Gesundheit_NotfallAmbulanz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101120_XE_Gesundheit_Tagesklinik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101120_XE_Gesundheit_Tagesklinik (xerl:63101120_XE_Gesundheit_Tagesklinik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101130_XE_Gesundheit_RehaKlinik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101130_XE_Gesundheit_RehaKlinik (xerl:63101130_XE_Gesundheit_RehaKlinik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101140_XE_Gesundheit_BlutOrganbank",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101140_XE_Gesundheit_BlutOrganbank (xerl:63101140_XE_Gesundheit_BlutOrganbank)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101200_XE_Gesundheit_Heilpraktiker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101200_XE_Gesundheit_Heilpraktiker (xerl:63101200_XE_Gesundheit_Heilpraktiker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63101300_XE_Gesundheit_Apotheke",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gesundheit",
        "type": "class",
        "text": "63101300_XE_Gesundheit_Apotheke (xerl:63101300_XE_Gesundheit_Apotheke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63201000_XE_Tiermedizin_Veterinaerpraxis",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tiermedizin",
        "type": "class",
        "text": "63201000_XE_Tiermedizin_Veterinaerpraxis (xerl:63201000_XE_Tiermedizin_Veterinaerpraxis)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63201050_XE_Tiermedizin_Tierklinik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tiermedizin",
        "type": "class",
        "text": "63201050_XE_Tiermedizin_Tierklinik (xerl:63201050_XE_Tiermedizin_Tierklinik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63201200_XE_Tiermedizin_Tierheim",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tiermedizin",
        "type": "class",
        "text": "63201200_XE_Tiermedizin_Tierheim (xerl:63201200_XE_Tiermedizin_Tierheim)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63201990_XE_Tiermedizin_TiermedizinSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tiermedizin",
        "type": "class",
        "text": "63201990_XE_Tiermedizin_TiermedizinSonstiges (xerl:63201990_XE_Tiermedizin_TiermedizinSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301000_XE_SozialEinrichtung_Kindergarten",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301000_XE_SozialEinrichtung_Kindergarten (xerl:63301000_XE_SozialEinrichtung_Kindergarten)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301010_XE_SozialEinrichtung_Kinderbetreuung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301010_XE_SozialEinrichtung_Kinderbetreuung (xerl:63301010_XE_SozialEinrichtung_Kinderbetreuung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301050_XE_SozialEinrichtung_Kinderheim",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301050_XE_SozialEinrichtung_Kinderheim (xerl:63301050_XE_SozialEinrichtung_Kinderheim)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301060_XE_SozialEinrichtung_Babyklappe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301060_XE_SozialEinrichtung_Babyklappe (xerl:63301060_XE_SozialEinrichtung_Babyklappe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301070_XE_SozialEinrichtung_KinderNotinsel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301070_XE_SozialEinrichtung_KinderNotinsel (xerl:63301070_XE_SozialEinrichtung_KinderNotinsel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301100_XE_SozialEinrichtung_Jugendheim",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301100_XE_SozialEinrichtung_Jugendheim (xerl:63301100_XE_SozialEinrichtung_Jugendheim)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301110_XE_SozialEinrichtung_Jugendzentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301110_XE_SozialEinrichtung_Jugendzentrum (xerl:63301110_XE_SozialEinrichtung_Jugendzentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301150_XE_SozialEinrichtung_Familienzentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301150_XE_SozialEinrichtung_Familienzentrum (xerl:63301150_XE_SozialEinrichtung_Familienzentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301200_XE_SozialEinrichtung_Behindertenwohnheim",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301200_XE_SozialEinrichtung_Behindertenwohnheim (xerl:63301200_XE_SozialEinrichtung_Behindertenwohnheim)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301210_XE_SozialEinrichtung_Behindertenwohngemeinschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301210_XE_SozialEinrichtung_Behindertenwohngemeinschaft (xerl:63301210_XE_SozialEinrichtung_Behindertenwohngemeinschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301290_XE_SozialEinrichtung_BehinderteneinrichtungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301290_XE_SozialEinrichtung_BehinderteneinrichtungSonstige (xerl:63301290_XE_SozialEinrichtung_BehinderteneinrichtungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301300_XE_SozialEinrichtung_Tagespflegeeinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301300_XE_SozialEinrichtung_Tagespflegeeinrichtung (xerl:63301300_XE_SozialEinrichtung_Tagespflegeeinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301310_XE_SozialEinrichtung_Kurzzeitpflegeeinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301310_XE_SozialEinrichtung_Kurzzeitpflegeeinrichtung (xerl:63301310_XE_SozialEinrichtung_Kurzzeitpflegeeinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301320_XE_SozialEinrichtung_AmbulanterPflegedienst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301320_XE_SozialEinrichtung_AmbulanterPflegedienst (xerl:63301320_XE_SozialEinrichtung_AmbulanterPflegedienst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301400_XE_SozialEinrichtung_AltenPflegeheim",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301400_XE_SozialEinrichtung_AltenPflegeheim (xerl:63301400_XE_SozialEinrichtung_AltenPflegeheim)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301410_XE_SozialEinrichtung_BetreutesWohnen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301410_XE_SozialEinrichtung_BetreutesWohnen (xerl:63301410_XE_SozialEinrichtung_BetreutesWohnen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301420_XE_SozialEinrichtung_Seniorenbegegnungsstaette",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301420_XE_SozialEinrichtung_Seniorenbegegnungsstaette (xerl:63301420_XE_SozialEinrichtung_Seniorenbegegnungsstaette)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301500_XE_SozialEinrichtung_Hospiz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301500_XE_SozialEinrichtung_Hospiz (xerl:63301500_XE_SozialEinrichtung_Hospiz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301600_XE_SozialEinrichtung_Beratungsstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301600_XE_SozialEinrichtung_Beratungsstelle (xerl:63301600_XE_SozialEinrichtung_Beratungsstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301700_XE_SozialEinrichtung_Wohlfahrtseinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301700_XE_SozialEinrichtung_Wohlfahrtseinrichtung (xerl:63301700_XE_SozialEinrichtung_Wohlfahrtseinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301800_XE_SozialEinrichtung_Obdachloseneinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301800_XE_SozialEinrichtung_Obdachloseneinrichtung (xerl:63301800_XE_SozialEinrichtung_Obdachloseneinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301820_XE_SozialEinrichtung_Fluechtlingsunterkunft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301820_XE_SozialEinrichtung_Fluechtlingsunterkunft (xerl:63301820_XE_SozialEinrichtung_Fluechtlingsunterkunft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301980_XE_SozialEinrichtung_AmbulanterSozialerDienst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301980_XE_SozialEinrichtung_AmbulanterSozialerDienst (xerl:63301980_XE_SozialEinrichtung_AmbulanterSozialerDienst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/63301990_XE_SozialEinrichtung_SozialeEinrichtungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_SozialEinrichtung",
        "type": "class",
        "text": "63301990_XE_SozialEinrichtung_SozialeEinrichtungSonstige (xerl:63301990_XE_SozialEinrichtung_SozialeEinrichtungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101000_XE_VerEntsorgungsbetrieb_VerEntsorgungsunternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101000_XE_VerEntsorgungsbetrieb_VerEntsorgungsunternehmen (xerl:64101000_XE_VerEntsorgungsbetrieb_VerEntsorgungsunternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101100_XE_VerEntsorgungsbetrieb_AbfallRecyclingAnlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101100_XE_VerEntsorgungsbetrieb_AbfallRecyclingAnlage (xerl:64101100_XE_VerEntsorgungsbetrieb_AbfallRecyclingAnlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101110_XE_VerEntsorgungsbetrieb_Deponie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101110_XE_VerEntsorgungsbetrieb_Deponie (xerl:64101110_XE_VerEntsorgungsbetrieb_Deponie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101120_XE_VerEntsorgungsbetrieb_Muellverbrennungsanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101120_XE_VerEntsorgungsbetrieb_Muellverbrennungsanlage (xerl:64101120_XE_VerEntsorgungsbetrieb_Muellverbrennungsanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101130_XE_VerEntsorgungsbetrieb_Klaeranlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101130_XE_VerEntsorgungsbetrieb_Klaeranlage (xerl:64101130_XE_VerEntsorgungsbetrieb_Klaeranlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101200_XE_VerEntsorgungsbetrieb_Biogasanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101200_XE_VerEntsorgungsbetrieb_Biogasanlage (xerl:64101200_XE_VerEntsorgungsbetrieb_Biogasanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101210_XE_VerEntsorgungsbetrieb_Solaranlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101210_XE_VerEntsorgungsbetrieb_Solaranlage (xerl:64101210_XE_VerEntsorgungsbetrieb_Solaranlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101220_XE_VerEntsorgungsbetrieb_Windenergieanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101220_XE_VerEntsorgungsbetrieb_Windenergieanlage (xerl:64101220_XE_VerEntsorgungsbetrieb_Windenergieanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101230_XE_VerEntsorgungsbetrieb_Wasserwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101230_XE_VerEntsorgungsbetrieb_Wasserwerk (xerl:64101230_XE_VerEntsorgungsbetrieb_Wasserwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101250_XE_VerEntsorgungsbetrieb_Kraftwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101250_XE_VerEntsorgungsbetrieb_Kraftwerk (xerl:64101250_XE_VerEntsorgungsbetrieb_Kraftwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101300_XE_VerEntsorgungsbetrieb_Umspannwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101300_XE_VerEntsorgungsbetrieb_Umspannwerk (xerl:64101300_XE_VerEntsorgungsbetrieb_Umspannwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101310_XE_VerEntsorgungsbetrieb_Gaspumpstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101310_XE_VerEntsorgungsbetrieb_Gaspumpstation (xerl:64101310_XE_VerEntsorgungsbetrieb_Gaspumpstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101350_XE_VerEntsorgungsbetrieb_Tanks",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101350_XE_VerEntsorgungsbetrieb_Tanks (xerl:64101350_XE_VerEntsorgungsbetrieb_Tanks)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101400_XE_VerEntsorgungsbetrieb_Sendemast",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101400_XE_VerEntsorgungsbetrieb_Sendemast (xerl:64101400_XE_VerEntsorgungsbetrieb_Sendemast)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101500_XE_VerEntsorgungsbetrieb_Betriebshof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101500_XE_VerEntsorgungsbetrieb_Betriebshof (xerl:64101500_XE_VerEntsorgungsbetrieb_Betriebshof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64101990_XE_VerEntsorgungsbetrieb_AnlageSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_VerEntsorgungsbetrieb",
        "type": "class",
        "text": "64101990_XE_VerEntsorgungsbetrieb_AnlageSonstige (xerl:64101990_XE_VerEntsorgungsbetrieb_AnlageSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64201000_XE_Sammelstelle_Containerstandort",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sammelstelle",
        "type": "class",
        "text": "64201000_XE_Sammelstelle_Containerstandort (xerl:64201000_XE_Sammelstelle_Containerstandort)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64201100_XE_Sammelstelle_Recyclinghof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sammelstelle",
        "type": "class",
        "text": "64201100_XE_Sammelstelle_Recyclinghof (xerl:64201100_XE_Sammelstelle_Recyclinghof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/64201200_XE_Sammelstelle_Hundekotstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sammelstelle",
        "type": "class",
        "text": "64201200_XE_Sammelstelle_Hundekotstation (xerl:64201200_XE_Sammelstelle_Hundekotstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/65101000_XE_Militaer_Kaserne",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "type": "class",
        "text": "65101000_XE_Militaer_Kaserne (xerl:65101000_XE_Militaer_Kaserne)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/65101010_XE_Militaer_Militaerlager",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "type": "class",
        "text": "65101010_XE_Militaer_Militaerlager (xerl:65101010_XE_Militaer_Militaerlager)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/65101100_XE_Militaer_MilitaerischesSperrgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "type": "class",
        "text": "65101100_XE_Militaer_MilitaerischesSperrgebiet (xerl:65101100_XE_Militaer_MilitaerischesSperrgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/65101200_XE_Militaer_Militaerflugplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "type": "class",
        "text": "65101200_XE_Militaer_Militaerflugplatz (xerl:65101200_XE_Militaer_Militaerflugplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/65101990_XE_Militaer_MilitaerischeAnlageSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Militaer",
        "type": "class",
        "text": "65101990_XE_Militaer_MilitaerischeAnlageSonstige (xerl:65101990_XE_Militaer_MilitaerischeAnlageSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101000_XE_OEVHaltestelle_TouristenbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101000_XE_OEVHaltestelle_TouristenbahnHSt (xerl:66101000_XE_OEVHaltestelle_TouristenbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101010_XE_OEVHaltestelle_DraisinenbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101010_XE_OEVHaltestelle_DraisinenbahnHSt (xerl:66101010_XE_OEVHaltestelle_DraisinenbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101050_XE_OEVHaltestelle_GueterbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101050_XE_OEVHaltestelle_GueterbahnHSt (xerl:66101050_XE_OEVHaltestelle_GueterbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101100_XE_OEVHaltestelle_StadtbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101100_XE_OEVHaltestelle_StadtbahnHSt (xerl:66101100_XE_OEVHaltestelle_StadtbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101110_XE_OEVHaltestelle_RegionalBahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101110_XE_OEVHaltestelle_RegionalBahnHSt (xerl:66101110_XE_OEVHaltestelle_RegionalBahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101120_XE_OEVHaltestelle_FernBahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101120_XE_OEVHaltestelle_FernBahnHSt (xerl:66101120_XE_OEVHaltestelle_FernBahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101150_XE_OEVHaltestelle_StrassenbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101150_XE_OEVHaltestelle_StrassenbahnHSt (xerl:66101150_XE_OEVHaltestelle_StrassenbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101160_XE_OEVHaltestelle_SBahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101160_XE_OEVHaltestelle_SBahnHSt (xerl:66101160_XE_OEVHaltestelle_SBahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101170_XE_OEVHaltestelle_UBahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101170_XE_OEVHaltestelle_UBahnHSt (xerl:66101170_XE_OEVHaltestelle_UBahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101200_XE_OEVHaltestelle_SchwebebahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101200_XE_OEVHaltestelle_SchwebebahnHSt (xerl:66101200_XE_OEVHaltestelle_SchwebebahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101300_XE_OEVHaltestelle_MuseumsbahnHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101300_XE_OEVHaltestelle_MuseumsbahnHSt (xerl:66101300_XE_OEVHaltestelle_MuseumsbahnHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101400_XE_OEVHaltestelle_ZahnradbahnStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101400_XE_OEVHaltestelle_ZahnradbahnStation (xerl:66101400_XE_OEVHaltestelle_ZahnradbahnStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101500_XE_OEVHaltestelle_SeilbahnStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101500_XE_OEVHaltestelle_SeilbahnStation (xerl:66101500_XE_OEVHaltestelle_SeilbahnStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101510_XE_OEVHaltestelle_KabinenseilbahnStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101510_XE_OEVHaltestelle_KabinenseilbahnStation (xerl:66101510_XE_OEVHaltestelle_KabinenseilbahnStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101520_XE_OEVHaltestelle_StandseilbahnStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101520_XE_OEVHaltestelle_StandseilbahnStation (xerl:66101520_XE_OEVHaltestelle_StandseilbahnStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101600_XE_OEVHaltestelle_SesselliftStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101600_XE_OEVHaltestelle_SesselliftStation (xerl:66101600_XE_OEVHaltestelle_SesselliftStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66101610_XE_OEVHaltestelle_SkiliftStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66101610_XE_OEVHaltestelle_SkiliftStation (xerl:66101610_XE_OEVHaltestelle_SkiliftStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102110_XE_OEVHaltestelle_PersonenfaehreAnleger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102110_XE_OEVHaltestelle_PersonenfaehreAnleger (xerl:66102110_XE_OEVHaltestelle_PersonenfaehreAnleger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102500_XE_OEVHaltestelle_BusHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102500_XE_OEVHaltestelle_BusHSt (xerl:66102500_XE_OEVHaltestelle_BusHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102510_XE_OEVHaltestelle_SchulbusHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102510_XE_OEVHaltestelle_SchulbusHSt (xerl:66102510_XE_OEVHaltestelle_SchulbusHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102520_XE_OEVHaltestelle_FernbusHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102520_XE_OEVHaltestelle_FernbusHSt (xerl:66102520_XE_OEVHaltestelle_FernbusHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102530_XE_OEVHaltestelle_TouristenbusHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102530_XE_OEVHaltestelle_TouristenbusHSt (xerl:66102530_XE_OEVHaltestelle_TouristenbusHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66102600_XE_OEVHaltestelle_OBusHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66102600_XE_OEVHaltestelle_OBusHSt (xerl:66102600_XE_OEVHaltestelle_OBusHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66103000_XE_OEVHaltestelle_Taxistand",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66103000_XE_OEVHaltestelle_Taxistand (xerl:66103000_XE_OEVHaltestelle_Taxistand)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66109900_XE_OEVHaltestelle_VerkehrsmittelSonstigesHSt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVHaltestelle",
        "type": "class",
        "text": "66109900_XE_OEVHaltestelle_VerkehrsmittelSonstigesHSt (xerl:66109900_XE_OEVHaltestelle_VerkehrsmittelSonstigesHSt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201000_XE_OEVTrasse_TouristenbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201000_XE_OEVTrasse_TouristenbahnTrasse (xerl:66201000_XE_OEVTrasse_TouristenbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201010_XE_OEVTrasse_DraisinenbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201010_XE_OEVTrasse_DraisinenbahnTrasse (xerl:66201010_XE_OEVTrasse_DraisinenbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201050_XE_OEVTrasse_GueterbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201050_XE_OEVTrasse_GueterbahnTrasse (xerl:66201050_XE_OEVTrasse_GueterbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201100_XE_OEVTrasse_StadtbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201100_XE_OEVTrasse_StadtbahnTrasse (xerl:66201100_XE_OEVTrasse_StadtbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201110_XE_OEVTrasse_RegionalBahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201110_XE_OEVTrasse_RegionalBahnTrasse (xerl:66201110_XE_OEVTrasse_RegionalBahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201120_XE_OEVTrasse_FernBahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201120_XE_OEVTrasse_FernBahnTrasse (xerl:66201120_XE_OEVTrasse_FernBahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201150_XE_OEVTrasse_StrassenbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201150_XE_OEVTrasse_StrassenbahnTrasse (xerl:66201150_XE_OEVTrasse_StrassenbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201160_XE_OEVTrasse_SBahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201160_XE_OEVTrasse_SBahnTrasse (xerl:66201160_XE_OEVTrasse_SBahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201170_XE_OEVTrasse_UBahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201170_XE_OEVTrasse_UBahnTrasse (xerl:66201170_XE_OEVTrasse_UBahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201200_XE_OEVTrasse_SchwebebahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201200_XE_OEVTrasse_SchwebebahnTrasse (xerl:66201200_XE_OEVTrasse_SchwebebahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201300_XE_OEVTrasse_MuseumsbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201300_XE_OEVTrasse_MuseumsbahnTrasse (xerl:66201300_XE_OEVTrasse_MuseumsbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201400_XE_OEVTrasse_ZahnradbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201400_XE_OEVTrasse_ZahnradbahnTrasse (xerl:66201400_XE_OEVTrasse_ZahnradbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201500_XE_OEVTrasse_SeilbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201500_XE_OEVTrasse_SeilbahnTrasse (xerl:66201500_XE_OEVTrasse_SeilbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201510_XE_OEVTrasse_KabinenseilbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201510_XE_OEVTrasse_KabinenseilbahnTrasse (xerl:66201510_XE_OEVTrasse_KabinenseilbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201520_XE_OEVTrasse_StandseilbahnTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201520_XE_OEVTrasse_StandseilbahnTrasse (xerl:66201520_XE_OEVTrasse_StandseilbahnTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201600_XE_OEVTrasse_SesselliftTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201600_XE_OEVTrasse_SesselliftTrasse (xerl:66201600_XE_OEVTrasse_SesselliftTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66201610_XE_OEVTrasse_SkiliftTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66201610_XE_OEVTrasse_SkiliftTrasse (xerl:66201610_XE_OEVTrasse_SkiliftTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202000_XE_OEVTrasse_VerkehrschifffahrtTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202000_XE_OEVTrasse_VerkehrschifffahrtTrasse (xerl:66202000_XE_OEVTrasse_VerkehrschifffahrtTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202050_XE_OEVTrasse_AusflugsschiffTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202050_XE_OEVTrasse_AusflugsschiffTrasse (xerl:66202050_XE_OEVTrasse_AusflugsschiffTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202100_XE_OEVTrasse_AutofaehreTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202100_XE_OEVTrasse_AutofaehreTrasse (xerl:66202100_XE_OEVTrasse_AutofaehreTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202110_XE_OEVTrasse_PersonenfaehreTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202110_XE_OEVTrasse_PersonenfaehreTrasse (xerl:66202110_XE_OEVTrasse_PersonenfaehreTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202500_XE_OEVTrasse_BusTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202500_XE_OEVTrasse_BusTrasse (xerl:66202500_XE_OEVTrasse_BusTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202510_XE_OEVTrasse_SchulbusTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202510_XE_OEVTrasse_SchulbusTrasse (xerl:66202510_XE_OEVTrasse_SchulbusTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202520_XE_OEVTrasse_FernbusTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202520_XE_OEVTrasse_FernbusTrasse (xerl:66202520_XE_OEVTrasse_FernbusTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202530_XE_OEVTrasse_TouristenbusTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202530_XE_OEVTrasse_TouristenbusTrasse (xerl:66202530_XE_OEVTrasse_TouristenbusTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66202600_XE_OEVTrasse_OBusTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66202600_XE_OEVTrasse_OBusTrasse (xerl:66202600_XE_OEVTrasse_OBusTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66209900_XE_OEVTrasse_VerkehrsmittelSonstigesTrasse",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVTrasse",
        "type": "class",
        "text": "66209900_XE_OEVTrasse_VerkehrsmittelSonstigesTrasse (xerl:66209900_XE_OEVTrasse_VerkehrsmittelSonstigesTrasse)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301000_XE_OEVLinie_TouristenbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301000_XE_OEVLinie_TouristenbahnLinie (xerl:66301000_XE_OEVLinie_TouristenbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301010_XE_OEVLinie_DraisinenbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301010_XE_OEVLinie_DraisinenbahnLinie (xerl:66301010_XE_OEVLinie_DraisinenbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301050_XE_OEVLinie_GueterbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301050_XE_OEVLinie_GueterbahnLinie (xerl:66301050_XE_OEVLinie_GueterbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301100_XE_OEVLinie_StadtbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301100_XE_OEVLinie_StadtbahnLinie (xerl:66301100_XE_OEVLinie_StadtbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301110_XE_OEVLinie_RegionalBahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301110_XE_OEVLinie_RegionalBahnLinie (xerl:66301110_XE_OEVLinie_RegionalBahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301120_XE_OEVLinie_FernBahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301120_XE_OEVLinie_FernBahnLinie (xerl:66301120_XE_OEVLinie_FernBahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301150_XE_OEVLinie_StrassenbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301150_XE_OEVLinie_StrassenbahnLinie (xerl:66301150_XE_OEVLinie_StrassenbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301160_XE_OEVLinie_SBahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301160_XE_OEVLinie_SBahnLinie (xerl:66301160_XE_OEVLinie_SBahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301170_XE_OEVLinie_UBahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301170_XE_OEVLinie_UBahnLinie (xerl:66301170_XE_OEVLinie_UBahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301200_XE_OEVLinie_SchwebebahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301200_XE_OEVLinie_SchwebebahnLinie (xerl:66301200_XE_OEVLinie_SchwebebahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301300_XE_OEVLinie_MuseumsbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301300_XE_OEVLinie_MuseumsbahnLinie (xerl:66301300_XE_OEVLinie_MuseumsbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301400_XE_OEVLinie_ZahnradbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301400_XE_OEVLinie_ZahnradbahnLinie (xerl:66301400_XE_OEVLinie_ZahnradbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301500_XE_OEVLinie_SeilbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301500_XE_OEVLinie_SeilbahnLinie (xerl:66301500_XE_OEVLinie_SeilbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301510_XE_OEVLinie_KabinenseilbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301510_XE_OEVLinie_KabinenseilbahnLinie (xerl:66301510_XE_OEVLinie_KabinenseilbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301520_XE_OEVLinie_StandseilbahnLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301520_XE_OEVLinie_StandseilbahnLinie (xerl:66301520_XE_OEVLinie_StandseilbahnLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301600_XE_OEVLinie_SesselliftLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301600_XE_OEVLinie_SesselliftLinie (xerl:66301600_XE_OEVLinie_SesselliftLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66301610_XE_OEVLinie_SkiliftLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66301610_XE_OEVLinie_SkiliftLinie (xerl:66301610_XE_OEVLinie_SkiliftLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302000_XE_OEVLinie_VerkehrschifffahrtLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302000_XE_OEVLinie_VerkehrschifffahrtLinie (xerl:66302000_XE_OEVLinie_VerkehrschifffahrtLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302050_XE_OEVLinie_AusflugsschiffLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302050_XE_OEVLinie_AusflugsschiffLinie (xerl:66302050_XE_OEVLinie_AusflugsschiffLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302100_XE_OEVLinie_AutofaehreLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302100_XE_OEVLinie_AutofaehreLinie (xerl:66302100_XE_OEVLinie_AutofaehreLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302110_XE_OEVLinie_PersonenfaehreLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302110_XE_OEVLinie_PersonenfaehreLinie (xerl:66302110_XE_OEVLinie_PersonenfaehreLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302500_XE_OEVLinie_BusLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302500_XE_OEVLinie_BusLinie (xerl:66302500_XE_OEVLinie_BusLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302510_XE_OEVLinie_SchulbusLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302510_XE_OEVLinie_SchulbusLinie (xerl:66302510_XE_OEVLinie_SchulbusLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302520_XE_OEVLinie_FernbusLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302520_XE_OEVLinie_FernbusLinie (xerl:66302520_XE_OEVLinie_FernbusLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302530_XE_OEVLinie_TouristenbusLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302530_XE_OEVLinie_TouristenbusLinie (xerl:66302530_XE_OEVLinie_TouristenbusLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66302600_XE_OEVLinie_OBusLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66302600_XE_OEVLinie_OBusLinie (xerl:66302600_XE_OEVLinie_OBusLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66309900_XE_OEVLinie_VerkehrsmittelSonstigesLinie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_OEVLinie",
        "type": "class",
        "text": "66309900_XE_OEVLinie_VerkehrsmittelSonstigesLinie (xerl:66309900_XE_OEVLinie_VerkehrsmittelSonstigesLinie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66401000_XE_Flughafen_Landeplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Flughafen",
        "type": "class",
        "text": "66401000_XE_Flughafen_Landeplatz (xerl:66401000_XE_Flughafen_Landeplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66401100_XE_Flughafen_Regionalflughafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Flughafen",
        "type": "class",
        "text": "66401100_XE_Flughafen_Regionalflughafen (xerl:66401100_XE_Flughafen_Regionalflughafen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/66401200_XE_Flughafen_InternationalerFlughafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Flughafen",
        "type": "class",
        "text": "66401200_XE_Flughafen_InternationalerFlughafen (xerl:66401200_XE_Flughafen_InternationalerFlughafen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101000_XE_Autoverkehr_Parkmoeglichkeit",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101000_XE_Autoverkehr_Parkmoeglichkeit (xerl:67101000_XE_Autoverkehr_Parkmoeglichkeit)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101040_XE_Autoverkehr_Parkhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101040_XE_Autoverkehr_Parkhaus (xerl:67101040_XE_Autoverkehr_Parkhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101050_XE_Autoverkehr_Parkrevier",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101050_XE_Autoverkehr_Parkrevier (xerl:67101050_XE_Autoverkehr_Parkrevier)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101060_XE_Autoverkehr_Tiefgarage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101060_XE_Autoverkehr_Tiefgarage (xerl:67101060_XE_Autoverkehr_Tiefgarage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101100_XE_Autoverkehr_Anwohnerparkbereich",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101100_XE_Autoverkehr_Anwohnerparkbereich (xerl:67101100_XE_Autoverkehr_Anwohnerparkbereich)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101200_XE_Autoverkehr_Parkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101200_XE_Autoverkehr_Parkplatz (xerl:67101200_XE_Autoverkehr_Parkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101210_XE_Autoverkehr_Autobahnparkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101210_XE_Autoverkehr_Autobahnparkplatz (xerl:67101210_XE_Autoverkehr_Autobahnparkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101220_XE_Autoverkehr_ParkRideParkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101220_XE_Autoverkehr_ParkRideParkplatz (xerl:67101220_XE_Autoverkehr_ParkRideParkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101230_XE_Autoverkehr_Wanderparkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101230_XE_Autoverkehr_Wanderparkplatz (xerl:67101230_XE_Autoverkehr_Wanderparkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101240_XE_Autoverkehr_WanderReitParkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101240_XE_Autoverkehr_WanderReitParkplatz (xerl:67101240_XE_Autoverkehr_WanderReitParkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101250_XE_Autoverkehr_Wohnmobilstellplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101250_XE_Autoverkehr_Wohnmobilstellplatz (xerl:67101250_XE_Autoverkehr_Wohnmobilstellplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101260_XE_Autoverkehr_Behindertenparkplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101260_XE_Autoverkehr_Behindertenparkplatz (xerl:67101260_XE_Autoverkehr_Behindertenparkplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101270_XE_Autoverkehr_ECarLadestation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101270_XE_Autoverkehr_ECarLadestation (xerl:67101270_XE_Autoverkehr_ECarLadestation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101300_XE_Autoverkehr_AutobahnraststaetteAutohof",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101300_XE_Autoverkehr_AutobahnraststaetteAutohof (xerl:67101300_XE_Autoverkehr_AutobahnraststaetteAutohof)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101310_XE_Autoverkehr_AutoRastplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101310_XE_Autoverkehr_AutoRastplatz (xerl:67101310_XE_Autoverkehr_AutoRastplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101400_XE_Autoverkehr_Autoreparaturwerkstatt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101400_XE_Autoverkehr_Autoreparaturwerkstatt (xerl:67101400_XE_Autoverkehr_Autoreparaturwerkstatt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101410_XE_Autoverkehr_Autovermietung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101410_XE_Autoverkehr_Autovermietung (xerl:67101410_XE_Autoverkehr_Autovermietung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101420_XE_Autoverkehr_CarsharingStandort",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101420_XE_Autoverkehr_CarsharingStandort (xerl:67101420_XE_Autoverkehr_CarsharingStandort)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67101990_XE_Autoverkehr_AutoverkehrSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Autoverkehr",
        "type": "class",
        "text": "67101990_XE_Autoverkehr_AutoverkehrSonstiges (xerl:67101990_XE_Autoverkehr_AutoverkehrSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67201000_XE_Tankstelle_Tankstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Tankstelle",
        "type": "class",
        "text": "67201000_XE_Tankstelle_Tankstelle (xerl:67201000_XE_Tankstelle_Tankstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301000_XE_Radverkehr_Fahrradbox",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301000_XE_Radverkehr_Fahrradbox (xerl:67301000_XE_Radverkehr_Fahrradbox)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301010_XE_Radverkehr_Fahrradstation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301010_XE_Radverkehr_Fahrradstation (xerl:67301010_XE_Radverkehr_Fahrradstation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301020_XE_Radverkehr_Fahrradparkhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301020_XE_Radverkehr_Fahrradparkhaus (xerl:67301020_XE_Radverkehr_Fahrradparkhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301030_XE_Radverkehr_Fahrradabstellanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301030_XE_Radverkehr_Fahrradabstellanlage (xerl:67301030_XE_Radverkehr_Fahrradabstellanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301100_XE_Radverkehr_Fahrradreparatur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301100_XE_Radverkehr_Fahrradreparatur (xerl:67301100_XE_Radverkehr_Fahrradreparatur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301200_XE_Radverkehr_Fahrradvermietung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301200_XE_Radverkehr_Fahrradvermietung (xerl:67301200_XE_Radverkehr_Fahrradvermietung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301210_XE_Radverkehr_FahrradMietStation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301210_XE_Radverkehr_FahrradMietStation (xerl:67301210_XE_Radverkehr_FahrradMietStation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301220_XE_Radverkehr_EMobilVermietung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301220_XE_Radverkehr_EMobilVermietung (xerl:67301220_XE_Radverkehr_EMobilVermietung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67301300_XE_Radverkehr_EBikeLadestation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Radverkehr",
        "type": "class",
        "text": "67301300_XE_Radverkehr_EBikeLadestation (xerl:67301300_XE_Radverkehr_EBikeLadestation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401000_XE_Wasserverkehr_Ankerplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401000_XE_Wasserverkehr_Ankerplatz (xerl:67401000_XE_Wasserverkehr_Ankerplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401010_XE_Wasserverkehr_Bootsanlegestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401010_XE_Wasserverkehr_Bootsanlegestelle (xerl:67401010_XE_Wasserverkehr_Bootsanlegestelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401050_XE_Wasserverkehr_Sportboothafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401050_XE_Wasserverkehr_Sportboothafen (xerl:67401050_XE_Wasserverkehr_Sportboothafen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401100_XE_Wasserverkehr_EinAussetzstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401100_XE_Wasserverkehr_EinAussetzstelle (xerl:67401100_XE_Wasserverkehr_EinAussetzstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401110_XE_Wasserverkehr_Slipanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401110_XE_Wasserverkehr_Slipanlage (xerl:67401110_XE_Wasserverkehr_Slipanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401120_XE_Wasserverkehr_Umtragestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401120_XE_Wasserverkehr_Umtragestelle (xerl:67401120_XE_Wasserverkehr_Umtragestelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401200_XE_Wasserverkehr_Bootshaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401200_XE_Wasserverkehr_Bootshaus (xerl:67401200_XE_Wasserverkehr_Bootshaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401300_XE_Wasserverkehr_Werft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401300_XE_Wasserverkehr_Werft (xerl:67401300_XE_Wasserverkehr_Werft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401400_XE_Wasserverkehr_GelbeWelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401400_XE_Wasserverkehr_GelbeWelle (xerl:67401400_XE_Wasserverkehr_GelbeWelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401500_XE_Wasserverkehr_Kilometrierung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401500_XE_Wasserverkehr_Kilometrierung (xerl:67401500_XE_Wasserverkehr_Kilometrierung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401600_XE_Wasserverkehr_Leuchtfeuer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401600_XE_Wasserverkehr_Leuchtfeuer (xerl:67401600_XE_Wasserverkehr_Leuchtfeuer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401610_XE_Wasserverkehr_Leuchttonne",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401610_XE_Wasserverkehr_Leuchttonne (xerl:67401610_XE_Wasserverkehr_Leuchttonne)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401700_XE_Wasserverkehr_SperrungFuerWassersport",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401700_XE_Wasserverkehr_SperrungFuerWassersport (xerl:67401700_XE_Wasserverkehr_SperrungFuerWassersport)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401800_XE_Wasserverkehr_Trinkwasserentnahmestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401800_XE_Wasserverkehr_Trinkwasserentnahmestelle (xerl:67401800_XE_Wasserverkehr_Trinkwasserentnahmestelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/67401900_XE_Wasserverkehr_Untiefe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Wasserverkehr",
        "type": "class",
        "text": "67401900_XE_Wasserverkehr_Untiefe (xerl:67401900_XE_Wasserverkehr_Untiefe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101000_XE_Rettung_Rettungspunkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101000_XE_Rettung_Rettungspunkt (xerl:68101000_XE_Rettung_Rettungspunkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101010_XE_Rettung_Rettungsweg",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101010_XE_Rettung_Rettungsweg (xerl:68101010_XE_Rettung_Rettungsweg)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101020_XE_Rettung_Rettungshubschrauberlandeplatz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101020_XE_Rettung_Rettungshubschrauberlandeplatz (xerl:68101020_XE_Rettung_Rettungshubschrauberlandeplatz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101030_XE_Rettung_Notrufeinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101030_XE_Rettung_Notrufeinrichtung (xerl:68101030_XE_Rettung_Notrufeinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101100_XE_Rettung_Unfallhilfestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101100_XE_Rettung_Unfallhilfestelle (xerl:68101100_XE_Rettung_Unfallhilfestelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101110_XE_Rettung_ErsteHilfeAusruestung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101110_XE_Rettung_ErsteHilfeAusruestung (xerl:68101110_XE_Rettung_ErsteHilfeAusruestung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101120_XE_Rettung_Defibrillator",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101120_XE_Rettung_Defibrillator (xerl:68101120_XE_Rettung_Defibrillator)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101200_XE_Rettung_Zivilschutzeinrichtung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101200_XE_Rettung_Zivilschutzeinrichtung (xerl:68101200_XE_Rettung_Zivilschutzeinrichtung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101250_XE_Rettung_Bereitstellungsraum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101250_XE_Rettung_Bereitstellungsraum (xerl:68101250_XE_Rettung_Bereitstellungsraum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101300_XE_Rettung_Sirene",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101300_XE_Rettung_Sirene (xerl:68101300_XE_Rettung_Sirene)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101310_XE_Rettung_Hydrant",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101310_XE_Rettung_Hydrant (xerl:68101310_XE_Rettung_Hydrant)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101320_XE_Rettung_Loeschwasserversorgung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101320_XE_Rettung_Loeschwasserversorgung (xerl:68101320_XE_Rettung_Loeschwasserversorgung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68101350_XE_Rettung_BrandmeldeUndBeobachtungsstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Rettung",
        "type": "class",
        "text": "68101350_XE_Rettung_BrandmeldeUndBeobachtungsstelle (xerl:68101350_XE_Rettung_BrandmeldeUndBeobachtungsstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/68201000_XE_Gefahrenstelle_Gefahrenstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gefahrenstelle",
        "type": "class",
        "text": "68201000_XE_Gefahrenstelle_Gefahrenstelle (xerl:68201000_XE_Gefahrenstelle_Gefahrenstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71101000_XE_Gewerbegebiet_Gewerbegebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "type": "class",
        "text": "71101000_XE_Gewerbegebiet_Gewerbegebiet (xerl:71101000_XE_Gewerbegebiet_Gewerbegebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71101100_XE_Gewerbegebiet_GewerbeIndustriegebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "type": "class",
        "text": "71101100_XE_Gewerbegebiet_GewerbeIndustriegebiet (xerl:71101100_XE_Gewerbegebiet_GewerbeIndustriegebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71101200_XE_Gewerbegebiet_Industriegebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "type": "class",
        "text": "71101200_XE_Gewerbegebiet_Industriegebiet (xerl:71101200_XE_Gewerbegebiet_Industriegebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71101300_XE_Gewerbegebiet_Mischgebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "type": "class",
        "text": "71101300_XE_Gewerbegebiet_Mischgebiet (xerl:71101300_XE_Gewerbegebiet_Mischgebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71101400_XE_Gewerbegebiet_Sondergebiet",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbegebiet",
        "type": "class",
        "text": "71101400_XE_Gewerbegebiet_Sondergebiet (xerl:71101400_XE_Gewerbegebiet_Sondergebiet)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71201000_XE_Gewerbeimmobilie_EinzelhandelPraxisBuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "type": "class",
        "text": "71201000_XE_Gewerbeimmobilie_EinzelhandelPraxisBuero (xerl:71201000_XE_Gewerbeimmobilie_EinzelhandelPraxisBuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71201100_XE_Gewerbeimmobilie_Halle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "type": "class",
        "text": "71201100_XE_Gewerbeimmobilie_Halle (xerl:71201100_XE_Gewerbeimmobilie_Halle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71201200_XE_Gewerbeimmobilie_Gewerbeflaeche",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "type": "class",
        "text": "71201200_XE_Gewerbeimmobilie_Gewerbeflaeche (xerl:71201200_XE_Gewerbeimmobilie_Gewerbeflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71201300_XE_Gewerbeimmobilie_Industrieflaeche",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "type": "class",
        "text": "71201300_XE_Gewerbeimmobilie_Industrieflaeche (xerl:71201300_XE_Gewerbeimmobilie_Industrieflaeche)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71201990_XE_Gewerbeimmobilie_ImmobilieSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Gewerbeimmobilie",
        "type": "class",
        "text": "71201990_XE_Gewerbeimmobilie_ImmobilieSonstige (xerl:71201990_XE_Gewerbeimmobilie_ImmobilieSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301000_XE_Logistik_Autobahnanschlussstelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301000_XE_Logistik_Autobahnanschlussstelle (xerl:71301000_XE_Logistik_Autobahnanschlussstelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301050_XE_Logistik_Gleisanschluss",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301050_XE_Logistik_Gleisanschluss (xerl:71301050_XE_Logistik_Gleisanschluss)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301100_XE_Logistik_Containerterminal",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301100_XE_Logistik_Containerterminal (xerl:71301100_XE_Logistik_Containerterminal)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301200_XE_Logistik_VerkehrschifffahrtsHafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301200_XE_Logistik_VerkehrschifffahrtsHafen (xerl:71301200_XE_Logistik_VerkehrschifffahrtsHafen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301250_XE_Logistik_Schuettguthafen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301250_XE_Logistik_Schuettguthafen (xerl:71301250_XE_Logistik_Schuettguthafen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71301300_XE_Logistik_Gueterverkehrszentrum",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Logistik",
        "type": "class",
        "text": "71301300_XE_Logistik_Gueterverkehrszentrum (xerl:71301300_XE_Logistik_Gueterverkehrszentrum)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/71401000_XE_Messe_Messestandort",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Messe",
        "type": "class",
        "text": "71401000_XE_Messe_Messestandort (xerl:71401000_XE_Messe_Messestandort)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72101000_XE_Unternehmen_Unternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Unternehmen",
        "type": "class",
        "text": "72101000_XE_Unternehmen_Unternehmen (xerl:72101000_XE_Unternehmen_Unternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201000_XE_GewerbeIndustrie_LandForstFischereiwirtschaft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201000_XE_GewerbeIndustrie_LandForstFischereiwirtschaft (xerl:72201000_XE_GewerbeIndustrie_LandForstFischereiwirtschaft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201100_XE_GewerbeIndustrie_WeinbauWinzer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201100_XE_GewerbeIndustrie_WeinbauWinzer (xerl:72201100_XE_GewerbeIndustrie_WeinbauWinzer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201110_XE_GewerbeIndustrie_Imkerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201110_XE_GewerbeIndustrie_Imkerei (xerl:72201110_XE_GewerbeIndustrie_Imkerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201200_XE_GewerbeIndustrie_Baumschule",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201200_XE_GewerbeIndustrie_Baumschule (xerl:72201200_XE_GewerbeIndustrie_Baumschule)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201500_XE_GewerbeIndustrie_Lebensmittelindustrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201500_XE_GewerbeIndustrie_Lebensmittelindustrie (xerl:72201500_XE_GewerbeIndustrie_Lebensmittelindustrie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72201600_XE_GewerbeIndustrie_Suessigkeitenproduktion",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72201600_XE_GewerbeIndustrie_Suessigkeitenproduktion (xerl:72201600_XE_GewerbeIndustrie_Suessigkeitenproduktion)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202000_XE_GewerbeIndustrie_Holzindustrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202000_XE_GewerbeIndustrie_Holzindustrie (xerl:72202000_XE_GewerbeIndustrie_Holzindustrie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202100_XE_GewerbeIndustrie_Saegewerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202100_XE_GewerbeIndustrie_Saegewerk (xerl:72202100_XE_GewerbeIndustrie_Saegewerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202110_XE_GewerbeIndustrie_Zimmerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202110_XE_GewerbeIndustrie_Zimmerei (xerl:72202110_XE_GewerbeIndustrie_Zimmerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202120_XE_GewerbeIndustrie_Tischlerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202120_XE_GewerbeIndustrie_Tischlerei (xerl:72202120_XE_GewerbeIndustrie_Tischlerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202500_XE_GewerbeIndustrie_Baugewerbe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202500_XE_GewerbeIndustrie_Baugewerbe (xerl:72202500_XE_GewerbeIndustrie_Baugewerbe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202510_XE_GewerbeIndustrie_Bauunternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202510_XE_GewerbeIndustrie_Bauunternehmen (xerl:72202510_XE_GewerbeIndustrie_Bauunternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202520_XE_GewerbeIndustrie_Tiefbauunternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202520_XE_GewerbeIndustrie_Tiefbauunternehmen (xerl:72202520_XE_GewerbeIndustrie_Tiefbauunternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202530_XE_GewerbeIndustrie_Steinmetz",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202530_XE_GewerbeIndustrie_Steinmetz (xerl:72202530_XE_GewerbeIndustrie_Steinmetz)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202540_XE_GewerbeIndustrie_Fensterbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202540_XE_GewerbeIndustrie_Fensterbau (xerl:72202540_XE_GewerbeIndustrie_Fensterbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202550_XE_GewerbeIndustrie_Dachdecker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202550_XE_GewerbeIndustrie_Dachdecker (xerl:72202550_XE_GewerbeIndustrie_Dachdecker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202560_XE_GewerbeIndustrie_Geruestbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202560_XE_GewerbeIndustrie_Geruestbau (xerl:72202560_XE_GewerbeIndustrie_Geruestbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202570_XE_GewerbeIndustrie_Trockenbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202570_XE_GewerbeIndustrie_Trockenbau (xerl:72202570_XE_GewerbeIndustrie_Trockenbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202580_XE_GewerbeIndustrie_Stukateur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202580_XE_GewerbeIndustrie_Stukateur (xerl:72202580_XE_GewerbeIndustrie_Stukateur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202590_XE_GewerbeIndustrie_Waermedaemmung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202590_XE_GewerbeIndustrie_Waermedaemmung (xerl:72202590_XE_GewerbeIndustrie_Waermedaemmung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202600_XE_GewerbeIndustrie_Installateur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202600_XE_GewerbeIndustrie_Installateur (xerl:72202600_XE_GewerbeIndustrie_Installateur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202610_XE_GewerbeIndustrie_Elektriker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202610_XE_GewerbeIndustrie_Elektriker (xerl:72202610_XE_GewerbeIndustrie_Elektriker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202620_XE_GewerbeIndustrie_KlimaKaelteanlagenbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202620_XE_GewerbeIndustrie_KlimaKaelteanlagenbau (xerl:72202620_XE_GewerbeIndustrie_KlimaKaelteanlagenbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202630_XE_GewerbeIndustrie_Heizungsinstallation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202630_XE_GewerbeIndustrie_Heizungsinstallation (xerl:72202630_XE_GewerbeIndustrie_Heizungsinstallation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202640_XE_GewerbeIndustrie_Sanitaerinstallation",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202640_XE_GewerbeIndustrie_Sanitaerinstallation (xerl:72202640_XE_GewerbeIndustrie_Sanitaerinstallation)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202700_XE_GewerbeIndustrie_Bodenleger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202700_XE_GewerbeIndustrie_Bodenleger (xerl:72202700_XE_GewerbeIndustrie_Bodenleger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202710_XE_GewerbeIndustrie_Fliesenleger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202710_XE_GewerbeIndustrie_Fliesenleger (xerl:72202710_XE_GewerbeIndustrie_Fliesenleger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202720_XE_GewerbeIndustrie_Teppichleger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202720_XE_GewerbeIndustrie_Teppichleger (xerl:72202720_XE_GewerbeIndustrie_Teppichleger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202730_XE_GewerbeIndustrie_Parkettleger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202730_XE_GewerbeIndustrie_Parkettleger (xerl:72202730_XE_GewerbeIndustrie_Parkettleger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202740_XE_GewerbeIndustrie_MalerLackierer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202740_XE_GewerbeIndustrie_MalerLackierer (xerl:72202740_XE_GewerbeIndustrie_MalerLackierer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202750_XE_GewerbeIndustrie_Messebau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202750_XE_GewerbeIndustrie_Messebau (xerl:72202750_XE_GewerbeIndustrie_Messebau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202760_XE_GewerbeIndustrie_Markisenbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202760_XE_GewerbeIndustrie_Markisenbau (xerl:72202760_XE_GewerbeIndustrie_Markisenbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72202770_XE_GewerbeIndustrie_GartenLandschaftsbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72202770_XE_GewerbeIndustrie_GartenLandschaftsbau (xerl:72202770_XE_GewerbeIndustrie_GartenLandschaftsbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72203000_XE_GewerbeIndustrie_Bergbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72203000_XE_GewerbeIndustrie_Bergbau (xerl:72203000_XE_GewerbeIndustrie_Bergbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72203500_XE_GewerbeIndustrie_Chemie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72203500_XE_GewerbeIndustrie_Chemie (xerl:72203500_XE_GewerbeIndustrie_Chemie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72203610_XE_GewerbeIndustrie_Fotolabor",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72203610_XE_GewerbeIndustrie_Fotolabor (xerl:72203610_XE_GewerbeIndustrie_Fotolabor)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72203650_XE_GewerbeIndustrie_Glaserei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72203650_XE_GewerbeIndustrie_Glaserei (xerl:72203650_XE_GewerbeIndustrie_Glaserei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204000_XE_GewerbeIndustrie_Maschinenbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204000_XE_GewerbeIndustrie_Maschinenbau (xerl:72204000_XE_GewerbeIndustrie_Maschinenbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204100_XE_GewerbeIndustrie_Fahrzeugbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204100_XE_GewerbeIndustrie_Fahrzeugbau (xerl:72204100_XE_GewerbeIndustrie_Fahrzeugbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204110_XE_GewerbeIndustrie_Landmaschinenbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204110_XE_GewerbeIndustrie_Landmaschinenbau (xerl:72204110_XE_GewerbeIndustrie_Landmaschinenbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204120_XE_GewerbeIndustrie_Bootsbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204120_XE_GewerbeIndustrie_Bootsbau (xerl:72204120_XE_GewerbeIndustrie_Bootsbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204500_XE_GewerbeIndustrie_Metallverarbeitung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204500_XE_GewerbeIndustrie_Metallverarbeitung (xerl:72204500_XE_GewerbeIndustrie_Metallverarbeitung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204510_XE_GewerbeIndustrie_Metallbau",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204510_XE_GewerbeIndustrie_Metallbau (xerl:72204510_XE_GewerbeIndustrie_Metallbau)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204520_XE_GewerbeIndustrie_Schlosserei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204520_XE_GewerbeIndustrie_Schlosserei (xerl:72204520_XE_GewerbeIndustrie_Schlosserei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72204530_XE_GewerbeIndustrie_Schmiede",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72204530_XE_GewerbeIndustrie_Schmiede (xerl:72204530_XE_GewerbeIndustrie_Schmiede)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72205000_XE_GewerbeIndustrie_TextilBekleidungsindustrie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72205000_XE_GewerbeIndustrie_TextilBekleidungsindustrie (xerl:72205000_XE_GewerbeIndustrie_TextilBekleidungsindustrie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72205500_XE_GewerbeIndustrie_TransportLagerwesen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72205500_XE_GewerbeIndustrie_TransportLagerwesen (xerl:72205500_XE_GewerbeIndustrie_TransportLagerwesen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206010_XE_GewerbeIndustrie_Toepferei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206010_XE_GewerbeIndustrie_Toepferei (xerl:72206010_XE_GewerbeIndustrie_Toepferei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206020_XE_GewerbeIndustrie_Seilerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206020_XE_GewerbeIndustrie_Seilerei (xerl:72206020_XE_GewerbeIndustrie_Seilerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206030_XE_GewerbeIndustrie_Polsterei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206030_XE_GewerbeIndustrie_Polsterei (xerl:72206030_XE_GewerbeIndustrie_Polsterei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206040_XE_GewerbeIndustrie_Sattlerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206040_XE_GewerbeIndustrie_Sattlerei (xerl:72206040_XE_GewerbeIndustrie_Sattlerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206050_XE_GewerbeIndustrie_Segelmacherei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206050_XE_GewerbeIndustrie_Segelmacherei (xerl:72206050_XE_GewerbeIndustrie_Segelmacherei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206060_XE_GewerbeIndustrie_Korbmacherei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206060_XE_GewerbeIndustrie_Korbmacherei (xerl:72206060_XE_GewerbeIndustrie_Korbmacherei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72206070_XE_GewerbeIndustrie_Buchbinderei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72206070_XE_GewerbeIndustrie_Buchbinderei (xerl:72206070_XE_GewerbeIndustrie_Buchbinderei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72209990_XE_GewerbeIndustrie_GewerbeIndustrieSonstiges",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_GewerbeIndustrie",
        "type": "class",
        "text": "72209990_XE_GewerbeIndustrie_GewerbeIndustrieSonstiges (xerl:72209990_XE_GewerbeIndustrie_GewerbeIndustrieSonstiges)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301000_XE_Einzelhandel_Lebensmittelgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301000_XE_Einzelhandel_Lebensmittelgeschaeft (xerl:72301000_XE_Einzelhandel_Lebensmittelgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301005_XE_Einzelhandel_Baeckerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301005_XE_Einzelhandel_Baeckerei (xerl:72301005_XE_Einzelhandel_Baeckerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301010_XE_Einzelhandel_Fleischerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301010_XE_Einzelhandel_Fleischerei (xerl:72301010_XE_Einzelhandel_Fleischerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301012_XE_Einzelhandel_Fischgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301012_XE_Einzelhandel_Fischgeschaeft (xerl:72301012_XE_Einzelhandel_Fischgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301015_XE_Einzelhandel_Kaesegeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301015_XE_Einzelhandel_Kaesegeschaeft (xerl:72301015_XE_Einzelhandel_Kaesegeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301020_XE_Einzelhandel_Suesswarengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301020_XE_Einzelhandel_Suesswarengeschaeft (xerl:72301020_XE_Einzelhandel_Suesswarengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301025_XE_Einzelhandel_Kaffeegeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301025_XE_Einzelhandel_Kaffeegeschaeft (xerl:72301025_XE_Einzelhandel_Kaffeegeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301026_XE_Einzelhandel_Teegeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301026_XE_Einzelhandel_Teegeschaeft (xerl:72301026_XE_Einzelhandel_Teegeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301030_XE_Einzelhandel_Delikatessengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301030_XE_Einzelhandel_Delikatessengeschaeft (xerl:72301030_XE_Einzelhandel_Delikatessengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301035_XE_Einzelhandel_ObstGemuesegeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301035_XE_Einzelhandel_ObstGemuesegeschaeft (xerl:72301035_XE_Einzelhandel_ObstGemuesegeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301040_XE_Einzelhandel_Getraenkemarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301040_XE_Einzelhandel_Getraenkemarkt (xerl:72301040_XE_Einzelhandel_Getraenkemarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301045_XE_Einzelhandel_Weinhandlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301045_XE_Einzelhandel_Weinhandlung (xerl:72301045_XE_Einzelhandel_Weinhandlung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301050_XE_Einzelhandel_Bioladen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301050_XE_Einzelhandel_Bioladen (xerl:72301050_XE_Einzelhandel_Bioladen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301060_XE_Einzelhandel_Reformhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301060_XE_Einzelhandel_Reformhaus (xerl:72301060_XE_Einzelhandel_Reformhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301070_XE_Einzelhandel_Supermarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301070_XE_Einzelhandel_Supermarkt (xerl:72301070_XE_Einzelhandel_Supermarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301080_XE_Einzelhandel_Kiosk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301080_XE_Einzelhandel_Kiosk (xerl:72301080_XE_Einzelhandel_Kiosk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301085_XE_Einzelhandel_Tabakwarengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301085_XE_Einzelhandel_Tabakwarengeschaeft (xerl:72301085_XE_Einzelhandel_Tabakwarengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301100_XE_Einzelhandel_Bekleidungsgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301100_XE_Einzelhandel_Bekleidungsgeschaeft (xerl:72301100_XE_Einzelhandel_Bekleidungsgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301110_XE_Einzelhandel_Lederwarengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301110_XE_Einzelhandel_Lederwarengeschaeft (xerl:72301110_XE_Einzelhandel_Lederwarengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301120_XE_Einzelhandel_Schuhgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301120_XE_Einzelhandel_Schuhgeschaeft (xerl:72301120_XE_Einzelhandel_Schuhgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301130_XE_Einzelhandel_SportOutdoorgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301130_XE_Einzelhandel_SportOutdoorgeschaeft (xerl:72301130_XE_Einzelhandel_SportOutdoorgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301140_XE_Einzelhandel_Kaufhaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301140_XE_Einzelhandel_Kaufhaus (xerl:72301140_XE_Einzelhandel_Kaufhaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301150_XE_Einzelhandel_SecondHandLaden",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301150_XE_Einzelhandel_SecondHandLaden (xerl:72301150_XE_Einzelhandel_SecondHandLaden)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301160_XE_Einzelhandel_Stoffgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301160_XE_Einzelhandel_Stoffgeschaeft (xerl:72301160_XE_Einzelhandel_Stoffgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301200_XE_Einzelhandel_DrogerieParfuemerie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301200_XE_Einzelhandel_DrogerieParfuemerie (xerl:72301200_XE_Einzelhandel_DrogerieParfuemerie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301210_XE_Einzelhandel_Sanitaetshaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301210_XE_Einzelhandel_Sanitaetshaus (xerl:72301210_XE_Einzelhandel_Sanitaetshaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301220_XE_Einzelhandel_Erotikshop",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301220_XE_Einzelhandel_Erotikshop (xerl:72301220_XE_Einzelhandel_Erotikshop)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301300_XE_Einzelhandel_Buchhandlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301300_XE_Einzelhandel_Buchhandlung (xerl:72301300_XE_Einzelhandel_Buchhandlung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301310_XE_Einzelhandel_Zeitschriftenhandel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301310_XE_Einzelhandel_Zeitschriftenhandel (xerl:72301310_XE_Einzelhandel_Zeitschriftenhandel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301320_XE_Einzelhandel_Buerobedarf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301320_XE_Einzelhandel_Buerobedarf (xerl:72301320_XE_Einzelhandel_Buerobedarf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301330_XE_Einzelhandel_Bastelgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301330_XE_Einzelhandel_Bastelgeschaeft (xerl:72301330_XE_Einzelhandel_Bastelgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301340_XE_Einzelhandel_Geschenkeladen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301340_XE_Einzelhandel_Geschenkeladen (xerl:72301340_XE_Einzelhandel_Geschenkeladen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301350_XE_Einzelhandel_ReligioesesGeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301350_XE_Einzelhandel_ReligioesesGeschaeft (xerl:72301350_XE_Einzelhandel_ReligioesesGeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301400_XE_Einzelhandel_ElektroHaushalt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301400_XE_Einzelhandel_ElektroHaushalt (xerl:72301400_XE_Einzelhandel_ElektroHaushalt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301410_XE_Einzelhandel_Elektronikgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301410_XE_Einzelhandel_Elektronikgeschaeft (xerl:72301410_XE_Einzelhandel_Elektronikgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301420_XE_Einzelhandel_Computergeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301420_XE_Einzelhandel_Computergeschaeft (xerl:72301420_XE_Einzelhandel_Computergeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301430_XE_Einzelhandel_TelefonMobilfunkladen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301430_XE_Einzelhandel_TelefonMobilfunkladen (xerl:72301430_XE_Einzelhandel_TelefonMobilfunkladen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301440_XE_Einzelhandel_Fotogeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301440_XE_Einzelhandel_Fotogeschaeft (xerl:72301440_XE_Einzelhandel_Fotogeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301450_XE_Einzelhandel_JuwelierUhrmacher",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301450_XE_Einzelhandel_JuwelierUhrmacher (xerl:72301450_XE_Einzelhandel_JuwelierUhrmacher)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301460_XE_Einzelhandel_Haushaltswarengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301460_XE_Einzelhandel_Haushaltswarengeschaeft (xerl:72301460_XE_Einzelhandel_Haushaltswarengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301470_XE_Einzelhandel_Leuchtengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301470_XE_Einzelhandel_Leuchtengeschaeft (xerl:72301470_XE_Einzelhandel_Leuchtengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301480_XE_Einzelhandel_Naehmaschinengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301480_XE_Einzelhandel_Naehmaschinengeschaeft (xerl:72301480_XE_Einzelhandel_Naehmaschinengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301500_XE_Einzelhandel_Moebelgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301500_XE_Einzelhandel_Moebelgeschaeft (xerl:72301500_XE_Einzelhandel_Moebelgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301510_XE_Einzelhandel_Baumarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301510_XE_Einzelhandel_Baumarkt (xerl:72301510_XE_Einzelhandel_Baumarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301515_XE_Einzelhandel_Malerbedarf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301515_XE_Einzelhandel_Malerbedarf (xerl:72301515_XE_Einzelhandel_Malerbedarf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301520_XE_Einzelhandel_PlanzenGartenmarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301520_XE_Einzelhandel_PlanzenGartenmarkt (xerl:72301520_XE_Einzelhandel_PlanzenGartenmarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301530_XE_Einzelhandel_Landhandel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301530_XE_Einzelhandel_Landhandel (xerl:72301530_XE_Einzelhandel_Landhandel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301540_XE_Einzelhandel_Zoohandlung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301540_XE_Einzelhandel_Zoohandlung (xerl:72301540_XE_Einzelhandel_Zoohandlung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301550_XE_Einzelhandel_Jagdausstattung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301550_XE_Einzelhandel_Jagdausstattung (xerl:72301550_XE_Einzelhandel_Jagdausstattung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301560_XE_Einzelhandel_Angelausstattung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301560_XE_Einzelhandel_Angelausstattung (xerl:72301560_XE_Einzelhandel_Angelausstattung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301570_XE_Einzelhandel_Waffenhandel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301570_XE_Einzelhandel_Waffenhandel (xerl:72301570_XE_Einzelhandel_Waffenhandel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301600_XE_Einzelhandel_Gebrauchtwaren",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301600_XE_Einzelhandel_Gebrauchtwaren (xerl:72301600_XE_Einzelhandel_Gebrauchtwaren)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301610_XE_Einzelhandel_AntiquitaetenKunstgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301610_XE_Einzelhandel_AntiquitaetenKunstgeschaeft (xerl:72301610_XE_Einzelhandel_AntiquitaetenKunstgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301620_XE_Einzelhandel_Musikaliengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301620_XE_Einzelhandel_Musikaliengeschaeft (xerl:72301620_XE_Einzelhandel_Musikaliengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301630_XE_Einzelhandel_Musikgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301630_XE_Einzelhandel_Musikgeschaeft (xerl:72301630_XE_Einzelhandel_Musikgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301640_XE_Einzelhandel_Kunsthandwerk",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301640_XE_Einzelhandel_Kunsthandwerk (xerl:72301640_XE_Einzelhandel_Kunsthandwerk)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301700_XE_Einzelhandel_Autohaus",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301700_XE_Einzelhandel_Autohaus (xerl:72301700_XE_Einzelhandel_Autohaus)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301710_XE_Einzelhandel_Motorradgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301710_XE_Einzelhandel_Motorradgeschaeft (xerl:72301710_XE_Einzelhandel_Motorradgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301720_XE_Einzelhandel_Fahrradgeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301720_XE_Einzelhandel_Fahrradgeschaeft (xerl:72301720_XE_Einzelhandel_Fahrradgeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301800_XE_Einzelhandel_Spielwarengeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301800_XE_Einzelhandel_Spielwarengeschaeft (xerl:72301800_XE_Einzelhandel_Spielwarengeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301810_XE_Einzelhandel_Modellbaugeschaeft",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301810_XE_Einzelhandel_Modellbaugeschaeft (xerl:72301810_XE_Einzelhandel_Modellbaugeschaeft)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72301820_XE_Einzelhandel_Babyfachmarkt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72301820_XE_Einzelhandel_Babyfachmarkt (xerl:72301820_XE_Einzelhandel_Babyfachmarkt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72302330_XE_Dienstleistung_MedizinischeGeraete",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72302330_XE_Dienstleistung_MedizinischeGeraete (xerl:72302330_XE_Dienstleistung_MedizinischeGeraete)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72309990_XE_Einzelhandel_EinzelhandelSonstiger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Einzelhandel",
        "type": "class",
        "text": "72309990_XE_Einzelhandel_EinzelhandelSonstiger (xerl:72309990_XE_Einzelhandel_EinzelhandelSonstiger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401000_XE_Dienstleistung_Schneider",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401000_XE_Dienstleistung_Schneider (xerl:72401000_XE_Dienstleistung_Schneider)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401010_XE_Dienstleistung_Schuhmacher",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401010_XE_Dienstleistung_Schuhmacher (xerl:72401010_XE_Dienstleistung_Schuhmacher)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401020_XE_Dienstleistung_Textilreinigung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401020_XE_Dienstleistung_Textilreinigung (xerl:72401020_XE_Dienstleistung_Textilreinigung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401100_XE_Dienstleistung_Friseur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401100_XE_Dienstleistung_Friseur (xerl:72401100_XE_Dienstleistung_Friseur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401110_XE_Dienstleistung_WellnessBeauty",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401110_XE_Dienstleistung_WellnessBeauty (xerl:72401110_XE_Dienstleistung_WellnessBeauty)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401120_XE_Dienstleistung_Tattoostudio",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401120_XE_Dienstleistung_Tattoostudio (xerl:72401120_XE_Dienstleistung_Tattoostudio)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401200_XE_Dienstleistung_Schluesseldienst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401200_XE_Dienstleistung_Schluesseldienst (xerl:72401200_XE_Dienstleistung_Schluesseldienst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401210_XE_Dienstleistung_GoldschmiedFeinmechaniker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401210_XE_Dienstleistung_GoldschmiedFeinmechaniker (xerl:72401210_XE_Dienstleistung_GoldschmiedFeinmechaniker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401220_XE_Dienstleistung_Copyshop",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401220_XE_Dienstleistung_Copyshop (xerl:72401220_XE_Dienstleistung_Copyshop)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401230_XE_Dienstleistung_PostPaketDienst",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401230_XE_Dienstleistung_PostPaketDienst (xerl:72401230_XE_Dienstleistung_PostPaketDienst)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401300_XE_Dienstleistung_BankFinanzwesen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401300_XE_Dienstleistung_BankFinanzwesen (xerl:72401300_XE_Dienstleistung_BankFinanzwesen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401310_XE_Dienstleistung_Geldwechsel",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401310_XE_Dienstleistung_Geldwechsel (xerl:72401310_XE_Dienstleistung_Geldwechsel)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401320_XE_Dienstleistung_GeldverleihPfandleihe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401320_XE_Dienstleistung_GeldverleihPfandleihe (xerl:72401320_XE_Dienstleistung_GeldverleihPfandleihe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401350_XE_Dienstleistung_Versicherungswesen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401350_XE_Dienstleistung_Versicherungswesen (xerl:72401350_XE_Dienstleistung_Versicherungswesen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401360_XE_Dienstleistung_Steuerberater",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401360_XE_Dienstleistung_Steuerberater (xerl:72401360_XE_Dienstleistung_Steuerberater)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401370_XE_Dienstleistung_Wirtschaftspruefer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401370_XE_Dienstleistung_Wirtschaftspruefer (xerl:72401370_XE_Dienstleistung_Wirtschaftspruefer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401400_XE_Dienstleistung_Rechtsanwalt",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401400_XE_Dienstleistung_Rechtsanwalt (xerl:72401400_XE_Dienstleistung_Rechtsanwalt)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401410_XE_Dienstleistung_Notar",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401410_XE_Dienstleistung_Notar (xerl:72401410_XE_Dienstleistung_Notar)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401420_XE_Dienstleistung_Detektei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401420_XE_Dienstleistung_Detektei (xerl:72401420_XE_Dienstleistung_Detektei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401500_XE_Dienstleistung_Medien",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401500_XE_Dienstleistung_Medien (xerl:72401500_XE_Dienstleistung_Medien)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401510_XE_Dienstleistung_Werbeagentur",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401510_XE_Dienstleistung_Werbeagentur (xerl:72401510_XE_Dienstleistung_Werbeagentur)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401520_XE_Dienstleistung_Druckerei",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401520_XE_Dienstleistung_Druckerei (xerl:72401520_XE_Dienstleistung_Druckerei)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401530_XE_Dienstleistung_Fotograf",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401530_XE_Dienstleistung_Fotograf (xerl:72401530_XE_Dienstleistung_Fotograf)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401540_XE_Dienstleistung_Kuenstler",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401540_XE_Dienstleistung_Kuenstler (xerl:72401540_XE_Dienstleistung_Kuenstler)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401550_XE_Dienstleistung_Klavierstimmer",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401550_XE_Dienstleistung_Klavierstimmer (xerl:72401550_XE_Dienstleistung_Klavierstimmer)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401580_XE_Dienstleistung_Videothek",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401580_XE_Dienstleistung_Videothek (xerl:72401580_XE_Dienstleistung_Videothek)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401590_XE_Dienstleistung_InternetCafe",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401590_XE_Dienstleistung_InternetCafe (xerl:72401590_XE_Dienstleistung_InternetCafe)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401600_XE_Dienstleistung_Architekturbuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401600_XE_Dienstleistung_Architekturbuero (xerl:72401600_XE_Dienstleistung_Architekturbuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401610_XE_Dienstleistung_Innenarchitekturbuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401610_XE_Dienstleistung_Innenarchitekturbuero (xerl:72401610_XE_Dienstleistung_Innenarchitekturbuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401620_XE_Dienstleistung_Immobiliendienstleister",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401620_XE_Dienstleistung_Immobiliendienstleister (xerl:72401620_XE_Dienstleistung_Immobiliendienstleister)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401630_XE_Dienstleistung_Raumausstatter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401630_XE_Dienstleistung_Raumausstatter (xerl:72401630_XE_Dienstleistung_Raumausstatter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401640_XE_Dienstleistung_Gebaeudereinigung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401640_XE_Dienstleistung_Gebaeudereinigung (xerl:72401640_XE_Dienstleistung_Gebaeudereinigung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401650_XE_Dienstleistung_Schornsteinfeger",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401650_XE_Dienstleistung_Schornsteinfeger (xerl:72401650_XE_Dienstleistung_Schornsteinfeger)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401660_XE_Dienstleistung_Vermessungsbuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401660_XE_Dienstleistung_Vermessungsbuero (xerl:72401660_XE_Dienstleistung_Vermessungsbuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401700_XE_Dienstleistung_ITUnternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401700_XE_Dienstleistung_ITUnternehmen (xerl:72401700_XE_Dienstleistung_ITUnternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401800_XE_Dienstleistung_Lottoannahmestelle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401800_XE_Dienstleistung_Lottoannahmestelle (xerl:72401800_XE_Dienstleistung_Lottoannahmestelle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401810_XE_Dienstleistung_Wettbuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401810_XE_Dienstleistung_Wettbuero (xerl:72401810_XE_Dienstleistung_Wettbuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401820_XE_Dienstleistung_Spielhalle",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401820_XE_Dienstleistung_Spielhalle (xerl:72401820_XE_Dienstleistung_Spielhalle)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401900_XE_Dienstleistung_Autowaschanlage",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401900_XE_Dienstleistung_Autowaschanlage (xerl:72401900_XE_Dienstleistung_Autowaschanlage)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72401910_XE_Dienstleistung_Autoverwertung",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72401910_XE_Dienstleistung_Autoverwertung (xerl:72401910_XE_Dienstleistung_Autoverwertung)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402000_XE_Dienstleistung_Bestattungswesen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402000_XE_Dienstleistung_Bestattungswesen (xerl:72402000_XE_Dienstleistung_Bestattungswesen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402100_XE_Dienstleistung_Hufschmied",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402100_XE_Dienstleistung_Hufschmied (xerl:72402100_XE_Dienstleistung_Hufschmied)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402110_XE_Dienstleistung_Tierpension",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402110_XE_Dienstleistung_Tierpension (xerl:72402110_XE_Dienstleistung_Tierpension)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402200_XE_Dienstleistung_Reisebuero",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402200_XE_Dienstleistung_Reisebuero (xerl:72402200_XE_Dienstleistung_Reisebuero)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402210_XE_Dienstleistung_Reiseunternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402210_XE_Dienstleistung_Reiseunternehmen (xerl:72402210_XE_Dienstleistung_Reiseunternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402220_XE_Dienstleistung_Taxiunternehmen",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402220_XE_Dienstleistung_Taxiunternehmen (xerl:72402220_XE_Dienstleistung_Taxiunternehmen)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402230_XE_Dienstleistung_FuehrungenAnbieter",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402230_XE_Dienstleistung_FuehrungenAnbieter (xerl:72402230_XE_Dienstleistung_FuehrungenAnbieter)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402300_XE_Dienstleistung_Optiker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402300_XE_Dienstleistung_Optiker (xerl:72402300_XE_Dienstleistung_Optiker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402310_XE_Dienstleistung_Hoergeraeteakustiker",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402310_XE_Dienstleistung_Hoergeraeteakustiker (xerl:72402310_XE_Dienstleistung_Hoergeraeteakustiker)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402320_XE_Dienstleistung_Orthopaedietechnik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402320_XE_Dienstleistung_Orthopaedietechnik (xerl:72402320_XE_Dienstleistung_Orthopaedietechnik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402340_XE_Dienstleistung_LaborMedizinDiagnostik",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402340_XE_Dienstleistung_LaborMedizinDiagnostik (xerl:72402340_XE_Dienstleistung_LaborMedizinDiagnostik)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72402350_XE_Dienstleistung_Physiotherapie",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72402350_XE_Dienstleistung_Physiotherapie (xerl:72402350_XE_Dienstleistung_Physiotherapie)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/72409990_XE_Dienstleistung_DienstleistungSonstige",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Dienstleistung",
        "type": "class",
        "text": "72409990_XE_Dienstleistung_DienstleistungSonstige (xerl:72409990_XE_Dienstleistung_DienstleistungSonstige)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/90001000_XE_Sammlung_Angebot",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sammlung",
        "type": "class",
        "text": "90001000_XE_Sammlung_Angebot (xerl:90001000_XE_Sammlung_Angebot)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/90002000_XE_Sammlung_Thema",
        "parent": "http://www.xerleben.de/schema/2.0_1/XE_Sammlung",
        "type": "class",
        "text": "90002000_XE_Sammlung_Thema (xerl:90002000_XE_Sammlung_Thema)",
        "data": {}
      }
    ]
  }
}