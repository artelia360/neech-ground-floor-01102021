var APP_DATA = {
  "scenes": [
    {
      "id": "0-corridor-1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3515335661348127,
        "pitch": 0.08937242915620303,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.304449418375003,
          "pitch": 0.11794996798126434,
          "rotation": 0,
          "target": "2-corridor-2"
        },
        {
          "yaw": 1.8436735792614094,
          "pitch": 0.13119705222716505,
          "rotation": 0,
          "target": "1-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room-1",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.0057860672916483,
        "pitch": 0.19307787828271117,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.054365132988611,
          "pitch": 0.17362513742377672,
          "rotation": 0,
          "target": "0-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 3.025747990891765,
        "pitch": 0.1363492462943583,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.104903841448273,
          "pitch": 0.06616694122714506,
          "rotation": 0,
          "target": "3-corridor-3"
        },
        {
          "yaw": 0.04008608997251528,
          "pitch": 0.11826191327142332,
          "rotation": 0,
          "target": "0-corridor-1"
        },
        {
          "yaw": 1.5165195811730197,
          "pitch": 0.16049326601826053,
          "rotation": 0,
          "target": "4-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor-3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.7744880903269236,
        "pitch": 0.07239149209661377,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.4063534766907768,
          "pitch": 0.08245918356118409,
          "rotation": 0,
          "target": "2-corridor-2"
        },
        {
          "yaw": 0.40539777762857376,
          "pitch": 0.15442219582285155,
          "rotation": 0,
          "target": "4-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.964751387355836,
        "pitch": 0.049831518493824944,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.49479932169247753,
          "pitch": 0.1542821290893528,
          "rotation": 0,
          "target": "3-corridor-3"
        },
        {
          "yaw": 1.1865014121590551,
          "pitch": 0.08524129607974373,
          "rotation": 0,
          "target": "2-corridor-2"
        },
        {
          "yaw": 2.6498324886376086,
          "pitch": 0.0731998927923172,
          "rotation": 0,
          "target": "5-extension"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-extension",
      "name": "Extension",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.756507759388807,
        "pitch": 0.08658301008080116,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.56695088311821,
          "pitch": 0.09087690067094911,
          "rotation": 0,
          "target": "4-room-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEECH Ground Floor 01/10/2021",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
