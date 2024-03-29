# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in hsm/__init__.py
from hsm import __version__ as version

setup(
	name='hsm',
	version=version,
	description='Employee working in Ajay Polly',
	author='Pratik Mane',
	author_email='pratik.m@indictrans.in',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
