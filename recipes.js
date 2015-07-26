var techlevel = {
    "none": 0,
    "bronze": 1,
    "lv": 2,
    "mv": 3,
    "hv": 4
};

function console_logger(n, src, dst, comment)
{
    if (comment)
        console.log("Craft " + n + " " + src + " using recipe " + JSON.stringify(dst) + " [COMMENT: "+comment+"]")
    else
        console.log("Craft " + n + " " + src + " using recipe " + JSON.stringify(dst))
}

function RUN_RECIPES(cur, TECH, cb)
{
    // Enum for tech levels
    var NONE = techlevel.none
    var BRONZE = techlevel.bronze
    var LV = techlevel.lv
    var MV = techlevel.mv
    var HV = techlevel.hv

    function simpl(basket, src, dst, comment) {
    if (src in basket) {
            var n = basket[src]
            delete basket[src]
        for (var k in dst) {
            if (!(k in basket)) {
                    basket[k] = 0
            }
                basket[k] += dst[k] * n
        }
            cb(n, src, dst, comment)
    }
}
    // BigReactors
    simpl(cur, "reactor controller", {"yellorium": 2, "redstone": 1, "diamond":1, "reactor casing": 4});
    simpl(cur, "reactor control rod", {"graphite":3,"yellorium":1,"redstone":1,"reactor casing":4});
    simpl(cur, "yellorium fuel rod", {"steel plate":4,"yellorium":2,"yellorium block":1,"reactor glass":2});
    simpl(cur, "reactor glass", {"reactor casing":1, "fused quartz":2});
    simpl(cur, "reactor access port", {"reactor casing":4,"chest":1,"piston":1});
    simpl(cur, "reactor coolant port", {"reactor casing":4,"bucket":1,"piston":1,"steel":2});
    simpl(cur, "reactor casing", {"steel plate":16.0/4.0, "yellorium":0.25, "graphite":0.5});

//ENDER IO
simpl(cur, "dark soularium jetplate", {"enriched soularium alloy":2,"ender crystal":1,"reinforced glider wing":2, "vibrant jetpack_104":1,"dark soularium thruster":2,"octadic capacitor pack_104":1});
simpl(cur, "reinforced glider wing", { "enriched soularium alloy": 3, "conductive iron armor plating": 3 });
simpl(cur, "vibrant jetpack_104", { "vibrant jetpack": 1, "dark steel armor plating": 1 });
simpl(cur, "vibrant jetpack", { "vibrant alloy": 4, "vibrant thrusters": 2, "octadic capacitor": 1, "energetic jetpack": 1 });
simpl(cur, "energetic jetpack", {"energetic alloy":4, "double capacitor":1, "energetic thrusters":2, "electrical steel jetpack":1});
simpl(cur, "dark soularium thrusters", { "enriched soularium alloy": 2, "octadic capacitor": 2, "flight control unit": 1, "vibrant thrusters": 1 });
simpl(cur, "octadic capacitor pack_104", { "electrical steel armor plating": 1, "octadic capacitor pack": 1 });
simpl(cur, "octadic capacitor pack", { "octadic capacitor": 3, "vibrant crystal": 1, "vibrant alloy": 2, "vibrant capacitor bank": 2, "quadruple capacitor pack": 1 });
//simpl(cur, "quadruple capacitor pack", {""});
simpl(cur, "vibrant capacitor bank", {"octadic capacitor":4, "vibrant crystal":1, "iron":4});
simpl(cur, "enriched soularium alloy", { "dark steel": 1, "soularium": 1, "pulsating crystal": 1 });

simpl(cur, "dark soularium thruster", {"enriched soularium alloy":2,"flight control unit":1,"octadic capacitor":2,"vibrant thruster":1});
simpl(cur, "electrical steel jetpack", { "electrical steel": 4, "basic capacitor": 1, "electrical steel thruster": 2, "conductive iron jetpack": 1 });
simpl(cur, "conductive iron jetpack", { "conductive iron": 4, "basic capacitor": 1, "leather straps": 1, "conductive iron thruster": 2 });
simpl(cur, "conductive iron thruster", { "basic capacitor": 2, "insulated redstone conduit": 2, "conductive iron": 2, "redstone": 1, "basic gear": 2 });
simpl(cur, "insulated redstone conduit", { "conduit binder": 6 / 8, "redstone alloy": 3 / 8 });
simpl(cur, "electrical steel thruster", { "electrical steel": 2, "basic capacitor": 2, "energy conduit": 2, "redstone": 1, "machine chassis": 2 });
simpl(cur, "energetic thrusters", {"redstone alloy":1, "pulsating crystal":2,"double capacitor":2,"enhanced energy conduit":2,"energetic alloy":2,});

simpl(cur, "pulsating crystal", { "pulsating iron nugget": 8, "diamond": 1 });
simpl(cur, "pulsating iron nugget", {"pulsating iron":1/9})
simpl(cur, "pulsating iron", {"iron":1,"ender pearl":1});

simpl(cur, "advanced photovoltaic cell", { "daylight sensor": 1, "double capacitor": 2, "enlightened fused quartz": 2, "vibrant alloy": 2, "pulsating iron": 2 });
simpl(cur, "pulsating iron", { "iron": 1, "ender pearl": 1 });
simpl(cur, "vibrant crystal", {"emerald":1,"vibrant alloy":8/9});

simpl(cur, "energy conduit", { "conduit binder": 6 / 8, "conductive iron": 3 / 8 });
simpl(cur, "enlightened fused quartz", { "fused quartz": 4, "glowstone": 4 });
simpl(cur, "fused quartz", { "nether quartz": 4 });

simpl(cur, "machine chassis", {"basic capacitor":1,"iron":4,"iron bars":4});
simpl(cur, "octadic capacitor", { "vibrant alloy": 2, "glowstone": 1, "double capacitor": 2 });
simpl(cur, "vibrant alloy", { "energetic alloy": 1, "ender pearl": 1 });
simpl(cur, "double capacitor", { "basic capacitor": 2, "coal dust": 1, "energetic alloy": 6 });
simpl(cur, "basic capacitor", { "redstone": 2, "gold": 4/9, "copper": 1 });
simpl(cur, "energetic alloy", {"gold":1, "redstone":1, "glowstone dust":1});

simpl(cur, "dark steel armor plating", { "dark steel": 10, "electrical steel armor plating": 1 });
simpl(cur, "dark steel", { "iron": 1, "coal dust": 1, "obsidian": 1 });
simpl(cur, "soularium", { "soul sand": 1, "gold ingot": 1 });

simpl(cur, "electrical steel armor plating", { "electrical steel": 10, "conductive iron armor plating": 1 });
simpl(cur, "conductive iron armor plating", { "conductive iron": 10, "silicon armor plating": 1 });
simpl(cur, "silicon armor plating", { "silicon": 5, "iron": 4 });
simpl(cur, "conductive iron", { "redstone": 1, "iron": 1 });
simpl(cur, "electrical steel", { "iron": 1, "coal dust": 1, "silicon": 1 });
simpl(cur, "basic gear", { "cobblestone": 4, "stick": 4 });
simpl(cur, "redstone alloy", {"redstone":1,"silicon":1});
//END ENDERIO

simpl(cur, "daylight sensor", { "glass": 3, "wood slab":3, "nether quartz": 3 });
//GENDUSTRY
simpl(cur, "dna extractor", { "aluminum gear": 4, "genetics processor": 2, "mutagen tank": 1, "power module": 1, "hv hull": 1 });
simpl(cur, "protein liquifier", {"aluminum gear":5,"aluminum":1,"mutagen tank":1,"power module":1,"hv hull":1});
simpl(cur, "genetic replicator", { "aluminum gear": 4, "genetics processor": 2, "power module": 2, "hv hull": 1 });
simpl(cur, "genetic sampler", {"bronze gear":4, "genetics processor":1,"diamond":1,"bee receptacle":1, "sturdy casing":1,"power module":1});
simpl(cur, "genetic transposer", { "hv hull": 1, "aluminum gear": 2, "power module": 1, "mutagen tank": 1, "genetics processor": 2, "small bronze fluid pipe": 2});
simpl(cur, "imprinter", { "aluminum gear": 4, "genetics processor": 1, "power module": 1, "hv hull": 1, "bee receptacle": 2 });

simpl(cur, "industrial apiary", { "aluminum gear": 2, "power module": 2, "hv hull": 1, "bee receptacle": 1, "genetics processor": 1, "swarmer": 2 });
simpl(cur, "swarmer", { "gold": 2, "diamantine electron tube": 4, "alveary": 1 });
simpl(cur, "diamantine electron tube", {"redstone":0.5, "molten glass":0.25,"diamond":1.25});
simpl(cur, "mutagen producer", {"aluminum plate":2, "aluminum gear":2,"hv hull":1, "small bronze fluid pipe":1, "power module":2,"mutagen tank":1 });
simpl(cur, "mutatron", { "aluminum gear": 2, "hv hull": 1, "bee receptacle": 3, "mutagen tank": 1, "power module": 1, "genetics processor": 1 })

simpl(cur, "mutagen tank", { "aluminum plate": 6, "glass pane": 3 });

simpl(cur, "power module", { "aluminum gear": 4, "gold": 2, "nand": 2, "block of redstone": 1 });
simpl(cur, "bee receptacle", { "aluminum": 5, "block of redstone":2, "glass pane":1, "weighted pressure plate(light)":1 });
simpl(cur, "weighted pressure plate(light)", { "gold plate": 2 });
simpl(cur, "genetics processor", { "nether quartz": 4, "diamond":4, "pulsating chipset":1 });
//END GENDUSTRY

    //THAUMCRAFT
    simpl(cur, "alchemical furnace", { "crucible": 1, "furnace": 1, "arcane stone block":7 }, "5 ignis, 5 aqua");
    simpl(cur, "alchemical centrifuge", { "piston": 1, "essentia tube":2, "alchemical construct": 1, "arcane alembic": 1 }, "5 ordo, 5 aqua, 5 perditio");
    simpl(cur, "alchemical construct", { "vis filter": 2, "essentia valve":2, "essentia tube":4, "greatwood planks": 1 }, "5 ordo, 5 aqua");
    simpl(cur, "essentia valve", { "essentia tube": 1, "lever": 1 }, "5 ordo, 5 aqua");
    simpl(cur, "essentia tube", { "glass": 1.0/8, "iron": 2.0/8, "gold nugget":1.0/8, "quicksilver drop": 1.0/8 }, "1/8 ordo, 1/8 aqua");
    simpl(cur, "arcane alembic", { "bucket": 1, "iron":5, "gold":1, "vis filter": 1 }, "5 aer, 5 aqua");
    simpl(cur, "vis filter", { "silverwood planks": 0.5, "gold":1 }, "5/2 ordo, 5/2 aqua");
    simpl(cur, "arcane stone block", { "stone": 8.0/9, "* shard":1.0/9 }, "1/9 ignis, 1/9 terra");
    simpl(cur, "crucible", { "cauldron": 1 }, "wand");
    //END THAUMCRAFT

simpl(cur, "implosion compressor multi", {"implosion compressor":1, "lv energy hatch":1, "lv input bus":1, "lv output bus":1, "maintenance hatch":1,"lv muffler hatch":1, "solid steel casing":20});

simpl(cur, "implosion compressor", { "obsidian":3,"solid steel casing":1,"aluminium cable":2,"advanced circuit":2 });
    simpl(cur, "lv energy hatch", { "tin cable x1": 1, "lv hull":1 });
simpl(cur, "lv input bus", { "lv hull": 1, "chest": 1 });
simpl(cur, "lv output bus", { "lv hull": 1, "chest":1 });
simpl(cur, "lv muffler hatch", { "lv hull": 1, "steel fluid pipe": 1 });

simpl(cur, "solid steel casing", { "steel plate": 6, "steel frame box": 1 });
simpl(cur, "steel frame box", { "steel rod":4 });

    simpl(cur, "electric blast furnace", { "heat proof casing": 1, "basic circuit": 3, "tin cable x1": 2, "furnace": 3});

    simpl(cur, "heat proof casing", { "invar plate": 6, "invar frame box": 1 });
    simpl(cur, "invar frame box", { "invar rod": 4 });

    simpl(cur, "electric jetpack", { "advanced circuit": 1, "iron item casing": 4, "glowstone": 2, "batbox": 1 });
    simpl(cur, "batbox", {"plank":5,"insulated tin cable":1,"re battery":3});
    simpl(cur, "re battery", { "redstone": 2, "small battery hull": 1 });
    simpl(cur, "small battery hull", { "insulated tin cable":1, "battery alloy plate":2 });
simpl(cur, "maintenance hatch", {"lv hull":1});

    simpl(cur, "ev macerator", { "aluminum cable x1": 3, "ev hull": 1, "data control circuit": 2, "ev piston": 1, "ev motor": 1, "diamond grinding head":1 });

    simpl(cur, "vacuum freezer", { "frost proof casing": 1, "hv pump": 3, "gold cable x1": 2, "data control circuit": 3 });

    //simpl(cur, "hv bending machine", { "gold cable x1": 2, "hv hull": 1, "copper wire x4": 4, "steel rod": 2 });
    simpl(cur, "hv wiremill", { "gold cable x1": 2, "hv hull": 1, "hv motor": 4, "advanced circuit": 2 });

    simpl(cur, "hv polarizer", { "gold cable x1": 2, "hv hull": 1, "copper wire x4": 4, "steel rod": 2 });
    simpl(cur, "hv laser engraver", { "gold cable x1": 2, "hv hull": 1, "advanced circuit": 3, "hv piston": 2, "hv emitter": 1 });
simpl(cur, "hv forming press", {"gold cable x1": 4, "hv hull": 1, "advanced circuit":2, "hv piston":2});
simpl(cur, "hv assembling machine", {"gold cable x1": 2, "hv hull": 1, "advanced circuit":2, "hv conveyor":2, "hv robot arm": 2});
    simpl(cur, "hv chemical bath", { "copper cable x1": 1, "hv hull": 1, "hv pump": 1, "advanced circuit": 2, "glass": 2, "hv conveyor": 2 });

simpl(cur, "vacuum freezer", {"frost proof casing": 1, "hv pump": 3, "gold cable x1":2, "data control circuit": 3});

    simpl(cur, "mv packager", { "copper cable x1": 2, "mv hull": 1, "mv robot arm": 1, "good circuit": 2, "mv conveyor": 1, "chest": 2 });
    simpl(cur, "mv forming press", {"copper cable x1": 4, "mv hull": 1, "good circuit":2, "mv piston":2});
simpl(cur, "mv fluid extractor", {"glass":2, "copper cable x1":2, "mv hull":1, "mv piston":1,"mv pump":1, "good circuit":2});
simpl(cur, "mv diesel generator", {"copper cable x1": 1, "mv hull": 1, "mv motor": 2, "good circuit" : 1, "aluminum gear" : 2, "mv piston" : 2});
simpl(cur, "mv fluid canner", {"copper cable x1": 2, "mv hull": 1, "mv pump": 2, "good circuit" : 2, "glass": 2});
simpl(cur, "mv chemical reactor", {"copper cable x1": 2, "mv hull": 1, "mv motor": 1, "good circuit" : 2, "glass": 2, "bronze rotor": 1});
simpl(cur, "mv chemical bath", {"copper cable x1": 1, "mv hull": 1, "mv pump": 1, "good circuit" : 2, "glass": 2, "mv conveyor": 2});
simpl(cur, "mv centrifuge", {"copper cable x1": 2, "mv hull": 1, "mv motor": 2, "good circuit" : 4});
    simpl(cur, "mv cutting machine", {"copper cable x1": 2, "mv hull": 1, "mv conveyor": 1, "good circuit" : 2, "glass": 1, "mv motor": 1, "diamond sawblade":1});
simpl(cur, "mv compressor", {"copper cable x1": 2, "mv hull": 1, "mv piston": 2, "good circuit" : 2});
simpl(cur, "mv gas turbine", {"good circuit": 2, "bronze rotor":3, "mv motor":2, "copper cable x1": 1, "mv hull":1});
simpl(cur, "mv energy hatch", {"copper cable x1": 1, "mv hull":1});
    simpl(cur, "mv laser engraver", { "copper cable x1": 2, "mv hull": 1, "good circuit": 3, "mv piston": 2, "mv emitter": 1 });
    simpl(cur, "mv extruder", { "cupronickel wire x4": 4, "mv hull": 1, "good circuit": 2, "mv piston": 1, "steel fluid pipe": 1 });
    simpl(cur, "mv electrolyzer", { "copper cable x1": 1, "silver wire x1": 4, "mv hull": 1, "good circuit": 2, "glass": 1 });

    simpl(cur, "lv fluid canner", {"tin cable x1": 2, "lv hull": 1, "lv pump": 2, "basic circuit" : 2, "glass": 2});
    simpl(cur, "lv assembling machine", { "tin cable x1": 2, "lv hull": 1, "basic circuit":2, "lv conveyor":2, "lv robot arm":2 });
    simpl(cur, "lv polarizer", { "iron rod": 2, "lv hull": 1, "tin cable x1":2, "tin wire x2":2 });
simpl(cur, "lv scanner", { "tin cable x1": 2, "lv hull": 1, "good circuit":4, "lv emitter":1, "lv sensor":1 });
    simpl(cur, "lv bending machine", { "tin cable x1": 2, "lv hull": 1, "basic circuit":2, "lv motor":2, "lv piston":2 });
    simpl(cur, "lv lathe", { "tin cable x1": 3, "lv hull": 1, "basic circuit":2, "lv motor":1, "lv piston":1, "diamond": 1 });
    simpl(cur, "lv wiremill", { "tin cable x1": 2, "lv hull": 1, "lv motor": 4, "basic circuit": 2 });
    simpl(cur, "lv steam turbine", {"basic circuit": 1, "tin rotor":2, "lv motor":2, "tin cable x1": 1, "lv hull":1, "bronze fluid pipe": 2});

simpl(cur, "ulv input bus", { "ulv hull": 1, "chest": 1 });
simpl(cur, "ulv output bus", { "ulv hull": 1, "chest": 1 });

    simpl(cur, "ev hull", { "aluminum cable x1": 2, "ev casing": 1 });
    simpl(cur, "ev casing", { "titanium plate": 8 });
    simpl(cur, "ev robot arm", { "titanium rod": 2, "ev piston": 1, "ev motor": 2, "aluminum cable x1": 3, "data control circuit": 1 });
    simpl(cur, "ev conveyor", { "aluminum cable x1": 1, "rubber plate": 6, "ev motor": 2 });
    simpl(cur, "ev pump", { "stainless steel rotor": 1, "stainless steel screw": 1, "aluminum cable x1": 1, "rubber ring": 2, "titanium fluid pipe": 1, "ev motor": 1 });
    simpl(cur, "ev piston", { "titanium rod": 2, "ev motor": 1, "aluminum cable x1": 2, "titanium plate": 3, "titanium gear": 1 });
    simpl(cur, "ev motor", { "titanium rod": 2, "magnetic neodynium rod": 1, "aluminum cable x1": 2, "annealed copper wire x8": 4 });

    simpl(cur, "hv emitter", { "chrome rod": 4, "advanced circuit": 2, "emerald": 1, "gold cable x1": 2 });
simpl(cur, "hv hull", {"gold cable x1": 2, "hv casing": 1 });
simpl(cur, "hv casing", {"stainless steel plate": 8 });
simpl(cur, "hv robot arm", {"stainless steel rod": 2, "hv piston":1, "hv motor":2, "gold cable x1": 3, "advanced circuit": 1});
simpl(cur, "hv conveyor", {"gold cable x1": 1, "rubber plate": 6, "hv motor": 2});
simpl(cur, "hv pump", {"steel rotor": 1, "steel screw":1, "gold cable x1": 1, "rubber ring": 2, "stainless steel fluid pipe": 1, "hv motor" : 1});
simpl(cur, "hv piston", {"stainless steel rod": 2, "hv motor":1, "gold cable x1": 2, "stainless steel plate": 3, "stainless steel gear":1});
simpl(cur, "hv motor", {"stainless steel rod": 2, "magnetic steel rod":1, "gold cable x1": 2, "copper wire x4": 4});

simpl(cur, "mv hull", {"copper cable x1": 2, "mv casing": 1 });
simpl(cur, "mv casing", {"aluminum plate": 8 });
    simpl(cur, "mv robot arm", { "aluminum rod": 2, "mv piston": 1, "mv motor": 2, "copper cable x1": 3, "good circuit": 1 });
    simpl(cur, "mv conveyor", { "copper cable x1": 1, "rubber plate": 6, "mv motor": 2 });
    simpl(cur, "mv emitter", { "electrum rod": 4, "good circuit": 2, "nether quartz": 1, "copper cable x1": 2 });
simpl(cur, "mv pump", {"bronze rotor": 1, "bronze screw":1, "copper cable x1": 1, "rubber ring": 2, "steel fluid pipe": 1, "mv motor" : 1});
    simpl(cur, "mv piston", {"aluminum rod": 2, "mv motor":1, "copper cable x1": 2, "aluminum plate": 3, "small aluminum gear":1});
simpl(cur, "mv motor", {"aluminum rod": 2, "magnetic steel rod":1, "copper cable x1": 2, "copper wire x2": 4});

    simpl(cur, "lv robot arm", { "steel rod": 2, "lv piston": 1, "lv motor": 2, "tin cable x1": 3, "basic circuit": 1 });
    simpl(cur, "lv conveyor", { "tin cable x1": 1, "rubber plate": 6, "lv motor": 2 });
simpl(cur, "lv sensor", { "brass rod": 1, "basic circuit": 1, "quartzite": 1, "steel plate": 4 });
simpl(cur, "lv emitter", { "brass rod": 4, "basic circuit": 2, "quartzite": 1, "tin cable x1": 2 });
simpl(cur, "lv hull", { "tin cable x1": 2, "lv casing": 1 });
simpl(cur, "lv casing", {"steel plate": 8 });
    simpl(cur, "lv pump", {"tin rotor": 1, "tin screw":1, "tin cable x1": 1, "rubber ring": 1, "lv motor": 1, "bronze fluid pipe": 1});
    simpl(cur, "lv piston", {"steel rod": 2, "lv motor":1, "tin cable x1": 2, "steel plate": 3, "small steel gear":1});
    simpl(cur, "lv motor", {"iron rod": 2, "magnetic iron rod":1, "tin cable x1": 2, "copper wire x1": 4});

simpl(cur, "ulv hull", {"ulv casing": 1, "lead cable x1": 2});
simpl(cur, "ulv casing", {"steel plate": 4});

    simpl(cur, "diamond sawblade", {"diamond dust": 1, "cobalt brass gear": 1});

    //BEGIN INTERMEDIATE VANILLA
    simpl(cur, "glass pane", { "glass": 2.66 });
    simpl(cur, "bucket", { "iron plate": 3 });
    simpl(cur, "furnace", { "cobblestone": 8 });
    simpl(cur, "gold nugget", { "gold" : 1.0/9 });
    simpl(cur, "quicksilver drop", { "quicksilver" : 1.0/9 });
    simpl(cur, "cauldron", { "iron plate" : 7 });
    //END VANILLA

simpl(cur, "data control circuit", { "processor board": 1, "data storage chip" : 3, "soldering alloy": 1 });
simpl(cur, "processor board", { "etched ev wiring": 4, "silicon plate" : 2 });
simpl(cur, "data storage chip", { "advanced circuit board": 1, "engraved crystal chip" : 1, "soldering alloy": 0.5 });
simpl(cur, "engraved crystal chip", { "olivine plate": 1 });

simpl(cur, "advanced circuit", { "advanced circuit board": 1, "advanced circuit parts" : 2, "soldering alloy": 0.5 });
simpl(cur, "advanced circuit board", { "etched hv wiring": 4, "silicon plate" : 1 });
simpl(cur, "advanced circuit parts", { "glowstone": 0.5, "lapis plate" : 0.5 });

    // This is for "full tech"
    //simpl(cur, "good circuit", { "basic circuit": 1, "nand" : 2, "soldering alloy": 0.25 });
    //simpl(cur, "basic circuit", { "basic circuit board": 1, "nand" : 2, "soldering alloy": 0.25 });
    //simpl(cur, "basic circuit board", { "etched mv wiring": 4, "silicon plate" : 1 });

    simpl(cur, "basic circuit", { "insulated copper cable": 6, "nand" : 2, "steel plate": 1 });

    if (TECH["assembling machine"] >= LV)
    {
        simpl(cur, "nand", { "steel item casing": 1, "red alloy wire x1" : 1, "soldering alloy": 0.125 }, "Assemble");
    }
    else
    {
        simpl(cur, "nand", { "steel item casing": 1, "red alloy wire x1" : 2, "tin wire x1": 1 });
    }

simpl(cur, "etched ev wiring", { "platinum foil": 1 });
simpl(cur, "etched hv wiring", { "gold foil": 1 });
simpl(cur, "etched mv wiring", { "copper foil": 1 });

    simpl(cur, "diamond grinding head", {"industrial diamond": 1, "steel plate": 4, "diamond dust": 4});

simpl(cur, "frost proof casing", {"aluminum plate": 6, "aluminum frame box":1 });
simpl(cur, "aluminum frame box", {"aluminum rod": 4});

    simpl(cur, "rubber ring", {"rubber": 0.25 });

    function assoc() {
    	var obj = {};
    	for (var k = 0; k < arguments.length-1; k += 2) {
    		obj[arguments[k]] = arguments[k+1];
    	}
    	return obj;
    }

    var materials

    if (TECH["polarizer"] > NONE)
    {
        materials = ["iron", "steel"];
        if (TECH["polarizer"] >= HV)
            materials.push("neodynium")
        for (var k in materials) {
            var v = materials[k];
            simpl(cur, "magnetic "+v+" rod", assoc(v+" rod", 1), "Polarize");
        }
    }
    else
    {
        simpl(cur, "magnetic iron rod", {"iron rod": 1, "redstone": 4});
    }
    simpl(cur, "platinum foil", { "platinum plate": 0.25 });
    simpl(cur, "gold foil", { "gold plate": 0.25 });
    simpl(cur, "copper foil", { "copper plate": 0.25 });

    simpl(cur, "insulated copper cable", { "ic2 copper cable": 1, "rubber": 1 });
    simpl(cur, "ic2 copper cable", { "copper plate": 1.0/3 }, "Wiremill");

    simpl(cur, "cupronickel coil", { "cupronickel wire x8": 2 });

    simpl(cur, "insulated tin cable", { "ic2 tin cable": 1, "rubber": 1 });
    simpl(cur, "ic2 tin cable", { "tin plate": 0.25 });

    materials = ["aluminum", "gold", "silver", "annealed copper", "copper", "cupronickel", "tin", "lead", "red alloy"]
    for (var k in materials)
    {
        var v = materials[k];
        simpl(cur, v + " cable x8", assoc(v + " wire x8", 1, "rubber plate", 3));
        simpl(cur, v + " cable x4", assoc(v + " wire x4", 1, "rubber plate", 2));
        simpl(cur, v + " cable x2", assoc(v + " wire x2", 1, "rubber plate", 1));
        simpl(cur, v + " cable x1", assoc(v + " wire x1", 1, "rubber plate", 1));

        simpl(cur, v + " wire x16", assoc(v + " wire x8", 2));
        simpl(cur, v + " wire x8", assoc(v + " wire x4", 2));
        simpl(cur, v + " wire x4", assoc(v + " wire x2", 2));
        simpl(cur, v + " wire x2", assoc(v + " wire x1", 2));
        if (TECH["wiremill"] > NONE)
            simpl(cur, v + " wire x1", assoc(v, 0.5), "Wiremill");
        else
            simpl(cur, v + " wire x1", assoc(v + " plate", 1));
    }

    if (TECH["extruder"] > NONE)
    {
        simpl(cur, "steel item casing", { "steel": 0.5 }, "Extrude");
        simpl(cur, "iron item casing", {"iron": 0.5 }, "Extrude");
    }
    else if (TECH["casing mold"] > NONE)
    {
        simpl(cur, "steel item casing", { "steel": 2.0/3 });
        simpl(cur, "iron item casing", {"iron": 2.0/3 });
    }

    materials = ["bronze", "iron", "tin", "steel", "stainless steel", "neodynium", "aluminum", "chrome", "titanium", "invar", "cobalt brass", "copper", "gold"];
    for (var k in materials) {
        var v = materials[k]
        var plate = v + " plate";
        var rod = v + " rod";
        var bolt = v + " bolt";

        simpl(cur, v+" gear", assoc(v, 4));
        simpl(cur, v+" fluid pipe", assoc(plate,3));

        simpl(cur, v+" rotor", assoc(plate,4,v+" screw",1,v+" ring",1));
        if (TECH["extruder"] >= MV)
            simpl(cur, v+" ring", assoc(rod,0.25), "Extrude");
        else
            simpl(cur, v+" ring", assoc(rod,1));

        if (TECH["lathe"] > NONE)
            simpl(cur, v+" screw", assoc(bolt,1), "Lathe");
        else
            simpl(cur, v+" screw", assoc(bolt,2));

        simpl(cur, bolt, assoc(rod,0.5));

        simpl(cur, "small "+v+" gear", assoc(plate,1));

        if (TECH["lathe"] > NONE)
            simpl(cur, rod, assoc(v,0.5), "Lathe");
        else
            simpl(cur, rod, assoc(v,1));
    }
    materials = ["bronze", "iron", "tin", "steel", "stainless steel", "neodynium", "aluminum", "chrome", "titanium", "invar", "cobalt brass", "copper", "gold", "red alloy", "battery alloy"]
    for (var k in materials) {
        var v = materials[k]
        if (TECH["bending machine"] > NONE)
            simpl(cur, v + " plate", assoc(v,1), "Bend Setting 1");
        else
            simpl(cur, v + " plate", assoc(v,2));
    }

    simpl(cur, "lapis plate", {"lapis dust": 1 });
simpl(cur, "olivine plate", { "olivine dust": 1 });

simpl(cur, "silicon plate", { "silicon": 1 });
    if (TECH["extruder"] > NONE)
        simpl(cur, "rubber plate", {"rubber": 1}, "Extrude");
    else
        simpl(cur, "rubber plate", {"rubber": 2});

    simpl(cur, "annealed copper", { "copper": 1, "oxygen": 1000 });

    simpl(cur, "chest", {"plank": 8});

    simpl(cur, "blue steel dust", {"rose gold dust":0.125, "brass dust":0.125, "black steel dust":0.5, "steel dust":0.25});
    simpl(cur, "black steel dust", {"nickel dust":0.2, "black bronze dust":0.2, "steel dust":0.6});
    simpl(cur, "black bronze dust", {"gold dust":0.2, "silver dust":0.2, "copper dust":0.6});
    simpl(cur, "brass dust", {"zinc dust":0.25, "copper dust":0.75});
    simpl(cur, "rose gold dust", {"gold dust":0.8, "copper dust":0.2});
simpl(cur, "red alloy", { "copper": 1, "redstone": 4 });
simpl(cur, "block of redstone", {  "redstone": 9 });
}

function basictech() {
    return {
        "bending machine" : techlevel.lv,
        "extruder" : techlevel.none,
        "assembling machine" : techlevel.none,
        "wiremill" : techlevel.lv,
        "casing mold" : techlevel.bronze,
        "plate mold" : techlevel.bronze,
        "forming press" : techlevel.none,
        "fluid extractor" : techlevel.none,
        "lathe" : techlevel.none,
        "polarizer" : techlevel.none
    }
}


if(require.main === module)
{
    var tech = basictech()
    tech["bending machine"] = techlevel.lv
    tech["wiremill"] = techlevel.lv
    var cur = {"hv wiremill": 1}
    RUN_RECIPES(cur, tech, console_logger)
    console.log("=======================================INGREDIENT=========================");
for (var k in cur) {
    console.log(k + ": " + cur[k]);
}
}
else
{
    // required as module
    module.exports = {
        "run": RUN_RECIPES,
        "techlevel": techlevel,
        "cb": console_logger,
        "basictech": basictech
    }
}