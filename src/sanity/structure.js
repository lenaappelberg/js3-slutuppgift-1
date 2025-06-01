// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('event').title('event'),
      S.documentTypeListItem('feature').title('feature'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['event'].includes(item.getId()),
      ),
    ])
