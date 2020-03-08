from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
	path('', views.index, name='index'),
    path('admin/', views.admin, name='admin'),
    path('account/', views.account, name='account'),
    path('signUp/<str:referral>', views.signUp, name='signUp'),
    path('signUp/', views.signUp, name='signUp'),
    path('exit/', views.exit, name='exit'),
    path('reviews/', views.reviews, name='reviews'),
    path('articles/', views.articles, name='articles'),
    path('contacts/', views.contacts, name='contacts'),
    path('help/', views.help, name='help'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)