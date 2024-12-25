import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { computed, inject, resource } from '@angular/core';
import { BooksService } from '../services/books.service';

export const BookStore = signalStore(
  withState({
    query: '' as string,
  }),
  withMethods((store) => {
    return {
      updateQuery(query: string) {
        patchState(store, { query: query });
      },
    };
  }),
  withProps(() => ({
    _booksService: inject(BooksService),
  })),
  withProps((store) => ({
    _booksResource: resource({
      request: store.query,
      loader: async (params) => {
        const query = params.request;
        const abortSignal = params.abortSignal;
        console.log(abortSignal);

        if (!query || query === '') {
          return { items: [] };
        }
        const bookData = await store._booksService.getBooks(query);
        if (!bookData.ok) throw new Error('Error fetching books');

        return await bookData.json();
      },
    }),
  })),
  withProps((store) => ({
    bookResource: store._booksResource.asReadonly(),
  })),
  withComputed((store) => ({
    latestBooks: computed(() => (store._booksResource.hasValue() ? store._booksResource.value()?.items : [])),
    isLoading: computed(() => store._booksResource.isLoading()),
    error: computed(() => store._booksResource.error()),
  }))
);
