import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaCity, FaMapMarkerAlt, FaChargingStation, FaCoins } from 'react-icons/fa'; // Importing an icon
import { MdOutlineAttachMoney } from 'react-icons/md'; // Money icon for price
import { BsCalendar } from 'react-icons/bs'; // Calendar icon
import { BsClock } from 'react-icons/bs'; // Clock icon

export default function ChargingPage() {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [station, setStation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [connectionType, setConnectionType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('500'); // default price

  const navigate = useNavigate();

  // const cityData = {
  //   Surat: {
  //     areas: ['Area 1', 'Area 2', 'Area 3'],
  //     stations: {
  //       'Area 1': ['Station X1', 'Station X2'],
  //       'Area 2': ['Station Y1', 'Station Y2'],
  //       'Area 3': ['Station Z1', 'Station Z2'],
  //     },
  //   },
  //   Pune: {
  //     areas: ['Area A', 'Area B', 'Area C'],
  //     stations: {
  //       'Area A': ['Station P1', 'Station P2'],
  //       'Area B': ['Station Q1', 'Station Q2'],
  //       'Area C': ['Station R1', 'Station R2'],
  //     },
  //   },
  //   Ahmedabad: {
  //     areas: ['Area X', 'Area Y'],
  //     stations: {
  //       'Area X': ['Station M1', 'Station M2'],
  //       'Area Y': ['Station N1', 'Station N2'],
  //     },
  //   },
  // };

  const cityData = {
    Surat: {
      areas: [
        "Central Zone",
        "East Zone A",
        "East Zone B",
        "North Zone",
        "South East Zone",
        "South West Zone",
        "South Zone",
        "West Zone",
      ],
      stations: {
        "Central Zone": [
          "Fly-Over Bridge, Millennium Market Pay & Use Toilet, Pillar No. 35, Ring Road",
          "Open Plot beside Gopi-Talav Multi Level Parking, Navsari Bazar",
          "Open Plot Near School No. 81, Una Pani Road, Lal Darwaja",
          "Muglisara Multi Level Parking - Surat",
          "Below Delhi Gate FOB, Opp. Relax Inn Hotel",
          "Below Fly Over Bridge, Opp. Man Darwaja Fire Station, Ring Road",
        ],
        "East Zone A": [
          "Multilevel Parking beside Sardar Smruti Bhavan, Varachha",
          "Shayama Prasad Mukhrji Community Hall, Parvat Patiya",
          "TP - 20 (Puna), FP-182, Kiran Chowk",
          "SMIMER HOSPITAL, Near Staff Quarters",
        ],
        "East Zone B": [
          "Below Fly Over Bridge, Opp. Nana Varachha Health Center, Nana Varachha",
          "Sarthana Nature Park, Nr-sarthana Jakat Naka, Surat Kamrej Road",
          "Block No 120, Hare Krishna Village, Simada Check Post",
          "Mota Varachha Lake Garden, near Kabrasthan, Ramchowk, Mota Varachha",
          "Moon Garden Parking Area, Utran",
        ],
        "North Zone": [
          "Open Plot near Causeway, Katargam",
          "Katargam Community Hall, Vastadevi Road, Katargam",
          "Kansanagar Sports Ground, Near Katargam Lake Garden, Katargam",
          "SMC Health Club, Ved Road",
          "North Zone Office, Surat Municipal Corporation, Behind Gajera School",
          "Below Katargam Bridge, Balashram Near Paras Chowki, Pilar No-2",
        ],
        "South East Zone": [
          "Multi-Level Parking, Behind Millennium Textile Market, Umarwada",
          "South East Zone Office, SMC, Model Town Road, Dumbhal",
          "SMC Party Plot, Opp. Ruturaj Textile Market, Near ITM Building, Godadra",
        ],
        "South West Zone": [
          "Below Parley Point Bridge, Surat Dumas Road",
          "Open Plot at T.P. 3, F.P. 76, near Valentine Theatre, near Sai Mandir, Opp. Central Mall, Dumas Road",
          "Parking Area of Night Food Plaza, Behind Lake View Garden, Piplod",
          "Below Anu-Vrat Dwar Fly-Over Bridge, Udhana Magdalla Road",
          "Vesu Fire Station, VIP Road, Vesu",
          "Open Plot at TP 28, R-14, Near Lalbhai Contractor Stadium",
          "Althan BRTS Bus Depo, Althan",
          "Opp. Airport Surat, Dumas Road, Surat",
          "Udhana Magdalla Road, T.P.28 (Althan-Bhatar), F.P.99, Open Plot",
          "Beside Chopati, Open Plot for Parking",
          "Open Plot T.P. 1, F.P. 182, near S.D. Jain School, Beside Sai Kutir Society",
          "Dream City Parking Area, Diamond Bourse, Khajod",
          "Open plot beside Rajhans Montessa, Dumas Road",
        ],
        "South Zone": [
          "Open Plot at TP-58, FP-201 near D-Mart, Pandesara",
          "Moje Bhedwad, Pramukh Park Industrial Estate",
          "TP-48, FP-79, Jiav Budia Road, Opp. NFI Garden, Bhestan",
          "Open Plot beside Surati-I lab, TP-1, FP-79",
        ],
        "West Zone": [
          "Jahangirpura Community Hall Parking Area",
          "Adajan Sports Complex, Opp. Atman Park, Near L.P. Savani Road, Adajan",
          "Below Star Bazar Bridge, Surat Hazira Road, Adajan",
          "Jyotindra Dave Udhyan, Opp. Jogani Nagar, Honey Park Road, Adajan",
          "Open Plot beside Palanpore BRTS Bus Depot, Palanpore",
          "Sanjeevkumar Auditorium, Behind Rajhans Cinema, Pal",
          "Opp. D Mart (Jahangirpura), TP-44, FP-31",
          "Open Plot, Sidhdhchakra Residency, Opp. Fortune Mall, Near Galaxy Circle, Adajan",
          "Open Plot Beside D Mart-Adajan",
        ],
      },
    },
  
    Ahmedabad: {
      areas: ["Central", "West", "East", "North", "South"],
      stations: {
        Central: [
          "Rakshashakti Circle Station",
          "Khadia Police Station",
          "Shahibagh Railway Over-bridge Station",
        ],
        West: [
          "Navrangpura Stadium Station",
          "CG Road Station",
          "Gujarat University Station",
          "Thaltej Station",
          "Science City Station",
          "Bodakdev Station",
          "Vastrapur Station",
        ],
        East: [
          "Vastral Circle Station",
          "Amraiwadi Station",
          "CTM Cross Road Station",
          "Odhav Station",
          "Naroda Station",
          "Bapunagar Station",
          "Hirawadi Station",
        ],
        North: [
          "Motera Stadium Station",
          "Sabarmati Station",
          "Vadaj Station",
          "Chandkheda Station",
          "Kali Station",
          "Tragad Station",
          "Adalaj Station",
        ],
        South: [
          "Maninagar Station",
          "Kankaria Lake Station",
          "Isanpur Station",
          "Ghodasar Station",
          "Narol Station",
          "Vatva Station",
          "Lambha Station",
        ],
      },
    },
  
    Bengaluru: {
      areas: [
        "Devanahalli",
        "Hosakote",
        "Nelamangala",
        "Vignananagara",
        "Kasthuri Nagar",
        "Indiranagar",
        "Domlur",
        "Tannery Road",
        "Gottigere",
        "Shivajinagar",
        "HBR Layout",
        "Lingarajapuram",
        "Banasawadi",
        "Horamavu",
        "Nagawara",
        "Mahadevapura",
        "Whitefield",
        "KR Puram",
        "Yelahanka",
        "Sahakara Nagar",
        "Jalahalli",
        "Vidyaranyapura",
        "Bagalagunte",
        "Yeshwanthapura",
        "Mathikere",
        "Peenya",
        "Hegganahalli",
        "Chandapura",
        "Jigani",
        "Electronic City",
        "Doddakanneli",
        "Vijaya Bank L/O (Bilekahalli)",
        "HSR Layout",
        "Jayanagar",
        "BTM Layout",
        "Katriguppe",
        "Chikkalasandra",
        "Corporation Office",
        "Shantinagar",
        "ISRO Layout",
        "Murugeshpalya",
        "Banashankari",
        "Kengeri",
        "Kumbalagodu",
        "Kaggalipura",
        "RR Layout",
        "Jnanabharti",
        "Vijayanagar",
        "West Circle",
        "Papareddy Palya",
        "Mallathalli",
        "Nagarabhavi",
        "Avalahalli",
        "Shankarapuram",
        "Bytarayanapura",
        "Mysore Road",
        "RR Nagar",
        "Thyagarajanagara",
        "Corporate Office",
        "KERC",
        "Vidhana Soudha",
        "Vikasa Soudha",
      ],
      stations: {
        Devanahalli: ["BESCOM - Devanahalli SDO"],
        Hosakote: ["BESCOM - Hosakote SDO"],
        Nelamangala: ["RTO Nelamangala"],
        Vignananagara: ["BBMP Vignananagara Office"],
        "Kasthuri Nagar": ["RTO Kasthuri Nagar Office"],
        Indiranagar: ["BESCOM - E6 Indiranagar SDO"],
        Domlur: ["BDA Domlur Complex", "TTMC Domlur"],
        "Tannery Road": ["BESCOM - Tannery Road"],
        Gottigere: ["BBMP Gottigere Office"],
        Shivajinagar: ["TTMC Shivajinagar"],
        "HBR Layout": ["BDA HBR Layout Complex"],
        Lingarajapuram: ["BESCOM - Lingarajapuram O&M"],
        Banasawadi: ["BESCOM - E8 Banasawadi SDO"],
        Horamavu: ["BBMP Horamavu Office"],
        Nagawara: ["BESCOM - Nagawara Sub Division"],
        Mahadevapura: ["BESCOM - Mahadevapura SDO", "BBMP Mahadevapura Office"],
        Whitefield: ["BBMP Whitefield Office", "TTMC Whitefield"],
        "KR Puram": ["BBMP KR Puram Office", "RTO KR Puram Office"],
        Yelahanka: ["RTO Yelahanka"],
        "Sahakara Nagar": ["BBMP Sahakara Nagar Office"],
        Jalahalli: ["BESCOM - Jalahalli SDO"],
        Vidyaranyapura: ["BESCOM - Vidyaranyapura SDO"],
        Bagalagunte: ["BESCOM - Bagalagunte O&M"],
        Yeshwanthapura: ["TTMC Yeshwanthapura"],
        Mathikere: ["BESCOM - C6 Mathikere SDO"],
        Peenya: [
          "BESCOM - N4 Peenya SDO",
          "BESCOM - Peenya SRS O&M",
          "BESCOM - Shettihalli (Peenya) O&M",
        ],
        Hegganahalli: ["BESCOM - Hegganahalli O&M"],
        Chandapura: ["BESCOM - Chandapura Sub Division"],
        Jigani: ["KIADB Jigani I.A"],
        "Electronic City": ["RTO Electronic City"],
        Doddakanneli: ["BBMP Doddakanneli Office"],
        "Vijaya Bank L/O (Bilekahalli)": ["BBMP Vijaya Bank L/O (Bilekahalli)"],
        "HSR Layout": ["BESCOM - HSR Division Office SDO"],
        Jayanagar: ["BBMP Jayanagar Office"],
        "BTM Layout": ["BESCOM - BTM L/O O&M"],
        Katriguppe: ["BESCOM - Katriguppe SDO"],
        Chikkalasandra: ["BESCOM - Chikkalasandra O&M"],
        "Corporation Office": ["BBMP Corporation Office"],
        Shantinagar: ["TTMC Shantinagar"],
        "ISRO Layout": ["BESCOM - ISRO Layout O&M"],
        Murugeshpalya: ["BESCOM - Murugeshpalya S17 SDO"],
        Banashankari: ["BDA Banashankari"],
        Kengeri: ["TTMC Kengeri"],
        Kumbalagodu: ["BESCOM - Kumbalagodu O&M"],
        Kaggalipura: ["BESCOM - Kaggalipura SDO"],
        "RR Layout": ["BESCOM - RR Layout O&M"],
        Jnanabharti: ["RTO Jnanabharti"],
        Vijayanagar: ["TTMC Vijayanagar"],
        "West Circle": ["BESCOM - West Circle Office"],
        "Papareddy Palya": ["BESCOM - Papareddy Palya O&M"],
        Mallathalli: ["BESCOM - Mallathalli O&M"],
        Nagarabhavi: ["BDA Nagarabhavi"],
        Avalahalli: ["BESCOM - Avalahalli SDO"],
        Shankarapuram: ["BESCOM - Shankarapuram O&M"],
        Bytarayanapura: ["BESCOM - Bytarayanapura SDO"],
        "Mysore Road": ["KSRTC Mysore Road Satellite"],
        "RR Nagar": ["BESCOM - W7 RR Nagar O&M"],
        Thyagarajanagara: ["BBMP Thyagarajanagara Office"],
        "Corporate Office": ["BESCOM Corporate Office"],
        KERC: ["KERC"],
        "Vidhana Soudha": ["Vidhana Soudha"],
        "Vikasa Soudha": ["Vikasa Soudha"],
      },
    },
  
    Hyderabad: {
      areas: [
        "Indira Park",
        "K.B.R. Park",
        "Tank Bund",
        "Basheerbagh",
        "Gun Foundry",
        "Abids",
        "Nanakram Guda",
        "Mahaveera Harinavasthali National Park",
        "Nagole",
        "Uppal",
        "Santoshnagar",
        "S.D. Road",
      ],
      stations: {
        "Indira Park": ["Indira Park (Landmark: Parking Place)"],
        "K.B.R. Park": [
          "K.B.R. Park Gate 1 (Gate 1 Parking)",
          "K.B.R. Park Gate 3 (Gate 3 Parking)",
          "K.B.R. Park Gate 6 (Gate 6 Parking NTR Cancer Hospital)",
        ],
        "Tank Bund": ["Tank Bund (Near Kandukoori Veeresha Lingam Statue)"],
        Basheerbagh: ["Basheerbagh Road (Oathris Restaurant Opposite)"],
        "Gun Foundry": ["Gun Foundry (Mahboobia Girls Junior College)"],
        Abids: ["Municipal Parking Abids (GPO)"],
        "Nanakram Guda": ["Nanakram Guda (GHMC Sports Complex)"],
        "Mahaveera Harinavasthali National Park": [
          "Mahaveera Harinavasthali National Park (Ananya Resort)",
        ],
        Nagole: ["Shilpa Ramam 2 Nagole Bridge (Metro Office)"],
        Uppal: ["Uppal (Metro Station Parking)"],
        Santoshnagar: ["Owaisi Hospital (Inner Ring Road Santoshnagar)"],
        "S.D. Road": ["Taj Three Star Hotel (S.D. Road)"],
      },
    },
  
    Kolkata: {
      areas: [
        "Park Circus",
        "Jodhpur Park",
        "East Kolkata",
        "Kestopur",
        "Kankurgachi",
        "Deshbandhu Nagar",
        "New Alipore",
        "Park Street",
        "Rampur",
        "Domjur",
        "New Town",
        "Makalhati",
        "Alipore",
        "Dum Dum",
        "Saradi Palli",
        "Belgachia",
        "Kolkata 700039",
        "New Town AA II",
        "Biswa Bangla Sarani",
        "Newtown",
        "Newtown Action Area",
        "Near City Center 2",
      ],
      stations: {
        "Park Circus": [
          "KMC Electric Vehicle Charging Station (Under Maa Flyover, near Charcoal Grill Restaurant, Park Circus, Kolkata- 700017, Type 2)",
        ],
        "Jodhpur Park": [
          "CESC and KMC Electric Vehicle Charging Station (Opposite Indian Oil Corp/Lake Police Station, Jodhpur Park, Kolkata- 700068, Type 2)",
        ],
        "East Kolkata": [
          "EV Charging Station (1644, 2nd Floor, Rajdanga Pally, EKTP Phase 3, East Kolkata, 700107, Unknown)",
        ],
        Kestopur: [
          "Mukesh Hyundai Charging Station (PP 101, Nazrul Islam Avenue, Kestopur, 700101, Type 2)",
        ],
        Kankurgachi: [
          "Rajkutir, IHCL SeleQtions (89C, Narkeldanga Main Road, Phool Bagan, Kankurgachi, Kolkata 700054, Type 2)",
        ],
        "Deshbandhu Nagar": [
          "NKDA Charging Station (Jatragachi, Rekjuani, Deshbandhu Nagar, Kolkata 700156, Unknown)",
        ],
        "New Alipore": [
          "Hero EV Charging Station (1/188, J Block, New Alipore, Kolkata 700038, Type 2)",
        ],
        "Park Street": [
          "Tata Charging Station (43, Pandit Jawaharlal Nehru Road, Kankaria Estates, Park Street Road, Kolkata 700071, Type 2)",
        ],
        Rampur: [
          "Lexus Motors Charging Station (Budge Trunk Road, Rampur, Kolkata 70141, Type 2)",
        ],
        Domjur: [
          "TC Motors Charging Station (Ground Floor, NH6, Domjur, SalapMore, Kolkata 711403, Type 2)",
        ],
        "New Town": [
          "Uniworld City Charging Station (Uniworld City, Tower 1, New Town, Kolkata 700156, Type 2)",
          "EESL New Town EV Station (Tank 3, Street 24, A1 Action Area, Newtown, Kolkata 700156, Unknown)",
        ],
        Makalhati: [
          "IOCL Nature Park EV Station (Makalhati Mauza, Kolkata 700088, Type 2)",
        ],
        Alipore: [
          "IOCL Shilposree EV Filling Station (Alipore Road, Alipore, Kolkata 700027, Type 2)",
        ],
        "Dum Dum": [
          "IOCL Dwarka EV Service (Jessore Road, Post Office Road, Gora Bazar, Mahindra Colony, Dum Dum, Kolkata 700028, Type 2)",
        ],
        "Saradi Palli": [
          "IOCL Diamond EV Service Station (Jadu Colony, Saradi Palli, Kolkata 700034, Type 2)",
        ],
        Belgachia: [
          "IOCL Drive-in EV Station (Khudiram Bose Road, Dutta Bagh, Belgachia, Kolkata 700037, Type 2)",
        ],
        "Kolkata 700039": [
          "MG Auto EV Station (No. 34 A Chandra Nath Roy Road, Near Anandadham, Kolkata 700039, Type 2)",
        ],
        "New Town AA II": [
          "Kia Eastern EV Station (Plot IID 9/1, AA II, Newtown, Kolkata 700038, Type 2)",
        ],
        "Biswa Bangla Sarani": [
          "EESL Eco Town EV Charging Station (Gate 1, Major Arterial Road, Biswa Bangla Sarani, AA II, Newtown, Kolkata 700156, Type 2)",
          "Sunfuel Holiday Inn Charging Station (Biswa Bangla Sarani, Near City Center 2, Newtown, Kolkata 600136, Unknown)",
        ],
        Newtown: [
          "EESL Adhoc EV Station (Akankha HP Petrol Pump, Newtown, Kolkata 700056, Type 2)",
        ],
        "Newtown Action Area": [
          "EESL New Town EV Station (Tank 3, Street 24, A1 Action Area, Newtown, Kolkata 700156, Unknown)",
        ],
        "Near City Center 2": [
          "Sunfuel Holiday Inn Charging Station (Biswa Bangla Sarani, Near City Center 2, Newtown, Kolkata 600136, Unknown)",
        ],
      },
    },
  
    Mumbai: {
      areas: [
        "Santacruz East",
        "Bhandup West",
        "Kurla",
        "Carnac Bunder",
        "Malad",
        "Bandra Kurla Complex",
        "Borivali",
        "Santacruz",
        "Churchgate",
        "Mulund",
        "Wadala",
        "Andheri East",
        "Nagpur",
        "Chandivali",
        "Mulund West",
        "Andheri West",
        "Vikhroli",
        "Vile Parle",
        "Borivali West",
        "Breach Candy",
        "Prabhadevi",
        "Fort",
      ],
      stations: {
        "Santacruz East": [
          "Hotel Accord (Private - Charger, 32J Nehru Road Santacruz East, Closed now, 10:00 AM - 07:00 PM, 9920112925)",
        ],
        "Bhandup West": [
          "Tata Power - Sub Station Charging Station (6 Lake Road Sadan Wadi Bhandup West, Closed now, 10:00 AM - 07:00 PM, 919223581898, DCGBT)",
        ],
        Kurla: [
          "Tata Power - Phoenix Marketcity Charging Station (Ground Floor Lal Bahadur Shastri Marg Parking Lot Kurl, Open now, 12:00 AM - 11:59 PM, 9223581898, CCS-II)",
        ],
        "Carnac Bunder": [
          "Tata Power - Carnac Receiving (Private - Charger) (The Tata Power Company Limited, Corporate Center A, Carnac Bunder, Open now, 12:00 AM - 11:59 PM, 9223581898, Bharat AC001AC TYPE 2)",
        ],
        Malad: [
          "Tata Power - Malad Charging Station (Marve Road Malad, Open now, 12:00 AM - 11:59 PM, 9223581898, AC TYPE 2)",
        ],
        "Bandra Kurla Complex": [
          "Tata Power - BKC Substation Charging Station (Near Asian Heart Hospital Opposite Bharat Diamond Bourse Bandra Kurla Complex Bandra East, Closed now, 10:00 AM - 07:00 PM, 9223581898, DCGBTAC TYPE 2AC TYPE 1Parking Slot)",
          "Tata Power - Trent House (Private - Charger) (Trent House, Plot No:C60, Bandra Kurla Complex Rd, Beside Citi Bank, G Block BKC, Bandra East, Open now, 12:00 AM - 11:59 PM, 9223581898, AC TYPE 2)",
        ],
        Borivali: [
          "Tata Power - Borivali Receiving Charging Station (Housing Colony, Dattapada Road Near Magathane Bus Dept, Open now, 12:00 AM - 11:59 PM, 9223581898, CCS-II)",
          "MG - Aquaria Grande Charging Station (Aquaria Grande, Shanti Ashram, Borivali West, Mumbai, Maharashtra, 400103, Closed now, 10:00 AM - 07:00 PM, 9010693756, AC PLUG POINTAC TYPE 2)",
        ],
        Santacruz: [
          "Moiz Apartments (12th Road Santacruz Above Upadhyaya Nursing Home, Closed now, 10:00 AM - 07:00 PM, 9869088296, Socket3PIN)",
        ],
        Churchgate: [
          "HPCL - Churchgate Charging Station (157, Bhanushankar Yagnik Rd, Behind Petroleum House, Backbay Reclamation, Churchgate, Mumbai, Maharashtra, Closed now, 10:00 AM - 07:00 PM, 9975950100, CCS-IICHAdeMO)",
        ],
        Mulund: [
          "Tata Power - Keshva Motors Charging Station (Shop Number 10 & 11 Marathon Max, Mulund Goregaon Link Rd, Nahur West, Open now, 12:00 AM - 11:59 PM, 7045243367, AC TYPE 2)",
          "Tata Power - Hare Krishna Mahindra (Mulund West, Building, Plot 1, Udyog Kshtra, Mulund Goregaon Link Rd, near D Mart Mulund, Salpa Devi Pada, Mulund West, Closed now, 10:00 AM - 07:00 PM, 18008332233, CCS-IICHAdeMO)",
        ],
        Wadala: [
          "Tata Power - Mahanagar Gas Charging Station (MGL Terminal, opposite Anik Depot, Wadala, Open now, 12:00 AM - 11:59 PM, 2224700337, CCS-IICHAdeMOBharat DC-001)",
        ],
        "Andheri East": [
          "Tata Power - Zenith Chemical Charging Station (MIDC Marol, Andheri East Residing, Closed now, 09:00 AM - 07:00 PM, 9223581898, CCS-IICHAdeMO)",
          "EV Plugin - Charging Station (Vijay Group of Companies, Plot No 35, Chandivali, Off Saki Road, Andheri East, Closed now, 10:00 AM - 07:00 PM, 9004050646, DCIEC 60309GBT)",
          "Tata Power - Ginger Andheri (Private - Charger) (Teli - Gali Road, Andheri (East), Open now, 12:00 AM - 11:59 PM, 9223581898, CCS-IICHAdeMO)",
        ],
        Nagpur: [
          "Tata Power - Jaika Motors (Civil Lines, Jaika Motors Pvt Ltd.Post Box No.1 Commercial Road Civil Lines Nagpur, Open now, 12:00 AM - 11:59 PM, CCS-IICHAdeMO)",
        ],
        "Mulund West": [
          "Tata Power - Hare Krishna Mahindra (Mulund West, Building, Plot 1, Udyog Kshtra, Mulund Goregaon Link Rd, near D Mart Mulund, Salpa Devi Pada, Mulund West, Closed now, 10:00 AM - 07:00 PM, 18008332233, CCS-IICHAdeMO)",
        ],
        "Andheri West": [
          "Tata Power - Versova Charging Station (KL Walawalkar Marg, Sahayog Nagar, Bhudargarh Colony, Andheri West, Open now, 12:00 AM - 11:59 PM, 9223581898, CCS-IICHAdeMO)",
        ],
        Vikhroli: [
          "Tata Power - Vikhroli Charging Station (Vikhroli, The Tata Power Company Limited, 400 kV Project, Vikhroli Sub Station, Godrej Soap Premises, Open now, 12:00 AM - 11:59 PM, 7208407887, CCS-IICHAdeMOAC TYPE 2)",
        ],
        "Vile Parle": [
          "Tata Power - Sahara Hospitality Charging Station (Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Closed now, 10:00 AM - 07:00 PM, 18008332233, CCS-IICHAdeMOBharat DC-001)",
        ],
        "Breach Candy": [
          "IOCL - Breach Candy Charging Station (Bhulabhai Desai Road, Breach Candy, near Tata Garden, Open now, 12:00 AM - 11:59 PM, 18008332233, CCS-IICHAdeMO)",
        ],
        Prabhadevi: [
          "Tata Power - Shree Siddhivinayaka Charging Station (P. N. 1207, CADELL RD. MUMBAI, PRABHADEVI CADEL RD., Open now, 12:00 AM - 11:59 PM, 2224316012, CCS-IICHAdeMO)",
        ],
        Fort: [
          "Tata Power - CSMT Station Charging Station (Chhatrapati Shivaji Maharaj Terminus, Fort, Open now, 12:00 AM - 11:59 PM)",
        ],
      },
    },
  
    Chennai: {
      areas: [
        "Anna Salai",
        "Taramani",
        "Vadapalani",
        "Perungudi",
        "Guindy",
        "Velachery",
        "Tambaram",
        "Mambalam",
        "Thoraipakkam",
        "Ambattur",
      ],
      stations: {
        Taramani: [
          "Ramanujan IT Park, Taramani Block D (Private Charger)",
          "Ramanujan IT Park, Taramani Block E (Private Charger)",
          "Ramanujan IT Park, Taramani Block B (Private Charger)",
          "Ramanujan IT Park, Taramani Block A (Private Charger)",
        ],
        Vadapalani: [
          "Ginger Hotel, Vadapalani",
          "Forum Vijaya Mall – Vadapalani",
        ],
        Perungudi: ["VECV-43", "Tata Motors (Lakshmi Motors)"],
        Guindy: ["TML Sri Lakshmi Auto, Guindy", "Ather space, Guindy"],
        Velachery: [
          "The Westin – Velachery",
          "Sheraton Grand Chennai Resort & Spa",
          "Fairfield By Marriott – Sriperumbudur",
          "Phoenix Market City – Velachery",
        ],
        Tambaram: ["Ather Space, Tambaram"],
        Mambalam: ["SunnyBee Market – West Mambalam"],
        Thoraipakkam: ["Kriyates – Thoraipakkam"],
        Ambattur: ["Ambattur MRTS", "Basin Bridge MRTS"],
      },
    },
  
    Delhi: {
      areas: [
        "East Delhi",
        "West Delhi",
        "South Delhi",
        "Central Delhi",
        "South West Delhi",
        "North Delhi",
        "North East Delhi",
        "North West Delhi",
      ],
      stations: {
        "East Delhi": [
          "175, Patparganj Industrial Area, Patparganj",
          "B-50/9, Haruan Basti, Kondli",
          "Plot No 2, Musddi Chowk, Sarai Kale Khan Hazrat Nizamuddin",
          "H.no. 16, Gali no 2, Jagat Puri",
          "Plot no. 1, Sarai kale khan Hazrat Nizamuddin",
          "Jaitpur Gurudwara Road Hari Nagar",
          "Shop-2, Maharaj Singh Market, M.B. Road Lal Kuan",
          "Mangal Pandey Marg, Nand Nagri Mandoli",
          "F-725, Baba Farid Puri Patel nagar",
          "Zypp Electric Hub, Ghazipur",
          "Ps Enterprise Shop No-9 GT Road Shahdara, near petrol pump",
        ],
        "West Delhi": [
          "M block Market Gearter Kailash 1",
          "Opp. Karbala, Mochi park, mayur Vihar 1, Pocket 2, Kotla Village",
          "RZA 182, Nihal Vihar Nangloi",
          "RZ-36, Najafgarh, Phase 2, Sai Baba Enclave Najafgarh",
          "C-8, jagatpuri Extn Jama Masjid",
          "WZ 1022, Pocket D2A, Nangal Raya Mayapuri",
          "BSES Bhawan, Near Kalkaji Metro Station Nehru Place",
          "RZG-45, 50 ft road, Nihal Vihar, Nangloi",
          "Pocket 1, Matiala Extension, Matiala, Delhi, 110078",
          "Matiala, Delhi, 110078",
          "19B, Pocket B, Hari Nagar, New Delhi - 110064",
          "B-21-A, G/F Patel, Garden Uttam Nagar, New Delhi",
        ],
        "South Delhi": [
          "A-1/1, Hardev Puri, 100 ft Road, Nathu Colony Chowk, Sahadara",
          "Plot no. 1-A, Shiv vihar, Nangloi",
          "9/17, Near Chajju Gate, east babarpur, Shahdara",
          "WP-572, Wazirpur Village, Ashok Vihar",
          "Block J, CR Park",
          "B154, Block E New Ashok Nagar",
          "C-5, Opp. Metro pillar 111, Kanti Nagar",
          "C-35, Kh.no 475-476 Wazirabad",
          "Zypp Electric Mohan Estate Station",
          "Zypp Electric Mohan Estate Station 2",
        ],
        "Central Delhi": [
          "C-39 MAIN MARKET, West Patel Nagar, New Delhi, Delhi 110008",
          "NDMC Parking, Khan Market, New Delhi, 110003",
          "NDMC Parking, Opposite Goel Opticals, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003",
          "NDMC Parking, Opposite HDFC Bank, M- Block, Connaught Place, New Delhi- 110001",
          "NDMC Parking, Outside Westend Vedi Tailors, Block M, Middle Circle, Connaught Place, New Delhi- 110001",
          "NDMC Parking, Outside Jain Bhawan, Shaheed Bhagat Singh Marg, Gole Market, New Delhi- 110001",
          "17/57, E Ground floor, Plot No-10, Gadobia Road, Anand Parvat, New Delhi",
        ],
        "South West Delhi": [
          "H.no. F-45, New Seema Puri Dilshad Garden",
          "RZB-161 Nihal Vihar",
          "ETO BRANCH OFFICE, DELHI",
          "Sahara Evols Saket",
          "169, Dharampura, Najafgarh, New Delhi - 110043",
          "RZ-49/256 GALI NO.3 DAYAL PARK NEAR MCD SCHOOL",
          "Yashwant Place, Chanakyapuri, New Delhi- 110021",
          "PSOI Club, Chanakyapuri, New Delhi 110021",
          "Gupta auto service centre, shop no 1 nasirpur road, opposite Aman band near by palam fly over, palam new delhi",
          "Vasant Square Mall, Basement 2, Vasant Kunj",
          "RZ-37, Raghu Nagar Pankha Road",
          "Mukteshwar dham Andheriya bagh, mehrauli",
          "E-1/17A Palam Ext Near Vardhman Mall, Sector 7 Dwarka, New Delhi, Delhi 110075",
          "HP Pump, ground floor, Mahipal pur-Gurgoan road NH-8, Mahipal pur, delhi 110037",
          "RZ-728, Rajnagar, Part-2, Palam Village, New Delhi",
        ],
        "North Delhi": [
          "Kalindi kunj Road Jaitpur",
          "N118/R6, Wazirpur Village Ashok Vihar Phase 1",
          "7882, Dina nath road, kharian mohalla new delhi",
          "shop no.2, harphool singh building, clock tower, subzi mandi, delhi",
          "sing Shbha rod Saktinagar 5/4 car max Amba chimera",
          "B9/177, sector-5, rohini, delhi-85",
          "sangam park dda market shop no14",
          "House No 2 First Floor Ishwar Colony",
          "H. No. 4, Pocket -15A, FF,Rohini, North West Delhi",
          "Ground Floor, Floor Gate No.3, Rithala Metro Station, Area Covered by Green Fence, Village City",
          "House No-93, Shop No-PVT-1, Ground Floor, Block- B, Pocket -5, Sector-4, Rohini, New Delhi",
        ],
        "North East Delhi": [
          "Main road brijpuri phase-1 near brijpuri puliya Sony medical Delhi 110094",
          "Home no.98, O block phase 4 shive vihar dehli karaval nagar 94 near shiv shakti school",
          "E11/162 shastri park Delhi 53",
          "D-18/241 Brijpuri Main Road near Arun morden senior sec. School Delhi 110094",
          "B 8 MAIN ROAD JOHRI PUR EXTANSION OPP LALIT BUILDER NEAR HDFC BANK ATM DELHI",
          "B-8 JOHRI PUR EXTANSION OPP LALIT BUILDER NEAR HDFC BANK ATM DELHI",
          "D-18/241 main road Brijpuri near Arun morden public school",
          "E-8, Main wazirabad road, chand bagh, opp bhanjanpura petrol pump",
          "46-A G/F No-5 Gali Noo-1 Near kashi ram dairy, kabir nager, shahdara EAST Delhi",
        ],
        "North West Delhi": [
          "Shop No-48, NH-5, NIT, Faridabad",
          "Gali No 3, Haider Pur Shalimar Bagh",
          "WP-569, Wazirpur, Ashok Vihar",
          "F-34, Laxmi Park, Peera Gadi Nihal Vihar",
          "Plot no. 2, Kh no. 16/3/2(2-11), MBR Enclave Pochanpur extn",
          "473, Britannia Rd, Tri Nagar, Delhi, 110034",
          "plot no-57, kh. no-13/13, 13/1, 13/2 Railway road, samepur Delhi-42",
          "Pocket 3 Sector 23 Rohini Delhi",
          "baldev vihar delhi",
          "shop No 18 Main Chowk Budhpur Delhi 110036",
          "D 70 Guru Nanak Dev Colony Bhalswa dairy near shiv chowk Delhi 110042",
          "A-38, DSIIDC, Bawana Industrial Area, Sec-5",
          "B-675 Bunkar Colony, Ashok Vihar Phase-4, New Delhi",
          "H. No. WPX-219, Wazirpur Village, Delhi",
          "WZ-455, Azadpur, Near Rikshaw stand New Delhi",
          "Pooth kalan village near Brahm shakti Hospital, Budh Vihar, New Delhi",
          "WZ-4202, A/2, Sant Nager, Rani Bhag",
          "WZ-396 Shakurpur Village Delhi",
          "371, Gali no-7 village gopalpur",
          "H-106, JJ Colony, Wazirpur Delhi",
        ],
      },
    },
  
    Pune: {
      areas: [
        "Wagholi",
        "Tathawade",
        "Aundh",
        "Theregaon",
        "Bhosari",
        "Chinchwad",
        "Shankar Sheth Road",
        "Gorhe",
        "Hadapsar",
        "Hinjewadi",
        "Khadki",
        "Ram Nagar",
        "Manjri",
        "Nagar Road",
        "Chakan",
        "Viman Nagar",
        "MIDC Bhosari",
        "Poladpur Road",
        "Phoenix Market City",
        "Kondhwa",
        "Deccan Gymkhana",
      ],
      stations: {
        Wagholi: [
          "Rudra Motors, Wagholi: Gat No.1343/A, Near Ubale Nagar Bus Stop, Wagholi-412207",
        ],
        Tathawade: [
          "Bafna-Tathawade (Concorde): Gate No. 129/2B/1, Mumbai Bangalore Express Highway,Ashok Nagar, Tathawade, Pune-411033",
        ],
        Aundh: [
          "Croma Aundh, Pune: Survey No.127/2B/1A Nanasaheb Gaikwad Information Technology Park ITI Road, Near, Sarjaa Rd, Aundh, Pune, 411007",
          "Balajee Auto, Aundh: Phase 2, Siddarth Nagar Society, Aundh, Pune, Maharashtra 411007",
        ],
        Theregaon: [
          "Sai Baba-THEREGAON: 5/4, Nakhate Nagar, Kalewadi Main Road, Theregaon, Pune-411033",
        ],
        Bhosari: [
          "Panchjanya Motors, Bhosari: Wakad - Bhosari BRTS Road, Century Enka Colony, Bhosari, Pimpri-Chinchwad, Maharashtra 411039",
          "Morya Transport Terminus, MIDC Bhosari: Plot no BGP 109 Village MIDC Bhosari Taluka Haveli Pune 411026",
          "IOCL - Trishul Service Station, Pimpri-Chinchwad: T-163, MIDC Bhosari, Pune, MIDC, Bhosari, Pimpri-Chinchwad, Piune-411026",
          "Hemank Auto Parts: B-5 Electronic Estate, MIDC, Bhosari, Pune",
        ],
        Chinchwad: [
          "Panchjanya Motors, Chinchwad: No 49, Block D2, MIDC Ador Power Station, Chinchwad, Ram Nagar, Chinchwad, Pune, Maharashtra 411039",
          "TML Panchjanya Automobiles, Chinchwad Ram Nagar Charging Station: No 49, Ador Power Station, D-II Block, Kalbhor Nagar, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra",
        ],
        "Shankar Sheth Road": [
          "Mahati Industries limited, Shankar Sheth Road: 32/33, Shankar Sheth Road, B/H S T Workshop, Shankar Sheth Road, Pune, Maharashtra-411037",
        ],
        Gorhe: [
          "Datson Electronics, Gorhe: M/s. Datson Electronics pvt ltd Gat.No.30. Sinhagad Road, Gorhe Budruk. Tal- Haveli Next To Savali Resort, Off Sinhagad Road. Village Gorhe. Pune - 411025",
        ],
        Hadapsar: [
          "Amanora Mall Big Bazar Parking, Hadapsar: Crescent Rd, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
          "Amanora Sport Arena, Hadapsar: Amanora Township, Hadpasar, Pune 411028",
          "Amnora Urban Plaza Parking, Hadapsar: Pune, Maharashtra, 7.4 KW Powered by TPCL",
          "Hotel Shivaray, NH 4 Ramnagar: Pune, Maharashtra, 7.4 KW Powered by TPCL",
          "Amanora Park Town: Crescent Rd, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
          "Amanora Township: Amanora Township, Hadpasar, Pune 411028",
        ],
        Hinjewadi: [
          "IOCL - BK Petroleum, Hinjewadi Pune: Hinjawadi Rd, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057",
          "AH Group, Hinjewadi Phase I: Aditya Infotech Park, SBI Bank, Phase I, Hinjewadi Pune 411057",
        ],
        Khadki: [
          "Vilux Theater, Khadki Pune: 15, Maulodina Marg, Chikhalwadi, Khadki, Pune, Maharashtra 411003",
        ],
        "Ram Nagar": [
          "Four Points By Sheraton Hotel, Nagar Road: 5th Milestone, Nagar Road, Pune - 411014",
          "Sridha Motors, Chakan, Pune-Nashik Highway: GAT NO. 143/3, PUNE-NASHIK HIGHWAY WAKI (KH), Maharashtra 410501",
        ],
        Manjri: [
          "Ace Kudale Cycles, Manjri Bk: Manjri Bk, Pune, Maharashtra 412307",
        ],
        "Nagar Road": [
          "Tata Power, Hotel Swamiraj Executive: Pune-Solapur Highway, Opposite to Saradewadi Toll Plaza, Pune, Maharashtra 413106",
          "Tata Power, Balajee Auto, Aundh: Phase 2, Siddarth Nagar Society, Aundh, Pune, Maharashtra 411007",
          "Phoenix Market City: S No 207, Viman Nagar Road, Phoenix Road, Viman Nagar, Pune, Maharashtra",
        ],
        "Deccan Gymkhana": [
          "AtherSpace Pune: 805, Bhandarkar Rd, Below Kung Apartments, Deccan Gymkhana, Pune, Maharashtra",
        ],
        Kondhwa: [
          "Bliss Bakery & Cafe: Narayan Tower, near, Narayan Annaji Shinde Rd, Salunkhe Vihar Society, Kondhwa, Pune, Maharashtra",
          "Kalinga Veg Gourmet Kitchen: 1st - 3rd Floor, House of Nosh, CTS 1365, Gulawani Maharaj Road, Swaroop Society, Vakil Nagar, Erandwane, Pune, Maharashtra",
          "CopaCabana: Near, Aundh-Wakad Road, Jagtap Dairy Rd, Vishal Nagar, Pune, Maharashtra 411027",
          "TamTree: Shop No.5, Pragati Bhavan, Behind Natural Ice Cream shop, Ghole Rd, near Bal Gandharva Chowk, Shivajinagar, Pune, Maharashtra",
          "KB's Woodlands: B J Road Railway Station, Sadhu Vaswani Rd, near Pune, Maharashtra, Sadhu Vaswani Chowk",
          "Cafe Kathaa: Unnamed Road, Fergusson college campus Rd, Shivajinagar, Pune, Maharashtra 411004",
          "Subway Aundh: 1 Samar Paradise, DP Rd, Aundh, Pune, Maharashtra 411007",
          "Subway Paud Road: Ground floor Sai Ram Apartment, 8 B, Jijau Masaheb Marg, nr. Vanaz CNG Station, Lokmanya Colony, Kothrud, Pune, Maharashtra",
          "Lumber Jack: TechKaTech Innovation Hub, Karve road, Opp to Vandevi Temple, above Hotel Marathi Bana, Mavale Basti, Hingne Budrukh, Karve Nagar, Pune, Maharashtra ,Karve Nagar",
        ],
        Chakan: [
          "The Emerald Resort: Lonavala Annexe, Somatne, Old Mumbai - Pune Hwy, Near Pioneer Hospital, Tukaram Nagar, Talegaon Dabhade, Maharashtra",
        ],
        "Bund Garden Road": [
          "Inox Bund Garden Road: Plot No.D, Bund Garden Rd, Pune, Maharashtra",
          "Barista: Shop 1-6,82/2/2a, Sahkarnagar, Parvati, Pune, Maharashtra",
          "Cafe Peter: Waman Ganesh Heights, Pashan Rd, Bavdhan, Pune, Maharashtra",
        ],
        "Poladpur Road": [
          "Holiday Villa, Poladpur Road: T-163, MIDC Bhosari, Pune, MIDC, Bhosari, Pimpri-Chinchwad, Piune-411026",
        ],
      },
    },
  };

  const vehicleTypes = ['SUV', 'Sedan', 'Hatchback', 'Electric Bike'];
  const vehicleModels = ['Tesla Model 3', 'Nissan Leaf', 'BMW i3', 'Chevy Bolt'];
  const connectionTypes = ['Type 1', 'Type 2', 'CHAdeMO', 'CCS'];

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setArea(''); 
    setStation(''); 
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
    setStation(''); 
  };

  const handleContinue = () => {
    navigate('/confirm', {
      state: { city, area, station, vehicleType, vehicleModel, connectionType, date, time, price },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          <FaChargingStation className="mr-2" /> {/* Charging Icon */}
          Book Your Charging Slot
        </h1>

        {/* Step 1: Select Charging Station */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">1. Select Charging Station</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* City Selection */}
            <div>
              <label htmlFor="city" className="flex items-center text-gray-700"><FaCity className="mr-2" />City</label>
              <select
                id="city"
                value={city}
                onChange={handleCityChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select City</option>
                {Object.keys(cityData).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Area Selection */}
            <div>
              <label htmlFor="area" className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" />Area</label>
              <select
                id="area"
                value={area}
                onChange={handleAreaChange}
                disabled={!city}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Area</option>
                {city &&
                  cityData[city]?.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
              </select>
            </div>

            {/* Charging Station Selection */}
            <div>
              <label htmlFor="station" className="flex items-center text-gray-700"><FaChargingStation className="mr-2" /> Charging Station</label>
              <select
                id="station"
                value={station}
                onChange={(e) => setStation(e.target.value)}
                disabled={!area}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Station</option>
                {area &&
                  cityData[city]?.stations[area]?.map((station) => (
                    <option key={station} value={station}>
                      {station}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2: Vehicle and Slot Booking Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">2. Enter Vehicle and Slot Details</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Vehicle Type Dropdown */}
            <div>
              <label htmlFor="vehicleType" className="block text-gray-700">Vehicle Type</label>
              <select
                id="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Vehicle Type</option>
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle Model Dropdown */}
            <div>
              <label htmlFor="vehicleModel" className="block text-gray-700">Vehicle Model</label>
              <select
                id="vehicleModel"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Vehicle Model</option>
                {vehicleModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Connection Type Dropdown */}
            <div>
              <label htmlFor="connectionType" className="block text-gray-700">Connection Type</label>
              <select
                id="connectionType"
                value={connectionType}
                onChange={(e) => setConnectionType(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Connection Type</option>
                {connectionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Slider */}
            <div>
              <label htmlFor="price" className="block text-gray-700 flex items-center">
                <MdOutlineAttachMoney className="mr-2" /> {/* Money Icon */}
                Price (₹)
              </label>
              <input
                type="range"
                id="price"
                min="500"
                max="1500"
                step="50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full mt-2"
              />
              <div className="text-center mt-1">₹ {price}</div>
            </div>
          </div>
        </div>

        {/* Step 3: Select Date and Time */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">3. Select Date and Time</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-gray-700 flex items-center">
                <BsCalendar className="mr-2" /> {/* Calendar Icon */}
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="time" className="block text-gray-700 flex items-center">
                <BsClock className="mr-2" /> {/* Clock Icon */}
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
        <Link to="/confirmCharge">
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Continue to Confirm
          </button></Link>
        </div>
      </div>
    </div>
  );
}
