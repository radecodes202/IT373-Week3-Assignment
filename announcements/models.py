from django.db import models
from django.urls import reverse
from django.utils import timezone

class Announcement(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    summary = models.TextField(max_length=500, help_text="Brief summary for the list view")
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('announcement_detail', kwargs={'pk': self.pk})