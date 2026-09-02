let prompts = [
  "You're directing a trainee on your team to double-check measurements on a site plan where concrete will be poured. The trainee should write dimensions directly on the diagram.",
  "You're training a new employee to review a floor plan before framing begins. The trainee should label each room with its intended purpose and note any dimensions that appear inconsistent.",
  "You're teaching a trainee how to review a foundation plan. The trainee should mark the locations where anchor bolts should be installed and add notes explaining why each location matters.",
  "You're training a survey technician. The trainee should identify property lines, label benchmark elevations, and mark any areas that should be remeasured before excavation.",
  "You're reviewing a roof framing plan with a new employee. The trainee should label the major structural members and add notes describing where additional support may be needed.",
  "You're introducing a new irrigation technician to a farm layout. The trainee should trace the path of the irrigation lines, label each valve, and note where water flow should be checked.",
  "You're teaching a trainee how to read a field drainage map. The trainee should identify drainage tiles, indicate the direction of water flow, and mark any areas that may collect standing water.",
  "You're training a new employee to inspect a crop field map. The trainee should label the different crop sections and write notes identifying areas that may require additional fertilizer.",
  "You're reviewing a precision agriculture map. The trainee should mark locations where soil samples should be collected and explain why those locations were chosen.",
  "You're introducing a trainee to a greenhouse layout. The trainee should label environmental sensors, watering zones, and ventilation equipment.",
  "You're training a new mechanical engineering technician using an exploded parts diagram of a gearbox. The trainee should label every gear and bearing and highlight the components most likely to wear out first.",
  "You're reviewing a maintenance diagram of an electric motor. The trainee should identify lubrication points and write inspection notes beside each one.",
  "You're teaching a new technician to read a hydraulic system diagram.",
  "You're reviewing a pneumatic system with a trainee. The trainee should identify every actuator, regulator, and compressor connection and write notes describing each component's purpose.",
  "You're introducing a trainee to a machine assembly drawing. The trainee should identify every fastener that must be tightened during assembly and note the recommended tightening sequence.",
  "You're teaching a trainee to read an electrical wiring diagram. The trainee should label each electrical component and identify where electrical power enters and leaves the system.",
  "You're reviewing a residential electrical plan with a new employee. The trainee should identify every outlet, switch, and lighting fixture and mark each circuit.",
  "You're introducing a trainee to a control panel schematic. The trainee should identify relays, breakers, contactors, and terminal blocks and write a short description of each component.",
  "You're teaching a trainee to read a printed circuit board layout.",
  "You're training a new electrician using a one-line electrical diagram. The trainee should label transformers, disconnects, and distribution panels and identify the direction of power flow.",
  "You're teaching a trainee how to read a chemical process flow diagram. The trainee should label each storage tank, pump, heat exchanger, and reactor and identify the direction materials move through the system.",
  "You're reviewing a piping and instrumentation diagram (P&ID) with a new employee. The trainee should identify every valve, instrument, and sensor and explain the purpose of each.",
  "You're introducing a trainee to a wastewater treatment process diagram. The trainee should label each treatment stage and identify where water quality should be tested.",
  "You're reviewing a chemical mixing process with a trainee. The trainee should identify every chemical input, mixing tank, and safety valve and write notes explaining why each safety device is necessary.",
  "You're teaching a trainee how to read a refinery process diagram. The trainee should identify the major processing units and trace the path of the raw material from beginning to end.",
  "You're reviewing a bridge construction drawing with a new employee. The trainee should label the structural members and write inspection notes for areas that should receive extra attention during construction.",
  "You're introducing a trainee to a building elevation drawing. The trainee should label the exterior materials and write notes identifying where flashing and waterproofing should be installed.",
  "You're reviewing a plumbing layout with a new employee. The trainee should label each fixture, identify the supply and drain lines, and draw arrows showing the direction of water flow.",
  "You're teaching a trainee to read an HVAC duct layout. The trainee should identify every vent, return, damper, and air handling unit and note where airflow should be measured.",
  "You're reviewing a factory floor layout with a new employee. The trainee should label major equipment, mark emergency exits, identify forklift travel paths, and note any areas that may present safety hazards.",
  "You're explaining to a new student how to read a blueprint.",
  "You're teaching a new mechanic how to read an exploded parts diagram.",
  "You're writing steps for trainees to find the most important parts of a site plan.",
  "You're writing steps for a client to understand the basics of a blueprint.",
  "You're making a guide for new employees to find the safety equipment in your building.",
  "You're teaching someone how to read a resistor.",
  "You're tutoring highschoolers in reading a flowchart",
];

let last_prompt = -1
function pick_prompt() {
    let random_index;
    do {
        random_index = Math.floor(Math.random() * prompts.length);
    } while (random_index === last_prompt);
    last_prompt = random_index;
    document.getElementById("prompt").innerHTML = prompts[random_index];
}
