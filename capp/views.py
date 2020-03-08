from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
import json
from .models import *
from capp.forms import CustomUserCreationForm
from django.contrib import messages

def index(request):
	context = {
	}
	return render(request, 'capp/index.html', context=context)

def signUp(request, referral=''):
	# if request.method == 'POST':
		# form = CustomUserCreationForm(request.POST)
		# # print("POOOOOOOOOOSt", form)
		# if form.is_valid():
		# 	form.save()
		# 	return redirect('/account')
		# else:
		# 	messages.error(request, 'Пожалуйста, заполните форму правильно')
		# 	return redirect('/signUp')
	# else:
	form = CustomUserCreationForm()
	context = {
		'form': form,
		'referral': referral,
	}
	return render(request, 'capp/signUp.html', context=context)

# @login_required(login_url='/login/')
def account(request):
	# if request.user.is_admin:
	# 	return redirect('/admin')
	context = {

	}
	return render(request, 'capp/account.html', context=context)

def exit(request):
	logout(request)
	return redirect('/')

def reviews(request):
	context = {

	}
	return render(request, 'capp/reviews.html', context=context)

def contacts(request):
	context = {

	}
	return render(request, 'capp/contacts.html', context=context)

def help(request):
	context = {

	}
	return render(request, 'capp/help.html', context=context)

def articles(request):
	context = {

	}
	return render(request, 'capp/articles.html', context=context)

@login_required(login_url='/login/')
def admin(request):
	context = {
	}
	return render(request, 'capp/admin.html', context=context)