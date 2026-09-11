const CASES = [
  {
    "id": "colles",
    "topic": "Upper limb",
    "region": "Wrist",
    "view": "AP + lateral",
    "title": "Distal radius fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Colles%20fracture.JPG",
    "question": "What is the most likely injury?",
    "options": [
      "Colles' fracture",
      "Scaphoid fracture",
      "Smith's fracture",
      "Galeazzi fracture"
    ],
    "correct": 0,
    "diagnosis": "Dorsally displaced distal radius fracture (Colles' pattern)",
    "difficulty": "Core FY2",
    "findings": [
      "Distal radius metaphyseal fracture.",
      "Dorsal angulation/displacement of the distal fragment on the lateral view.",
      "Assess radial shortening and intra-articular extension.",
      "Look for an associated ulnar styloid fracture."
    ],
    "priorities": [
      "Document median, ulnar and radial nerve function and distal perfusion before and after splintage/reduction.",
      "Provide adequate analgesia and consider reduction when clinically indicated.",
      "Immobilise appropriately and repeat imaging after reduction when performed."
    ],
    "management": "Dorsally displaced distal radius fractures commonly undergo closed reduction when displacement is unacceptable. Escalate according to neurovascular status, open injury, instability, intra-articular involvement and the local orthopaedic pathway.",
    "dontMiss": "Acute median nerve compromise, open fracture, DRUJ injury or associated carpal injury.",
    "reference": "NICE NG38 — Fractures (non-complex): assessment and management.",
    "credit": "Colles fracture.JPG — Ashish j29, CC BY 3.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Colles_fracture.JPG",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 72-year-old woman trips on the pavement and lands on her outstretched right hand. She has immediate wrist pain, swelling and a visible deformity. Distal sensation and perfusion are intact."
  },
  {
    "id": "ankle",
    "topic": "Lower limb",
    "region": "Ankle",
    "view": "Lateral",
    "title": "Bimalleolar ankle fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bimall1.png",
    "question": "Which diagnosis best fits this X-ray?",
    "options": [
      "Isolated medial malleolus fracture",
      "Bimalleolar ankle fracture",
      "Maisonneuve fracture",
      "Calcaneal fracture"
    ],
    "correct": 1,
    "diagnosis": "Bimalleolar ankle fracture",
    "difficulty": "Core FY2",
    "findings": [
      "Fractures involving both medial and lateral malleoli.",
      "Assess talar alignment and mortise congruency.",
      "Check for posterior malleolar involvement on lateral imaging."
    ],
    "priorities": [
      "Check skin, swelling and neurovascular status.",
      "Reduce urgently if dislocated or if skin is threatened.",
      "Immobilise, elevate and involve orthopaedics according to local pathway."
    ],
    "management": "Unstable ankle fractures generally require orthopaedic assessment. Displaced or dislocated injuries need timely reduction to protect soft tissues and neurovascular structures.",
    "dontMiss": "Open fracture, threatened skin, proximal fibula injury, syndesmotic injury or persistent talar shift.",
    "reference": "NICE NG38 — Fractures (non-complex): assessment and management.",
    "credit": "Bimall1.png — Wikimedia Commons, Creative Commons licence",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Bimall1.png",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 34-year-old woman twists her ankle stepping off a kerb. She is unable to weight-bear and has marked tenderness and swelling over both malleoli. The skin is intact and the foot is neurovascularly normal."
  },
  {
    "id": "shoulder",
    "topic": "Upper limb",
    "region": "Shoulder",
    "view": "AP",
    "title": "Anterior shoulder dislocation",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/AnterDisAP.png",
    "question": "What is the most likely abnormality?",
    "options": [
      "Anterior shoulder dislocation",
      "Posterior shoulder dislocation",
      "Proximal humeral fracture",
      "AC joint dislocation"
    ],
    "correct": 0,
    "diagnosis": "Anterior shoulder dislocation",
    "difficulty": "Core FY2",
    "findings": [
      "The humeral head lies anteroinferior to the glenoid.",
      "Loss of normal glenohumeral congruity.",
      "Look for greater tuberosity fracture and Hill-Sachs injury."
    ],
    "priorities": [
      "Document axillary nerve sensation and distal neurovascular status.",
      "Provide analgesia and reduce using an appropriate ED technique.",
      "Repeat neurovascular examination and obtain post-reduction imaging."
    ],
    "management": "Most uncomplicated anterior dislocations can be reduced in ED with appropriate analgesia/sedation, supervision and a documented pre/post reduction neurovascular examination.",
    "dontMiss": "Associated fracture, axillary nerve injury, vascular injury, or posterior dislocation misdiagnosed on a single AP view.",
    "reference": "Use the current Homerton ED shoulder-dislocation and sedation pathways.",
    "credit": "AnterDisAP.png — James Heilman, MD, CC BY-SA 4.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:AnterDisAP.png",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 24-year-old man is tackled while playing rugby with his arm abducted and externally rotated. He has severe shoulder pain and holds the arm slightly away from his body. The shoulder contour looks abnormal."
  },
  {
    "id": "radial-head",
    "topic": "Upper limb",
    "region": "Elbow",
    "view": "Lateral",
    "title": "Radial head fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/RadHeadFrac.png",
    "question": "Which injury is demonstrated?",
    "options": [
      "Olecranon fracture",
      "Radial head fracture",
      "Supracondylar fracture",
      "Elbow dislocation"
    ],
    "correct": 1,
    "diagnosis": "Radial head fracture",
    "difficulty": "Core FY2",
    "findings": [
      "Cortical irregularity or lucency through the radial head/neck.",
      "A posterior fat pad or elevated anterior fat pad may be the clue.",
      "Assess radiocapitellar alignment."
    ],
    "priorities": [
      "Check pronation/supination and neurovascular status.",
      "Provide analgesia and appropriate support/immobilisation.",
      "Discuss displaced, mechanically blocked or complex injuries with orthopaedics."
    ],
    "management": "Many minimally displaced radial head fractures are managed conservatively with early mobilisation according to local guidance. Displacement or mechanical block needs specialist review.",
    "dontMiss": "Essex-Lopresti injury — examine the wrist/DRUJ and forearm when there is significant radial head injury.",
    "reference": "Follow the current Homerton ED / orthopaedic upper-limb pathway.",
    "credit": "RadHeadFrac.png — James Heilman, MD, CC BY-SA 4.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:RadHeadFrac.png",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 45-year-old woman falls onto an outstretched hand. She has lateral elbow pain and cannot fully extend the elbow. Pronation and supination are painful."
  },
  {
    "id": "lisfranc",
    "topic": "Easily missed",
    "region": "Foot",
    "view": "AP",
    "title": "Lisfranc injury",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lisfranc%20fracture.jpg",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Jones fracture",
      "Lisfranc injury",
      "Calcaneal fracture",
      "Talar neck fracture"
    ],
    "correct": 1,
    "diagnosis": "Lisfranc injury",
    "difficulty": "High-yield miss",
    "findings": [
      "Malalignment at the tarsometatarsal joints.",
      "Widening between the 1st and 2nd metatarsal bases may be present.",
      "Look for a small avulsion 'fleck' fragment.",
      "Weight-bearing views may reveal subtle instability when clinically appropriate."
    ],
    "priorities": [
      "Have a high index of suspicion with midfoot swelling, bruising or plantar ecchymosis.",
      "Keep non-weight-bearing when instability is suspected.",
      "Escalate for orthopaedic review and further imaging if films are equivocal but suspicion remains."
    ],
    "management": "Lisfranc injuries may be subtle and are important not to miss because unstable injuries can require operative management.",
    "dontMiss": "A normal-looking non-weight-bearing film does not exclude a clinically significant Lisfranc injury.",
    "reference": "Use the current Homerton imaging and orthopaedic referral pathways.",
    "credit": "Lisfranc fracture.jpg — Wikimedia Commons, Creative Commons licence",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Lisfranc_fracture.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 29-year-old man falls from a bicycle with his foot trapped on the pedal. He has marked midfoot pain, swelling and plantar bruising and is unable to weight-bear."
  },
  {
    "id": "scaphoid",
    "topic": "Easily missed",
    "region": "Wrist",
    "view": "Scaphoid view",
    "title": "Scaphoid fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/X-ray%20of%20scaphoid%20fracture.png",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Scaphoid waist fracture",
      "Triquetral fracture",
      "Distal radius fracture",
      "Hook of hamate fracture"
    ],
    "correct": 0,
    "diagnosis": "Scaphoid waist fracture",
    "difficulty": "High-yield miss",
    "findings": [
      "Lucent fracture line through the scaphoid waist.",
      "Dedicated scaphoid views may make the fracture more conspicuous.",
      "Initial radiographs can be normal despite clinical suspicion."
    ],
    "priorities": [
      "Examine anatomical snuffbox and scaphoid tubercle.",
      "Immobilise if suspicion remains despite normal initial films.",
      "Arrange follow-up/further imaging according to local pathway."
    ],
    "management": "Suspected occult scaphoid fracture requires immobilisation and appropriate follow-up imaging; displaced fractures need specialist review.",
    "dontMiss": "Occult or proximal pole fractures because of non-union/avascular necrosis risk.",
    "reference": "NICE NG38 and current local wrist/scaphoid pathway.",
    "credit": "Gilo1969 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:X-ray_of_scaphoid_fracture.png",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 22-year-old woman falls onto an outstretched hand while roller-skating. Wrist X-rays are requested because she has anatomical snuffbox tenderness and pain on axial loading of the thumb."
  },
  {
    "id": "smith",
    "topic": "Upper limb",
    "region": "Wrist",
    "view": "AP + lateral",
    "title": "Smith's fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Smith%20Fracture%20links%20extraartikulaer%2057W%20-%20CR%202%20Ebenen%20-%20001.jpg",
    "question": "What fracture pattern is shown?",
    "options": [
      "Colles' fracture",
      "Smith's fracture",
      "Barton fracture",
      "Scaphoid fracture"
    ],
    "correct": 1,
    "diagnosis": "Volar-angulated distal radius fracture (Smith's pattern)",
    "difficulty": "Core FY2",
    "findings": [
      "Distal radius fracture with volar angulation/displacement on lateral view.",
      "Assess for intra-articular extension.",
      "Contrast displacement direction with a Colles fracture."
    ],
    "priorities": [
      "Document neurovascular status before and after splintage/reduction.",
      "Provide analgesia and assess need for reduction.",
      "Refer according to displacement, instability and local criteria."
    ],
    "management": "Smith's fractures may be unstable and can require reduction and operative fixation depending on alignment and patient factors.",
    "dontMiss": "Median nerve symptoms, open injury and intra-articular extension.",
    "reference": "NICE NG38 and current local distal-radius pathway.",
    "credit": "Hellerhoff, CC BY-SA 4.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Smith_Fracture_links_extraartikulaer_57W_-_CR_2_Ebenen_-_001.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 68-year-old woman falls backwards and lands on a flexed wrist. She has a painful swollen wrist with deformity but no neurovascular deficit."
  },
  {
    "id": "boxer",
    "topic": "Upper limb",
    "region": "Hand",
    "view": "PA",
    "title": "Boxer's fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Boxers%20fracture.JPG",
    "question": "Which injury is demonstrated?",
    "options": [
      "5th metacarpal neck fracture",
      "Scaphoid fracture",
      "1st metacarpal base fracture",
      "Distal phalanx fracture"
    ],
    "correct": 0,
    "diagnosis": "5th metacarpal neck fracture (Boxer's fracture)",
    "difficulty": "Core FY2",
    "findings": [
      "Fracture through the neck of the fifth metacarpal.",
      "Assess angulation on lateral view.",
      "Look clinically for rotational deformity when making a fist."
    ],
    "priorities": [
      "Check skin carefully for open injury/fight bite.",
      "Document tendon and neurovascular function.",
      "Assess rotation rather than relying on angulation alone."
    ],
    "management": "Many uncomplicated injuries are treated conservatively; management depends on rotation, angulation, open injury and local hand pathway.",
    "dontMiss": "Human-bite contamination over the MCP joint and rotational deformity.",
    "reference": "Use current Homerton hand injury pathway.",
    "credit": "Wikimedia Commons — Boxers fracture.JPG",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Boxers_fracture.JPG",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 25-year-old man presents after punching a wall. He has pain and swelling over the ulnar side of the hand. There is no open wound, and finger rotation is assessed before imaging."
  },
  {
    "id": "clavicle",
    "topic": "Upper limb",
    "region": "Shoulder girdle",
    "view": "AP",
    "title": "Clavicle fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Clavicle%20fracture.jpg",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Midshaft clavicle fracture",
      "AC joint dislocation",
      "Proximal humerus fracture",
      "Scapular fracture"
    ],
    "correct": 0,
    "diagnosis": "Midshaft clavicle fracture",
    "difficulty": "Core FY2",
    "findings": [
      "Cortical break through the clavicle, commonly midshaft.",
      "Assess displacement, shortening and comminution.",
      "Inspect AC and SC joints."
    ],
    "priorities": [
      "Check skin for tenting/open injury.",
      "Document distal neurovascular examination.",
      "Consider associated chest injury after higher-energy trauma."
    ],
    "management": "Most uncomplicated clavicle fractures are managed with sling, analgesia and follow-up; markedly displaced, open or skin-threatening injuries need specialist review.",
    "dontMiss": "Skin tenting, open fracture, neurovascular compromise or associated pneumothorax.",
    "reference": "NICE NG38 and current local upper-limb pathway.",
    "credit": "mexican 2000, CC BY-SA 2.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Clavicle_fracture.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 31-year-old cyclist falls directly onto his left shoulder. He has focal clavicular pain, swelling and difficulty moving the arm. There is no respiratory distress."
  },
  {
    "id": "supracondylar",
    "topic": "Paediatrics",
    "region": "Elbow",
    "view": "Lateral",
    "title": "Supracondylar humerus fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Supracondylar09.JPG",
    "question": "What is the most likely injury?",
    "options": [
      "Radial head fracture",
      "Supracondylar humerus fracture",
      "Olecranon fracture",
      "Elbow dislocation"
    ],
    "correct": 1,
    "diagnosis": "Paediatric supracondylar humerus fracture",
    "difficulty": "Paediatric emergency",
    "findings": [
      "Fracture through distal humerus above the condyles.",
      "Assess the anterior humeral line.",
      "Look for posterior fat pad and displacement."
    ],
    "priorities": [
      "Document pulse, capillary refill and median/AIN, radial and ulnar nerve function.",
      "Immobilise and provide analgesia.",
      "Urgently involve orthopaedics if displaced or neurovascularly abnormal."
    ],
    "management": "Displaced supracondylar fractures often require operative fixation; neurovascular compromise changes urgency.",
    "dontMiss": "Poorly perfused hand, evolving compartment syndrome and nerve injury.",
    "reference": "Use current paediatric orthopaedic / ED pathway.",
    "credit": "James Heilman MD, CC BY-SA 3.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Supracondylar09.JPG",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "An 8-year-old child falls from climbing equipment onto an outstretched arm. The elbow is swollen and very painful. Radial pulse, capillary refill and median/anterior interosseous nerve function are checked before imaging."
  },
  {
    "id": "nof",
    "topic": "Lower limb",
    "region": "Hip",
    "view": "AP",
    "title": "Neck of femur fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/X-ray%20of%20subtle%20compressive%20hip%20fracture.jpg",
    "question": "What important injury is present?",
    "options": [
      "Subcapital neck of femur fracture",
      "Intertrochanteric fracture",
      "Pelvic ramus fracture",
      "Hip dislocation"
    ],
    "correct": 0,
    "diagnosis": "Subcapital neck of femur fracture",
    "difficulty": "High-yield miss",
    "findings": [
      "Subtle subcapital fracture line at the femoral neck.",
      "Assess Shenton line and symmetry with opposite hip.",
      "Occult fractures may be radiographically subtle or invisible."
    ],
    "priorities": [
      "Provide analgesia and assess mobility/baseline function.",
      "If suspicion remains despite normal X-rays, pursue further imaging.",
      "Start the appropriate hip-fracture pathway where applicable."
    ],
    "management": "A suspected occult hip fracture should not be dismissed on a normal plain film when clinical suspicion remains.",
    "dontMiss": "Occult intracapsular fracture in an older patient unable to weight-bear after a fall.",
    "reference": "NICE CG124 — Hip fracture: management.",
    "credit": "Mikael Häggström — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:X-ray_of_subtle_compressive_hip_fracture.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "An 84-year-old woman falls at home and is unable to stand afterwards. Her affected leg is shortened and externally rotated and she has severe groin pain on movement."
  },
  {
    "id": "tibial-plateau",
    "topic": "Lower limb",
    "region": "Knee",
    "view": "AP",
    "title": "Tibial plateau fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tibial%20Plateau%20Fracture.jpg",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Patellar fracture",
      "Tibial plateau fracture",
      "Tibial shaft fracture",
      "Fibular head fracture"
    ],
    "correct": 1,
    "diagnosis": "Tibial plateau fracture",
    "difficulty": "High-yield",
    "findings": [
      "Fracture involving proximal tibial articular surface.",
      "Look for depression, split fragments and joint incongruity.",
      "A lipohaemarthrosis can be an important clue."
    ],
    "priorities": [
      "Check neurovascular status and assess for compartment syndrome.",
      "Keep non-weight-bearing and immobilise appropriately.",
      "Escalate for CT/orthopaedic review according to fracture pattern."
    ],
    "management": "These are intra-articular injuries; displacement, depression, instability and soft-tissue condition guide management.",
    "dontMiss": "Compartment syndrome, common peroneal nerve injury and associated ligamentous injury.",
    "reference": "Use current Homerton knee trauma pathway.",
    "credit": "James Heilman MD, CC BY-SA 4.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Tibial_Plateau_Fracture.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 56-year-old man is struck on the side of the knee by a slow-moving car. He has a swollen painful knee and cannot weight-bear. There is tenderness over the proximal tibia."
  },
  {
    "id": "patella",
    "topic": "Lower limb",
    "region": "Knee",
    "view": "AP/lateral",
    "title": "Patellar fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Patella%20fracture.JPG",
    "question": "Which injury is shown?",
    "options": [
      "Patellar fracture",
      "Tibial plateau fracture",
      "Bipartite patella",
      "Patellar dislocation"
    ],
    "correct": 0,
    "diagnosis": "Patellar fracture",
    "difficulty": "Core FY2",
    "findings": [
      "Fracture line through patella.",
      "Assess displacement and articular step.",
      "Examine the extensor mechanism clinically."
    ],
    "priorities": [
      "Check whether patient can perform a straight-leg raise.",
      "Inspect for open injury.",
      "Immobilise/refer depending on displacement and extensor mechanism."
    ],
    "management": "Intact extensor mechanism and minimal displacement may be managed conservatively; disruption or significant displacement needs orthopaedic review.",
    "dontMiss": "Open fracture and extensor mechanism failure.",
    "reference": "Use current Homerton knee injury pathway.",
    "credit": "James Heilman MD, CC BY-SA 3.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Patella_fracture.JPG",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 38-year-old woman falls directly onto the front of her knee. She has marked anterior knee pain and swelling and struggles to straight-leg raise."
  },
  {
    "id": "maisonneuve",
    "topic": "Easily missed",
    "region": "Leg / ankle",
    "view": "AP",
    "title": "Maisonneuve fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Maisonneuve%20fracture%20Fibula.JPG",
    "question": "What injury pattern should this raise concern for?",
    "options": [
      "Maisonneuve fracture",
      "Isolated fibular shaft fracture",
      "Jones fracture",
      "Tibial plateau fracture"
    ],
    "correct": 0,
    "diagnosis": "Maisonneuve fracture",
    "difficulty": "High-yield miss",
    "findings": [
      "Proximal fibular fracture associated with ankle syndesmotic injury.",
      "Ankle injury may be the presenting complaint.",
      "Look for medial clear-space widening or medial malleolar injury."
    ],
    "priorities": [
      "Examine the entire fibula in significant ankle injuries.",
      "Assess ankle stability and neurovascular status.",
      "Keep non-weight-bearing and refer to orthopaedics."
    ],
    "management": "This is an unstable ankle injury pattern and typically requires specialist orthopaedic management.",
    "dontMiss": "Proximal fibular tenderness when the initial focus is only on the ankle.",
    "reference": "Use current Homerton ankle trauma pathway.",
    "credit": "RotorMotor2, CC BY-SA 3.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Maisonneuve_fracture_Fibula.JPG",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 42-year-old man twists his ankle while playing football. He has medial ankle pain and swelling, but also reports pain high in the lateral calf when examined."
  },
  {
    "id": "jones",
    "topic": "Lower limb",
    "region": "Foot",
    "view": "AP/oblique",
    "title": "Jones fracture",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jonesfracture.jpg",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Jones fracture",
      "Avulsion fracture of 5th metatarsal tuberosity",
      "Lisfranc injury",
      "Stress fracture of 2nd metatarsal"
    ],
    "correct": 0,
    "diagnosis": "Jones fracture of the 5th metatarsal",
    "difficulty": "Core FY2",
    "findings": [
      "Transverse fracture at metaphyseal-diaphyseal junction of fifth metatarsal.",
      "Distinguish from a more proximal tuberosity avulsion fracture.",
      "Assess displacement."
    ],
    "priorities": [
      "Document neurovascular status and ability to weight-bear.",
      "Immobilise and follow local weight-bearing advice.",
      "Arrange fracture-clinic/orthopaedic follow-up."
    ],
    "management": "Jones fractures have a relatively higher risk of delayed union/non-union than simple tuberosity avulsion fractures.",
    "dontMiss": "Confusing a Jones fracture with a more benign tuberosity avulsion fracture.",
    "reference": "Use current Homerton foot fracture pathway.",
    "credit": "Lucien Monfils, CC BY-SA 3.0 — Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Jonesfracture.jpg",
    "category": "MSK X-rays",
    "modality": "X-ray",
    "stem": "A 31-year-old runner rolls the foot into inversion stepping off a kerb. He has focal pain and swelling at the base of the fifth metatarsal and finds weight-bearing difficult."
  },
  {
    "id": "cxr-pneumothorax",
    "category": "Chest X-rays",
    "modality": "X-ray",
    "topic": "Chest X-rays",
    "region": "Chest",
    "view": "PA/AP",
    "title": "Pneumothorax",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/09-01-Pneumothorax.png",
    "question": "What is the key abnormality on this chest X-ray?",
    "options": [
      "Pleural effusion",
      "Pneumothorax",
      "Lobar collapse",
      "Pulmonary oedema"
    ],
    "correct": 1,
    "diagnosis": "Pneumothorax",
    "difficulty": "Core FY2",
    "findings": [
      "Visible visceral pleural line.",
      "No lung markings peripheral to the pleural edge.",
      "Compare both apices and lung volumes; supine films may show a deep sulcus sign."
    ],
    "priorities": [
      "Assess ABCDE and physiological stability before focusing on image size.",
      "If tension pneumothorax is clinically suspected in an unstable patient, treat immediately rather than waiting for imaging.",
      "Discuss drainage/observation strategy with a senior and follow the current local pleural pathway."
    ],
    "management": "Management depends on symptoms, physiological compromise, size/context and whether the pneumothorax is primary, secondary or traumatic. The unstable patient takes priority over radiographic measurements.",
    "dontMiss": "Tension physiology, bilateral pneumothoraces, associated haemothorax or traumatic chest injury.",
    "reference": "Current Homerton pleural/chest trauma pathway; BTS pleural disease guidance.",
    "credit": "Hellerhoff — Wikimedia Commons, CC BY-SA 3.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:09-01-Pneumothorax.png",
    "stem": "A 27-year-old tall, slim man develops sudden left-sided pleuritic chest pain and shortness of breath while at rest. He is haemodynamically stable but has reduced breath sounds on the left."
  },
  {
    "id": "cxr-pneumonia",
    "category": "Chest X-rays",
    "modality": "X-ray",
    "topic": "Chest X-rays",
    "region": "Chest",
    "view": "PA",
    "title": "Lobar pneumonia",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/X-ray%20of%20lobar%20pneumonia.jpg",
    "question": "Which diagnosis best explains the focal air-space opacity?",
    "options": [
      "Pneumothorax",
      "Right middle lobe pneumonia",
      "Pleural effusion",
      "Pulmonary embolism"
    ],
    "correct": 1,
    "diagnosis": "Lobar pneumonia",
    "difficulty": "Core FY2",
    "findings": [
      "Focal air-space opacity/consolidation in a lobar distribution.",
      "Air bronchograms may be present.",
      "Use the silhouette sign and lateral film, where available, to help localise the lobe."
    ],
    "priorities": [
      "Assess oxygenation, respiratory effort and sepsis features.",
      "Use clinical severity assessment alongside imaging.",
      "Start appropriate antibiotics promptly once pneumonia is diagnosed, following local antimicrobial guidance."
    ],
    "management": "NICE NG250 recommends processes that allow diagnosis including chest X-ray within 4 hours of hospital presentation and antibiotics as soon as possible after diagnosis, within 4 hours of presentation.",
    "dontMiss": "Sepsis, parapneumonic effusion/empyema, underlying obstructing lesion or alternative diagnoses such as pulmonary oedema.",
    "reference": "NICE NG250 Pneumonia: diagnosis and management (2025).",
    "credit": "Mikael Häggström, MD — Wikimedia Commons, CC0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:X-ray_of_lobar_pneumonia.jpg",
    "stem": "A 68-year-old woman presents with 4 days of fever, productive cough and worsening breathlessness. Her oxygen saturation is 91% on air and she has focal crackles at the right base."
  },
  {
    "id": "cxr-oedema",
    "category": "Chest X-rays",
    "modality": "X-ray",
    "topic": "Chest X-rays",
    "region": "Chest",
    "view": "PA/AP",
    "title": "Pulmonary oedema",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pulmonary%20oedema.jpg",
    "question": "What is the most likely radiographic diagnosis?",
    "options": [
      "Pulmonary oedema",
      "Right lower lobe pneumonia",
      "Pneumothorax",
      "COPD hyperinflation"
    ],
    "correct": 0,
    "diagnosis": "Cardiogenic pulmonary oedema",
    "difficulty": "Core FY2",
    "findings": [
      "Bilateral interstitial/alveolar opacification, often perihilar.",
      "Kerley B lines and vascular redistribution may be present.",
      "Cardiomegaly and pleural effusions support a cardiac cause but may be absent."
    ],
    "priorities": [
      "ABCDE, oxygen if hypoxaemic, cardiac monitoring and IV access.",
      "Look for precipitants such as ACS, arrhythmia, hypertensive emergency or infection.",
      "Use bedside ultrasound/echo information when available and treat according to the clinical phenotype."
    ],
    "management": "Treat the patient rather than the image: position upright, correct hypoxaemia and address the precipitant; nitrates/diuresis/ventilatory support depend on blood pressure, congestion and local protocol.",
    "dontMiss": "ACS, severe hypertension, cardiogenic shock or an alternative cause of bilateral infiltrates.",
    "reference": "Current Homerton acute heart failure pathway and NICE guidance.",
    "credit": "Wikimedia Commons — Pulmonary oedema.jpg",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Pulmonary_oedema.jpg",
    "stem": "A 76-year-old man with heart failure wakes with severe breathlessness and orthopnoea. He is hypoxic, hypertensive and has widespread bilateral crackles with peripheral oedema."
  },
  {
    "id": "cxr-effusion",
    "category": "Chest X-rays",
    "modality": "X-ray",
    "topic": "Chest X-rays",
    "region": "Chest",
    "view": "PA",
    "title": "Pleural effusion",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pleural%20effusion.jpg",
    "question": "What is the dominant abnormality?",
    "options": [
      "Pleural effusion",
      "Pneumomediastinum",
      "Lobar collapse",
      "Pulmonary fibrosis"
    ],
    "correct": 0,
    "diagnosis": "Pleural effusion",
    "difficulty": "Core FY2",
    "findings": [
      "Blunting of the costophrenic angle.",
      "Homogeneous basal opacity with a meniscus may be seen on an erect film.",
      "Large effusions can obscure the hemidiaphragm/heart border and shift the mediastinum."
    ],
    "priorities": [
      "Assess respiratory compromise and the likely underlying cause.",
      "Use ultrasound before pleural procedures where appropriate.",
      "Escalate urgently if there is significant compromise or concern for haemothorax/empyema."
    ],
    "management": "Small stable effusions may be investigated without emergency drainage; large symptomatic, infected or traumatic collections require senior/specialist assessment and a cause-directed plan.",
    "dontMiss": "Empyema, haemothorax, malignancy or a large effusion causing respiratory compromise.",
    "reference": "Current local pleural pathway; BTS pleural disease guidance.",
    "credit": "Wikimedia Commons — Pleural effusion.jpg",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Pleural_effusion.jpg",
    "stem": "A 70-year-old woman with known malignancy presents with progressive breathlessness. Examination shows reduced air entry and stony dullness at the right base."
  },
  {
    "id": "axr-sbo",
    "category": "Abdominal X-rays",
    "modality": "X-ray",
    "topic": "Abdominal X-rays",
    "region": "Abdomen",
    "view": "Erect abdomen",
    "title": "Small bowel obstruction",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Upright%20X-ray%20demonstrating%20small%20bowel%20obstruction.jpg",
    "question": "What is the most likely diagnosis?",
    "options": [
      "Small bowel obstruction",
      "Toxic megacolon",
      "Constipation",
      "Perforated viscus"
    ],
    "correct": 0,
    "diagnosis": "Small bowel obstruction",
    "difficulty": "Core FY2",
    "findings": [
      "Dilated centrally located small-bowel loops.",
      "Valvulae conniventes traverse the full bowel width.",
      "Multiple air–fluid levels may be seen on an erect film."
    ],
    "priorities": [
      "Assess for peritonism, shock, strangulation or perforation.",
      "IV access, fluids, analgesia/antiemetics and keep nil by mouth.",
      "Early surgical involvement; CT is usually required to define transition point/cause and complications."
    ],
    "management": "Plain film can suggest obstruction, but CT generally defines the cause and identifies closed-loop obstruction, ischaemia or perforation. Nasogastric decompression is considered when clinically indicated.",
    "dontMiss": "Closed-loop obstruction, bowel ischaemia, perforation or an incarcerated hernia.",
    "reference": "Current Homerton acute surgical abdomen pathway.",
    "credit": "James Heilman, MD — Wikimedia Commons, CC BY-SA",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Upright_X-ray_demonstrating_small_bowel_obstruction.jpg",
    "stem": "A 62-year-old man with previous abdominal surgery presents with cramping abdominal pain, repeated bilious vomiting and increasing abdominal distension. He has not passed stool or flatus since yesterday."
  },
  {
    "id": "axr-free-air",
    "category": "Abdominal X-rays",
    "modality": "X-ray",
    "topic": "Abdominal X-rays",
    "region": "Chest/abdomen",
    "view": "Erect chest",
    "title": "Pneumoperitoneum",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pneumoperitoneum%20chest%20X-ray.jpg",
    "fallbackImage": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pneumoperitoneum.jpg",
    "question": "What does the subdiaphragmatic lucency represent?",
    "options": [
      "Pleural effusion",
      "Free intraperitoneal gas",
      "Basal atelectasis",
      "Chilaiditi syndrome"
    ],
    "correct": 1,
    "diagnosis": "Pneumoperitoneum (free intraperitoneal gas)",
    "difficulty": "High-yield emergency",
    "findings": [
      "Free gas beneath the diaphragm on an erect chest radiograph, classically under the right hemidiaphragm.",
      "Look for a sharp diaphragmatic contour and bilateral subdiaphragmatic air.",
      "Clinical context is essential; postoperative gas and interposed bowel can mimic free air."
    ],
    "priorities": [
      "Treat as possible perforated viscus in the appropriate clinical context.",
      "ABCDE, IV access, fluids, analgesia and early senior/surgical review.",
      "CT abdomen/pelvis is commonly required when the patient is stable enough and diagnosis/cause needs definition."
    ],
    "management": "Free intraperitoneal gas with an acute abdomen should trigger urgent surgical assessment and management for possible gastrointestinal perforation.",
    "dontMiss": "Sepsis, shock and perforated viscus.",
    "reference": "Current Homerton acute surgical abdomen pathway.",
    "credit": "Bill Rhodes — Wikimedia Commons, CC BY 2.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Pneumoperitoneum_chest_X-ray.jpg",
    "stem": "A 57-year-old man develops sudden severe epigastric pain that rapidly becomes generalised. He looks unwell and has a rigid abdomen with guarding and rebound tenderness."
  },
  {
    "id": "ct-subdural",
    "category": "CT Head",
    "modality": "CT",
    "topic": "CT Head",
    "region": "Head",
    "view": "Non-contrast axial CT",
    "title": "Acute subdural haematoma",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Trauma%20subdural.jpg",
    "question": "What type of intracranial haemorrhage is shown?",
    "options": [
      "Subdural haematoma",
      "Extradural haematoma",
      "Subarachnoid haemorrhage",
      "Ischaemic stroke"
    ],
    "correct": 0,
    "diagnosis": "Acute subdural haematoma",
    "difficulty": "Core FY2",
    "findings": [
      "Crescent-shaped extra-axial hyperdensity along the cerebral convexity.",
      "May cross suture lines but is limited by dural reflections.",
      "Look for mass effect, sulcal effacement and midline shift."
    ],
    "priorities": [
      "ABCDE with cervical-spine considerations after trauma.",
      "Urgent senior/neurosurgical discussion for significant haemorrhage, neurological deficit or mass effect.",
      "Reverse anticoagulation when indicated and follow the current head-injury pathway."
    ],
    "management": "Management depends on neurological status, size/mass effect, anticoagulation and trajectory. Deterioration or significant mass effect requires urgent specialist input.",
    "dontMiss": "Midline shift, herniation, coexisting contusions/fractures and anticoagulant use.",
    "reference": "NICE NG232 Head injury: assessment and early management.",
    "credit": "Trauma subdural.jpg — public-domain medical image, Wikimedia Commons",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Trauma_subdural.jpg",
    "stem": "A 46-year-old man is brought to ED after coming off his bicycle without wearing a helmet. He had a witnessed loss of consciousness and has vomited twice. He is now drowsy with a GCS of 13 and complains of a worsening headache."
  },
  {
    "id": "ct-epidural",
    "category": "CT Head",
    "modality": "CT",
    "topic": "CT Head",
    "region": "Head",
    "view": "Non-contrast axial CT",
    "title": "Extradural (epidural) haematoma",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/EpiduralHematoma.jpg",
    "question": "Which intracranial haemorrhage pattern is this?",
    "options": [
      "Subdural haematoma",
      "Extradural haematoma",
      "Subarachnoid haemorrhage",
      "Intraventricular haemorrhage"
    ],
    "correct": 1,
    "diagnosis": "Extradural (epidural) haematoma",
    "difficulty": "High-yield emergency",
    "findings": [
      "Biconvex/lentiform extra-axial hyperdensity.",
      "Typically does not cross cranial sutures.",
      "Look for an associated skull fracture, mass effect and midline shift."
    ],
    "priorities": [
      "ABCDE, repeated GCS/pupil assessment and early senior involvement.",
      "Urgent neurosurgical discussion when clinically/radiologically significant.",
      "Correct hypoxia/hypotension and reverse anticoagulation if relevant."
    ],
    "management": "A clinically significant extradural haematoma is a time-critical neurosurgical problem; deterioration can be rapid even after an initially lucid period.",
    "dontMiss": "Rapid neurological deterioration, pupillary asymmetry, skull fracture and herniation.",
    "reference": "NICE NG232 Head injury: assessment and early management.",
    "credit": "EpiduralHematoma.jpg — James Heilman, MD, CC BY-SA 4.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:EpiduralHematoma.jpg",
    "stem": "A 19-year-old man is struck on the side of the head during a collision. He briefly loses consciousness, initially seems well, then becomes increasingly confused and drowsy over the next hour."
  },
  {
    "id": "ecg-af",
    "category": "ECGs",
    "modality": "ECG",
    "topic": "ECGs",
    "region": "12-lead ECG",
    "view": "Rhythm + 12-lead",
    "title": "Atrial fibrillation",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/ECG%20Atrial%20Fibrillation.jpg",
    "question": "What rhythm is shown?",
    "options": [
      "Atrial fibrillation",
      "Atrial flutter with fixed block",
      "Sinus tachycardia",
      "SVT"
    ],
    "correct": 0,
    "diagnosis": "Atrial fibrillation with rapid ventricular response",
    "difficulty": "Core FY2",
    "findings": [
      "Irregularly irregular R–R intervals.",
      "No consistent discrete P waves.",
      "Ventricular rate may be fast, normal or slow."
    ],
    "priorities": [
      "Assess haemodynamic stability and treat immediately if instability is attributable to the arrhythmia.",
      "Look for precipitants including infection, hypovolaemia, ACS, electrolyte disturbance and thyrotoxicosis.",
      "Consider rate/rhythm strategy and stroke prevention with senior support and current guidance."
    ],
    "management": "Unstable tachyarrhythmia requires urgent synchronised cardioversion according to ALS/local protocol. Stable AF management depends on duration, symptoms, comorbidity and thromboembolic risk.",
    "dontMiss": "Pre-excited AF, acute heart failure, ACS or sepsis driving the arrhythmia.",
    "reference": "Resuscitation Council UK ALS principles; NICE AF guidance and local pathway.",
    "credit": "Ewingdo — Wikimedia Commons, CC BY-SA",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation.jpg",
    "stem": "A 74-year-old woman presents with palpitations and mild breathlessness. Her pulse is irregularly irregular at 130 bpm and blood pressure is 118/72 mmHg."
  },
  {
    "id": "ecg-stemi",
    "category": "ECGs",
    "modality": "ECG",
    "topic": "ECGs",
    "region": "12-lead ECG",
    "view": "12-lead",
    "title": "ST-elevation myocardial infarction",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/ST%20elevation%20myocardial%20infarction%20ECG.jpg",
    "question": "What is the most important diagnosis to recognise?",
    "options": [
      "Acute STEMI",
      "Pericarditis",
      "Hyperkalaemia",
      "Left bundle branch block only"
    ],
    "correct": 0,
    "diagnosis": "Acute ST-elevation myocardial infarction",
    "difficulty": "High-yield emergency",
    "findings": [
      "ST elevation in anatomically contiguous leads.",
      "Reciprocal ST depression may support the diagnosis.",
      "Interpret the ECG alongside symptoms, prior ECGs and the clinical picture."
    ],
    "priorities": [
      "ABCDE, monitoring, IV access and immediate senior/cardiology activation according to the local PPCI pathway.",
      "Repeat ECGs if symptoms persist or the first ECG is non-diagnostic.",
      "Do not delay reperfusion pathway activation while waiting for troponin when the ECG/clinical picture is diagnostic."
    ],
    "management": "STEMI is a reperfusion emergency. Follow the local PPCI pathway and give antiplatelet/adjunctive therapy according to current local cardiology guidance and contraindications.",
    "dontMiss": "Posterior MI, right ventricular MI, aortic dissection mimicking ACS or STEMI equivalents.",
    "reference": "Current Homerton/Barts Heart Centre ACS and PPCI pathway.",
    "credit": "Wikimedia Commons — ST elevation myocardial infarction ECG.jpg",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:ST_elevation_myocardial_infarction_ECG.jpg",
    "stem": "A 58-year-old man presents with 45 minutes of crushing central chest pain radiating to his left arm, associated with sweating and nausea. An ECG is obtained immediately."
  },
  {
    "id": "ecg-hyperk",
    "category": "ECGs",
    "modality": "ECG",
    "topic": "ECGs",
    "region": "12-lead ECG",
    "view": "12-lead",
    "title": "Hyperkalaemia",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyperkalemia%20ECG.jpg",
    "question": "Which metabolic emergency should this ECG make you consider?",
    "options": [
      "Hypocalcaemia",
      "Hyperkalaemia",
      "Hypokalaemia",
      "Hypermagnesaemia"
    ],
    "correct": 1,
    "diagnosis": "ECG changes of severe hyperkalaemia",
    "difficulty": "High-yield emergency",
    "findings": [
      "Tall, narrow-based peaked T waves may be an early clue.",
      "Progressive PR prolongation, P-wave loss and QRS widening can occur as severity increases.",
      "A sine-wave pattern is a pre-arrest finding."
    ],
    "priorities": [
      "Place on continuous cardiac monitoring and obtain urgent potassium/renal profile and a blood gas if appropriate.",
      "Treat immediately when severe hyperkalaemia and/or toxic ECG changes are present according to the current emergency pathway.",
      "Identify and treat the cause; involve renal/critical care early when appropriate."
    ],
    "management": "Toxic ECG changes require urgent membrane stabilisation and potassium-shifting/removal therapy according to current local/UK emergency guidance.",
    "dontMiss": "A near-normal ECG does not reliably exclude clinically important hyperkalaemia.",
    "reference": "Resuscitation Council UK / current local hyperkalaemia pathway.",
    "credit": "Agbayani & Gonzales — Wikimedia Commons, CC BY 4.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Hyperkalemia_ECG.jpg",
    "stem": "A 65-year-old man with end-stage kidney disease has missed dialysis and presents with weakness and nausea. His heart rate is 48 bpm and a bedside ECG is performed while urgent blood tests are sent."
  },
  {
    "id": "ecg-chb",
    "category": "ECGs",
    "modality": "ECG",
    "topic": "ECGs",
    "region": "12-lead ECG",
    "view": "Rhythm + 12-lead",
    "title": "Complete heart block",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/CompleteHeartBlock.jpg",
    "question": "What conduction abnormality is present?",
    "options": [
      "First-degree AV block",
      "Mobitz I",
      "Mobitz II",
      "Complete (third-degree) AV block"
    ],
    "correct": 3,
    "diagnosis": "Complete (third-degree) AV block",
    "difficulty": "High-yield emergency",
    "findings": [
      "P waves and QRS complexes occur independently (AV dissociation).",
      "Atrial rate is faster than the ventricular escape rate.",
      "QRS width depends on the level of the escape focus."
    ],
    "priorities": [
      "Assess for adverse features: shock, syncope, myocardial ischaemia or heart failure.",
      "Apply monitoring/defibrillation pads and obtain senior/cardiology help early.",
      "Prepare for pacing when indicated; treat reversible causes."
    ],
    "management": "Symptomatic or unstable complete heart block may require immediate pacing and temporising pharmacological measures according to ALS/local bradycardia guidance.",
    "dontMiss": "Anterior MI, drug toxicity, hyperkalaemia or other reversible causes.",
    "reference": "Resuscitation Council UK ALS bradycardia algorithm and local cardiology pathway.",
    "credit": "James Heilman, MD — Wikimedia Commons, CC BY-SA 3.0",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:CompleteHeartBlock.jpg",
    "stem": "A 79-year-old man presents after two episodes of syncope. He is pale and light-headed with a regular pulse of 32 bpm and blood pressure of 88/54 mmHg."
  }
];
let quiz=[], qIndex=0, score=0, answered=false, activeCategory='All';
const app=document.getElementById('app');
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const categories=['MSK X-rays','Chest X-rays','Abdominal X-rays','CT Head','ECGs'];
const categoryMeta={
 'MSK X-rays':['🦴','15 classic injury films including commonly missed fractures'],
 'Chest X-rays':['🫁','Pneumothorax, pneumonia, oedema and pleural effusion'],
 'Abdominal X-rays':['🩻','Obstruction and free intraperitoneal gas'],
 'CT Head':['🧠','Time-critical traumatic intracranial haemorrhage'],
 'ECGs':['❤️','Core ED rhythms and metabolic/coronary emergencies']
};
function imgTag(c){return `<div class="image-wrap"><img src="${c.image}" alt="${esc(c.title)} teaching image" loading="eager" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';"><div class="image-fallback"><div><strong>Image could not load in this browser.</strong><br><span>The case still works, and you can open the original image directly.</span><br><a href="${c.creditUrl}" target="_blank" rel="noopener">Open image source ↗</a></div></div></div>`}
function headerStats(){return `<div class="stats-row"><span><strong>${CASES.length}</strong> cases</span><span><strong>${categories.length}</strong> teaching areas</span><span><strong>Instant</strong> feedback</span></div>`}
function goHome(){
 app.innerHTML=`<section class="hero"><div class="wrap hero-grid"><div><div class="kicker">HOMERTON ED · FOUNDATION YEAR 2</div><h1>ED Image & ECG Challenge</h1><p class="lead">A case-based teaching hub for common Emergency Department imaging and ECGs. Inspect the image, commit to an answer, then reveal the key findings, immediate priorities, management pearl and the dangerous diagnosis not to miss.</p>${headerStats()}<div class="cta-row"><button class="btn primary" onclick="startQuiz()">Start mixed 27-case quiz</button><button class="btn secondary" onclick="showLibrary()">Browse case library</button></div></div><div class="hero-card"><div class="eyebrow">QUICK TEACHING MODE</div><div class="big">5</div><strong>focused modules</strong><p>Run a full mixed quiz, choose one topic, or open a single case for a 10-minute teaching station.</p><span class="badge">Phone friendly</span> <span class="badge">Real clinical images</span> <span class="badge">ED management</span></div></div></section>
 <section class="wrap"><div class="section-title"><div><div class="kicker">TEACHING AREAS</div><h2>Choose a module</h2></div><p>Each module can be run as its own quiz.</p></div><div class="topic-grid">${categories.map(cat=>{const [i,d]=categoryMeta[cat]; const n=CASES.filter(c=>c.category===cat).length; return `<button class="topic" onclick="showLibrary('${cat}')"><div class="icon">${i}</div><div class="topic-count">${n} cases</div><h3>${cat}</h3><p>${d}</p></button>`}).join('')}</div></section>
 <section class="wrap compact"><div class="callout"><div><strong>Teaching tip</strong><p>Ask the FY2 to describe the image systematically before showing the options. Then use the “Don’t miss” box to finish with a safety-netting point.</p></div><button class="btn secondary" onclick="startQuiz(null,'random5')">Quick 5-case challenge</button></div></section>`;
}
function showLibrary(filter='All'){
 activeCategory=filter;
 const cats=['All',...categories]; const shown=CASES.filter(c=>filter==='All'||c.category===filter);
 app.innerHTML=`<section class="wrap"><div class="library-head"><div><div class="kicker">CASE LIBRARY</div><h1 class="library-title">${filter==='All'?'All teaching cases':filter}</h1><p class="lead small">Open any case individually or start a quiz using only this teaching area.</p></div><div class="cta-row"><button class="btn primary" onclick="startQuiz(null,'category')">Quiz ${filter==='All'?'all cases':esc(filter)}</button><button class="btn secondary" onclick="goHome()">Home</button></div></div><div class="library-toolbar"><div class="library-filters">${cats.map(t=>`<button class="filter ${filter===t?'active':''}" onclick="showLibrary('${t}')">${t}</button>`).join('')}</div><label class="searchbox"><span>⌕</span><input id="caseSearch" type="search" placeholder="Search cases…" oninput="filterLibrary()"></label></div><div class="case-grid" id="caseGrid">${shown.map(caseTile).join('')}</div></section>`;
}
function caseTile(c){return `<button class="case-tile" data-search="${esc((c.title+' '+c.region+' '+c.category+' '+c.diagnosis).toLowerCase())}" onclick="startQuiz('${c.id}')"><div class="tile-top"><span class="badge">${esc(c.category)}</span><span class="difficulty">${esc(c.difficulty)}</span></div><h3>${esc(c.title)}</h3><p>${esc(c.region)} · ${esc(c.view)}</p><span class="open-case">Open case →</span></button>`}
function filterLibrary(){const q=document.getElementById('caseSearch').value.toLowerCase().trim(); document.querySelectorAll('.case-tile').forEach(el=>el.hidden=q&&!el.dataset.search.includes(q));}
function startQuiz(single=null,mode=null){
 if(single) quiz=[CASES.find(c=>c.id===single)];
 else if(mode==='random5') quiz=[...CASES].sort(()=>Math.random()-.5).slice(0,5);
 else if(mode==='category'&&activeCategory!=='All') quiz=CASES.filter(c=>c.category===activeCategory);
 else quiz=[...CASES];
 qIndex=0;score=0;renderQuestion();
}
function renderQuestion(){
 answered=false; const c=quiz[qIndex], pct=Math.round((qIndex+1)/quiz.length*100);
 app.innerHTML=`<section class="quiz-shell"><div class="quiz-top"><div><strong>Case ${qIndex+1} of ${quiz.length}</strong><div class="subtle">${esc(c.category)} · ${esc(c.difficulty)}</div></div><div class="progress" aria-label="quiz progress"><span style="width:${pct}%"></span></div><div class="score">Score ${score}/${qIndex}</div></div><article class="clinical-stem"><div class="stem-label">CLINICAL CASE</div><p>${esc(c.stem)}</p></article><div class="quiz-card"><div class="xray-side">${imgTag(c)}<div class="xcap">Review the image in the context of the clinical presentation. Source and licence are shown after answering.</div></div><div class="question-side"><div class="meta"><span class="badge">${esc(c.region)}</span><span class="badge">${esc(c.view)}</span><span class="badge modality">${esc(c.modality)}</span></div><div class="prompt-label">QUESTION</div><h2>${esc(c.question)}</h2><div class="options">${c.options.map((o,i)=>`<button class="option" onclick="answer(${i},this)"><span>${String.fromCharCode(65+i)}</span>${esc(o)}</button>`).join('')}</div><div id="answerArea"></div></div></div><div id="teachArea"></div></section>`;
 window.scrollTo(0,0);
}
function answer(choice,btn){
 if(answered)return; answered=true; const c=quiz[qIndex], opts=[...document.querySelectorAll('.option')]; opts.forEach(x=>x.disabled=true); opts[c.correct].classList.add('correct'); const good=choice===c.correct; if(good)score++; else btn.classList.add('wrong');
 document.getElementById('answerArea').innerHTML=`<div class="feedback ${good?'good':'bad'}">${good?'Correct — well done.':`Not quite. The best answer is <strong>${esc(c.options[c.correct])}</strong>.`}</div><div class="cta-row"><button class="btn primary" onclick="${qIndex===quiz.length-1?'finishQuiz()':'nextQuestion()'}">${qIndex===quiz.length-1?'See results':'Next case →'}</button><button class="btn secondary" onclick="showLibrary('${esc(c.category)}')">Case library</button></div>`;
 document.getElementById('teachArea').innerHTML=`<section class="teaching"><div class="section-title"><div><div class="kicker">TEACHING POINTS</div><h2>${esc(c.diagnosis)}</h2></div><span class="badge">${esc(c.difficulty)}</span></div><div class="teach-grid"><article><h3>👀 What to look for</h3><ul>${c.findings.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article><article><h3>🚑 ED priorities</h3><ul>${c.priorities.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article><article class="pearl"><h3>💡 Management pearl</h3><p>${esc(c.management)}</p></article><article class="danger"><h3>⚠️ Don’t miss</h3><p>${esc(c.dontMiss)}</p></article></div><div class="credit"><strong>Clinical reference:</strong> ${esc(c.reference)}<br><strong>Image:</strong> ${esc(c.credit)} · <a href="${c.creditUrl}" target="_blank" rel="noopener">source and licence</a></div></section>`;
 document.getElementById('teachArea').scrollIntoView({behavior:'smooth',block:'start'});
}
function nextQuestion(){qIndex++;renderQuestion()}
function finishQuiz(){const pct=Math.round(score/quiz.length*100); let msg=pct===100?'Excellent — all cases correct.':pct>=80?'Strong performance.':pct>=60?'Good foundation — revisit the cases you missed.':'Useful baseline — review the teaching points and have another go.'; app.innerHTML=`<section class="wrap"><div class="results"><div class="kicker">QUIZ COMPLETE</div><div class="resultnum">${score}/${quiz.length}</div><h2>${msg}</h2><p>${pct}% correct. Use the library to revisit individual cases or run another mixed challenge.</p><div class="cta-row centred"><button class="btn primary" onclick="startQuiz()">Full mixed quiz</button><button class="btn secondary" onclick="startQuiz(null,'random5')">Random 5</button><button class="btn secondary" onclick="showLibrary()">Browse cases</button></div></div></section>`}
function showCredits(){
 app.innerHTML=`<section class="wrap"><div class="section-title"><div><div class="kicker">ABOUT & CREDITS</div><h1 class="library-title">Homerton ED FY2 Image & ECG Challenge</h1></div></div><div class="info-card"><h3>Purpose</h3><p>This educational resource is designed for Foundation Year 2 doctors in the Emergency Department. It supports image recognition, structured interpretation and safe initial management; it is not a substitute for formal radiology reporting, senior review or current local pathways.</p></div><div class="info-card"><h3>Clinical content</h3><p>Management points are intentionally concise and focus on immediate ED priorities. Always check the latest Homerton/Barts pathways, antimicrobial guidance and specialty advice before using treatment details for patient care.</p></div><div class="info-card"><h3>Image credits</h3><div class="credit-list">${CASES.map(c=>`<div><strong>${esc(c.title)}</strong><br>${esc(c.credit)} · <a href="${c.creditUrl}" target="_blank" rel="noopener">source/licence</a></div>`).join('')}</div></div><div class="info-card"><h3>Version</h3><p>Expanded teaching hub · September 2026 · ${CASES.length} cases across ${categories.length} modules.</p></div></section>`;
}
goHome();
