from django.shortcuts import render, get_object_or_404
from .models import Announcement

def home(request):
    recent_announcements = Announcement.objects.filter(is_active=True)[:3]
    return render(request, 'home.html', {
        'recent_announcements': recent_announcements
    })

def announcement_list(request):
    announcements = Announcement.objects.filter(is_active=True)
    return render(request, 'announcements/list.html', {
        'announcements': announcements
    })

def announcement_detail(request, pk):
    announcement = get_object_or_404(Announcement, pk=pk, is_active=True)
    return render(request, 'announcements/detail.html', {
        'announcement': announcement
    })