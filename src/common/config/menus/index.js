export const menus = [
    { key: '/app/dashboard/index', title: '首页', icon: 'icon-shouye', },
    {
        key: '/app/columns', title: '栏目管理', icon: 'icon-shouye',
        sub: [
            { key: '/app/columns/buttons', title: '按钮', icon: '', },
            { key: '/app/columns/icons', title: '图标', icon: '', },
        ],
    },
    {
        key:'/app/columns',title:'栏目管理',icon:'',
        sub:[
            {key:'/app/columns/list',title:'所有栏目',icon:''}
        ]
    },
    {
        key:'/app/articles',title:'文章管理',icon:'',
        sub:[
            {key:'/app/articles/list',title:'文章列表',icon:''}
        ]
    }
    
];