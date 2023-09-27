from django.shortcuts import render, redirect
from .models import Booking


# Create your views here.

def home(request):
    return render(request, 'index.html')

def gallary(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        booking = Booking(name=name, email=email, subject=subject, message=message)
        booking.save()
        
        return redirect('success')
    
    return render(request, 'gallary.html')

def success(request):
    return render(request, 'success.html')
def quote(request):
    return render(request, 'quote.html')
def about(request):
    return render(request, 'about.html')

def live(request):
    return render(request, 'live.html')