var FloatingActionButton = require('com.getbase.floatingactionbutton.FloatingActionButton'),
    FloatingActionMenu = require('com.getbase.floatingactionbutton.FloatingActionsMenu'),
    Color = require('android.graphics.Color'),
    Resources = require('android.content.res.Resources'),
    resourcesReference = null;
    id = 0;

exports.createFloatingActionButton = function(args) {
    if (!args.activity) {
        throw "You need a reference of your Activity in order to create a FAB";
    }

    var fab = new FloatingActionButton(args.activity);

    // Assigns an incremental ID to the Floating Action Button so identifying the source of clicks is easier
    fab.setId(id++);

    // Changes the size of the Floating Action Button
    args.size && exports.setSize(fab, args.size);

    // Changes the normal color
    args.normalColor && exports.setColorNormal(fab, args.normalColor);

    // Changes the pressed color
    args.pressedColor && exports.setColorPressed(fab, args.pressedColor);

    // Changes the disabled color
    args.disabledColor && exports.setColorDisabled(fab, args.disabledColor);

    // Sets an icon for the Button
    args.icon && exports.setIcon(fab, args.icon, args.activity);

    // Sets an OnClickListener to the Button
    args.onClick && fab.setOnClickListener(args.onClick);

    return fab;
};

exports.createFloatingActionMenu = function(args) {
    if (!args.activity) {
        throw "You need a reference of your Activity in order to create a FAB";
    }

    var fam = new FloatingActionMenu(args.activity);

    // Assigns an incremental ID to the Floating Action Button so identifying the source of clicks is easier
    fam.setId(id++);

    // Changes the normal color
    args.menuNormalColor && exports.setColorNormal(fam, args.menuNormalColor);

    // Changes the pressed color
    args.menuPressedColor && exports.setColorPressed(fam, args.menuPressedColor);

    _.each(args.buttons, function(fab) {
        fam.addButton(exports.createFloatingActionButton(fab));
    });

    return fam;
}

exports.setIcon = function(fab, icon, context) {
    var id = context.getResources().getIdentifier(icon, "drawable", context.getPackageName());
    fab.setIconDrawable(context.getResources().getDrawable(id, context.getTheme()));
};

exports.setColorNormal = function(fab, color) {
    fab.setColorNormal(Color.parseColor(color));
};

exports.setColorDisabled = function(fab, color) {
    fab.setColorDisabled(Color.parseColor(color));
};

exports.setColorPressed = function(fab, color) {
    fab.setColorPressed(Color.parseColor(color));
};

exports.setSize = function(fab, size) {
    fab.setSize(size);
};

exports.SIZE_MINI = FloatingActionButton.SIZE_MINI;
exports.SIZE_NORMAL = FloatingActionButton.SIZE_NORMAL;