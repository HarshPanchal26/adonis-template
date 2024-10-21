import Route from '@ioc:Adonis/Core/Route'
import './routes/webRoutes'

const API_PREFIX = '/api/'
// const All_MIDDLEWARE = ['auth:api', 'loadBusiness', 'setBranch', 'acl']

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.post('/signup', 'Api/AuthController.signup')
  Route.post('/login', 'Api/AuthController.login')
  Route.get('/user/:id', 'Api/AuthController.show')

  Route.get('profile', 'Api/UserProfilesController.userProfile');  // For fetch single result with filters
  Route.get('profile/search', 'Api/UserProfilesController.index'); // for fetch multiple results with filters

  Route.resource('events', 'Api/EventsController').apiOnly().only(['index', 'show'])

  Route.get('business', 'Api/BusinessController.fetchSingleBusiness')
  Route.get('business/search', 'Api/BusinessController.index')

  Route.resource('experiences', 'Api/ExperiencesController').apiOnly().only(['index'])

  Route.resource('speakers', 'Api/SpeakersController').apiOnly().only(['show'])

  Route.get('products', 'Api/ProductsController.index')

  // Routes for fetch static data typess

  Route.resource('list/technologies', 'Api/TechnologiesController').apiOnly().only(['index'])

  Route.resource('list/business-model', 'Api/BusinessModelController').apiOnly().only(['index'])

  Route.resource('list/target-audiences', 'Api/TargetAudiencesController').apiOnly().only(['index'])

  Route.resource('list/development-stages', 'Api/DevelopmentStagesController').apiOnly().only(['index'])

  Route.resource('list/funding-rounds', 'Api/FundingRoundsController').apiOnly().only(['index'])

  Route.resource('list/investor-types', 'Api/InvestorTypesController').apiOnly().only(['index'])

  Route.resource('list/firms', 'Api/FirmTypesController').apiOnly().only(['index'])

  Route.resource('list/industries', 'Api/IndustriesController').apiOnly().only(['index'])

  Route.resource('list/sectors', 'Api/SectorTypesController').apiOnly().only(['index'])

  Route.get('discover/businesses', 'Api/BusinessController.discover').as('discover.business');

  Route.get('discover/products', 'Api/ProductsController.discover').as('discover.products');


  Route.get('stats', 'Api/OthersController.stats');



}).prefix(API_PREFIX)



Route.group(() => {
  Route.get('/user', 'Api/AuthController.show')
  Route.put('/user', 'Api/AuthController.update')
  Route.delete('/user', 'Api/AuthController.logout')

  Route.resource('profile', 'Api/UserProfilesController').apiOnly().only(['update', 'create', 'show'])

  Route.resource('events', 'Api/EventsController').apiOnly().only(['store', 'update' , 'destroy'])
  Route.get('events/user/index', 'Api/EventsController.indexForUserEvents')
  Route.get('events/user/subscribed/index', 'Api/EventsController.indexForUserSubscribedEvents')
  Route.get('events/feed/index', 'Api/EventsController.feed')

  Route.resource('event-subscribers', 'Api/EventUsersController').apiOnly().only(['store' , 'destroy' , 'index'])
  Route.get('event-subscribers/check/:eventId', 'Api/EventUsersController.checkUserSubscription')

  Route.get('business/:id', 'Api/BusinessController.show')
  Route.get('business/feed/index', 'Api/BusinessController.fetchForfeed')
  Route.resource('business', 'Api/BusinessController').apiOnly().except(['index', 'destroy', 'show'])

  Route.get('discover/auth/businesses', 'Api/BusinessController.discover').as('discover.business.auth');

  Route.get('/business-admins', 'Api/BusinessUsersController.show')
  Route.get('/business-admins/index', 'Api/BusinessUsersController.index')
  Route.get('/business-admins/:id', 'Api/BusinessUsersController.showAdmins')
  Route.post('/business-admins/create/:businessId', 'Api/BusinessUsersController.store')
  Route.post('/business-admins/update/:businessId/:adminId', 'Api/BusinessUsersController.update')

  Route.resource('business-subscribers', 'Api/BusinessSubscribersController').apiOnly().only(['store' ,'destroy'])
  Route.get('business-subscribers/user/business/index', 'Api/BusinessSubscribersController.indexForUserSubscribedBusinesses')
  Route.get('business-subscribers/users/:business-id', 'Api/BusinessSubscribersController.indexForBusinessSubscribers')


  Route.resource('experiences', 'Api/ExperiencesController').apiOnly().except(['destroy', 'show', 'index'])

  Route.resource('speakers', 'Api/SpeakersController').apiOnly().only(['create', 'destroy'])

  Route.get('products/:usernameOrId', 'Api/ProductsController.show');
  Route.post('products/create', 'Api/ProductsController.store');
  Route.put('products/update/:businessId/:productId', 'Api/ProductsController.update');
  Route.get('discover/auth/products', 'Api/ProductsController.discover').as('discover.products.auth');


  Route.get('posts/feed', 'Api/PostsController.feed');
  Route.resource('posts', 'Api/PostsController').apiOnly().only(['update' ,'show' ,'store' ,'index'])

  Route.resource('user_posts', 'Api/UserPostsController').apiOnly().only(['index' ,'create'])

  // routes to manage pivot tables 

  Route.resource('product-technologies', 'Api/ProductTechnologiesController').apiOnly()

  Route.resource('product-audiences', 'Api/ProductAudiencesController').apiOnly()

  Route.resource('product-models', 'Api/ProductModelsController').apiOnly()

})
  .prefix(API_PREFIX)
  .middleware(['auth:api'])


// Route.resource('investor_users', 'Api/InvestorUsersController').apiOnly()

// Route.resource('firm_businesses', 'Api/FirmBusinessesController').apiOnly()

// Route.resource('business_model_pivots', 'Api/BusinessModelPivotsController').apiOnly()

// Route.resource('business_funding_rounds', 'Api/BusinessFundingRoundsController').apiOnly()

// Route.resource('product_funding_rounds', 'Api/ProductFundingRoundsController').apiOnly()

// Route.resource('product_model_pivots', 'Api/ProductModelPivotsController').apiOnly()

// Route.resource('business_audiences', 'Api/BusinessAudiencesController').apiOnly()

// Route.resource('business_firm_pivots', 'Api/BusinessFirmPivotsController').apiOnly()

// Route.resource('user_investor_pivots', 'Api/UserInvestorPivotsController').apiOnly()

// Route.resource('business_interests', 'Api/BusinessInterestsController').apiOnly()

// Route.resource('user_interests', 'Api/UserInterestsController').apiOnly()





