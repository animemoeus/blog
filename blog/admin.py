from django.contrib import admin

from .models import Category, Post


class PostAdmin(admin.ModelAdmin):
    readonly_fields = ("updated_at",)
    search_fields = ["title", "content", "excerpt"]


admin.site.register(Category)
admin.site.register(Post, PostAdmin)
