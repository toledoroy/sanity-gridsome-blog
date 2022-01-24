export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ee4c1b4c3ebd558cc77d47',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-1jy45zca',
                  apiId: '94af807f-3a53-49cd-ae5b-e924163292bd'
                },
                {
                  buildHookId: '61ee4c1bf7d550603ede5da3',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-s3h9dux1',
                  apiId: '68fd9e91-a616-4a80-9779-96ed8db9f54e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toledoroy/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-s3h9dux1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
