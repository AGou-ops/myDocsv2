//导航栏
module.exports = [
    {text: '🕟时间线', link: '/timeline/'},
    // {text: '关于我', link: '/about/', icon: 'reco-message'},
                {       
                    text: '🏠Home',
                    link: '/',
                },
                {
                    text: '🗺️Guide',
                    link: '/guide/'
                },
                {
                    text: '📄其它', 
                    items: [
                        {
                            text: '📚Golang',
                            link: '/Golang/',
                        },
                        {
                            text: '🚢K8s',
                            link: '/k8s/',
                        },
                    ]
                },
    {text: '版本', items: [{text: 'ver 1.0',link:"https://agou-ops.cn/myDocs"},{text:'ver 2.0',link:'https://agou-ops.cn/myDocsv2'}]},
                {
                    text: '✨myBlog',
                    link: 'https://agou-ops.github.io'
                }
]


