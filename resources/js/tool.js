import CustomTrendMetric from './components/CustomTrendMetric'
import EntryPages from "./components/EntryPages";
import ExitPages from "./components/ExitPages";
import MostViewedPages from "./components/MostViewedPages";

Nova.booting((app, store) => {
  // Nova.inertia('Test', Tool)
    app.component('custom-trend-metric', CustomTrendMetric);
    app.component('entry-pages', EntryPages);
    app.component('exit-pages', ExitPages);
    app.component('most-viewed-pages', MostViewedPages);
})

/* Nova.booting((Vue, router) => {

    Vue.component('custom-trend-metric', CustomTrendMetric);
    Vue.component('entry-pages', EntryPages);
    Vue.component('exit-pages', ExitPages);
    Vue.component('most-viewed-pages', MostViewedPages);

    //
    // router.addRoutes([
    //     {
    //         name: 'matomo-analytics',
    //         path: '/matomo-analytics',
    //         component: require('./components/MatomoAnalyticsTool'),
    //     },
    // ]);

}); */
