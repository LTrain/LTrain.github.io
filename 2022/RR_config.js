var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022ilpe",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"Auton_Taxi",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tus",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempted": {
        "code":"tua",
        "title": "Upper Cargo Attempted",
        "type":"counter"
      }, 
      "Lower Cargo Scored": {
        "code":"tls",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Attempted": {
        "code":"tla",
        "title": "Lower Cargo Attempted",
        "type":"counter"
      },      
      "Defense Bot": {
        "code":"wd",
        "title": "Defense Bot?",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"wbt",
        "title": "Wallbot?",
        "type":"bool"
      },
      "Cargo Intake From": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "4":"Low<br>",
          "6":"Mid<br>",
          "10":"High<br>",
          "15":"Traversal<br>",
          "a":"Attempted but failed<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "1":"Not Effective<br>",
          "2":"Average<br>",
          "3":"Effective<br>",
          "4":"Very Effective<br>",
          "0":"Not Observed"
        },
        "defaultValue":"0"
      },
      "Speed Rating": {
        "code":"sr",
        "title": "Speed Rating",
        "type":"radio",
        "choices":{
          "1":"1 (slow)<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
          "5":"5 (fast)"
        },
        "defaultValue":"3"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "1":"Below Average<br>",
          "2":"Average<br>",
          "3":"Good<br>",
          "4":"Excellent<br>",
          "5":"Did not play defense"
        },
        "defaultValue":"5"
      },
       "Strategically held enemy cargo during match?": {
        "code":"hc",
        "title": "Enemy Balls",
        "type":"bool"
      },
       "Swerve drive?": {
        "code":"sd",
        "title": "Swerve drive?",
        "type":"bool"
      },
      "Died/Tipped": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "5":"Extremely Confident<br>",
          "4":"Very Confident<br>",
          "3":"Confident<br>",
          "2":"Average<br>",
          "1":"Not Confident",
          "0":"TRASH"
      },
       "defaultValue":"2"
    }
    }
  }
}`;
