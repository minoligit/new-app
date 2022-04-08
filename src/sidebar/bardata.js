import React from "react";
import * as FaIcons from "react-icons/fa";

export const BarData = [
    {
        title: "Overview",
        path: "../pages/overview",
        icon: <FaIcons.FaCreativeCommonsNd />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>
    },
    {
        title: "About Us",
        path: "../pages/aboutus",
        icon: <FaIcons.FaGgCircle />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>,
        sub: [
            {
                title: "History",
                path: "../pages/history",
                icon: <FaIcons.FaHistory/>
            },
            {
                title: "Mission and Vission",
                path: "../pages/mission",
                icon: <FaIcons.FaMizuni/>
            },
            {
                title: "Achievements",
                path: "../pages/achievements",
                icon: <FaIcons.FaTrophy/>
            }
        ]
    },
    {
        title: "Dashboard",
        path: "../pages/dashpage",
        icon: <FaIcons.FaThList />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>
    },
    {
        title: "People",
        path: "../pages/people",
        icon: <FaIcons.FaUsers />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>
    },
    {
        title: "Music",
        path: "../pages/music",
        icon: <FaIcons.FaMusic />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>
    },
    {
        title: "Places",
        path: "../pages/places",
        icon: <FaIcons.FaMap />,
        iconOpened: <FaIcons.FaSort/>,
        iconClosed: <FaIcons.FaSortDown/>
    }
]
