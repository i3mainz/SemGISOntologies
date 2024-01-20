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
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/cogRailway",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/cogRailway",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/funicular",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/funicular",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/magneticLevitation",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/magneticLevitation",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/metro",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/metro",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/train",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/train",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue/tramway",
        "parent": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "type": "instance",
        "text": "RailwayTypeValue/tramway",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayTypeValue",
        "parent": "#",
        "type": "class",
        "text": "RailwayTypeValue [6]",
        "data": {}
      },
      {
        "id": "http://labs.mondeca.com/foaf/mondeca.rdf#bvatant",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "bvatant",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "parent": "#",
        "type": "class",
        "text": "Person (foaf:Person) [1]",
        "data": {}
      },
      {
        "id": "http://d-nb.info/standards/elementset/gnd#AdministrativeUnit",
        "parent": "#",
        "type": "class",
        "text": "AdministrativeUnit (gndo:AdministrativeUnit)",
        "data": {}
      },
      {
        "id": "http://d-nb.info/standards/elementset/gnd#BuildingOrMemorial",
        "parent": "#",
        "type": "class",
        "text": "BuildingOrMemorial (gndo:BuildingOrMemorial)",
        "data": {}
      },
      {
        "id": "http://d-nb.info/standards/elementset/gnd#Country",
        "parent": "#",
        "type": "class",
        "text": "Country (gndo:Country)",
        "data": {}
      },
      {
        "id": "http://d-nb.info/standards/elementset/gnd#Person",
        "parent": "#",
        "type": "class",
        "text": "Person (gndo:Person)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Airport",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Airport (planet:ontology/Airport)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Feature.html",
        "parent": "#",
        "type": "class",
        "text": "Feature (gn:Feature)",
        "data": {
          "to": {
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
              "instancecount": 3,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://dbpedia.org/ontology/Atoll",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Atoll (planet:ontology/Atoll)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Bank",
        "parent": "#",
        "type": "class",
        "text": "Bank (planet:ontology/Bank)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Bay",
        "parent": "#",
        "type": "class",
        "text": "Bay (planet:ontology/Bay)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Beach",
        "parent": "#",
        "type": "class",
        "text": "Beach (planet:ontology/Beach)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Brewery",
        "parent": "#",
        "type": "class",
        "text": "Brewery (planet:ontology/Brewery)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Bridge",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Bridge (planet:ontology/Bridge)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Building",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Building (planet:ontology/Building)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Canal",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Canal (planet:ontology/Canal)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Casino",
        "parent": "#",
        "type": "class",
        "text": "Casino (planet:ontology/Casino)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Castle",
        "parent": "#",
        "type": "class",
        "text": "Castle (planet:ontology/Castle)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Cave",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Cave (planet:ontology/Cave)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Cemetery",
        "parent": "#",
        "type": "class",
        "text": "Cemetery (planet:ontology/Cemetery)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Church",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Church (planet:ontology/Church)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Cinema",
        "parent": "#",
        "type": "class",
        "text": "Cinema (planet:ontology/Cinema)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/City",
        "parent": "#",
        "type": "class",
        "text": "City (planet:ontology/City)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Continent",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Continent (planet:ontology/Continent)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Country",
        "parent": "http://schema.org/AdministrativeArea",
        "type": "class",
        "text": "Country (planet:ontology/Country)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AdministrativeArea.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "AdministrativeArea (shema:AdministrativeArea)",
        "data": {
          "to": {
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
              "instancecount": 4,
              "http://www.w3.org/2002/07/owl#Class": 4
            }
          },
          "from": {
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 2
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://dbpedia.org/ontology/Escalator",
        "parent": "#",
        "type": "class",
        "text": "Escalator (planet:ontology/Escalator)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Factory",
        "parent": "#",
        "type": "class",
        "text": "Factory (planet:ontology/Factory)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Forest",
        "parent": "#",
        "type": "class",
        "text": "Forest (planet:ontology/Forest)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Fort",
        "parent": "#",
        "type": "class",
        "text": "Fort (planet:ontology/Fort)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/GolfCourse",
        "parent": "#",
        "type": "class",
        "text": "GolfCourse (planet:ontology/GolfCourse)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Harbor",
        "parent": "#",
        "type": "class",
        "text": "Harbor (planet:ontology/Harbor)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/HistoricPlace",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "HistoricPlace (planet:ontology/HistoricPlace)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Hospital",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Hospital (planet:ontology/Hospital)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Hotel",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Hotel (planet:ontology/Hotel)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Island",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Island (planet:ontology/Island)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Lake",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Lake (planet:ontology/Lake)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Library",
        "parent": "#",
        "type": "class",
        "text": "Library (planet:ontology/Library)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Lighthouse",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Lighthouse (planet:ontology/Lighthouse)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Mill",
        "parent": "#",
        "type": "class",
        "text": "Mill (planet:ontology/Mill)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Mine",
        "parent": "#",
        "type": "class",
        "text": "Mine (planet:ontology/Mine)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Monastery",
        "parent": "#",
        "type": "class",
        "text": "Monastery (planet:ontology/Monastery)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Monument",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Monument (planet:ontology/Monument)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Mosque",
        "parent": "#",
        "type": "class",
        "text": "Mosque (planet:ontology/Mosque)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Mountain",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mountain (planet:ontology/Mountain)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/MountainPass",
        "parent": "#",
        "type": "class",
        "text": "MountainPass (planet:ontology/MountainPass)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Museum",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Museum (planet:ontology/Museum)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Park",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Park (planet:ontology/Park)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Parliament",
        "parent": "#",
        "type": "class",
        "text": "Parliament (planet:ontology/Parliament)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Person",
        "parent": "#",
        "type": "class",
        "text": "Person (planet:ontology/Person)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/PowerStation",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "PowerStation (planet:ontology/PowerStation)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Prison",
        "parent": "#",
        "type": "class",
        "text": "Prison (planet:ontology/Prison)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/ProtectedArea",
        "parent": "#",
        "type": "class",
        "text": "ProtectedArea (planet:ontology/ProtectedArea)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/RadioStation",
        "parent": "#",
        "type": "class",
        "text": "RadioStation (planet:ontology/RadioStation)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/RailwayStation",
        "parent": "#",
        "type": "class",
        "text": "RailwayStation (planet:ontology/RailwayStation)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/RailwayTunnel",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "RailwayTunnel (planet:ontology/RailwayTunnel)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Restaurant",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Restaurant (planet:ontology/Restaurant)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/River",
        "parent": "#",
        "type": "class",
        "text": "River (planet:ontology/River)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Road",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Road (planet:ontology/Road)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/RoadJunction",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "RoadJunction (planet:ontology/RoadJunction)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/RoadTunnel",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "RoadTunnel (planet:ontology/RoadTunnel)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/School",
        "parent": "#",
        "type": "class",
        "text": "School (planet:ontology/School)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Sea",
        "parent": "#",
        "type": "class",
        "text": "Sea (planet:ontology/Sea)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/ShoppingMall",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "ShoppingMall (planet:ontology/ShoppingMall)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Stadium",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Stadium (planet:ontology/Stadium)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Stream",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Stream (planet:ontology/Stream)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Synagogue",
        "parent": "#",
        "type": "class",
        "text": "Synagogue (planet:ontology/Synagogue)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Temple",
        "parent": "#",
        "type": "class",
        "text": "Temple (planet:ontology/Temple)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Theatre",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Theatre (planet:ontology/Theatre)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Tower",
        "parent": "#",
        "type": "class",
        "text": "Tower (planet:ontology/Tower)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Tunnel",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Tunnel (planet:ontology/Tunnel)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/University",
        "parent": "#",
        "type": "class",
        "text": "University (planet:ontology/University)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Valley",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Valley (planet:ontology/Valley)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/WaterTower",
        "parent": "#",
        "type": "class",
        "text": "WaterTower (planet:ontology/WaterTower)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Watermill",
        "parent": "#",
        "type": "class",
        "text": "Watermill (planet:ontology/Watermill)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Windmill",
        "parent": "#",
        "type": "class",
        "text": "Windmill (planet:ontology/Windmill)",
        "data": {}
      },
      {
        "id": "http://dbpedia.org/ontology/Zoo",
        "parent": "#",
        "type": "class",
        "text": "Zoo (planet:ontology/Zoo)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/ad/4.0#Address",
        "parent": "#",
        "type": "class",
        "text": "Address",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/ad/4.0#AdminUnitName",
        "parent": "#",
        "type": "class",
        "text": "AdminUnitName",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/ad/4.0#PostalDescriptor",
        "parent": "#",
        "type": "class",
        "text": "PostalDescriptor",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeBoundary",
        "parent": "http://linkedgeodata.org/ontology/Boundary",
        "type": "class",
        "text": "AdministrativeBoundary (inspire-am:AdministrativeBoundary)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Boundary",
        "parent": "#",
        "type": "class",
        "text": "Boundary (lgv:Boundary)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AdministrativeUnit.html",
        "parent": "#",
        "type": "class",
        "text": "AdministrativeUnit (inspire-am:AdministrativeUnit)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2002/07/owl#equivalentClass": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 2
            }
          },
          "from": {}
        },
        "instancecount": 4
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/am/4.0#Condominium",
        "parent": "#",
        "type": "class",
        "text": "Condominium (inspire-am:Condominium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ManagementRestrictionOrRegulationZone.html",
        "parent": "#",
        "type": "class",
        "text": "ManagementRestrictionOrRegulationZone (inspire-am:ManagementRestrictionOrRegulationZone)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AbstractBuilding.html",
        "parent": "#",
        "type": "class",
        "text": "AbstractBuilding (inspire-bubase:AbstractBuilding)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Building.html",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "Building (inspire-bubase:Building)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/gml#AbstractFeature",
        "parent": "#",
        "type": "class",
        "text": "AbstractFeature (gml:AbstractFeature)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/bu/4.0#ControlTower",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Turm",
        "type": "class",
        "text": "ControlTower",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Turm.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Turm (aaa6:AX_Turm)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/cp/4.0#CadastralParcel",
        "parent": "#",
        "type": "class",
        "text": "CadastralParcel (inspire-cp:CadastralParcel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_SpotElevation.html",
        "parent": "#",
        "type": "class",
        "text": "SpotElevation (SpotElevation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ExistingLandUseObject.html",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "ExistingLandUseObject (inspire-elu:ExistingLandUseObject)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/er/4.0#HydroPowerPlant",
        "parent": "#",
        "type": "class",
        "text": "HydroPowerPlant",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/gn/4.0#GeographicalName",
        "parent": "#",
        "type": "class",
        "text": "GeographicalName",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/gn/4.0#NamedPlace",
        "parent": "#",
        "type": "class",
        "text": "NamedPlace",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-n/4.0#WatercourseLink",
        "parent": "#",
        "type": "class",
        "text": "WatercourseLink (inspire-hy-n:WatercourseLink)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Crossing.html",
        "parent": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#ManMadeObject",
        "type": "class",
        "text": "Crossing (Crossing)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ManMadeObject.html",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "ManMadeObject (ManMadeObject)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#DamOrWeir",
        "parent": "#",
        "type": "class",
        "text": "DamOrWeir",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#Falls",
        "parent": "#",
        "type": "class",
        "text": "Falls",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#Ford",
        "parent": "#",
        "type": "class",
        "text": "Ford",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#Shore",
        "parent": "#",
        "type": "class",
        "text": "Shore",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#StandingWater",
        "parent": "#",
        "type": "class",
        "text": "StandingWater",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#Watercourse",
        "parent": "#",
        "type": "class",
        "text": "Watercourse",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/hy-p/4.0#Wetland",
        "parent": "#",
        "type": "class",
        "text": "Wetland",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_MaritimeZone.html",
        "parent": "#",
        "type": "class",
        "text": "MaritimeZone (MaritimeZone)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/sr/4.0#Coastline",
        "parent": "#",
        "type": "class",
        "text": "Coastline",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/sr/4.0#Sea",
        "parent": "#",
        "type": "class",
        "text": "Sea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-a/4.0#AerodromeArea",
        "parent": "#",
        "type": "class",
        "text": "AerodromeArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-a/4.0#ApronArea",
        "parent": "#",
        "type": "class",
        "text": "ApronArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-a/4.0#RunwayArea",
        "parent": "#",
        "type": "class",
        "text": "RunwayArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-a/4.0#TaxiwayArea",
        "parent": "#",
        "type": "class",
        "text": "TaxiwayArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-c/4.0#CablewayLink",
        "parent": "#",
        "type": "class",
        "text": "CablewayLink",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-c/4.0#RailwayLink",
        "parent": "#",
        "type": "class",
        "text": "RailwayLink",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayArea",
        "parent": "#",
        "type": "class",
        "text": "RailwayArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayLine",
        "parent": "#",
        "type": "class",
        "text": "RailwayLine",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayLink",
        "parent": "#",
        "type": "class",
        "text": "RailwayLink",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayStationArea",
        "parent": "#",
        "type": "class",
        "text": "RailwayStationArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ra/4.0#RailwayStationNode",
        "parent": "#",
        "type": "class",
        "text": "RailwayStationNode",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ro/4.0#Road",
        "parent": "#",
        "type": "class",
        "text": "Road",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ro/4.0#RoadArea",
        "parent": "#",
        "type": "class",
        "text": "RoadArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ro/4.0#RoadLink",
        "parent": "#",
        "type": "class",
        "text": "RoadLink",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ro/4.0#RoadServiceArea",
        "parent": "#",
        "type": "class",
        "text": "RoadServiceArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-ro/4.0#RoadServiceType",
        "parent": "#",
        "type": "class",
        "text": "RoadServiceType",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#Beacon",
        "parent": "#",
        "type": "class",
        "text": "Beacon",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#Buoy",
        "parent": "#",
        "type": "class",
        "text": "Buoy",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#FerryCrossing",
        "parent": "#",
        "type": "class",
        "text": "FerryCrossing",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#InlandWaterway",
        "parent": "#",
        "type": "class",
        "text": "InlandWaterway",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#PortArea",
        "parent": "#",
        "type": "class",
        "text": "PortArea",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#Waterway",
        "parent": "#",
        "type": "class",
        "text": "Waterway",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn-w/4.0#WaterwayLink",
        "parent": "#",
        "type": "class",
        "text": "WaterwayLink",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/tn/4.0#MarkerPost",
        "parent": "#",
        "type": "class",
        "text": "MarkerPost",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/ugs/4.0#PumpingStation",
        "parent": "#",
        "type": "class",
        "text": "PumpingStation",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_GovernmentalService.html",
        "parent": "#",
        "type": "class",
        "text": "GovernmentalService (inspire-us-govserv:GovernmentalService)",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/us-net-common/4.0#Tower",
        "parent": "#",
        "type": "class",
        "text": "Tower",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/wfd/4.0#WFDLake",
        "parent": "#",
        "type": "class",
        "text": "WFDLake",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/wfd/4.0#WFDRiver",
        "parent": "#",
        "type": "class",
        "text": "WFDRiver",
        "data": {}
      },
      {
        "id": "http://inspire.ec.europa.eu/schemas/wfd/4.0#WFDWaterBody",
        "parent": "#",
        "type": "class",
        "text": "WFDWaterBody",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/AbandonedStation",
        "parent": "#",
        "type": "class",
        "text": "AbandonedStation (lgv:AbandonedStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Administrative",
        "parent": "#",
        "type": "class",
        "text": "Administrative (lgv:Administrative)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Aerodrome",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Aerodrome (lgv:Aerodrome)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Aeroway",
        "parent": "#",
        "type": "class",
        "text": "Aeroway (lgv:Aeroway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/AerowayGate",
        "parent": "#",
        "type": "class",
        "text": "AerowayGate (lgv:AerowayGate)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/AerowayTower",
        "parent": "#",
        "type": "class",
        "text": "AerowayTower (lgv:AerowayTower)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Airport",
        "parent": "#",
        "type": "class",
        "text": "Airport (lgv:Airport)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Allotments",
        "parent": "#",
        "type": "class",
        "text": "Allotments (lgv:Allotments)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Antenna",
        "parent": "#",
        "type": "class",
        "text": "Antenna (lgv:Antenna)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Apartment",
        "parent": "#",
        "type": "class",
        "text": "Apartment (lgv:Apartment)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Aquarium",
        "parent": "#",
        "type": "class",
        "text": "Aquarium (lgv:Aquarium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Aqueduct",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Aqueduct (lgv:Aqueduct)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bakery",
        "parent": "#",
        "type": "class",
        "text": "Bakery (lgv:Bakery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bank",
        "parent": "#",
        "type": "class",
        "text": "Bank (lgv:Bank)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bar",
        "parent": "#",
        "type": "class",
        "text": "Bar (lgv:Bar)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Barracks",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Barracks (lgv:Barracks)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BasicHut",
        "parent": "#",
        "type": "class",
        "text": "BasicHut (lgv:BasicHut)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Battlefield",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Battlefield (lgv:Battlefield)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bay",
        "parent": "#",
        "type": "class",
        "text": "Bay (lgv:Bay)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Beach",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Beach (lgv:Beach)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BedAndBreakfast",
        "parent": "#",
        "type": "class",
        "text": "BedAndBreakfast (lgv:BedAndBreakfast)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bowling",
        "parent": "#",
        "type": "class",
        "text": "Bowling (lgv:Bowling)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Box",
        "parent": "#",
        "type": "class",
        "text": "Box (lgv:Box)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Brewery",
        "parent": "#",
        "type": "class",
        "text": "Brewery (lgv:Brewery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Bridge",
        "parent": "#",
        "type": "class",
        "text": "Bridge (lgv:Bridge)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BuildingBarn",
        "parent": "#",
        "type": "class",
        "text": "BuildingBarn (lgv:BuildingBarn)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BuildingBunker",
        "parent": "#",
        "type": "class",
        "text": "BuildingBunker (lgv:BuildingBunker)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BuildingCommercial",
        "parent": "#",
        "type": "class",
        "text": "BuildingCommercial (lgv:BuildingCommercial)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BuildingGarage",
        "parent": "#",
        "type": "class",
        "text": "BuildingGarage (lgv:BuildingGarage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BuildingUnknown",
        "parent": "#",
        "type": "class",
        "text": "BuildingUnknown (lgv:BuildingUnknown)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BusStation",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "BusStation (lgv:BusStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/BusStop",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "BusStop (lgv:BusStop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cafe",
        "parent": "#",
        "type": "class",
        "text": "Cafe (lgv:Cafe)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CampSite",
        "parent": "#",
        "type": "class",
        "text": "CampSite (lgv:CampSite)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Canal",
        "parent": "#",
        "type": "class",
        "text": "Canal (lgv:Canal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cape",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Cape (lgv:Cape)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CarWash",
        "parent": "#",
        "type": "class",
        "text": "CarWash (lgv:CarWash)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Casino",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Casino (lgv:Casino)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Castle",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Castle (lgv:Castle)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cave",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Cave (lgv:Cave)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cemetery",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Cemetery (lgv:Cemetery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Chapel",
        "parent": "#",
        "type": "class",
        "text": "Chapel (lgv:Chapel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ChildCare",
        "parent": "#",
        "type": "class",
        "text": "ChildCare (lgv:ChildCare)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Chimney",
        "parent": "#",
        "type": "class",
        "text": "Chimney (lgv:Chimney)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Church",
        "parent": "#",
        "type": "class",
        "text": "Church (lgv:Church)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ChurchHall",
        "parent": "#",
        "type": "class",
        "text": "ChurchHall (lgv:ChurchHall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cinema",
        "parent": "#",
        "type": "class",
        "text": "Cinema (lgv:Cinema)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CircuitBreaker",
        "parent": "#",
        "type": "class",
        "text": "CircuitBreaker (lgv:CircuitBreaker)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/City",
        "parent": "#",
        "type": "class",
        "text": "City (lgv:City)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CityGate",
        "parent": "#",
        "type": "class",
        "text": "CityGate (lgv:CityGate)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Clinic",
        "parent": "#",
        "type": "class",
        "text": "Clinic (lgv:Clinic)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ClubHouse",
        "parent": "#",
        "type": "class",
        "text": "ClubHouse (lgv:ClubHouse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CommunityCenter",
        "parent": "#",
        "type": "class",
        "text": "CommunityCenter (lgv:CommunityCenter)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/CommunityCentre",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "CommunityCentre (lgv:CommunityCentre)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ConcertHall",
        "parent": "#",
        "type": "class",
        "text": "ConcertHall (lgv:ConcertHall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Construction",
        "parent": "#",
        "type": "class",
        "text": "Construction (lgv:Construction)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Country",
        "parent": "http://schema.org/AdministrativeArea",
        "type": "class",
        "text": "Country (lgv:Country)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Courthouse",
        "parent": "#",
        "type": "class",
        "text": "Courthouse (lgv:Courthouse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Crane",
        "parent": "#",
        "type": "class",
        "text": "Crane (lgv:Crane)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Crematorium",
        "parent": "#",
        "type": "class",
        "text": "Crematorium (lgv:Crematorium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Cycleway",
        "parent": "#",
        "type": "class",
        "text": "Cycleway (lgv:Cycleway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Dam",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Dam (lgv:Dam)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Dentist",
        "parent": "#",
        "type": "class",
        "text": "Dentist (lgv:Dentist)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/DepartmentStore",
        "parent": "#",
        "type": "class",
        "text": "DepartmentStore (lgv:DepartmentStore)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/DisusedStation",
        "parent": "#",
        "type": "class",
        "text": "DisusedStation (lgv:DisusedStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Ditch",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Ditch (lgv:Ditch)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Dock",
        "parent": "#",
        "type": "class",
        "text": "Dock (lgv:Dock)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Doctor",
        "parent": "#",
        "type": "class",
        "text": "Doctor (lgv:Doctor)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Doctors",
        "parent": "#",
        "type": "class",
        "text": "Doctors (lgv:Doctors)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Dormitory",
        "parent": "#",
        "type": "class",
        "text": "Dormitory (lgv:Dormitory)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Embassy",
        "parent": "#",
        "type": "class",
        "text": "Embassy (lgv:Embassy)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/EmergencyPhone",
        "parent": "#",
        "type": "class",
        "text": "EmergencyPhone (lgv:EmergencyPhone)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Factory",
        "parent": "#",
        "type": "class",
        "text": "Factory (lgv:Factory)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Farm",
        "parent": "#",
        "type": "class",
        "text": "Farm (lgv:Farm)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Farmland",
        "parent": "#",
        "type": "class",
        "text": "Farmland (lgv:Farmland)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Fence",
        "parent": "#",
        "type": "class",
        "text": "Fence (lgv:Fence)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Fingerpost",
        "parent": "#",
        "type": "class",
        "text": "Fingerpost (lgv:Fingerpost)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/FireStation",
        "parent": "#",
        "type": "class",
        "text": "FireStation (lgv:FireStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Fjord",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Fjord (lgv:Fjord)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Flagpole",
        "parent": "#",
        "type": "class",
        "text": "Flagpole (lgv:Flagpole)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Forester",
        "parent": "#",
        "type": "class",
        "text": "Forester (lgv:Forester)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Fort",
        "parent": "#",
        "type": "class",
        "text": "Fort (lgv:Fort)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Fuel",
        "parent": "#",
        "type": "class",
        "text": "Fuel (lgv:Fuel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Garage",
        "parent": "#",
        "type": "class",
        "text": "Garage (lgv:Garage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Garbage",
        "parent": "#",
        "type": "class",
        "text": "Garbage (lgv:Garbage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Garden",
        "parent": "#",
        "type": "class",
        "text": "Garden (lgv:Garden)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Generator",
        "parent": "#",
        "type": "class",
        "text": "Generator (lgv:Generator)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Geyser",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Geyser (lgv:Geyser)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Glacier",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Glacier (lgv:Glacier)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/GolfCourse",
        "parent": "#",
        "type": "class",
        "text": "GolfCourse (lgv:GolfCourse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/GraveYard",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "GraveYard (lgv:GraveYard)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Graveyard",
        "parent": "#",
        "type": "class",
        "text": "Graveyard (lgv:Graveyard)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Harbour",
        "parent": "#",
        "type": "class",
        "text": "Harbour (lgv:Harbour)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Hedge",
        "parent": "#",
        "type": "class",
        "text": "Hedge (lgv:Hedge)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Heliport",
        "parent": "#",
        "type": "class",
        "text": "Heliport (lgv:Heliport)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Highway",
        "parent": "#",
        "type": "class",
        "text": "Highway (lgv:Highway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayBarrier",
        "parent": "#",
        "type": "class",
        "text": "HighwayBarrier (lgv:HighwayBarrier)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayBusStation",
        "parent": "#",
        "type": "class",
        "text": "HighwayBusStation (lgv:HighwayBusStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayCattleGrid",
        "parent": "#",
        "type": "class",
        "text": "HighwayCattleGrid (lgv:HighwayCattleGrid)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayCheckpoint",
        "parent": "#",
        "type": "class",
        "text": "HighwayCheckpoint (lgv:HighwayCheckpoint)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayCrossing",
        "parent": "#",
        "type": "class",
        "text": "HighwayCrossing (lgv:HighwayCrossing)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayElevator",
        "parent": "#",
        "type": "class",
        "text": "HighwayElevator (lgv:HighwayElevator)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayFIXME",
        "parent": "#",
        "type": "class",
        "text": "HighwayFIXME (lgv:HighwayFIXME)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayJunction",
        "parent": "#",
        "type": "class",
        "text": "HighwayJunction (lgv:HighwayJunction)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayKissingGate",
        "parent": "#",
        "type": "class",
        "text": "HighwayKissingGate (lgv:HighwayKissingGate)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayLayby",
        "parent": "#",
        "type": "class",
        "text": "HighwayLayby (lgv:HighwayLayby)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayMilestone",
        "parent": "#",
        "type": "class",
        "text": "HighwayMilestone (lgv:HighwayMilestone)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayRoad",
        "parent": "#",
        "type": "class",
        "text": "HighwayRoad (lgv:HighwayRoad)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayRuins",
        "parent": "#",
        "type": "class",
        "text": "HighwayRuins (lgv:HighwayRuins)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayService",
        "parent": "#",
        "type": "class",
        "text": "HighwayService (lgv:HighwayService)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwaySign",
        "parent": "#",
        "type": "class",
        "text": "HighwaySign (lgv:HighwaySign)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwaySignPost",
        "parent": "#",
        "type": "class",
        "text": "HighwaySignPost (lgv:HighwaySignPost)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwaySpeedBump",
        "parent": "#",
        "type": "class",
        "text": "HighwaySpeedBump (lgv:HighwaySpeedBump)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayStop",
        "parent": "#",
        "type": "class",
        "text": "HighwayStop (lgv:HighwayStop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayStreetLamp",
        "parent": "#",
        "type": "class",
        "text": "HighwayStreetLamp (lgv:HighwayStreetLamp)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayTollBoth",
        "parent": "#",
        "type": "class",
        "text": "HighwayTollBoth (lgv:HighwayTollBoth)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayUndefined",
        "parent": "#",
        "type": "class",
        "text": "HighwayUndefined (lgv:HighwayUndefined)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HighwayUnknown",
        "parent": "#",
        "type": "class",
        "text": "HighwayUnknown (lgv:HighwayUnknown)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Hill",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Hill (lgv:Hill)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Historic",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Historic (lgv:Historic)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HistoricStation",
        "parent": "#",
        "type": "class",
        "text": "HistoricStation (lgv:HistoricStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HorseRiding",
        "parent": "#",
        "type": "class",
        "text": "HorseRiding (lgv:HorseRiding)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Hospital",
        "parent": "#",
        "type": "class",
        "text": "Hospital (lgv:Hospital)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Hostel",
        "parent": "#",
        "type": "class",
        "text": "Hostel (lgv:Hostel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HotSpring",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "HotSpring (lgv:HotSpring)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Hotel",
        "parent": "#",
        "type": "class",
        "text": "Hotel (lgv:Hotel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/HuntingLodge",
        "parent": "#",
        "type": "class",
        "text": "HuntingLodge (lgv:HuntingLodge)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Insurance",
        "parent": "#",
        "type": "class",
        "text": "Insurance (lgv:Insurance)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Island",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Island (lgv:Island)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Islet",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Islet (lgv:Islet)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Kindergarten",
        "parent": "#",
        "type": "class",
        "text": "Kindergarten (lgv:Kindergarten)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Kiosk",
        "parent": "#",
        "type": "class",
        "text": "Kiosk (lgv:Kiosk)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Landfill",
        "parent": "#",
        "type": "class",
        "text": "Landfill (lgv:Landfill)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Landuse",
        "parent": "#",
        "type": "class",
        "text": "Landuse (lgv:Landuse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LanduseCommercial",
        "parent": "#",
        "type": "class",
        "text": "LanduseCommercial (lgv:LanduseCommercial)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LanduseFarm",
        "parent": "#",
        "type": "class",
        "text": "LanduseFarm (lgv:LanduseFarm)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LanduseForest",
        "parent": "#",
        "type": "class",
        "text": "LanduseForest (lgv:LanduseForest)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LanduseWood",
        "parent": "#",
        "type": "class",
        "text": "LanduseWood (lgv:LanduseWood)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LevelCrossing",
        "parent": "#",
        "type": "class",
        "text": "LevelCrossing (lgv:LevelCrossing)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Library",
        "parent": "#",
        "type": "class",
        "text": "Library (lgv:Library)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Lighthouse",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Lighthouse (lgv:Lighthouse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Line",
        "parent": "#",
        "type": "class",
        "text": "Line (lgv:Line)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/LookoutTower",
        "parent": "#",
        "type": "class",
        "text": "LookoutTower (lgv:LookoutTower)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Mall",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mall (lgv:Mall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ManMadeFireHydrant",
        "parent": "#",
        "type": "class",
        "text": "ManMadeFireHydrant (lgv:ManMadeFireHydrant)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ManMadeStorage",
        "parent": "#",
        "type": "class",
        "text": "ManMadeStorage (lgv:ManMadeStorage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Market",
        "parent": "#",
        "type": "class",
        "text": "Market (lgv:Market)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Marketplace",
        "parent": "#",
        "type": "class",
        "text": "Marketplace (lgv:Marketplace)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Meadow",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Meadow (lgv:Meadow)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Mill",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mill (lgv:Mill)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Mine",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mine (lgv:Mine)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Mining",
        "parent": "#",
        "type": "class",
        "text": "Mining (lgv:Mining)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Monastery",
        "parent": "#",
        "type": "class",
        "text": "Monastery (lgv:Monastery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Monument",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Monument (lgv:Monument)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Moor",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Moor (lgv:Moor)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Motel",
        "parent": "#",
        "type": "class",
        "text": "Motel (lgv:Motel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Motorway",
        "parent": "#",
        "type": "class",
        "text": "Motorway (lgv:Motorway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/MountainPass",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "MountainPass (lgv:MountainPass)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Municipality",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "Municipality (lgv:Municipality)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Museum",
        "parent": "#",
        "type": "class",
        "text": "Museum (lgv:Museum)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/MusicVenue",
        "parent": "#",
        "type": "class",
        "text": "MusicVenue (lgv:MusicVenue)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/NationalPark",
        "parent": "http://linkedgeodata.org/ontology/Boundary",
        "type": "class",
        "text": "NationalPark (lgv:NationalPark)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/NaturalSpring",
        "parent": "#",
        "type": "class",
        "text": "NaturalSpring (lgv:NaturalSpring)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Observatory",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Observatory (lgv:Observatory)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Office",
        "parent": "#",
        "type": "class",
        "text": "Office (lgv:Office)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Palace",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Palace (lgv:Palace)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Park",
        "parent": "#",
        "type": "class",
        "text": "Park (lgv:Park)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Parking",
        "parent": "#",
        "type": "class",
        "text": "Parking (lgv:Parking)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Peak",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Peak (lgv:Peak)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Pedestrian",
        "parent": "#",
        "type": "class",
        "text": "Pedestrian (lgv:Pedestrian)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Peninsula",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Peninsula (lgv:Peninsula)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PetroleumWell",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "PetroleumWell (lgv:PetroleumWell)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Pharmacy",
        "parent": "#",
        "type": "class",
        "text": "Pharmacy (lgv:Pharmacy)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Pier",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Pier (lgv:Pier)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Pipeline",
        "parent": "#",
        "type": "class",
        "text": "Pipeline (lgv:Pipeline)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PlaceOfWorship",
        "parent": "#",
        "type": "class",
        "text": "PlaceOfWorship (lgv:PlaceOfWorship)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Plain",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Plain (lgv:Plain)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Plateau",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Plateau (lgv:Plateau)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Police",
        "parent": "#",
        "type": "class",
        "text": "Police (lgv:Police)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PostBox",
        "parent": "#",
        "type": "class",
        "text": "PostBox (lgv:PostBox)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PostOffice",
        "parent": "#",
        "type": "class",
        "text": "PostOffice (lgv:PostOffice)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Power",
        "parent": "#",
        "type": "class",
        "text": "Power (lgv:Power)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerConstruction",
        "parent": "#",
        "type": "class",
        "text": "PowerConstruction (lgv:PowerConstruction)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerPole",
        "parent": "#",
        "type": "class",
        "text": "PowerPole (lgv:PowerPole)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerPylon",
        "parent": "#",
        "type": "class",
        "text": "PowerPylon (lgv:PowerPylon)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerStation",
        "parent": "#",
        "type": "class",
        "text": "PowerStation (lgv:PowerStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerSwitch",
        "parent": "#",
        "type": "class",
        "text": "PowerSwitch (lgv:PowerSwitch)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PowerTower",
        "parent": "#",
        "type": "class",
        "text": "PowerTower (lgv:PowerTower)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Preschool",
        "parent": "#",
        "type": "class",
        "text": "Preschool (lgv:Preschool)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Prison",
        "parent": "#",
        "type": "class",
        "text": "Prison (lgv:Prison)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ProtectedArea",
        "parent": "http://linkedgeodata.org/ontology/Boundary",
        "type": "class",
        "text": "ProtectedArea (lgv:ProtectedArea)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/PublicBuilding",
        "parent": "#",
        "type": "class",
        "text": "PublicBuilding (lgv:PublicBuilding)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Quarry",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Quarry (lgv:Quarry)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Rail",
        "parent": "#",
        "type": "class",
        "text": "Rail (lgv:Rail)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Railway",
        "parent": "#",
        "type": "class",
        "text": "Railway (lgv:Railway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayConstruction",
        "parent": "#",
        "type": "class",
        "text": "RailwayConstruction (lgv:RailwayConstruction)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayCrossing",
        "parent": "#",
        "type": "class",
        "text": "RailwayCrossing (lgv:RailwayCrossing)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayJunction",
        "parent": "#",
        "type": "class",
        "text": "RailwayJunction (lgv:RailwayJunction)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayMilestone",
        "parent": "#",
        "type": "class",
        "text": "RailwayMilestone (lgv:RailwayMilestone)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayPhone",
        "parent": "#",
        "type": "class",
        "text": "RailwayPhone (lgv:RailwayPhone)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayPlatform",
        "parent": "#",
        "type": "class",
        "text": "RailwayPlatform (lgv:RailwayPlatform)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayStation",
        "parent": "#",
        "type": "class",
        "text": "RailwayStation (lgv:RailwayStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwayStop",
        "parent": "#",
        "type": "class",
        "text": "RailwayStop (lgv:RailwayStop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/RailwaySwitch",
        "parent": "#",
        "type": "class",
        "text": "RailwaySwitch (lgv:RailwaySwitch)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Rapids",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Rapids (lgv:Rapids)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Recycling",
        "parent": "#",
        "type": "class",
        "text": "Recycling (lgv:Recycling)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Reef",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Reef (lgv:Reef)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Residential",
        "parent": "#",
        "type": "class",
        "text": "Residential (lgv:Residential)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ResidentialBuilding",
        "parent": "#",
        "type": "class",
        "text": "ResidentialBuilding (lgv:ResidentialBuilding)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ResidentialHome",
        "parent": "#",
        "type": "class",
        "text": "ResidentialHome (lgv:ResidentialHome)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Resort",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Resort (lgv:Resort)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Restaurant",
        "parent": "#",
        "type": "class",
        "text": "Restaurant (lgv:Restaurant)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Ridge",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Ridge (lgv:Ridge)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Rig",
        "parent": "#",
        "type": "class",
        "text": "Rig (lgv:Rig)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/River",
        "parent": "#",
        "type": "class",
        "text": "River (lgv:River)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Riverbank",
        "parent": "#",
        "type": "class",
        "text": "Riverbank (lgv:Riverbank)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Rocks",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Rocks (lgv:Rocks)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Runway",
        "parent": "#",
        "type": "class",
        "text": "Runway (lgv:Runway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/School",
        "parent": "#",
        "type": "class",
        "text": "School (lgv:School)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Sea",
        "parent": "#",
        "type": "class",
        "text": "Sea (lgv:Sea)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Secondary",
        "parent": "#",
        "type": "class",
        "text": "Secondary (lgv:Secondary)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Shed",
        "parent": "#",
        "type": "class",
        "text": "Shed (lgv:Shed)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Shoal",
        "parent": "#",
        "type": "class",
        "text": "Shoal (lgv:Shoal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Shop",
        "parent": "#",
        "type": "class",
        "text": "Shop (lgv:Shop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ShoppingCenter",
        "parent": "#",
        "type": "class",
        "text": "ShoppingCenter (lgv:ShoppingCenter)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/ShoppingCentre",
        "parent": "#",
        "type": "class",
        "text": "ShoppingCentre (lgv:ShoppingCentre)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Signal",
        "parent": "#",
        "type": "class",
        "text": "Signal (lgv:Signal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Silo",
        "parent": "#",
        "type": "class",
        "text": "Silo (lgv:Silo)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/SkatePark",
        "parent": "#",
        "type": "class",
        "text": "SkatePark (lgv:SkatePark)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Sluice",
        "parent": "#",
        "type": "class",
        "text": "Sluice (lgv:Sluice)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/SportsCentre",
        "parent": "#",
        "type": "class",
        "text": "SportsCentre (lgv:SportsCentre)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Stadium",
        "parent": "#",
        "type": "class",
        "text": "Stadium (lgv:Stadium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/StationEntrance",
        "parent": "#",
        "type": "class",
        "text": "StationEntrance (lgv:StationEntrance)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Stream",
        "parent": "#",
        "type": "class",
        "text": "Stream (lgv:Stream)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/SubStation",
        "parent": "#",
        "type": "class",
        "text": "SubStation (lgv:SubStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Substation",
        "parent": "#",
        "type": "class",
        "text": "Substation (lgv:Substation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Suburb",
        "parent": "#",
        "type": "class",
        "text": "Suburb (lgv:Suburb)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/SwimmingPool",
        "parent": "#",
        "type": "class",
        "text": "SwimmingPool (lgv:SwimmingPool)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Taxi",
        "parent": "#",
        "type": "class",
        "text": "Taxi (lgv:Taxi)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Taxiway",
        "parent": "#",
        "type": "class",
        "text": "Taxiway (lgv:Taxiway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Telescope",
        "parent": "#",
        "type": "class",
        "text": "Telescope (lgv:Telescope)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Terminal",
        "parent": "#",
        "type": "class",
        "text": "Terminal (lgv:Terminal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Terrace",
        "parent": "#",
        "type": "class",
        "text": "Terrace (lgv:Terrace)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Tertiary",
        "parent": "#",
        "type": "class",
        "text": "Tertiary (lgv:Tertiary)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Theatre",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Theatre (lgv:Theatre)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Toilets",
        "parent": "#",
        "type": "class",
        "text": "Toilets (lgv:Toilets)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/TourismInformation",
        "parent": "#",
        "type": "class",
        "text": "TourismInformation (lgv:TourismInformation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/TourismZoo",
        "parent": "#",
        "type": "class",
        "text": "TourismZoo (lgv:TourismZoo)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Tourist",
        "parent": "#",
        "type": "class",
        "text": "Tourist (lgv:Tourist)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Townhall",
        "parent": "#",
        "type": "class",
        "text": "Townhall (lgv:Townhall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Trade",
        "parent": "#",
        "type": "class",
        "text": "Trade (lgv:Trade)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/TrafficLight",
        "parent": "#",
        "type": "class",
        "text": "TrafficLight (lgv:TrafficLight)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/TrainStation",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "TrainStation (lgv:TrainStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Transformer",
        "parent": "#",
        "type": "class",
        "text": "Transformer (lgv:Transformer)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/TravelAgency",
        "parent": "#",
        "type": "class",
        "text": "TravelAgency (lgv:TravelAgency)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Trunk",
        "parent": "#",
        "type": "class",
        "text": "Trunk (lgv:Trunk)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Tumulus",
        "parent": "#",
        "type": "class",
        "text": "Tumulus (lgv:Tumulus)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/University",
        "parent": "#",
        "type": "class",
        "text": "University (lgv:University)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Viaduct",
        "parent": "#",
        "type": "class",
        "text": "Viaduct (lgv:Viaduct)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Vineyard",
        "parent": "#",
        "type": "class",
        "text": "Vineyard (lgv:Vineyard)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Volcano",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Volcano (lgv:Volcano)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Wall",
        "parent": "#",
        "type": "class",
        "text": "Wall (lgv:Wall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WastewaterPlant",
        "parent": "#",
        "type": "class",
        "text": "WastewaterPlant (lgv:WastewaterPlant)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WaterTank",
        "parent": "#",
        "type": "class",
        "text": "WaterTank (lgv:WaterTank)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WaterTower",
        "parent": "#",
        "type": "class",
        "text": "WaterTower (lgv:WaterTower)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WaterWorks",
        "parent": "#",
        "type": "class",
        "text": "WaterWorks (lgv:WaterWorks)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Waterfall",
        "parent": "#",
        "type": "class",
        "text": "Waterfall (lgv:Waterfall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Watermill",
        "parent": "#",
        "type": "class",
        "text": "Watermill (lgv:Watermill)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Waterway",
        "parent": "#",
        "type": "class",
        "text": "Waterway (lgv:Waterway)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Way",
        "parent": "#",
        "type": "class",
        "text": "Way (lgv:Way)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WaysideCross",
        "parent": "#",
        "type": "class",
        "text": "WaysideCross (lgv:WaysideCross)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/WaysideShrine",
        "parent": "#",
        "type": "class",
        "text": "WaysideShrine (lgv:WaysideShrine)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Weir",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Weir (lgv:Weir)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Windmill",
        "parent": "#",
        "type": "class",
        "text": "Windmill (lgv:Windmill)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Windpump",
        "parent": "#",
        "type": "class",
        "text": "Windpump (lgv:Windpump)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/Windsock",
        "parent": "#",
        "type": "class",
        "text": "Windsock (lgv:Windsock)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/disposal",
        "parent": "#",
        "type": "class",
        "text": "disposal (lgv:disposal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Country.html",
        "parent": "http://schema.org/AdministrativeArea",
        "type": "class",
        "text": "Country (geosp:Country)",
        "data": {}
      },
      {
        "id": "http://rdf.insee.fr/geo/Arrondissement",
        "parent": "#",
        "type": "class",
        "text": "Arrondissement (frgeo:Arrondissement)",
        "data": {}
      },
      {
        "id": "http://rdf.insee.fr/geo/Commune",
        "parent": "#",
        "type": "class",
        "text": "Commune (frgeo:Commune)",
        "data": {}
      },
      {
        "id": "http://rdf.insee.fr/geo/Departement",
        "parent": "#",
        "type": "class",
        "text": "Departement (frgeo:Departement)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Pays.html",
        "parent": "http://schema.org/AdministrativeArea",
        "type": "class",
        "text": "Pays (frgeo:Pays)",
        "data": {}
      },
      {
        "id": "http://rdf.insee.fr/geo/Region",
        "parent": "#",
        "type": "class",
        "text": "Region (frgeo:Region)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Airport.html",
        "parent": "#",
        "type": "class",
        "text": "Airport (shema:Airport)",
        "data": {}
      },
      {
        "id": "http://schema.org/AmusementPark",
        "parent": "#",
        "type": "class",
        "text": "AmusementPark (shema:AmusementPark)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Apartment.html",
        "parent": "#",
        "type": "class",
        "text": "Apartment (shema:Apartment)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Aquarium.html",
        "parent": "#",
        "type": "class",
        "text": "Aquarium (shema:Aquarium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Bakery.html",
        "parent": "#",
        "type": "class",
        "text": "Bakery (shema:Bakery)",
        "data": {}
      },
      {
        "id": "http://schema.org/BankOrCreditUnion",
        "parent": "#",
        "type": "class",
        "text": "BankOrCreditUnion (shema:BankOrCreditUnion)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_BarOrPub.html",
        "parent": "#",
        "type": "class",
        "text": "BarOrPub (shema:BarOrPub)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Beach.html",
        "parent": "#",
        "type": "class",
        "text": "Beach (shema:Beach)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_BowlingAlley.html",
        "parent": "#",
        "type": "class",
        "text": "BowlingAlley (shema:BowlingAlley)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Brewery.html",
        "parent": "#",
        "type": "class",
        "text": "Brewery (shema:Brewery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Bridge.html",
        "parent": "#",
        "type": "class",
        "text": "Bridge (shema:Bridge)",
        "data": {}
      },
      {
        "id": "http://schema.org/BuddhistTemple",
        "parent": "#",
        "type": "class",
        "text": "BuddhistTemple (shema:BuddhistTemple)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_BusStation.html",
        "parent": "#",
        "type": "class",
        "text": "BusStation (shema:BusStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_BusStop.html",
        "parent": "#",
        "type": "class",
        "text": "BusStop (shema:BusStop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_CafeOrCoffeeShop.html",
        "parent": "#",
        "type": "class",
        "text": "CafeOrCoffeeShop (shema:CafeOrCoffeeShop)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Campground.html",
        "parent": "#",
        "type": "class",
        "text": "Campground (shema:Campground)",
        "data": {}
      },
      {
        "id": "http://schema.org/Canal",
        "parent": "#",
        "type": "class",
        "text": "Canal (shema:Canal)",
        "data": {}
      },
      {
        "id": "http://schema.org/Casino",
        "parent": "#",
        "type": "class",
        "text": "Casino (shema:Casino)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Cemetery.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Cemetery (shema:Cemetery)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ChildCare.html",
        "parent": "#",
        "type": "class",
        "text": "ChildCare (shema:ChildCare)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Church.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Church (shema:Church)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_City.html",
        "parent": "#",
        "type": "class",
        "text": "City (shema:City)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_CityHall.html",
        "parent": "#",
        "type": "class",
        "text": "CityHall (shema:CityHall)",
        "data": {}
      },
      {
        "id": "http://schema.org/Continent",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Continent (shema:Continent)",
        "data": {}
      },
      {
        "id": "http://schema.org/Country",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Country (shema:Country)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Courthouse.html",
        "parent": "#",
        "type": "class",
        "text": "Courthouse (shema:Courthouse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Crematorium.html",
        "parent": "#",
        "type": "class",
        "text": "Crematorium (shema:Crematorium)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Dentist.html",
        "parent": "#",
        "type": "class",
        "text": "Dentist (shema:Dentist)",
        "data": {}
      },
      {
        "id": "http://schema.org/Distillery",
        "parent": "#",
        "type": "class",
        "text": "Distillery (shema:Distillery)",
        "data": {}
      },
      {
        "id": "http://schema.org/EducationalOrganization",
        "parent": "#",
        "type": "class",
        "text": "EducationalOrganization (shema:EducationalOrganization)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Embassy.html",
        "parent": "#",
        "type": "class",
        "text": "Embassy (shema:Embassy)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_FireStation.html",
        "parent": "#",
        "type": "class",
        "text": "FireStation (shema:FireStation)",
        "data": {}
      },
      {
        "id": "http://schema.org/GeospatialGeometry",
        "parent": "#",
        "type": "class",
        "text": "GeospatialGeometry (shema:GeospatialGeometry)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_GolfCourse.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "GolfCourse (shema:GolfCourse)",
        "data": {}
      },
      {
        "id": "http://schema.org/GovernmentOrganization",
        "parent": "#",
        "type": "class",
        "text": "GovernmentOrganization (shema:GovernmentOrganization)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Hospital.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Hospital (shema:Hospital)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Hostel.html",
        "parent": "#",
        "type": "class",
        "text": "Hostel (shema:Hostel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Hotel.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Hotel (shema:Hotel)",
        "data": {}
      },
      {
        "id": "http://schema.org/LakeBodyOfWater",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "LakeBodyOfWater (shema:LakeBodyOfWater)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Library.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Library (shema:Library)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_MedicalClinic.html",
        "parent": "#",
        "type": "class",
        "text": "MedicalClinic (shema:MedicalClinic)",
        "data": {}
      },
      {
        "id": "http://schema.org/Mosque",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mosque (shema:Mosque)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Motel.html",
        "parent": "#",
        "type": "class",
        "text": "Motel (shema:Motel)",
        "data": {}
      },
      {
        "id": "http://schema.org/Mountain",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Mountain (shema:Mountain)",
        "data": {}
      },
      {
        "id": "http://schema.org/MovieTheater",
        "parent": "#",
        "type": "class",
        "text": "MovieTheater (shema:MovieTheater)",
        "data": {}
      },
      {
        "id": "http://schema.org/Museum",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Museum (shema:Museum)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_MusicVenue.html",
        "parent": "#",
        "type": "class",
        "text": "MusicVenue (shema:MusicVenue)",
        "data": {}
      },
      {
        "id": "http://schema.org/OceanBodyOfWater",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "OceanBodyOfWater (shema:OceanBodyOfWater)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Park.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Park (shema:Park)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ParkingFacility.html",
        "parent": "#",
        "type": "class",
        "text": "ParkingFacility (shema:ParkingFacility)",
        "data": {}
      },
      {
        "id": "http://schema.org/Person",
        "parent": "#",
        "type": "class",
        "text": "Person (shema:Person)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Pharmacy.html",
        "parent": "#",
        "type": "class",
        "text": "Pharmacy (shema:Pharmacy)",
        "data": {}
      },
      {
        "id": "http://schema.org/Playground",
        "parent": "#",
        "type": "class",
        "text": "Playground (shema:Playground)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_PoliceStation.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "PoliceStation (shema:PoliceStation)",
        "data": {}
      },
      {
        "id": "http://schema.org/Pond",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Pond (shema:Pond)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_PostOffice.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "PostOffice (shema:PostOffice)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Preschool.html",
        "parent": "#",
        "type": "class",
        "text": "Preschool (shema:Preschool)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_PublicSwimmingPool.html",
        "parent": "#",
        "type": "class",
        "text": "PublicSwimmingPool (shema:PublicSwimmingPool)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_PublicToilet.html",
        "parent": "#",
        "type": "class",
        "text": "PublicToilet (shema:PublicToilet)",
        "data": {}
      },
      {
        "id": "http://schema.org/RadioStation",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "RadioStation (shema:RadioStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_RecyclingCenter.html",
        "parent": "#",
        "type": "class",
        "text": "RecyclingCenter (shema:RecyclingCenter)",
        "data": {}
      },
      {
        "id": "http://schema.org/Reservoir",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Reservoir (shema:Reservoir)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Resort.html",
        "parent": "#",
        "type": "class",
        "text": "Resort (shema:Resort)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Restaurant.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Restaurant (shema:Restaurant)",
        "data": {}
      },
      {
        "id": "http://schema.org/RiverBodyOfWater",
        "parent": "#",
        "type": "class",
        "text": "RiverBodyOfWater (shema:RiverBodyOfWater)",
        "data": {}
      },
      {
        "id": "http://schema.org/School",
        "parent": "#",
        "type": "class",
        "text": "School (shema:School)",
        "data": {}
      },
      {
        "id": "http://schema.org/SeaBodyOfWater",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "SeaBodyOfWater (shema:SeaBodyOfWater)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_ShoppingCenter.html",
        "parent": "#",
        "type": "class",
        "text": "ShoppingCenter (shema:ShoppingCenter)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_StadiumOrArena.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "StadiumOrArena (shema:StadiumOrArena)",
        "data": {}
      },
      {
        "id": "http://schema.org/State",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "State (shema:State)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Store.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Store (shema:Store)",
        "data": {}
      },
      {
        "id": "http://schema.org/SubwayStation",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "SubwayStation (shema:SubwayStation)",
        "data": {}
      },
      {
        "id": "http://schema.org/Synaogogue",
        "parent": "#",
        "type": "class",
        "text": "Synaogogue (shema:Synaogogue)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_TaxiStand.html",
        "parent": "#",
        "type": "class",
        "text": "TaxiStand (shema:TaxiStand)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_TouristInformationCenter.html",
        "parent": "#",
        "type": "class",
        "text": "TouristInformationCenter (shema:TouristInformationCenter)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_TrainStation.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Train Station (shema:TrainStation)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_TravelAgency.html",
        "parent": "#",
        "type": "class",
        "text": "TravelAgency (shema:TravelAgency)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Volcano.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Volcano (shema:Volcano)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Waterfall.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Waterfall (shema:Waterfall)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Zoo.html",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "Zoo (shema:Zoo)",
        "data": {}
      },
      {
        "id": "http://semgis.de/INSPIRELGD#Wikidata",
        "parent": "#",
        "type": "class",
        "text": "Wikidata (:Wikidata)",
        "data": {}
      },
      {
        "id": "http://vocab.getty.edu/ontology#AdminPlaceConcept",
        "parent": "#",
        "type": "class",
        "text": "AdminPlaceConcept (gvp:AdminPlaceConcept)",
        "data": {}
      },
      {
        "id": "http://vocab.getty.edu/ontology#PersonConcept",
        "parent": "#",
        "type": "class",
        "text": "PersonConcept (gvp:PersonConcept)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AA_Objekt",
        "parent": "#",
        "type": "class",
        "text": "AA_Objekt (aaa6:AA_Objekt)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AP_PTO",
        "parent": "#",
        "type": "class",
        "text": "AP_PTO (aaa6:AP_PTO)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_ArtDerGebietsgrenze_Gebietsgrenze",
        "parent": "#",
        "type": "class",
        "text": "AX_ArtDerGebietsgrenze_Gebietsgrenze (aaa6:AX_ArtDerGebietsgrenze_Gebietsgrenze)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Bahnstrecke",
        "parent": "#",
        "type": "class",
        "text": "AX_Bahnstrecke (aaa6:AX_Bahnstrecke)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Bahnverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Bahnverkehr (aaa6:AX_Bahnverkehr)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Bahnverkehrsanlage",
        "parent": "#",
        "type": "class",
        "text": "AX_Bahnverkehrsanlage (aaa6:AX_Bahnverkehrsanlage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_BauRaumOderBodenordnungsrecht.html",
        "parent": "#",
        "type": "class",
        "text": "AX_BauRaumOderBodenordnungsrecht (aaa6:AX_BauRaumOderBodenordnungsrecht)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Baublock",
        "parent": "#",
        "type": "class",
        "text": "AX_Baublock (aaa6:AX_Baublock)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_BauwerkImGewaesserbereich.html",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "AX_BauwerkImGewaesserbereich (aaa6:AX_BauwerkImGewaesserbereich)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_BauwerkImVerkehrsbereich.html",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "AX_BauwerkImVerkehrsbereich (aaa6:AX_BauwerkImVerkehrsbereich)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_BauwerkOderAnlageFuerIndustrieUndGewerbe.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_BauwerkOderAnlageFuerIndustrieUndGewerbe (aaa6:AX_BauwerkOderAnlageFuerIndustrieUndGewerbe)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Hausumringe.html",
        "parent": "#",
        "type": "class",
        "text": "Hausumringe (aaa6:Hausumringe)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_BauwerkOderAnlageFuerSportFreizeitUndErholung.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_BauwerkOderAnlageFuerSportFreizeitUndErholung (aaa6:AX_BauwerkOderAnlageFuerSportFreizeitUndErholung)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Behoerde",
        "parent": "#",
        "type": "class",
        "text": "AX_Behoerde (aaa6:AX_Behoerde)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_BesondereFlurstuecksgrenze",
        "parent": "#",
        "type": "class",
        "text": "AX_BesondereFlurstuecksgrenze (aaa6:AX_BesondereFlurstuecksgrenze)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Bundesland",
        "parent": "#",
        "type": "class",
        "text": "AX_Bundesland (aaa6:AX_Bundesland)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_DammWallDeich.html",
        "parent": "#",
        "type": "class",
        "text": "AX_DammWallDeich (aaa6:AX_DammWallDeich)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Denkmalschutzrecht.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Denkmalschutzrecht (aaa6:AX_Denkmalschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Dienststelle",
        "parent": "#",
        "type": "class",
        "text": "AX_Dienststelle (aaa6:AX_Dienststelle)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Duene",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "AX_Duene (aaa6:AX_Duene)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_EinrichtungInOeffentlichenBereichen.html",
        "parent": "#",
        "type": "class",
        "text": "AX_EinrichtungInOeffentlichenBereichen (aaa6:AX_EinrichtungInOeffentlichenBereichen)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_EinrichtungenFuerDenSchiffsverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "AX_EinrichtungenFuerDenSchiffsverkehr (aaa6:AX_EinrichtungenFuerDenSchiffsverkehr)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Fahrwegachse",
        "parent": "#",
        "type": "class",
        "text": "AX_Fahrwegachse (aaa6:AX_Fahrwegachse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Fliessgewaesser.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Fliessgewaesser (aaa6:AX_Fliessgewaesser)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Flugverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Flugverkehr (aaa6:AX_Flugverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Flugverkehrsanlage.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Flugverkehrsanlage (aaa6:AX_Flugverkehrsanlage)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Flurstueck",
        "parent": "#",
        "type": "class",
        "text": "AX_Flurstueck (aaa6:AX_Flurstueck)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Friedhof.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Friedhof (aaa6:AX_Friedhof)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Funktion_IndustrieUndGewerbeflaeche.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Funktion_IndustrieUndGewerbeflaeche (aaa6:AX_Funktion_IndustrieUndGewerbeflaeche)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Gebaeude.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_Gebaeude (aaa6:AX_Gebaeude)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Bundesland",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Bundesland (aaa6:AX_Gebiet_Bundesland)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Kommunales_Gebiet",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Kommunales_Gebiet (aaa6:AX_Gebiet_Kommunales_Gebiet)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Kreis",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Kreis (aaa6:AX_Gebiet_Kreis)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Nationalstaat",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Nationalstaat (aaa6:AX_Gebiet_Nationalstaat)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Regierungsbezirk",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Regierungsbezirk (aaa6:AX_Gebiet_Regierungsbezirk)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gebiet_Verwaltungsgemeinschaft",
        "parent": "http://inspire.ec.europa.eu/schemas/am/4.0#AdministrativeUnit",
        "type": "class",
        "text": "AX_Gebiet_Verwaltungsgemeinschaft (aaa6:AX_Gebiet_Verwaltungsgemeinschaft)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Gebietsgrenze.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Gebietsgrenze (aaa6:AX_Gebietsgrenze)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gehoelz",
        "parent": "#",
        "type": "class",
        "text": "AX_Gehoelz (aaa6:AX_Gehoelz)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gemarkung",
        "parent": "#",
        "type": "class",
        "text": "AX_Gemarkung (aaa6:AX_Gemarkung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Gemeinde.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Gemeinde (aaa6:AX_Gemeinde)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_GeoreferenzierteGebaeudeadresse",
        "parent": "#",
        "type": "class",
        "text": "AX_GeoreferenzierteGebaeudeadresse (aaa6:AX_GeoreferenzierteGebaeudeadresse)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gewaesserachse",
        "parent": "#",
        "type": "class",
        "text": "AX_Gewaesserachse (aaa6:AX_Gewaesserachse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Gewaessermerkmal.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Gewaessermerkmal (aaa6:AX_Gewaessermerkmal)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Gewann",
        "parent": "#",
        "type": "class",
        "text": "AX_Gewann (aaa6:AX_Gewann)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Grenzpunkt.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Grenzpunkt (aaa6:AX_Grenzpunkt)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Hafen.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Hafen (aaa6:AX_Hafen)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Hafenbecken",
        "parent": "#",
        "type": "class",
        "text": "AX_Hafenbecken (aaa6:AX_Hafenbecken)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Halde.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Halde (aaa6:AX_Halde)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Heide",
        "parent": "http://www.geonames.org/ontology#Feature",
        "type": "class",
        "text": "AX_Heide (aaa6:AX_Heide)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_HistorischesBauwerkOderHistorischeEinrichtung.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_HistorischesBauwerkOderHistorischeEinrichtung (aaa6:AX_HistorischesBauwerkOderHistorischeEinrichtung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_IndustrieUndGewerbeflaeche.html",
        "parent": "#",
        "type": "class",
        "text": "AX_IndustrieUndGewerbeflaeche (aaa6:AX_IndustrieUndGewerbeflaeche)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Kanal",
        "parent": "#",
        "type": "class",
        "text": "AX_Kanal (aaa6:AX_Kanal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Katalogeintrag.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Katalogeintrag (aaa6:AX_Katalogeintrag)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_KlassifizierungNachStrassenrecht",
        "parent": "#",
        "type": "class",
        "text": "AX_KlassifizierungNachStrassenrecht (aaa6:AX_KlassifizierungNachStrassenrecht)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Kondominium",
        "parent": "#",
        "type": "class",
        "text": "AX_Kondominium (aaa6:AX_Kondominium)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Lagebezeichnung",
        "parent": "#",
        "type": "class",
        "text": "AX_Lagebezeichnung (aaa6:AX_Lagebezeichnung)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_LagebezeichnungKatalogeintrag",
        "parent": "http://www.opengis.net/gml#AbstractFeature",
        "type": "class",
        "text": "AX_LagebezeichnungKatalogeintrag (aaa6:AX_LagebezeichnungKatalogeintrag)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Landeswappen",
        "parent": "#",
        "type": "class",
        "text": "AX_Landeswappen (aaa6:AX_Landeswappen)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Landschaft.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Landschaft (aaa6:AX_Landschaft)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Landwirtschaft.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Landwirtschaft (aaa6:AX_Landwirtschaft)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Leitung.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Leitung (aaa6:AX_Leitung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Meer.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Meer (aaa6:AX_Meer)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Moor",
        "parent": "#",
        "type": "class",
        "text": "AX_Moor (aaa6:AX_Moor)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Nationalstaat.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Nationalstaat (aaa6:AX_Nationalstaat)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Person",
        "parent": "#",
        "type": "class",
        "text": "AX_Person (aaa6:AX_Person)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Platz.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Platz (aaa6:AX_Platz)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Polder.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Polder (aaa6:AX_Polder)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Regierungsbezirk",
        "parent": "#",
        "type": "class",
        "text": "AX_Regierungsbezirk (aaa6:AX_Regierungsbezirk)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_SchifffahrtslinieFaehrverkehr",
        "parent": "#",
        "type": "class",
        "text": "AX_SchifffahrtslinieFaehrverkehr (aaa6:AX_SchifffahrtslinieFaehrverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Schiffsverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Schiffsverkehr (aaa6:AX_Schiffsverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Schleuse.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Schleuse (aaa6:AX_Schleuse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_SchutzgebietNachNaturUmweltOderBodenschutzrecht.html",
        "parent": "#",
        "type": "class",
        "text": "AX_SchutzgebietNachNaturUmweltOderBodenschutzrecht (aaa6:AX_SchutzgebietNachNaturUmweltOderBodenschutzrecht)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_SchutzgebietNachWasserrecht",
        "parent": "#",
        "type": "class",
        "text": "AX_SchutzgebietNachWasserrecht (aaa6:AX_SchutzgebietNachWasserrecht)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_SeilbahnSchwebebahn.html",
        "parent": "#",
        "type": "class",
        "text": "AX_SeilbahnSchwebebahn (aaa6:AX_SeilbahnSchwebebahn)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Sickerstrecke",
        "parent": "#",
        "type": "class",
        "text": "AX_Sickerstrecke (aaa6:AX_Sickerstrecke)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Skizze",
        "parent": "#",
        "type": "class",
        "text": "AX_Skizze (aaa6:AX_Skizze)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Soll",
        "parent": "#",
        "type": "class",
        "text": "AX_Soll (aaa6:AX_Soll)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_SonstigesBauwerkOderSonstigeEinrichtung.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_SonstigesBauwerkOderSonstigeEinrichtung (aaa6:AX_SonstigesBauwerkOderSonstigeEinrichtung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_SportFreizeitUndErholungsflaeche.html",
        "parent": "#",
        "type": "class",
        "text": "AX_SportFreizeitUndErholungsflaeche (aaa6:AX_SportFreizeitUndErholungsflaeche)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_StehendesGewaesser.html",
        "parent": "#",
        "type": "class",
        "text": "AX_StehendesGewaesser (aaa6:AX_StehendesGewaesser)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Strasse.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Strasse (aaa6:AX_Strasse)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Strassenverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Strassenverkehr (aaa6:AX_Strassenverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Strassenverkehrsanlage.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Strassenverkehrsanlage (aaa6:AX_Strassenverkehrsanlage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Transportanlage.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Transportanlage (aaa6:AX_Transportanlage)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_UnlandVegetationsloseFlaeche.html",
        "parent": "#",
        "type": "class",
        "text": "AX_UnlandVegetationsloseFlaeche (aaa6:AX_UnlandVegetationsloseFlaeche)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Vegetationsmerkmal.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Vegetationsmerkmal (aaa6:AX_Vegetationsmerkmal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_VorratsbehaelterSpeicherbauwerk.html",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#Hausumringe",
        "type": "class",
        "text": "AX_VorratsbehaelterSpeicherbauwerk (aaa6:AX_VorratsbehaelterSpeicherbauwerk)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Wald.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Wald (aaa6:AX_Wald)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Wasserlauf.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Wasserlauf (aaa6:AX_Wasserlauf)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_Weg.html",
        "parent": "#",
        "type": "class",
        "text": "AX_Weg (aaa6:AX_Weg)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_AX_WegPfadSteig.html",
        "parent": "#",
        "type": "class",
        "text": "AX_WegPfadSteig (aaa6:AX_WegPfadSteig)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Wohnplatz",
        "parent": "#",
        "type": "class",
        "text": "AX_Wohnplatz (aaa6:AX_Wohnplatz)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Hauskoordinaten.html",
        "parent": "#",
        "type": "class",
        "text": "Hauskoordinaten (aaa6:Hauskoordinaten)",
        "data": {}
      },
      {
        "id": "http://www.adv-online.de/namespaces/adv/gid/6.0#XE_Rettung",
        "parent": "#",
        "type": "class",
        "text": "XE_Rettung (aaa6:XE_Rettung)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Feature",
        "parent": "#",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "#",
        "type": "class",
        "text": "Geometry (gsp:Geometry)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1003207",
        "parent": "http://linkedgeodata.org/ontology/PowerStation",
        "type": "class",
        "text": "Q1003207 (wde:Q1003207)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1004887",
        "parent": "#",
        "type": "class",
        "text": "Q1004887 (wde:Q1004887)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1007870",
        "parent": "#",
        "type": "class",
        "text": "Q1007870 (wde:Q1007870)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1009527",
        "parent": "#",
        "type": "class",
        "text": "Q1009527 (wde:Q1009527)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q10145.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q10145 (wde:Q10145)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1021290",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q1021290 (wde:Q1021290)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1021645.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q1021645 (wde:Q1021645)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1044817",
        "parent": "#",
        "type": "class",
        "text": "Q1044817 (wde:Q1044817)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q10482023",
        "parent": "#",
        "type": "class",
        "text": "Q10482023 (wde:Q10482023)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1048525.html",
        "parent": "#",
        "type": "class",
        "text": "Q1048525 (wde:Q1048525)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1056327",
        "parent": "#",
        "type": "class",
        "text": "Q1056327 (wde:Q1056327)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q105731.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q105731 (wde:Q105731)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1060829.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q1060829 (wde:Q1060829)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q106259",
        "parent": "#",
        "type": "class",
        "text": "Q106259 (wde:Q106259)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q106658",
        "parent": "#",
        "type": "class",
        "text": "Q106658 (wde:Q106658)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1066997.html",
        "parent": "#",
        "type": "class",
        "text": "Q1066997 (wde:Q1066997)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1068623",
        "parent": "#",
        "type": "class",
        "text": "Q1068623 (wde:Q1068623)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q107425",
        "parent": "#",
        "type": "class",
        "text": "Q107425 (wde:Q107425)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1076052.html",
        "parent": "#",
        "type": "class",
        "text": "Q1076052 (wde:Q1076052)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1076291",
        "parent": "#",
        "type": "class",
        "text": "Q1076291 (wde:Q1076291)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q108325.html",
        "parent": "#",
        "type": "class",
        "text": "Q108325 (wde:Q108325)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1103285.html",
        "parent": "#",
        "type": "class",
        "text": "Q1103285 (wde:Q1103285)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1109069",
        "parent": "#",
        "type": "class",
        "text": "Q1109069 (wde:Q1109069)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1110689",
        "parent": "#",
        "type": "class",
        "text": "Q1110689 (wde:Q1110689)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q11166728",
        "parent": "#",
        "type": "class",
        "text": "Q11166728 (wde:Q11166728)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q11315.html",
        "parent": "#",
        "type": "class",
        "text": "Q11315 (wde:Q11315)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1137809.html",
        "parent": "#",
        "type": "class",
        "text": "Q1137809 (wde:Q1137809)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1139861.html",
        "parent": "#",
        "type": "class",
        "text": "Q1139861 (wde:Q1139861)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1151556",
        "parent": "#",
        "type": "class",
        "text": "Q1151556 (wde:Q1151556)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1153108",
        "parent": "#",
        "type": "class",
        "text": "Q1153108 (wde:Q1153108)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1169870",
        "parent": "#",
        "type": "class",
        "text": "Q1169870 (wde:Q1169870)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q11707.html",
        "parent": "#",
        "type": "class",
        "text": "Q11707 (wde:Q11707)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q11732217",
        "parent": "#",
        "type": "class",
        "text": "Q11732217 (wde:Q11732217)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q11755880.html",
        "parent": "#",
        "type": "class",
        "text": "Q11755880 (wde:Q11755880)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q11849395.html",
        "parent": "#",
        "type": "class",
        "text": "Q11849395 (wde:Q11849395)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1195942.html",
        "parent": "#",
        "type": "class",
        "text": "Q1195942 (wde:Q1195942)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q12019965",
        "parent": "#",
        "type": "class",
        "text": "Q12019965 (wde:Q12019965)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1202618",
        "parent": "#",
        "type": "class",
        "text": "Q1202618 (wde:Q1202618)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1211122",
        "parent": "#",
        "type": "class",
        "text": "Q1211122 (wde:Q1211122)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1221119",
        "parent": "#",
        "type": "class",
        "text": "Q1221119 (wde:Q1221119)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1221156",
        "parent": "#",
        "type": "class",
        "text": "Q1221156 (wde:Q1221156)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q12280.html",
        "parent": "#",
        "type": "class",
        "text": "Q12280 (wde:Q12280)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q12284.html",
        "parent": "#",
        "type": "class",
        "text": "Q12284 (wde:Q12284)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1228895",
        "parent": "#",
        "type": "class",
        "text": "Q1228895 (wde:Q1228895)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q12323.html",
        "parent": "#",
        "type": "class",
        "text": "Q12323 (wde:Q12323)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1232319",
        "parent": "#",
        "type": "class",
        "text": "Q1232319 (wde:Q1232319)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q124282.html",
        "parent": "#",
        "type": "class",
        "text": "Q124282 (wde:Q124282)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q124714.html",
        "parent": "#",
        "type": "class",
        "text": "Q124714 (wde:Q124714)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1248784.html",
        "parent": "#",
        "type": "class",
        "text": "Q1248784 (wde:Q1248784)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1249491",
        "parent": "#",
        "type": "class",
        "text": "Q1249491 (wde:Q1249491)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q12511",
        "parent": "#",
        "type": "class",
        "text": "Q12511 (wde:Q12511)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1251750",
        "parent": "#",
        "type": "class",
        "text": "Q1251750 (wde:Q1251750)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q12518",
        "parent": "#",
        "type": "class",
        "text": "Q12518 (wde:Q12518)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1254933",
        "parent": "#",
        "type": "class",
        "text": "Q1254933 (wde:Q1254933)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q12570",
        "parent": "#",
        "type": "class",
        "text": "Q12570 (wde:Q12570)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1267889.html",
        "parent": "#",
        "type": "class",
        "text": "Q1267889 (wde:Q1267889)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q126793",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q126793 (wde:Q126793)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q126807.html",
        "parent": "#",
        "type": "class",
        "text": "Q126807 (wde:Q126807)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1269448",
        "parent": "#",
        "type": "class",
        "text": "Q1269448 (wde:Q1269448)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q12743",
        "parent": "#",
        "type": "class",
        "text": "Q12743 (wde:Q12743)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1281105",
        "parent": "#",
        "type": "class",
        "text": "Q1281105 (wde:Q1281105)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1282870",
        "parent": "#",
        "type": "class",
        "text": "Q1282870 (wde:Q1282870)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1291673",
        "parent": "#",
        "type": "class",
        "text": "Q1291673 (wde:Q1291673)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1302299",
        "parent": "#",
        "type": "class",
        "text": "Q1302299 (wde:Q1302299)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1303167.html",
        "parent": "#",
        "type": "class",
        "text": "Q1303167 (wde:Q1303167)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1307651",
        "parent": "#",
        "type": "class",
        "text": "Q1307651 (wde:Q1307651)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q13107184.html",
        "parent": "#",
        "type": "class",
        "text": "Q13107184 (wde:Q13107184)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1311064",
        "parent": "#",
        "type": "class",
        "text": "Q1311064 (wde:Q1311064)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1311696.html",
        "parent": "#",
        "type": "class",
        "text": "Q1311696 (wde:Q1311696)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1311958",
        "parent": "#",
        "type": "class",
        "text": "Q1311958 (wde:Q1311958)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q131214.html",
        "parent": "#",
        "type": "class",
        "text": "Q131214 (wde:Q131214)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q131263.html",
        "parent": "#",
        "type": "class",
        "text": "Q131263 (wde:Q131263)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1314860",
        "parent": "#",
        "type": "class",
        "text": "Q1314860 (wde:Q1314860)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q131502.html",
        "parent": "#",
        "type": "class",
        "text": "Q131502 (wde:Q131502)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q131681",
        "parent": "#",
        "type": "class",
        "text": "Q131681 (wde:Q131681)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q131734.html",
        "parent": "#",
        "type": "class",
        "text": "Q131734 (wde:Q131734)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q13218805.html",
        "parent": "#",
        "type": "class",
        "text": "Q13218805 (wde:Q13218805)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1329462",
        "parent": "#",
        "type": "class",
        "text": "Q1329462 (wde:Q1329462)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1329623",
        "parent": "#",
        "type": "class",
        "text": "Q1329623 (wde:Q1329623)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q133056.html",
        "parent": "#",
        "type": "class",
        "text": "Q133056 (wde:Q133056)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1330871",
        "parent": "#",
        "type": "class",
        "text": "Q1330871 (wde:Q1330871)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q133215.html",
        "parent": "#",
        "type": "class",
        "text": "Q133215 (wde:Q133215)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q133346.html",
        "parent": "#",
        "type": "class",
        "text": "Q133346 (wde:Q133346)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1333922",
        "parent": "#",
        "type": "class",
        "text": "Q1333922 (wde:Q1333922)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1339195.html",
        "parent": "#",
        "type": "class",
        "text": "Q1339195 (wde:Q1339195)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q13405588",
        "parent": "#",
        "type": "class",
        "text": "Q13405588 (wde:Q13405588)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q134447",
        "parent": "http://linkedgeodata.org/ontology/PowerStation",
        "type": "class",
        "text": "Q134447 (wde:Q134447)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1348006",
        "parent": "#",
        "type": "class",
        "text": "Q1348006 (wde:Q1348006)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q134851",
        "parent": "#",
        "type": "class",
        "text": "Q134851 (wde:Q134851)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q13499616",
        "parent": "#",
        "type": "class",
        "text": "Q13499616 (wde:Q13499616)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q13607440",
        "parent": "#",
        "type": "class",
        "text": "Q13607440 (wde:Q13607440)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1362225",
        "parent": "#",
        "type": "class",
        "text": "Q1362225 (wde:Q1362225)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1363360",
        "parent": "#",
        "type": "class",
        "text": "Q1363360 (wde:Q1363360)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1364150.html",
        "parent": "#",
        "type": "class",
        "text": "Q1364150 (wde:Q1364150)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1365704",
        "parent": "#",
        "type": "class",
        "text": "Q1365704 (wde:Q1365704)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1369196",
        "parent": "#",
        "type": "class",
        "text": "Q1369196 (wde:Q1369196)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1371789",
        "parent": "#",
        "type": "class",
        "text": "Q1371789 (wde:Q1371789)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1377575",
        "parent": "#",
        "type": "class",
        "text": "Q1377575 (wde:Q1377575)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1378975",
        "parent": "#",
        "type": "class",
        "text": "Q1378975 (wde:Q1378975)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1391465",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q1391465 (wde:Q1391465)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1395196.html",
        "parent": "#",
        "type": "class",
        "text": "Q1395196 (wde:Q1395196)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1395316",
        "parent": "#",
        "type": "class",
        "text": "Q1395316 (wde:Q1395316)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1399349",
        "parent": "#",
        "type": "class",
        "text": "Q1399349 (wde:Q1399349)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1402592",
        "parent": "#",
        "type": "class",
        "text": "Q1402592 (wde:Q1402592)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1404150",
        "parent": "#",
        "type": "class",
        "text": "Q1404150 (wde:Q1404150)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1406318",
        "parent": "#",
        "type": "class",
        "text": "Q1406318 (wde:Q1406318)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1408777",
        "parent": "#",
        "type": "class",
        "text": "Q1408777 (wde:Q1408777)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q14092.html",
        "parent": "#",
        "type": "class",
        "text": "Q14092 (wde:Q14092)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1411287",
        "parent": "#",
        "type": "class",
        "text": "Q1411287 (wde:Q1411287)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1414773",
        "parent": "#",
        "type": "class",
        "text": "Q1414773 (wde:Q1414773)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1420027",
        "parent": "#",
        "type": "class",
        "text": "Q1420027 (wde:Q1420027)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1424016",
        "parent": "#",
        "type": "class",
        "text": "Q1424016 (wde:Q1424016)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1425352.html",
        "parent": "#",
        "type": "class",
        "text": "Q1425352 (wde:Q1425352)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1425971",
        "parent": "#",
        "type": "class",
        "text": "Q1425971 (wde:Q1425971)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1427694",
        "parent": "#",
        "type": "class",
        "text": "Q1427694 (wde:Q1427694)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q14350",
        "parent": "#",
        "type": "class",
        "text": "Q14350 (wde:Q14350)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1440300.html",
        "parent": "#",
        "type": "class",
        "text": "Q1440300 (wde:Q1440300)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1450682",
        "parent": "#",
        "type": "class",
        "text": "Q1450682 (wde:Q1450682)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q14524070",
        "parent": "#",
        "type": "class",
        "text": "Q14524070 (wde:Q14524070)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1454553",
        "parent": "#",
        "type": "class",
        "text": "Q1454553 (wde:Q1454553)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1454827",
        "parent": "#",
        "type": "class",
        "text": "Q1454827 (wde:Q1454827)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q146728",
        "parent": "#",
        "type": "class",
        "text": "Q146728 (wde:Q146728)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q146924",
        "parent": "#",
        "type": "class",
        "text": "Q146924 (wde:Q146924)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q14784328",
        "parent": "#",
        "type": "class",
        "text": "Q14784328 (wde:Q14784328)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1478459",
        "parent": "#",
        "type": "class",
        "text": "Q1478459 (wde:Q1478459)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1478783",
        "parent": "#",
        "type": "class",
        "text": "Q1478783 (wde:Q1478783)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1479818",
        "parent": "#",
        "type": "class",
        "text": "Q1479818 (wde:Q1479818)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q148319",
        "parent": "#",
        "type": "class",
        "text": "Q148319 (wde:Q148319)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q148571.html",
        "parent": "#",
        "type": "class",
        "text": "Q148571 (wde:Q148571)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q148993",
        "parent": "#",
        "type": "class",
        "text": "Q148993 (wde:Q148993)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q14908",
        "parent": "#",
        "type": "class",
        "text": "Q14908 (wde:Q14908)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1495738",
        "parent": "#",
        "type": "class",
        "text": "Q1495738 (wde:Q1495738)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1499295",
        "parent": "#",
        "type": "class",
        "text": "Q1499295 (wde:Q1499295)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1499928",
        "parent": "#",
        "type": "class",
        "text": "Q1499928 (wde:Q1499928)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15003",
        "parent": "#",
        "type": "class",
        "text": "Q15003 (wde:Q15003)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1501.html",
        "parent": "#",
        "type": "class",
        "text": "Q1501 (wde:Q1501)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15077340",
        "parent": "#",
        "type": "class",
        "text": "Q15077340 (wde:Q15077340)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1520009",
        "parent": "#",
        "type": "class",
        "text": "Q1520009 (wde:Q1520009)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15233417",
        "parent": "#",
        "type": "class",
        "text": "Q15233417 (wde:Q15233417)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q152810.html",
        "parent": "#",
        "type": "class",
        "text": "Q152810 (wde:Q152810)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1529413",
        "parent": "#",
        "type": "class",
        "text": "Q1529413 (wde:Q1529413)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q153562",
        "parent": "#",
        "type": "class",
        "text": "Q153562 (wde:Q153562)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1541226",
        "parent": "#",
        "type": "class",
        "text": "Q1541226 (wde:Q1541226)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1546788",
        "parent": "#",
        "type": "class",
        "text": "Q1546788 (wde:Q1546788)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q155511",
        "parent": "#",
        "type": "class",
        "text": "Q155511 (wde:Q155511)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1561361",
        "parent": "#",
        "type": "class",
        "text": "Q1561361 (wde:Q1561361)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15621933",
        "parent": "http://linkedgeodata.org/ontology/PowerStation",
        "type": "class",
        "text": "Q15621933 (wde:Q15621933)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q157570.html",
        "parent": "#",
        "type": "class",
        "text": "Q157570 (wde:Q157570)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15821982",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q15821982 (wde:Q15821982)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15843493",
        "parent": "#",
        "type": "class",
        "text": "Q15843493 (wde:Q15843493)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q158438",
        "parent": "#",
        "type": "class",
        "text": "Q158438 (wde:Q158438)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q158454",
        "parent": "#",
        "type": "class",
        "text": "Q158454 (wde:Q158454)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15848142",
        "parent": "#",
        "type": "class",
        "text": "Q15848142 (wde:Q15848142)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15849827",
        "parent": "#",
        "type": "class",
        "text": "Q15849827 (wde:Q15849827)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q158590",
        "parent": "#",
        "type": "class",
        "text": "Q158590 (wde:Q158590)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15859700",
        "parent": "#",
        "type": "class",
        "text": "Q15859700 (wde:Q15859700)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1587716.html",
        "parent": "#",
        "type": "class",
        "text": "Q1587716 (wde:Q1587716)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q158790",
        "parent": "#",
        "type": "class",
        "text": "Q158790 (wde:Q158790)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1589077.html",
        "parent": "#",
        "type": "class",
        "text": "Q1589077 (wde:Q1589077)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q15911738",
        "parent": "http://linkedgeodata.org/ontology/PowerStation",
        "type": "class",
        "text": "Q15911738 (wde:Q15911738)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q159334.html",
        "parent": "#",
        "type": "class",
        "text": "Q159334 (wde:Q159334)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1594437",
        "parent": "#",
        "type": "class",
        "text": "Q1594437 (wde:Q1594437)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1595639",
        "parent": "#",
        "type": "class",
        "text": "Q1595639 (wde:Q1595639)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q159719.html",
        "parent": "#",
        "type": "class",
        "text": "Q159719 (wde:Q159719)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q160047",
        "parent": "#",
        "type": "class",
        "text": "Q160047 (wde:Q160047)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q160091.html",
        "parent": "#",
        "type": "class",
        "text": "Q160091 (wde:Q160091)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1613929.html",
        "parent": "#",
        "type": "class",
        "text": "Q1613929 (wde:Q1613929)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1616452",
        "parent": "#",
        "type": "class",
        "text": "Q1616452 (wde:Q1616452)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1621657",
        "parent": "#",
        "type": "class",
        "text": "Q1621657 (wde:Q1621657)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q16237489",
        "parent": "#",
        "type": "class",
        "text": "Q16237489 (wde:Q16237489)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1631103",
        "parent": "#",
        "type": "class",
        "text": "Q1631103 (wde:Q1631103)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q165.html",
        "parent": "#",
        "type": "class",
        "text": "Q165 (wde:Q165)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q165044",
        "parent": "#",
        "type": "class",
        "text": "Q165044 (wde:Q165044)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q16560.html",
        "parent": "#",
        "type": "class",
        "text": "Q16560 (wde:Q16560)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1656682",
        "parent": "#",
        "type": "class",
        "text": "Q1656682 (wde:Q1656682)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q166118",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q166118 (wde:Q166118)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1663988",
        "parent": "#",
        "type": "class",
        "text": "Q1663988 (wde:Q1663988)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q166735",
        "parent": "#",
        "type": "class",
        "text": "Q166735 (wde:Q166735)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1670596",
        "parent": "#",
        "type": "class",
        "text": "Q1670596 (wde:Q1670596)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q167346",
        "parent": "#",
        "type": "class",
        "text": "Q167346 (wde:Q167346)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q16748868",
        "parent": "#",
        "type": "class",
        "text": "Q16748868 (wde:Q16748868)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1678289.html",
        "parent": "#",
        "type": "class",
        "text": "Q1678289 (wde:Q1678289)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q16917.html",
        "parent": "#",
        "type": "class",
        "text": "Q16917 (wde:Q16917)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q16934465",
        "parent": "#",
        "type": "class",
        "text": "Q16934465 (wde:Q16934465)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q16970.html",
        "parent": "#",
        "type": "class",
        "text": "Q16970 (wde:Q16970)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q16980762.html",
        "parent": "#",
        "type": "class",
        "text": "Q16980762 (wde:Q16980762)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q170087",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q170087 (wde:Q170087)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1702970",
        "parent": "#",
        "type": "class",
        "text": "Q1702970 (wde:Q1702970)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q170477.html",
        "parent": "#",
        "type": "class",
        "text": "Q170477 (wde:Q170477)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q17055024",
        "parent": "#",
        "type": "class",
        "text": "Q17055024 (wde:Q17055024)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1706476",
        "parent": "#",
        "type": "class",
        "text": "Q1706476 (wde:Q1706476)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1707610",
        "parent": "#",
        "type": "class",
        "text": "Q1707610 (wde:Q1707610)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1714375",
        "parent": "#",
        "type": "class",
        "text": "Q1714375 (wde:Q1714375)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q171448.html",
        "parent": "#",
        "type": "class",
        "text": "Q171448 (wde:Q171448)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q17152819",
        "parent": "#",
        "type": "class",
        "text": "Q17152819 (wde:Q17152819)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1719063",
        "parent": "#",
        "type": "class",
        "text": "Q1719063 (wde:Q1719063)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1719485",
        "parent": "#",
        "type": "class",
        "text": "Q1719485 (wde:Q1719485)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1722438",
        "parent": "#",
        "type": "class",
        "text": "Q1722438 (wde:Q1722438)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1730505.html",
        "parent": "#",
        "type": "class",
        "text": "Q1730505 (wde:Q1730505)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1739809",
        "parent": "#",
        "type": "class",
        "text": "Q1739809 (wde:Q1739809)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1742059",
        "parent": "#",
        "type": "class",
        "text": "Q1742059 (wde:Q1742059)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q174782",
        "parent": "#",
        "type": "class",
        "text": "Q174782 (wde:Q174782)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q174814.html",
        "parent": "#",
        "type": "class",
        "text": "Q174814 (wde:Q174814)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q17485533",
        "parent": "#",
        "type": "class",
        "text": "Q17485533 (wde:Q17485533)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1754598",
        "parent": "#",
        "type": "class",
        "text": "Q1754598 (wde:Q1754598)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1756525",
        "parent": "#",
        "type": "class",
        "text": "Q1756525 (wde:Q1756525)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1757209",
        "parent": "#",
        "type": "class",
        "text": "Q1757209 (wde:Q1757209)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q177380.html",
        "parent": "#",
        "type": "class",
        "text": "Q177380 (wde:Q177380)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1774225",
        "parent": "#",
        "type": "class",
        "text": "Q1774225 (wde:Q1774225)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1774898.html",
        "parent": "#",
        "type": "class",
        "text": "Q1774898 (wde:Q1774898)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1777138",
        "parent": "#",
        "type": "class",
        "text": "Q1777138 (wde:Q1777138)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1777951",
        "parent": "#",
        "type": "class",
        "text": "Q1777951 (wde:Q1777951)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1785071.html",
        "parent": "#",
        "type": "class",
        "text": "Q1785071 (wde:Q1785071)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q178692.html",
        "parent": "#",
        "type": "class",
        "text": "Q178692 (wde:Q178692)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1787825",
        "parent": "#",
        "type": "class",
        "text": "Q1787825 (wde:Q1787825)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1792363",
        "parent": "#",
        "type": "class",
        "text": "Q1792363 (wde:Q1792363)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1800623",
        "parent": "#",
        "type": "class",
        "text": "Q1800623 (wde:Q1800623)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q18018837",
        "parent": "#",
        "type": "class",
        "text": "Q18018837 (wde:Q18018837)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1802748",
        "parent": "#",
        "type": "class",
        "text": "Q1802748 (wde:Q1802748)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1806366",
        "parent": "#",
        "type": "class",
        "text": "Q1806366 (wde:Q1806366)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q181348.html",
        "parent": "#",
        "type": "class",
        "text": "Q181348 (wde:Q181348)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q181485",
        "parent": "#",
        "type": "class",
        "text": "Q181485 (wde:Q181485)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q18152526.html",
        "parent": "#",
        "type": "class",
        "text": "Q18152526 (wde:Q18152526)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1821399",
        "parent": "#",
        "type": "class",
        "text": "Q1821399 (wde:Q1821399)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q182676.html",
        "parent": "#",
        "type": "class",
        "text": "Q182676 (wde:Q182676)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q184356.html",
        "parent": "#",
        "type": "class",
        "text": "Q184356 (wde:Q184356)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q184358.html",
        "parent": "#",
        "type": "class",
        "text": "Q184358 (wde:Q184358)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q184590.html",
        "parent": "#",
        "type": "class",
        "text": "Q184590 (wde:Q184590)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q185113.html",
        "parent": "#",
        "type": "class",
        "text": "Q185113 (wde:Q185113)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q185187.html",
        "parent": "#",
        "type": "class",
        "text": "Q185187 (wde:Q185187)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q187456.html",
        "parent": "#",
        "type": "class",
        "text": "Q187456 (wde:Q187456)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q188040.html",
        "parent": "#",
        "type": "class",
        "text": "Q188040 (wde:Q188040)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q188507.html",
        "parent": "#",
        "type": "class",
        "text": "Q188507 (wde:Q188507)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q188509.html",
        "parent": "#",
        "type": "class",
        "text": "Q188509 (wde:Q188509)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1898246",
        "parent": "#",
        "type": "class",
        "text": "Q1898246 (wde:Q1898246)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q190107",
        "parent": "#",
        "type": "class",
        "text": "Q190107 (wde:Q190107)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q190928",
        "parent": "#",
        "type": "class",
        "text": "Q190928 (wde:Q190928)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q192350",
        "parent": "#",
        "type": "class",
        "text": "Q192350 (wde:Q192350)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q192375",
        "parent": "#",
        "type": "class",
        "text": "Q192375 (wde:Q192375)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q19279682",
        "parent": "#",
        "type": "class",
        "text": "Q19279682 (wde:Q19279682)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q193071",
        "parent": "#",
        "type": "class",
        "text": "Q193071 (wde:Q193071)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q19310826",
        "parent": "#",
        "type": "class",
        "text": "Q19310826 (wde:Q19310826)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1936980",
        "parent": "#",
        "type": "class",
        "text": "Q1936980 (wde:Q1936980)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q193886",
        "parent": "#",
        "type": "class",
        "text": "Q193886 (wde:Q193886)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1939150.html",
        "parent": "#",
        "type": "class",
        "text": "Q1939150 (wde:Q1939150)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1939700",
        "parent": "#",
        "type": "class",
        "text": "Q1939700 (wde:Q1939700)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q194195",
        "parent": "#",
        "type": "class",
        "text": "Q194195 (wde:Q194195)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q1971570.html",
        "parent": "#",
        "type": "class",
        "text": "Q1971570 (wde:Q1971570)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q19833158",
        "parent": "#",
        "type": "class",
        "text": "Q19833158 (wde:Q19833158)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q1996635",
        "parent": "#",
        "type": "class",
        "text": "Q1996635 (wde:Q1996635)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2002253",
        "parent": "#",
        "type": "class",
        "text": "Q2002253 (wde:Q2002253)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q200764",
        "parent": "#",
        "type": "class",
        "text": "Q200764 (wde:Q200764)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q202008",
        "parent": "#",
        "type": "class",
        "text": "Q202008 (wde:Q202008)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2027640",
        "parent": "#",
        "type": "class",
        "text": "Q2027640 (wde:Q2027640)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2048319.html",
        "parent": "#",
        "type": "class",
        "text": "Q2048319 (wde:Q2048319)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q205495.html",
        "parent": "#",
        "type": "class",
        "text": "Q205495 (wde:Q205495)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2072285",
        "parent": "#",
        "type": "class",
        "text": "Q2072285 (wde:Q2072285)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q207326.html",
        "parent": "#",
        "type": "class",
        "text": "Q207326 (wde:Q207326)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q207524.html",
        "parent": "#",
        "type": "class",
        "text": "Q207524 (wde:Q207524)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q207694",
        "parent": "#",
        "type": "class",
        "text": "Q207694 (wde:Q207694)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2080521.html",
        "parent": "#",
        "type": "class",
        "text": "Q2080521 (wde:Q2080521)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q20820103",
        "parent": "#",
        "type": "class",
        "text": "Q20820103 (wde:Q20820103)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q209333",
        "parent": "#",
        "type": "class",
        "text": "Q209333 (wde:Q209333)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2104072",
        "parent": "#",
        "type": "class",
        "text": "Q2104072 (wde:Q2104072)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q213204",
        "parent": "#",
        "type": "class",
        "text": "Q213204 (wde:Q213204)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q213283",
        "parent": "#",
        "type": "class",
        "text": "Q213283 (wde:Q213283)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q213441.html",
        "parent": "#",
        "type": "class",
        "text": "Q213441 (wde:Q213441)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q213643.html",
        "parent": "#",
        "type": "class",
        "text": "Q213643 (wde:Q213643)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2136798",
        "parent": "#",
        "type": "class",
        "text": "Q2136798 (wde:Q2136798)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2138424",
        "parent": "#",
        "type": "class",
        "text": "Q2138424 (wde:Q2138424)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2140646",
        "parent": "#",
        "type": "class",
        "text": "Q2140646 (wde:Q2140646)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2142845",
        "parent": "#",
        "type": "class",
        "text": "Q2142845 (wde:Q2142845)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2143354.html",
        "parent": "#",
        "type": "class",
        "text": "Q2143354 (wde:Q2143354)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2143825",
        "parent": "#",
        "type": "class",
        "text": "Q2143825 (wde:Q2143825)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2144320",
        "parent": "#",
        "type": "class",
        "text": "Q2144320 (wde:Q2144320)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q216107.html",
        "parent": "#",
        "type": "class",
        "text": "Q216107 (wde:Q216107)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q216212.html",
        "parent": "#",
        "type": "class",
        "text": "Q216212 (wde:Q216212)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q216346.html",
        "parent": "#",
        "type": "class",
        "text": "Q216346 (wde:Q216346)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2168243",
        "parent": "#",
        "type": "class",
        "text": "Q2168243 (wde:Q2168243)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q217107.html",
        "parent": "#",
        "type": "class",
        "text": "Q217107 (wde:Q217107)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q218550",
        "parent": "#",
        "type": "class",
        "text": "Q218550 (wde:Q218550)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q220142",
        "parent": "#",
        "type": "class",
        "text": "Q220142 (wde:Q220142)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q221275.html",
        "parent": "#",
        "type": "class",
        "text": "Q221275 (wde:Q221275)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q221618",
        "parent": "#",
        "type": "class",
        "text": "Q221618 (wde:Q221618)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q221722.html",
        "parent": "#",
        "type": "class",
        "text": "Q221722 (wde:Q221722)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2240172",
        "parent": "#",
        "type": "class",
        "text": "Q2240172 (wde:Q2240172)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2251287",
        "parent": "#",
        "type": "class",
        "text": "Q2251287 (wde:Q2251287)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2265915",
        "parent": "#",
        "type": "class",
        "text": "Q2265915 (wde:Q2265915)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q22687.html",
        "parent": "#",
        "type": "class",
        "text": "Q22687 (wde:Q22687)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q22698.html",
        "parent": "#",
        "type": "class",
        "text": "Q22698 (wde:Q22698)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2271117",
        "parent": "#",
        "type": "class",
        "text": "Q2271117 (wde:Q2271117)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q22715.html",
        "parent": "#",
        "type": "class",
        "text": "Q22715 (wde:Q22715)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q22721",
        "parent": "#",
        "type": "class",
        "text": "Q22721 (wde:Q22721)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q22733.html",
        "parent": "#",
        "type": "class",
        "text": "Q22733 (wde:Q22733)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2281315",
        "parent": "#",
        "type": "class",
        "text": "Q2281315 (wde:Q2281315)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q22815176",
        "parent": "#",
        "type": "class",
        "text": "Q22815176 (wde:Q22815176)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2281788.html",
        "parent": "#",
        "type": "class",
        "text": "Q2281788 (wde:Q2281788)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q22865",
        "parent": "#",
        "type": "class",
        "text": "Q22865 (wde:Q22865)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q22908",
        "parent": "#",
        "type": "class",
        "text": "Q22908 (wde:Q22908)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q22969563",
        "parent": "#",
        "type": "class",
        "text": "Q22969563 (wde:Q22969563)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q23005337",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q23005337 (wde:Q23005337)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2301048",
        "parent": "#",
        "type": "class",
        "text": "Q2301048 (wde:Q2301048)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q23041045",
        "parent": "#",
        "type": "class",
        "text": "Q23041045 (wde:Q23041045)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2309609.html",
        "parent": "#",
        "type": "class",
        "text": "Q2309609 (wde:Q2309609)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q23383",
        "parent": "#",
        "type": "class",
        "text": "Q23383 (wde:Q23383)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q23397",
        "parent": "#",
        "type": "class",
        "text": "Q23397 (wde:Q23397)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q23413.html",
        "parent": "#",
        "type": "class",
        "text": "Q23413 (wde:Q23413)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q23442.html",
        "parent": "#",
        "type": "class",
        "text": "Q23442 (wde:Q23442)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q23541247.html",
        "parent": "#",
        "type": "class",
        "text": "Q23541247 (wde:Q23541247)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2354897",
        "parent": "#",
        "type": "class",
        "text": "Q2354897 (wde:Q2354897)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q235779.html",
        "parent": "#",
        "type": "class",
        "text": "Q235779 (wde:Q235779)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q236371",
        "parent": "#",
        "type": "class",
        "text": "Q236371 (wde:Q236371)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2376564",
        "parent": "#",
        "type": "class",
        "text": "Q2376564 (wde:Q2376564)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q23787429",
        "parent": "#",
        "type": "class",
        "text": "Q23787429 (wde:Q23787429)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2379791",
        "parent": "#",
        "type": "class",
        "text": "Q2379791 (wde:Q2379791)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2385804",
        "parent": "#",
        "type": "class",
        "text": "Q2385804 (wde:Q2385804)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q241570",
        "parent": "#",
        "type": "class",
        "text": "Q241570 (wde:Q241570)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q24238356.html",
        "parent": "#",
        "type": "class",
        "text": "Q24238356 (wde:Q24238356)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2431970.html",
        "parent": "#",
        "type": "class",
        "text": "Q2431970 (wde:Q2431970)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q24354.html",
        "parent": "#",
        "type": "class",
        "text": "Q24354 (wde:Q24354)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q244326",
        "parent": "#",
        "type": "class",
        "text": "Q244326 (wde:Q244326)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2516330",
        "parent": "#",
        "type": "class",
        "text": "Q2516330 (wde:Q2516330)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2516534",
        "parent": "#",
        "type": "class",
        "text": "Q2516534 (wde:Q2516534)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q253019",
        "parent": "#",
        "type": "class",
        "text": "Q253019 (wde:Q253019)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q25384001",
        "parent": "#",
        "type": "class",
        "text": "Q25384001 (wde:Q25384001)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q25391",
        "parent": "#",
        "type": "class",
        "text": "Q25391 (wde:Q25391)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q261604",
        "parent": "http://linkedgeodata.org/ontology/PowerStation",
        "type": "class",
        "text": "Q261604 (wde:Q261604)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q262166.html",
        "parent": "#",
        "type": "class",
        "text": "Q262166 (wde:Q262166)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2649726",
        "parent": "#",
        "type": "class",
        "text": "Q2649726 (wde:Q2649726)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q269949.html",
        "parent": "#",
        "type": "class",
        "text": "Q269949 (wde:Q269949)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q27106436.html",
        "parent": "#",
        "type": "class",
        "text": "Q27106436 (wde:Q27106436)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q27106471",
        "parent": "#",
        "type": "class",
        "text": "Q27106471 (wde:Q27106471)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2710737",
        "parent": "#",
        "type": "class",
        "text": "Q2710737 (wde:Q2710737)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q272231",
        "parent": "#",
        "type": "class",
        "text": "Q272231 (wde:Q272231)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q27250",
        "parent": "#",
        "type": "class",
        "text": "Q27250 (wde:Q27250)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q274153.html",
        "parent": "#",
        "type": "class",
        "text": "Q274153 (wde:Q274153)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q274393.html",
        "parent": "#",
        "type": "class",
        "text": "Q274393 (wde:Q274393)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q27590",
        "parent": "#",
        "type": "class",
        "text": "Q27590 (wde:Q27590)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q27686.html",
        "parent": "#",
        "type": "class",
        "text": "Q27686 (wde:Q27686)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2780955",
        "parent": "#",
        "type": "class",
        "text": "Q2780955 (wde:Q2780955)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q283202.html",
        "parent": "#",
        "type": "class",
        "text": "Q283202 (wde:Q283202)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q28337.html",
        "parent": "#",
        "type": "class",
        "text": "Q28337 (wde:Q28337)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2897058.html",
        "parent": "#",
        "type": "class",
        "text": "Q2897058 (wde:Q2897058)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q2924561.html",
        "parent": "#",
        "type": "class",
        "text": "Q2924561 (wde:Q2924561)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q294422.html",
        "parent": "#",
        "type": "class",
        "text": "Q294422 (wde:Q294422)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q294953.html",
        "parent": "#",
        "type": "class",
        "text": "Q294953 (wde:Q294953)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q2974115",
        "parent": "#",
        "type": "class",
        "text": "Q2974115 (wde:Q2974115)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q29925",
        "parent": "#",
        "type": "class",
        "text": "Q29925 (wde:Q29925)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q30022.html",
        "parent": "#",
        "type": "class",
        "text": "Q30022 (wde:Q30022)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q30148256",
        "parent": "#",
        "type": "class",
        "text": "Q30148256 (wde:Q30148256)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3079086",
        "parent": "#",
        "type": "class",
        "text": "Q3079086 (wde:Q3079086)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3177899.html",
        "parent": "#",
        "type": "class",
        "text": "Q3177899 (wde:Q3177899)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q31796",
        "parent": "#",
        "type": "class",
        "text": "Q31796 (wde:Q31796)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q31838271",
        "parent": "#",
        "type": "class",
        "text": "Q31838271 (wde:Q31838271)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q319608",
        "parent": "#",
        "type": "class",
        "text": "Q319608 (wde:Q319608)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3253281",
        "parent": "#",
        "type": "class",
        "text": "Q3253281 (wde:Q3253281)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q325358.html",
        "parent": "#",
        "type": "class",
        "text": "Q325358 (wde:Q325358)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q327333",
        "parent": "#",
        "type": "class",
        "text": "Q327333 (wde:Q327333)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q32815",
        "parent": "#",
        "type": "class",
        "text": "Q32815 (wde:Q32815)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q329683",
        "parent": "#",
        "type": "class",
        "text": "Q329683 (wde:Q329683)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q33026952",
        "parent": "#",
        "type": "class",
        "text": "Q33026952 (wde:Q33026952)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q330284.html",
        "parent": "#",
        "type": "class",
        "text": "Q330284 (wde:Q330284)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q331211",
        "parent": "#",
        "type": "class",
        "text": "Q331211 (wde:Q331211)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q33506.html",
        "parent": "#",
        "type": "class",
        "text": "Q33506 (wde:Q33506)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q33565",
        "parent": "#",
        "type": "class",
        "text": "Q33565 (wde:Q33565)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q335778",
        "parent": "#",
        "type": "class",
        "text": "Q335778 (wde:Q335778)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q337567",
        "parent": "#",
        "type": "class",
        "text": "Q337567 (wde:Q337567)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q338313",
        "parent": "#",
        "type": "class",
        "text": "Q338313 (wde:Q338313)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3395121.html",
        "parent": "#",
        "type": "class",
        "text": "Q3395121 (wde:Q3395121)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3395383.html",
        "parent": "#",
        "type": "class",
        "text": "Q3395383 (wde:Q3395383)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q34023.html",
        "parent": "#",
        "type": "class",
        "text": "Q34023 (wde:Q34023)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q34038.html",
        "parent": "#",
        "type": "class",
        "text": "Q34038 (wde:Q34038)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q34442",
        "parent": "#",
        "type": "class",
        "text": "Q34442 (wde:Q34442)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3456796",
        "parent": "#",
        "type": "class",
        "text": "Q3456796 (wde:Q3456796)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q34627",
        "parent": "#",
        "type": "class",
        "text": "Q34627 (wde:Q34627)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q34763.html",
        "parent": "#",
        "type": "class",
        "text": "Q34763 (wde:Q34763)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3503155.html",
        "parent": "#",
        "type": "class",
        "text": "Q3503155 (wde:Q3503155)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q35054.html",
        "parent": "#",
        "type": "class",
        "text": "Q35054 (wde:Q35054)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q351234",
        "parent": "#",
        "type": "class",
        "text": "Q351234 (wde:Q351234)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q35509.html",
        "parent": "#",
        "type": "class",
        "text": "Q35509 (wde:Q35509)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q355304",
        "parent": "#",
        "type": "class",
        "text": "Q355304 (wde:Q355304)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q35666.html",
        "parent": "#",
        "type": "class",
        "text": "Q35666 (wde:Q35666)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q358",
        "parent": "#",
        "type": "class",
        "text": "Q358 (wde:Q358)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q358976",
        "parent": "#",
        "type": "class",
        "text": "Q358976 (wde:Q358976)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q361945",
        "parent": "#",
        "type": "class",
        "text": "Q361945 (wde:Q361945)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q365627",
        "parent": "#",
        "type": "class",
        "text": "Q365627 (wde:Q365627)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3661265",
        "parent": "#",
        "type": "class",
        "text": "Q3661265 (wde:Q3661265)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q367914.html",
        "parent": "#",
        "type": "class",
        "text": "Q367914 (wde:Q367914)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q369730.html",
        "parent": "#",
        "type": "class",
        "text": "Q369730 (wde:Q369730)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q37176024",
        "parent": "#",
        "type": "class",
        "text": "Q37176024 (wde:Q37176024)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q372690",
        "parent": "#",
        "type": "class",
        "text": "Q372690 (wde:Q372690)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3742014",
        "parent": "#",
        "type": "class",
        "text": "Q3742014 (wde:Q3742014)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q3771516",
        "parent": "#",
        "type": "class",
        "text": "Q3771516 (wde:Q3771516)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q378445",
        "parent": "#",
        "type": "class",
        "text": "Q378445 (wde:Q378445)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q37896512.html",
        "parent": "#",
        "type": "class",
        "text": "Q37896512 (wde:Q37896512)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q381704",
        "parent": "#",
        "type": "class",
        "text": "Q381704 (wde:Q381704)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q385378.html",
        "parent": "#",
        "type": "class",
        "text": "Q385378 (wde:Q385378)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q38720.html",
        "parent": "#",
        "type": "class",
        "text": "Q38720 (wde:Q38720)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3914.html",
        "parent": "#",
        "type": "class",
        "text": "Q3914 (wde:Q3914)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3917681.html",
        "parent": "#",
        "type": "class",
        "text": "Q3917681 (wde:Q3917681)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q3918.html",
        "parent": "#",
        "type": "class",
        "text": "Q3918 (wde:Q3918)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q39594.html",
        "parent": "#",
        "type": "class",
        "text": "Q39594 (wde:Q39594)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q39614.html",
        "parent": "#",
        "type": "class",
        "text": "Q39614 (wde:Q39614)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q39715.html",
        "parent": "#",
        "type": "class",
        "text": "Q39715 (wde:Q39715)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q39816",
        "parent": "#",
        "type": "class",
        "text": "Q39816 (wde:Q39816)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q40080.html",
        "parent": "#",
        "type": "class",
        "text": "Q40080 (wde:Q40080)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q4022.html",
        "parent": "#",
        "type": "class",
        "text": "Q4022 (wde:Q4022)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q40357.html",
        "parent": "#",
        "type": "class",
        "text": "Q40357 (wde:Q40357)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q41176",
        "parent": "#",
        "type": "class",
        "text": "Q41176 (wde:Q41176)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q41253.html",
        "parent": "#",
        "type": "class",
        "text": "Q41253 (wde:Q41253)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q420962",
        "parent": "#",
        "type": "class",
        "text": "Q420962 (wde:Q420962)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q42295",
        "parent": "#",
        "type": "class",
        "text": "Q42295 (wde:Q42295)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q42523",
        "parent": "#",
        "type": "class",
        "text": "Q42523 (wde:Q42523)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q42948.html",
        "parent": "#",
        "type": "class",
        "text": "Q42948 (wde:Q42948)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q43483",
        "parent": "#",
        "type": "class",
        "text": "Q43483 (wde:Q43483)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q43501.html",
        "parent": "#",
        "type": "class",
        "text": "Q43501 (wde:Q43501)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q4421.html",
        "parent": "#",
        "type": "class",
        "text": "Q4421 (wde:Q4421)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q44377",
        "parent": "#",
        "type": "class",
        "text": "Q44377 (wde:Q44377)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q444677",
        "parent": "#",
        "type": "class",
        "text": "Q444677 (wde:Q444677)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q44494.html",
        "parent": "#",
        "type": "class",
        "text": "Q44494 (wde:Q44494)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q44539",
        "parent": "http://linkedgeodata.org/ontology/PlaceOfWorship",
        "type": "class",
        "text": "Q44539 (wde:Q44539)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q446013",
        "parent": "#",
        "type": "class",
        "text": "Q446013 (wde:Q446013)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q44613.html",
        "parent": "#",
        "type": "class",
        "text": "Q44613 (wde:Q44613)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q447523",
        "parent": "#",
        "type": "class",
        "text": "Q447523 (wde:Q447523)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q447555",
        "parent": "#",
        "type": "class",
        "text": "Q447555 (wde:Q447555)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q448801",
        "parent": "#",
        "type": "class",
        "text": "Q448801 (wde:Q448801)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q45701.html",
        "parent": "#",
        "type": "class",
        "text": "Q45701 (wde:Q45701)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q45776.html",
        "parent": "#",
        "type": "class",
        "text": "Q45776 (wde:Q45776)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q459886",
        "parent": "#",
        "type": "class",
        "text": "Q459886 (wde:Q459886)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q46124",
        "parent": "#",
        "type": "class",
        "text": "Q46124 (wde:Q46124)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q46169.html",
        "parent": "#",
        "type": "class",
        "text": "Q46169 (wde:Q46169)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q46622.html",
        "parent": "#",
        "type": "class",
        "text": "Q46622 (wde:Q46622)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q46831",
        "parent": "#",
        "type": "class",
        "text": "Q46831 (wde:Q46831)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q468756",
        "parent": "#",
        "type": "class",
        "text": "Q468756 (wde:Q468756)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q473972.html",
        "parent": "#",
        "type": "class",
        "text": "Q473972 (wde:Q473972)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q474.html",
        "parent": "#",
        "type": "class",
        "text": "Q474 (wde:Q474)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q47521.html",
        "parent": "#",
        "type": "class",
        "text": "Q47521 (wde:Q47521)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q475354",
        "parent": "#",
        "type": "class",
        "text": "Q475354 (wde:Q475354)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q47848.html",
        "parent": "#",
        "type": "class",
        "text": "Q47848 (wde:Q47848)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q478847",
        "parent": "#",
        "type": "class",
        "text": "Q478847 (wde:Q478847)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q478986",
        "parent": "#",
        "type": "class",
        "text": "Q478986 (wde:Q478986)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q483110.html",
        "parent": "#",
        "type": "class",
        "text": "Q483110 (wde:Q483110)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q483453",
        "parent": "#",
        "type": "class",
        "text": "Q483453 (wde:Q483453)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q487843",
        "parent": "#",
        "type": "class",
        "text": "Q487843 (wde:Q487843)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q489357.html",
        "parent": "#",
        "type": "class",
        "text": "Q489357 (wde:Q489357)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q492425",
        "parent": "#",
        "type": "class",
        "text": "Q492425 (wde:Q492425)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q494829.html",
        "parent": "#",
        "type": "class",
        "text": "Q494829 (wde:Q494829)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q49844.html",
        "parent": "#",
        "type": "class",
        "text": "Q49844 (wde:Q49844)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5",
        "parent": "#",
        "type": "class",
        "text": "Q5 (wde:Q5)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q502074.html",
        "parent": "#",
        "type": "class",
        "text": "Q502074 (wde:Q502074)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q505213",
        "parent": "#",
        "type": "class",
        "text": "Q505213 (wde:Q505213)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5056668",
        "parent": "#",
        "type": "class",
        "text": "Q5056668 (wde:Q5056668)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q505774",
        "parent": "#",
        "type": "class",
        "text": "Q505774 (wde:Q505774)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5078274",
        "parent": "#",
        "type": "class",
        "text": "Q5078274 (wde:Q5078274)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q510255",
        "parent": "#",
        "type": "class",
        "text": "Q510255 (wde:Q510255)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5107",
        "parent": "#",
        "type": "class",
        "text": "Q5107 (wde:Q5107)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q515.html",
        "parent": "#",
        "type": "class",
        "text": "Q515 (wde:Q515)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q516739",
        "parent": "#",
        "type": "class",
        "text": "Q516739 (wde:Q516739)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q521839",
        "parent": "#",
        "type": "class",
        "text": "Q521839 (wde:Q521839)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q525800",
        "parent": "#",
        "type": "class",
        "text": "Q525800 (wde:Q525800)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q5307561.html",
        "parent": "#",
        "type": "class",
        "text": "Q5307561 (wde:Q5307561)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5393308",
        "parent": "http://dbpedia.org/ontology/Temple",
        "type": "class",
        "text": "Q5393308 (wde:Q5393308)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q54050.html",
        "parent": "#",
        "type": "class",
        "text": "Q54050 (wde:Q54050)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q543654.html",
        "parent": "#",
        "type": "class",
        "text": "Q543654 (wde:Q543654)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q55043",
        "parent": "#",
        "type": "class",
        "text": "Q55043 (wde:Q55043)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q55488.html",
        "parent": "#",
        "type": "class",
        "text": "Q55488 (wde:Q55488)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q555853",
        "parent": "#",
        "type": "class",
        "text": "Q555853 (wde:Q555853)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q56026",
        "parent": "#",
        "type": "class",
        "text": "Q56026 (wde:Q56026)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q56061",
        "parent": "#",
        "type": "class",
        "text": "Q56061 (wde:Q56061)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q561431",
        "parent": "#",
        "type": "class",
        "text": "Q561431 (wde:Q561431)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q562061",
        "parent": "#",
        "type": "class",
        "text": "Q562061 (wde:Q562061)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q573607",
        "parent": "#",
        "type": "class",
        "text": "Q573607 (wde:Q573607)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q575759",
        "parent": "#",
        "type": "class",
        "text": "Q575759 (wde:Q575759)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q57821",
        "parent": "#",
        "type": "class",
        "text": "Q57821 (wde:Q57821)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5787273",
        "parent": "#",
        "type": "class",
        "text": "Q5787273 (wde:Q5787273)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q588750",
        "parent": "#",
        "type": "class",
        "text": "Q588750 (wde:Q588750)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q5903136",
        "parent": "#",
        "type": "class",
        "text": "Q5903136 (wde:Q5903136)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q6023295",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Turm",
        "type": "class",
        "text": "Q6023295 (wde:Q6023295)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q606619",
        "parent": "#",
        "type": "class",
        "text": "Q606619 (wde:Q606619)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q608152",
        "parent": "#",
        "type": "class",
        "text": "Q608152 (wde:Q608152)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q620424",
        "parent": "#",
        "type": "class",
        "text": "Q620424 (wde:Q620424)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q6256.html",
        "parent": "#",
        "type": "class",
        "text": "Q6256 (wde:Q6256)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q626687",
        "parent": "#",
        "type": "class",
        "text": "Q626687 (wde:Q626687)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q62832.html",
        "parent": "#",
        "type": "class",
        "text": "Q62832 (wde:Q62832)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q633423.html",
        "parent": "#",
        "type": "class",
        "text": "Q633423 (wde:Q633423)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q634299.html",
        "parent": "#",
        "type": "class",
        "text": "Q634299 (wde:Q634299)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q641406.html",
        "parent": "#",
        "type": "class",
        "text": "Q641406 (wde:Q641406)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q642682",
        "parent": "#",
        "type": "class",
        "text": "Q642682 (wde:Q642682)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q643352",
        "parent": "#",
        "type": "class",
        "text": "Q643352 (wde:Q643352)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q644371",
        "parent": "#",
        "type": "class",
        "text": "Q644371 (wde:Q644371)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q6452175",
        "parent": "#",
        "type": "class",
        "text": "Q6452175 (wde:Q6452175)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q648116",
        "parent": "#",
        "type": "class",
        "text": "Q648116 (wde:Q648116)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q6501028.html",
        "parent": "#",
        "type": "class",
        "text": "Q6501028 (wde:Q6501028)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q655686.html",
        "parent": "#",
        "type": "class",
        "text": "Q655686 (wde:Q655686)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q656208",
        "parent": "#",
        "type": "class",
        "text": "Q656208 (wde:Q656208)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q656720",
        "parent": "#",
        "type": "class",
        "text": "Q656720 (wde:Q656720)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q667471",
        "parent": "#",
        "type": "class",
        "text": "Q667471 (wde:Q667471)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q674251",
        "parent": "#",
        "type": "class",
        "text": "Q674251 (wde:Q674251)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q675423",
        "parent": "#",
        "type": "class",
        "text": "Q675423 (wde:Q675423)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q680197",
        "parent": "#",
        "type": "class",
        "text": "Q680197 (wde:Q680197)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q683595",
        "parent": "#",
        "type": "class",
        "text": "Q683595 (wde:Q683595)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q692680",
        "parent": "#",
        "type": "class",
        "text": "Q692680 (wde:Q692680)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q693369.html",
        "parent": "#",
        "type": "class",
        "text": "Q693369 (wde:Q693369)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q695416.html",
        "parent": "#",
        "type": "class",
        "text": "Q695416 (wde:Q695416)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q695793.html",
        "parent": "#",
        "type": "class",
        "text": "Q695793 (wde:Q695793)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q695850",
        "parent": "#",
        "type": "class",
        "text": "Q695850 (wde:Q695850)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q7075.html",
        "parent": "#",
        "type": "class",
        "text": "Q7075 (wde:Q7075)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q707813",
        "parent": "#",
        "type": "class",
        "text": "Q707813 (wde:Q707813)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q7138926",
        "parent": "#",
        "type": "class",
        "text": "Q7138926 (wde:Q7138926)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q718966.html",
        "parent": "#",
        "type": "class",
        "text": "Q718966 (wde:Q718966)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q721207",
        "parent": "#",
        "type": "class",
        "text": "Q721207 (wde:Q721207)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q721747",
        "parent": "#",
        "type": "class",
        "text": "Q721747 (wde:Q721747)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q721931.html",
        "parent": "#",
        "type": "class",
        "text": "Q721931 (wde:Q721931)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q7278",
        "parent": "#",
        "type": "class",
        "text": "Q7278 (wde:Q7278)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q734818",
        "parent": "#",
        "type": "class",
        "text": "Q734818 (wde:Q734818)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q740445.html",
        "parent": "#",
        "type": "class",
        "text": "Q740445 (wde:Q740445)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q745455",
        "parent": "#",
        "type": "class",
        "text": "Q745455 (wde:Q745455)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q748998",
        "parent": "http://www.adv-online.de/namespaces/adv/gid/6.0#AX_Turm",
        "type": "class",
        "text": "Q748998 (wde:Q748998)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q749151",
        "parent": "#",
        "type": "class",
        "text": "Q749151 (wde:Q749151)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q75520.html",
        "parent": "#",
        "type": "class",
        "text": "plateau (wde:Q75520)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q756102",
        "parent": "#",
        "type": "class",
        "text": "Q756102 (wde:Q756102)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q757163",
        "parent": "#",
        "type": "class",
        "text": "Q757163 (wde:Q757163)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q76470",
        "parent": "#",
        "type": "class",
        "text": "Q76470 (wde:Q76470)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q770135",
        "parent": "#",
        "type": "class",
        "text": "Q770135 (wde:Q770135)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q77115.html",
        "parent": "#",
        "type": "class",
        "text": "Q77115 (wde:Q77115)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q7777019.html",
        "parent": "#",
        "type": "class",
        "text": "Q7777019 (wde:Q7777019)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q7813355.html",
        "parent": "#",
        "type": "class",
        "text": "Q7813355 (wde:Q7813355)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q785486",
        "parent": "#",
        "type": "class",
        "text": "Q785486 (wde:Q785486)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q785979",
        "parent": "#",
        "type": "class",
        "text": "Q785979 (wde:Q785979)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q786014",
        "parent": "#",
        "type": "class",
        "text": "Q786014 (wde:Q786014)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q786803",
        "parent": "#",
        "type": "class",
        "text": "Q786803 (wde:Q786803)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q786922",
        "parent": "#",
        "type": "class",
        "text": "Q786922 (wde:Q786922)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q787113",
        "parent": "#",
        "type": "class",
        "text": "Q787113 (wde:Q787113)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q7883691",
        "parent": "#",
        "type": "class",
        "text": "Q7883691 (wde:Q7883691)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q8004.html",
        "parent": "#",
        "type": "class",
        "text": "Q8004 (wde:Q8004)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q804292",
        "parent": "#",
        "type": "class",
        "text": "Q804292 (wde:Q804292)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q8054653.html",
        "parent": "#",
        "type": "class",
        "text": "Q8054653 (wde:Q8054653)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q8072.html",
        "parent": "#",
        "type": "class",
        "text": "Q8072 (wde:Q8072)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q811165",
        "parent": "#",
        "type": "class",
        "text": "Q811165 (wde:Q811165)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q811440",
        "parent": "#",
        "type": "class",
        "text": "Q811440 (wde:Q811440)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q81235",
        "parent": "#",
        "type": "class",
        "text": "Q81235 (wde:Q81235)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q814499",
        "parent": "#",
        "type": "class",
        "text": "Q814499 (wde:Q814499)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q818978",
        "parent": "#",
        "type": "class",
        "text": "Q818978 (wde:Q818978)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q820477.html",
        "parent": "#",
        "type": "class",
        "text": "Q820477 (wde:Q820477)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q82117.html",
        "parent": "#",
        "type": "class",
        "text": "Q82117 (wde:Q82117)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q830528",
        "parent": "#",
        "type": "class",
        "text": "Q830528 (wde:Q830528)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q832778.html",
        "parent": "#",
        "type": "class",
        "text": "Q832778 (wde:Q832778)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q83405.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q83405 (wde:Q83405)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q83471.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q83471 (wde:Q83471)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q836915",
        "parent": "#",
        "type": "class",
        "text": "Q836915 (wde:Q836915)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q837800",
        "parent": "#",
        "type": "class",
        "text": "Q837800 (wde:Q837800)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q842402",
        "parent": "http://dbpedia.org/ontology/Temple",
        "type": "class",
        "text": "Q842402 (wde:Q842402)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q843181",
        "parent": "#",
        "type": "class",
        "text": "Q843181 (wde:Q843181)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q845945",
        "parent": "http://dbpedia.org/ontology/Temple",
        "type": "class",
        "text": "Q845945 (wde:Q845945)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q8463304",
        "parent": "#",
        "type": "class",
        "text": "Q8463304 (wde:Q8463304)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q847950.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q847950 (wde:Q847950)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q849706.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q849706 (wde:Q849706)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q8502",
        "parent": "#",
        "type": "class",
        "text": "Q8502 (wde:Q8502)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q853252",
        "parent": "#",
        "type": "class",
        "text": "Q853252 (wde:Q853252)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q856548",
        "parent": "#",
        "type": "class",
        "text": "Q856548 (wde:Q856548)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q857909",
        "parent": "#",
        "type": "class",
        "text": "Q857909 (wde:Q857909)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q86195.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q86195 (wde:Q86195)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q863454.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q863454 (wde:Q863454)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q8719053.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q8719053 (wde:Q8719053)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q875157.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q875157 (wde:Q875157)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q878295",
        "parent": "#",
        "type": "class",
        "text": "Q878295 (wde:Q878295)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q879050",
        "parent": "#",
        "type": "class",
        "text": "Q879050 (wde:Q879050)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q896009",
        "parent": "#",
        "type": "class",
        "text": "Q896009 (wde:Q896009)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q897403",
        "parent": "http://linkedgeodata.org/ontology/School",
        "type": "class",
        "text": "Q897403 (wde:Q897403)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q909906.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q909906 (wde:Q909906)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q910386.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q910386 (wde:Q910386)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q910597",
        "parent": "#",
        "type": "class",
        "text": "Q910597 (wde:Q910597)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q91122.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q91122 (wde:Q91122)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q91203",
        "parent": "#",
        "type": "class",
        "text": "Q91203 (wde:Q91203)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q914711.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q914711 (wde:Q914711)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q91487",
        "parent": "#",
        "type": "class",
        "text": "Q91487 (wde:Q91487)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q9158768.html",
        "parent": "#",
        "type": "class",
        "text": "Q9158768 (wde:Q9158768)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q918457",
        "parent": "#",
        "type": "class",
        "text": "Q918457 (wde:Q918457)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q921099",
        "parent": "#",
        "type": "class",
        "text": "Q921099 (wde:Q921099)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q921543",
        "parent": "#",
        "type": "class",
        "text": "Q921543 (wde:Q921543)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q928830",
        "parent": "#",
        "type": "class",
        "text": "Q928830 (wde:Q928830)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q93352",
        "parent": "#",
        "type": "class",
        "text": "Q93352 (wde:Q93352)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q940462",
        "parent": "#",
        "type": "class",
        "text": "Q940462 (wde:Q940462)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q947103",
        "parent": "#",
        "type": "class",
        "text": "Q947103 (wde:Q947103)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q950431",
        "parent": "#",
        "type": "class",
        "text": "Q950431 (wde:Q950431)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_Q953806.html",
        "parent": "http://semgis.de/INSPIRELGD#Wikidata",
        "type": "class",
        "text": "Q953806 (wde:Q953806)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q962715",
        "parent": "#",
        "type": "class",
        "text": "Q962715 (wde:Q962715)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q9842",
        "parent": "#",
        "type": "class",
        "text": "Q9842 (wde:Q9842)",
        "data": {}
      },
      {
        "id": "http://www.wikidata.org/entity/Q988108",
        "parent": "#",
        "type": "class",
        "text": "Q988108 (wde:Q988108)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Autoverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Autoverkehr (xerl:XE_Autoverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Baden.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Baden (xerl:XE_Baden)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Bauwerk.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Bauwerk (xerl:XE_Bauwerk)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Behoerde.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Behoerde (xerl:XE_Behoerde)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Denkmal.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Denkmal (xerl:XE_Denkmal)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Dienstleistung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Dienstleistung (xerl:XE_Dienstleistung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Einzelhandel.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Einzelhandel (xerl:XE_Einzelhandel)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Flughafen.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Flughafen (xerl:XE_Flughafen)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Gastronomie.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Gastronomie (xerl:XE_Gastronomie)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Gesundheit.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Gesundheit (xerl:XE_Gesundheit)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_GewerbeIndustrie.html",
        "parent": "#",
        "type": "class",
        "text": "XE_GewerbeIndustrie (xerl:XE_GewerbeIndustrie)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Gewerbegebiet.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Gewerbegebiet (xerl:XE_Gewerbegebiet)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Gotteshaus.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Gotteshaus (xerl:XE_Gotteshaus)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Kino.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Kino (xerl:XE_Kino)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Kultureinrichtung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Kultureinrichtung (xerl:XE_Kultureinrichtung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Landmarke.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Landmarke (xerl:XE_Landmarke)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Lehrpfad",
        "parent": "#",
        "type": "class",
        "text": "XE_Lehrpfad (xerl:XE_Lehrpfad)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Logistik.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Logistik (xerl:XE_Logistik)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Mediathek.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Mediathek (xerl:XE_Mediathek)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Militaer.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Militaer (xerl:XE_Militaer)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Museum.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Museum (xerl:XE_Museum)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Nachtleben.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Nachtleben (xerl:XE_Nachtleben)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_NaturLandschaft.html",
        "parent": "#",
        "type": "class",
        "text": "XE_NaturLandschaft (xerl:XE_NaturLandschaft)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Radverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Radverkehr (xerl:XE_Radverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Rast.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Rast (xerl:XE_Rast)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Religioeses.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Religioeses (xerl:XE_Religioeses)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Rettung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Rettung (xerl:XE_Rettung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Sammelstelle.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Sammelstelle (xerl:XE_Sammelstelle)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_SchuleAllgemein.html",
        "parent": "#",
        "type": "class",
        "text": "XE_SchuleAllgemein (xerl:XE_SchuleAllgemein)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_SchuleSpezial.html",
        "parent": "#",
        "type": "class",
        "text": "XE_SchuleSpezial (xerl:XE_SchuleSpezial)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Servicestelle.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Servicestelle (xerl:XE_Servicestelle)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Shopping.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Shopping (xerl:XE_Shopping)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Siedlung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Siedlung (xerl:XE_Siedlung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_SonstigerFreizeitweg.html",
        "parent": "#",
        "type": "class",
        "text": "XE_SonstigerFreizeitweg (xerl:XE_SonstigerFreizeitweg)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_SozialEinrichtung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_SozialEinrichtung (xerl:XE_SozialEinrichtung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Sport.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Sport (xerl:XE_Sport)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Tankstelle.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Tankstelle (xerl:XE_Tankstelle)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_TechnischesBauwerk.html",
        "parent": "#",
        "type": "class",
        "text": "XE_TechnischesBauwerk (xerl:XE_TechnischesBauwerk)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_TheaterMusik.html",
        "parent": "#",
        "type": "class",
        "text": "XE_TheaterMusik (xerl:XE_TheaterMusik)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Tiermedizin.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Tiermedizin (xerl:XE_Tiermedizin)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Tierwelt.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Tierwelt (xerl:XE_Tierwelt)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Unterkunft.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Unterkunft (xerl:XE_Unterkunft)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_VerEntsorgungsbetrieb.html",
        "parent": "#",
        "type": "class",
        "text": "XE_VerEntsorgungsbetrieb (xerl:XE_VerEntsorgungsbetrieb)",
        "data": {}
      },
      {
        "id": "http://www.xerleben.de/schema/2.0_1/XE_Veranstaltung",
        "parent": "#",
        "type": "class",
        "text": "XE_Veranstaltung (xerl:XE_Veranstaltung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Veranstaltungsort.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Veranstaltungsort (xerl:XE_Veranstaltungsort)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Verband.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Verband (xerl:XE_Verband)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Wanderweg.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Wanderweg (xerl:XE_Wanderweg)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Wasserverkehr.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Wasserverkehr (xerl:XE_Wasserverkehr)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Weiterbildung.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Weiterbildung (xerl:XE_Weiterbildung)",
        "data": {}
      },
      {
        "id": "http://linkedgeodata.org/ontology/nonns_XE_Wissenschaft.html",
        "parent": "#",
        "type": "class",
        "text": "XE_Wissenschaft (xerl:XE_Wissenschaft)",
        "data": {}
      }
    ]
  }
}