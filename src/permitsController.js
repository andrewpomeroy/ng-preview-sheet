import faker from 'faker';

export default ["$scope", function ($scope) {

	var permitTypes = [
		{
			"id": "{all}",
			"description": "(All)"
		},
		{
			"id": "123123",
			"description": "123123123",
			"isActive": true,
			"permitNumberPrefixId": "3112a-",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"123123TEST"
			]
		},
		{
			"id": "1X",
			"description": "1X desc",
			"isActive": true,
			"permitNumberPrefixId": null,
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"1X_PC"
			]
		},
		{
			"id": "6",
			"description": "2215-05-6 - Vehicle Wash (Open to Public)",
			"isActive": true,
			"permitNumberPrefixId": "GW156",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"GW_GNRL_PRMT",
				"12345"
			]
		},
		{
			"id": "1",
			"description": "2215-10-1 - Above Ground Sewage Disposal (INACTIVE)",
			"isActive": false,
			"permitNumberPrefixId": "P41",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"12345",
				"GW_GNRL_PRMT",
				"GW_2215"
			]
		},
		{
			"id": "2",
			"description": "2215-10-2 - Vehicle Wash (Not open to public)",
			"isActive": true,
			"permitNumberPrefixId": "GW152",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"12345",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "3",
			"description": "2215-10-3 - Slaughterhouse",
			"isActive": true,
			"permitNumberPrefixId": "GW153",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"12345",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "4",
			"description": "2215-10-4 - Gravel, Sand, Limestone, or Dolomite Mining",
			"isActive": true,
			"permitNumberPrefixId": "GW154",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "5",
			"description": "2215-10-5 - Application of Oil Field Brine",
			"isActive": true,
			"permitNumberPrefixId": "GW155",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "7",
			"description": "2215-10-7 - Hydrodemolition",
			"isActive": true,
			"permitNumberPrefixId": "GW157",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "8",
			"description": "2215-10-8 - Hydrostatic Test Water",
			"isActive": true,
			"permitNumberPrefixId": "GW158",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2215",
				"GW_GNRL_PRMT"
			]
		},
		{
			"id": "AA",
			"description": "aaDesc",
			"isActive": true,
			"permitNumberPrefixId": "P91-",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2002"
			]
		},
		{
			"id": "AQAN",
			"description": "Aquatic Animal",
			"isActive": true,
			"permitNumberPrefixId": "MIG032",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"AAA",
				"NPDES_GNRL_PRMT",
				"/ ../list",
				"NPDES_COC"
			]
		},
		{
			"id": "AQAN1",
			"description": "Aquatic Animal1",
			"isActive": true,
			"permitNumberPrefixId": "ANC99",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "AWEED",
			"description": "Aquatic Weed",
			"isActive": true,
			"permitNumberPrefixId": "MIG031",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"AAA",
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "BALL",
			"description": "Ballast Water",
			"isActive": true,
			"permitNumberPrefixId": "MIG14",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "BTX99",
			"description": "BETX Ground Water Cleanup",
			"isActive": true,
			"permitNumberPrefixId": "MIG99",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "ZZz",
			"description": "Bill's test permit type",
			"isActive": true,
			"permitNumberPrefixId": "ANC99",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"123123TEST"
			]
		},
		{
			"id": "BIOS",
			"description": "Biosolids",
			"isActive": true,
			"permitNumberPrefixId": "MIG96",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_COC",
				"NPDES_GNRL_PRMT"
			]
		},
		{
			"id": "CAFOX",
			"description": "CAFO",
			"isActive": true,
			"permitNumberPrefixId": "MIG01",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"GW_2002",
				"NPDES_COC"
			]
		},
		{
			"id": "CAFO",
			"description": "Concentrated Animal Feeding Operation",
			"isActive": true,
			"permitNumberPrefixId": "MIG44",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "DEM",
			"description": "De Minimus (INACTIVE)",
			"isActive": false,
			"permitNumberPrefixId": "MIG60",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "DREDG",
			"description": "Dredging Dewatering Water",
			"isActive": true,
			"permitNumberPrefixId": "MIG69",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "FOO_TEST",
			"description": "Foo Test",
			"isActive": true,
			"permitNumberPrefixId": null,
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_2002"
			]
		},
		{
			"id": "FCAN",
			"description": "Forest Canopy",
			"isActive": true,
			"permitNumberPrefixId": "MIG033",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "GPCM",
			"description": "General Permit for Canals/Marinas (Year 1)",
			"isActive": true,
			"permitNumberPrefixId": "ANC96",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPCM2",
			"description": "General Permit for Canals/Marinas (Year 2)",
			"isActive": true,
			"permitNumberPrefixId": "ANC962",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_COC",
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPCM3",
			"description": "General Permit for Canals/Marinas (Year 3)",
			"isActive": true,
			"permitNumberPrefixId": "ANC963",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_COC",
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPCM4",
			"description": "General Permit for Canals/Marinas (Year 4)",
			"isActive": true,
			"permitNumberPrefixId": "ANC964",
			"programAreaId": "SW",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"TANK"
			]
		},
		{
			"id": "GPGL",
			"description": "General Permit for Great Lakes Invasives (Year 1)",
			"isActive": true,
			"permitNumberPrefixId": "ANC94",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPGL2",
			"description": "General Permit for Great Lakes Invasives (Year 2)",
			"isActive": true,
			"permitNumberPrefixId": "ANC942",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_COC",
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPGL3",
			"description": "General Permit for Great Lakes Invasives (Year 3)",
			"isActive": true,
			"permitNumberPrefixId": "ANC943",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPGL4",
			"description": "General Permit for Great Lakes Invasives (Year 4)",
			"isActive": true,
			"permitNumberPrefixId": "ANC944",
			"programAreaId": "SW",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"TANK"
			]
		},
		{
			"id": "GPPND",
			"description": "General Permit for Ponds (Year 1)",
			"isActive": true,
			"permitNumberPrefixId": "ANC97",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPPND2",
			"description": "General Permit for Ponds (Year 2)",
			"isActive": true,
			"permitNumberPrefixId": "ANC972",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPPND3",
			"description": "General Permit for Ponds (Year 3)",
			"isActive": true,
			"permitNumberPrefixId": "ANC973",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_COC",
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GPPND4",
			"description": "General Permit for Ponds (Year 4)",
			"isActive": true,
			"permitNumberPrefixId": "ANC974",
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "GPPDP",
			"description": "General Permit for Sag Bay Phragmites Demo Project",
			"isActive": true,
			"permitNumberPrefixId": "ANC95",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "1245",
			"description": "Gerald Test",
			"isActive": true,
			"permitNumberPrefixId": "NEC",
			"programAreaId": "GROUNDWATER",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GW_20021"
			]
		},
		{
			"id": "GLTEST2000",
			"description": "Gerald Test  2000 Prmt Type",
			"isActive": true,
			"permitNumberPrefixId": null,
			"programAreaId": "RESOURCES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"GLTEST1000"
			]
		},
		{
			"id": "12345",
			"description": "Gerald Test 2333 x",
			"isActive": true,
			"permitNumberPrefixId": "3112a-",
			"programAreaId": "PART_41",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"JJJ"
			]
		},
		{
			"id": "123456",
			"description": "Gerald Test 3",
			"isActive": true,
			"permitNumberPrefixId": "ANC99",
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "1234567",
			"description": "Gerald Test 4ohFour",
			"isActive": true,
			"permitNumberPrefixId": "ANC98",
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "12345678",
			"description": "Gerald Test 5",
			"isActive": true,
			"permitNumberPrefixId": "GW",
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "123456789",
			"description": "Gerald Test 6",
			"isActive": true,
			"permitNumberPrefixId": "GW16",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "GL_TEST",
			"description": "Gerald Test Permit Type",
			"isActive": true,
			"permitNumberPrefixId": "ANC94",
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "HPTW",
			"description": "Hydrostatic Pressure Test Water",
			"isActive": true,
			"permitNumberPrefixId": "MIG67",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_COC",
				"NPDES_GNRL_PRMT"
			]
		},
		{
			"id": "33",
			"description": "Jami's permit type",
			"isActive": true,
			"permitNumberPrefixId": "MIG44",
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "MBW",
			"description": "Marina",
			"isActive": true,
			"permitNumberPrefixId": "MIG51",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "MOSQ",
			"description": "Mosquito Control",
			"isActive": true,
			"permitNumberPrefixId": "MIG03",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "MS4",
			"description": "MS4 Jurisdiction",
			"isActive": true,
			"permitNumberPrefixId": "MIS04",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "VMSW",
			"description": "MS4 Watershed",
			"isActive": true,
			"permitNumberPrefixId": "MIG61",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "MULTI",
			"description": "Multi-Year Permit (INACTIVE)",
			"isActive": false,
			"permitNumberPrefixId": null,
			"programAreaId": "ANC",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"ANC_COC",
				"ANC_GNRL_PRMT"
			]
		},
		{
			"id": "CAFO1",
			"description": "New Large CAFO",
			"isActive": true,
			"permitNumberPrefixId": "MIG01",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "NCW",
			"description": "Noncontact Cooling Water",
			"isActive": true,
			"permitNumberPrefixId": "MIG25",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "TANK_PERM",
			"description": "Permanent Permit",
			"isActive": true,
			"permitNumberPrefixId": "UNDET",
			"programAreaId": "SW",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"TANK"
			]
		},
		{
			"id": "BTX08",
			"description": "Petroleum Contaminated Wastewater",
			"isActive": true,
			"permitNumberPrefixId": "MIG08",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "MSWP",
			"description": "Public Swimming Pool Wastewater",
			"isActive": true,
			"permitNumberPrefixId": "MIG76",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SG",
			"description": "Sand, Gravel, and Clay Mining Wastewater",
			"isActive": true,
			"permitNumberPrefixId": "MIG49",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SSY",
			"description": "Scrap and Salvage Yard",
			"isActive": true,
			"permitNumberPrefixId": "MIG18",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "STWCG",
			"description": "Secondary Treatment Wastewater",
			"isActive": true,
			"permitNumberPrefixId": "MIG57",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "ISW",
			"description": "Storm Water",
			"isActive": true,
			"permitNumberPrefixId": "MIR",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWSC1",
			"description": "SW-Containment CY1",
			"isActive": true,
			"permitNumberPrefixId": "MIS12",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWSC2",
			"description": "SW-Containment CY2",
			"isActive": true,
			"permitNumberPrefixId": "MIS22",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWSC3",
			"description": "SW-Containment CY3",
			"isActive": true,
			"permitNumberPrefixId": "MIS32",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWSC4",
			"description": "SW-Containment CY4",
			"isActive": true,
			"permitNumberPrefixId": "MIS42",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWSC5",
			"description": "SW-Containment CY5",
			"isActive": true,
			"permitNumberPrefixId": "MIS52",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SWASC",
			"description": "SW-Containment No CY",
			"isActive": true,
			"permitNumberPrefixId": "MIR02",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW1",
			"description": "SW-Industrial CY1",
			"isActive": true,
			"permitNumberPrefixId": "MIS11",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW2",
			"description": "SW-Industrial CY2",
			"isActive": true,
			"permitNumberPrefixId": "MIS21",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW3",
			"description": "SW-Industrial CY3",
			"isActive": true,
			"permitNumberPrefixId": "MIS31",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW4",
			"description": "SW-Industrial CY4",
			"isActive": true,
			"permitNumberPrefixId": "MIS41",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW5",
			"description": "SW-Industrial CY5",
			"isActive": true,
			"permitNumberPrefixId": "MIS51",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW",
			"description": "SW-Industrial No CY",
			"isActive": true,
			"permitNumberPrefixId": "MIR01",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW7a",
			"description": "SW-Municipal Containment",
			"isActive": true,
			"permitNumberPrefixId": "MIS72",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "SW7",
			"description": "SW-Municipal Industrial",
			"isActive": true,
			"permitNumberPrefixId": "MIS71",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "TANK_TEMP",
			"description": "Temporary Permit",
			"isActive": true,
			"permitNumberPrefixId": "UNDET",
			"programAreaId": "SW",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"TANK"
			]
		},
		{
			"id": "123",
			"description": "tyr2eee",
			"isActive": true,
			"permitNumberPrefixId": null,
			"programAreaId": null,
			"sequenceNumber": null,
			"permitCategoryIds": null
		},
		{
			"id": "MPWS",
			"description": "Wastewater Discharge from Potable Water Supply",
			"isActive": true,
			"permitNumberPrefixId": "MIG64",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		},
		{
			"id": "WSL",
			"description": "Wastewater Stabilization Lagoon",
			"isActive": true,
			"permitNumberPrefixId": "MIG58",
			"programAreaId": "NPDES",
			"sequenceNumber": null,
			"permitCategoryIds": [
				"NPDES_GNRL_PRMT",
				"NPDES_COC"
			]
		}
	]

	var statuses = [
		{
			"id": "{all}",
			"description": "(All)"
		},
		{
			"id": "C",
			"description": "Closed",
			"labelStyleId": "NEUTRAL"
		},
		{
			"id": "D",
			"description": "Denied",
			"labelStyleId": "DANGER"
		},
		{
			"id": "X",
			"description": "Expired",
			"labelStyleId": "DANGER"
		},
		{
			"id": "EI",
			"description": "Expired (Inactive)",
			"labelStyleId": "NEUTRAL"
		},
		{
			"id": "E",
			"description": "Extended",
			"labelStyleId": "OK"
		},
		{
			"id": "1",
			"description": "In Effect",
			"labelStyleId": "OK"
		},
		{
			"id": "2",
			"description": "In Process",
			"labelStyleId": "WARNING"
		},
		{
			"id": "3",
			"description": "Issued (Not In Effect)",
			"labelStyleId": "OK"
		},
		{
			"id": "10",
			"description": "N/A",
			"labelStyleId": "NA"
		},
		{
			"id": "NI",
			"description": "Not Issued",
			"labelStyleId": "NEUTRAL"
		},
		{
			"id": "R",
			"description": "Relinquished",
			"labelStyleId": "DANGER"
		},
		{
			"id": "7",
			"description": "Retired",
			"labelStyleId": "NEUTRAL"
		},
		{
			"id": "4",
			"description": "Revoked",
			"labelStyleId": "DANGER"
		},
		{
			"id": "8",
			"description": "Stayed",
			"labelStyleId": "DANGER"
		},
		{
			"id": "5",
			"description": "Superseded",
			"labelStyleId": "NEUTRAL"
		},
		{
			"id": "S",
			"description": "Suspended",
			"labelStyleId": "DANGER"
		},
		{
			"id": "6",
			"description": "Terminated",
			"labelStyleId": "DANGER"
		},
		{
			"id": "9",
			"description": "Termination Pending",
			"labelStyleId": "OK"
		}
	]

	var permitIdPrefix = "P0000";

	var makeFakeItem = function (index) {
		var shape = {
			"id": `${permitIdPrefix}${index}`,
			"agencyContactEmail": faker.internet.email(),
			"agencyContactName": faker.name.findName(),
			"agencyContactPhone": faker.phone.phoneNumber(),
			"effectiveDate": faker.date.past(),
			"expirationDate": faker.date.future(),
			"issueDate": faker.date.past(),
			"permitCategoryDescription": faker.company.catchPhrase(),
			"permitNumber": faker.random.uuid(),
			// "permitStatusDescription": "string",
			// "permitStatusLabelStyleId": "string",
			"permittee": faker.name.findName(),
			"permitteeAddress1": faker.address.streetAddress(),
			// "permitteeAddress2": faker.address.secondaryAddress,
			"permitteeCity": faker.address.city(),
			"permitteeStateId": faker.address.stateAbbr(),
			"permitteeZipCode": faker.address.zipCode(),
		}
		const status = statuses[Math.floor(Math.random() * statuses.length)]
		const permitType = permitTypes[Math.floor(Math.random() * permitTypes.length)]
		return {
			...shape,
			permitStatusDescription: status.description,
			permitTypeDescription: permitType.description
		}
	}

	$scope.data = [...Array(50).keys()].map(makeFakeItem);

	console.table($scope.data);

}];