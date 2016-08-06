var $ = require('jquery');

jet = {
    jQuery: $
};

require('./layout-updaters/actions');
require('./layout-updaters/breadcrumbs');
require('./layout-updaters/paginator');
require('./layout-updaters/toolbar');
require('./layout-updaters/user-tools');
require('./layout-updaters/changeform-tabs');
require('./layout-updaters/tabular-inline');
require('./layout-updaters/stacked-inline');
require('./layout-updaters/related-widget-wrapper');
require('./layout-updaters/delete-confirmation');
require('./features/sidebar/main');
require('./features/filters');
require('./features/changeform-tabs');
require('./features/checkboxes');
require('./features/date-time-widgets');
require('./features/inlines');
require('./features/changelist');
require('./features/tooltips');
require('./features/dashboard');
require('./features/changeform');
require('./features/themes');
require('./features/siblings');
require('./features/selects');
require('./features/related-popups');
