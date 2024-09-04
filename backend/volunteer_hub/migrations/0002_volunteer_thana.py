# Generated by Django 4.2.15 on 2024-08-27 17:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('incident_manager', '0004_district_division_thana_district_division_and_more'),
        ('volunteer_hub', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='volunteer',
            name='thana',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='volunteers', to='incident_manager.thana'),
        ),
    ]
