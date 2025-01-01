from django.contrib import admin
from django.urls import path
from e_data.views import contactview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', contactview, name="contact")
]
