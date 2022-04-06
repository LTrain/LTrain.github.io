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
        "code":"Auto Start Position",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"Auto_Taxi",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"Auto_Upper_Scored",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"Auto_Lower_Scored",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"Auto_Cargo_Acquired",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"Teleop_Upper_Cargo_Scored",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempt": {
        "code":"Teleop_Upper_Cargo_Attempt",
        "title": "Uppoer Cargo Attempt",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"Teleop_Lower_Cargo_Scored",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Attempt": {
        "code":"Teleop_Lower_Cargo_Attempt",
        "title": "Lower Cargo Attempt",
        "type":"counter"
      },
      "Defense Bot": {
        "code":"Defense_Bot",
        "title": "Defense Bot",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"Wallbot",
        "title": "Wallbot?",
        "type":"bool"
      },
      "Cargo Intake From": {
        "code":"Cargo_Intake_From",
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
        "code":"Shooting_Spot",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"Climb",
        "title": "Climb",
        "type":"radio",
        "choices":{
          4:"Low<br>",
          6:"Mid<br>",
          10:"High<br>",
          15:"Traversal<br>",
          0:"No Climb Achieved"
        },
        "defaultValue":0
      },
      "Started Climb before Endgame": {
        "code":"Start_Climb_Early",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Attempted Climb but failed?": {
        "code":"Attempt_Climb",
        "title": "Attempt Climb but failed?",
        "type":"bool"
      },
      "Num of Robots Climbed": {
        "code":"Num_Robots_Climbed",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"Driver_Skill",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          1:"Not Effective<br>",
          2:"Average<br>",
          3:"Effective<br>",
          4:"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Speed Rating": {
        "code":"Speed_Rating",
        "title": "Speed Rating",
        "type":"radio",
        "choices":{
          1:"1 (slow)<br>",
          2:"2<br>",
          3:"3<br>",
          4:"4<br>",
          5:"5 (fast)"
        },
        "defaultValue":3
      },
      "Intake Rating": {
        "code":"Intake_Rating",
        "title": "Intake Rating",
        "type":"radio",
        "choices":{
          1:"Below Average<br>",
          2:"Average<br>",
          3:"Good<br>",
          4:"Excellent<br>",
          0:"Did not intake"
        },
        "defaultValue":0
      },
      "Shooter Rating": {
        "code":"Shooter_Rating",
        "title": "Shooter Rating",
        "type":"radio",
        "choices":{
          1:"Below Average<br>",
          2:"Average<br>",
          3:"Fast, but inaccurate<br>",
          3:"Accurate, but slow<br>",
          4:"Excellent<br>",
          0:"Did not shoot"
        },
        "defaultValue":0
      },
      "Defense Rating": {
        "code":"Defense_Rating",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          1:"Below Average<br>",
          2:"Average<br>",
          3:"Good<br>",
          4:"Excellent<br>",
          6:"Did not play defense"
        },
        "defaultValue":6
      },
       "Strategically held enemy cargo during match?": {
        "code":"Enemy_Balls",
        "title": "Enemy Balls",
        "type":"bool"
      },
       "Swerve drive?": {
        "code":"Swerve_Drive",
        "title": "Swerve drive?",
        "type":"bool"
      },
      "Died/Tipped": {
        "code":"Died_Tipped",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Comments": {
        "code":"Comments",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
        "code":"Confidence_Rating",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          5:"Extremely Confident<br>",
          4:"Very Confident<br>",
          3:"Confident",
          2:"Average<br>",
          1:"Not Confident"
          0:"TRASH"
      },
       "defaultValue":3
    }
    }
  }
}`;
