from django.contrib import admin
from store.models import Product


@admin.register(Product)
class modelAdminProduct(admin.ModelAdmin):
    list_display=['id', 'productName', 'category']
    
    
