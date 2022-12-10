const baseURL = '';
export const Routes = {
  home: `${baseURL}/`,
  checkout: `${baseURL}/checkout`,
  checkoutDigital: `${baseURL}/checkout/digital`,
  checkoutGuest: `${baseURL}/checkout/guest`,
  profile: `${baseURL}/profile`,
  changePassword: `${baseURL}/change-password`,
  orders: `${baseURL}/orders`,
  order: (tracking_number: string) =>
    `${baseURL}/orders/${encodeURIComponent(tracking_number)}`,
  refunds: `${baseURL}/refunds`,
  help: `${baseURL}/help`,
  logout: `${baseURL}/logout`,
  coupons: `${baseURL}/offers`,
  orderReceived: `${baseURL}/order-received`,
  products: `${baseURL}/products`,
  product: (slug: string) => {
    // if (asPath) {
    //   return `${baseURL}/products/${encodeURIComponent(slug)}?type=${asPath}`;  
    // }
    return `${baseURL}/products/${encodeURIComponent(slug)}`;
  },
  privacy: `${baseURL}/privacy`,
  terms: `${baseURL}/terms`,
  contactUs: `${baseURL}/contact`,
  shops: `${baseURL}/shops`,
  shop: (slug: string) => `${baseURL}/shops/${encodeURIComponent(slug)}`,
  downloads: `${baseURL}/downloads`,
  authors: `${baseURL}/authors`,
  author: (slug: string) => `${baseURL}/authors/${encodeURIComponent(slug)}`,
  manufacturers: `${baseURL}/manufacturers`,
  manufacturer: (slug: string) => `${baseURL}/manufacturers/${encodeURIComponent(slug)}`,
  search: `${baseURL}/search`,
  wishlists: `${baseURL}/wishlists`,
  questions: `${baseURL}/questions`,
  reports: `${baseURL}/reports`,
};
