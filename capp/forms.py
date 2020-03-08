from django import forms
from .models import *
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .models import MyUser
from django.contrib.auth.forms import UserCreationForm


class CustomUserCreationForm(UserCreationForm):
    referral = forms.CharField(required=False)
    class Meta:
        model = MyUser
        fields = ('email',)

    def save(self, commit=True):
        # print("FOOOOOOOOORM", MyUser.objects.filter(email=self.cleaned_data['password1s']).first())
        user = super(CustomUserCreationForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        user.referral = MyUser.objects.filter(email=self.cleaned_data['referral']).first()
        if commit:
        	user.save()
        self.error_messages['invalid_login'] = 'Custom error'

        return user


class CustomUserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = MyUser
        fields = ('email', 'password', 'referral', 'is_admin')

    def clean_password(self):
        return self.initial["password"]