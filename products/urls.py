from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('', views.index, name='index'),
    path('productos/', views.product_list, name='lista_productos'),
    path('productos/crear/', views.product_create, name='crear_producto'),
    path('productos/editar/<int:pk>/', views.product_edit, name='editar_producto'),
    path('productos/eliminar/<int:pk>/', views.product_confirm_delete, name='confirmar_eliminar_producto'),
]