from rest_framework import serializers
from store.models import Product,Cart,CartItem,Order

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class cartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class cartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'