from django.contrib import admin
from django.urls import path

from api import views as api_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/task/', api_views.TaskList.as_view(), name='task-list'),
    path('api/task/<int:task_id>/', api_views.TaskDetail.as_view(), name='task-detail'),
]