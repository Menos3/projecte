var listener = new window.keypress.Listener();

listener.simple_combo("shift s", function() {
    console.log("You pressed shift and s");
});

// There are also a few other shortcut methods:

// If we want to register a counting combo
listener.counting_combo("tab space", function(e, count) {
    console.log("You've pressed this " + count + " times.");
});

// If you want to register a sequence combo
listener.sequence_combo("up up down down left right left right b a enter", function() {
    lives = 30;
}, true);


listener.register_combo({
    "keys"              : null,
    "on_keydown"        : null,
    "on_keyup"          : null,
    "on_release"        : null,
    "this"              : undefined,
    "prevent_default"   : false,
    "prevent_repeat"    : false,
    "is_unordered"      : false,
    "is_counting"       : false,
    "is_exclusive"      : false,
    "is_solitary"       : false,
    "is_sequence"       : false
});

var my_scope = this;
var my_combos = listener.register_many([
    {
        "keys"          : "shift s",
        "is_exclusive"  : true,
        "on_keydown"    : function() {
            console.log("You pressed shift and s together.");
        },
        "on_keyup"      : function(e) {
            console.log("And now you've released one of the keys.");
        },
        "this"          : my_scope
    },
    {
        "keys"          : "s",
        "is_exclusive"  : true,
        "on_keyup"      : function(event) {
            // Normally because we have a keyup event handler,
            // event.preventDefault() would automatically be called.
            // But because we're returning true in this handler,
            // event.preventDefault() will not be called.
            return true
        },
        "this"          : my_scope
    }
]);

// Remove all "shift s" combos we've registered
listener.unregister_combo("shift s");

// Or only these specific combos
listener.unregister_many(my_registered_combos);

// Or remove ALL combos that have been registered
listener.reset();

$('input[type=text]')
    .bind("focus", function() { listener.stop_listening(); })
    .bind("blur", function() { listener.listen(); });

    
var game_ele = document.getElementById("my_game_element_id");
var my_defaults = {
    is_unordered    : true,
    prevent_repeat  : true  
};
var listener = window.keypress.Listener(game_ele, my_defaults);


// Public API

simple_combo(keys, on_keydown_callback); // Registers a very basic combo;
counting_combo(keys, on_count_callback); // Registers a counting combo
sequence_combo(keys, callback); // Registers a sequence combo
register_combo(combo_dictionary); // Registers a combo from a dictionary
register_many(combo_dictionary_array); // Registers an array of dictionaries
unregister_combo(keys_or_combo_dictionary); // Unregisters a single combo
unregister_many(array_of_keys_or_combo_dictionaries); // Unregisters many combos
get_registered_combos(); // Get a list of the combos registered with this listener
reset(); // Unregister all combos
listen(); // Begin listening. Listener is listening by default
stop_listening(); // Stop listening for combos until listen() is called again
destroy(); // This will cleanup after the listener
