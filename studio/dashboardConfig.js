export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fc806601995951c88cfa65f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-64i4wnsj',
                  apiId: '02dea0c3-df22-492b-880e-d5cc0119746d'
                },
                {
                  buildHookId: '5fc806614736371dcd19a375',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ory8omao',
                  apiId: '53420b2e-61fa-4650-b4bd-ee65c1101e7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wibbs88/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ory8omao.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
