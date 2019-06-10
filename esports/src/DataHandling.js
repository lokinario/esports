import * as d3 from "d3";
import _ from "lodash";

const cleanAges = d => ({
    ign: d["IGN"],
    name: d["Name"],
    team: d["Team"],
    role: d["Role"],
    country: d["Country"],
    age: d["Age"]
});

export const loadAllData = (callback = _.noop) => {
    d3.queue()
        .defer(d3.csv, '../public/data/LOL_Players/LOL_CIS_Residents.csv', cleanAges)
        .await((error, age)\ => {

        });
};