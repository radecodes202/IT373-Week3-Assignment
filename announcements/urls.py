from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('announcements/', views.announcement_list, name='announcement_list'),
    path('announcements/<int:pk>/', views.announcement_detail, name='announcement_detail'),
]