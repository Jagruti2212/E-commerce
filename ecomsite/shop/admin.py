from django.contrib import admin
from .models import Product
from .models import Order
# Register your models here.

admin.site.site_header = "E-Commerce Site"
admin.site.site_title = "Shop Zone"
admin.site.index_title = "Manage Shop Zone"


admin.site.register(Product)
admin.site.register(Order)