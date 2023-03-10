var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Length (in)",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width (in)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height (in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (lbs)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
     "defaultValue": "o"
    },
     { "name": "Delivery Mechanism",
      "code": "del",
      "type": "radio",
      "choices": {
        "a": "Arm<br>",
        "t": "Telescope<br>",
        "s": "Scissor lift<br>",
        "o": "Other<br>",
        "n": "None"
      },
      "defaultValue": "n"
    },
     { "name": "Intake Mechanism",
      "code": "int",
      "type": "radio",
      "choices": {
        "c": "Claw<br>",
        "l": "Linear Slide<br>",
        "w": "Wheels<br>",
        "m": "Combo<br>",
        "b": "Flexible Band<br>",
        "s": "Shovel<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other"
      },
      "defaultValue":"x"
    }
  ],
  "auton": [
   { "name": "Start with Piece?",
    "code": "ap",
    "type":"radio",
    "choices": {
      "o": "Cone<br>",
      "u": "Cube<br>",
      "n": "None"
      },
      "defaultValue": "n"
    },
    { "name": "Crosses Cable?",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crosses Charging Station",
      "code": "acs",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "Dock?",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Auton Docking Timer",
      "code": "adt",
      "type": "counter"
    },
    { "name": "Describe their Auton in Detail",
      "code": "aco",
      "type": "text",
      "size": 15,
      "maxSize": 350
    }
  ],
  "teleop": [
    { "name": "Teleop Cycle Timer",
      "code": "tct",
      "type": "counter"
    },
    { "name": "Feeder Count<br>(Feeds another bot)",
      "code": "tfc",
      "type": "bool"
    },
    { "name": "Defense?",
      "code": "td",
      "type": "bool"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "How many cones do you place",
      "code": "tcn",
      "type": "counter"
    },
    { "name": "How many cubes do you place",
      "code": "tcb",
      "type": "counter"
    },
    { "name": "Floor Pick UP",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Substation Pick UP Piece",
      "code": "spp",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Substation Pick UP Location",
      "code": "spu",
      "type": "radio",
      "choices": {
        "u": "Substation Upper<br>",
        "l": "Substation Lower<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Where can they deliver",
      "code": "det",
      "type": "radio",
      "choices": {
        "u": "Upper<br>",
        "l": "Mid<br>",
        "b": "Hybrid<br>",
        "c": "Any Cone Space<br>",
        "e": "Any Cube Space<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Describe their Teleop Strategy in Detail",
      "code": "tst",
      "type": "text",
      "size": 25,
      "maxSize": 500
    }
  ],
  "endgame": [
      { "name": "Docking Timer",
      "code": "dt",
      "type": "counter"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "type": "counter"
    }
  ]
}`;
