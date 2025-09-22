from django.urls import path
from store.api.api_view import productListAPI,productDetailAPI,cartListAPI,cartDetailAPI
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns  = [
   path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# Product URLs
   path('products/',productListAPI.as_view()),
   path('productdetails/<int:pk>/',productDetailAPI.as_view()),

# Cart URLs
   path('carts/', cartListAPI.as_view()),
   path('cartdetails/<int:pk>/', cartDetailAPI.as_view()),

]

if settings.DEBUG:  # only for development
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)