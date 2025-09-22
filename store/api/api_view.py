from .serializers import productSerializer,cartSerializer,orderSerializer
from rest_framework import generics
from ..models import Product,Cart,Order
from rest_framework.permissions import AllowAny

# Product APIs
class productListAPI(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = productSerializer
    permission_classes = [AllowAny]

class productDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = productSerializer
    permission_classes = [AllowAny]

# Cart APIs
class cartListAPI(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = cartSerializer
    permission_classes = [AllowAny]


class cartDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = cartSerializer
    permission_classes = [AllowAny]


